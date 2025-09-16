<template>
  <div class="audio-player">
    <div class="audio-info">
      <div class="podcast-indicator">
        <el-icon class="podcast-icon"><VideoPlay /></el-icon>
        <span class="podcast-text">播客音频</span>
      </div>

      <!-- 后台播放状态指示器 -->
      <div v-if="isBackgroundPlayActive" class="status-indicators">
        <div
          class="status-item background-play-status"
          title="后台播放中"
        >
          <el-icon class="status-icon pulse"><VideoPlay /></el-icon>
          <span class="status-text">后台播放</span>
        </div>
      </div>
    </div>

    <div class="audio-controls">
      <audio
        ref="audioRef"
        :src="audioSrc"
        @loadedmetadata="onLoadedMetadata"
        @timeupdate="onTimeUpdate"
        @ended="onEnded"
        preload="metadata"
        crossorigin="anonymous"
        controlslist="nodownload"
        disablepictureinpicture
      ></audio>

      <div class="primary-controls">
        <el-button
          :icon="isPlaying ? VideoPause : VideoPlay"
          circle
          size="large"
          type="primary"
          @click="togglePlay"
          :loading="isLoading"
        />

        <div class="time-display">
          <span class="current-time">{{ formatTime(currentTime) }}</span>
          <span class="separator">/</span>
          <span class="total-time">{{ formatTime(duration) }}</span>
        </div>
      </div>

      <div class="progress-section">
        <el-slider
          v-model="progressPercentage"
          :max="100"
          :show-tooltip="false"
          @change="onProgressChange"
          class="progress-slider"
        />
      </div>

      <div class="secondary-controls">
        <div class="speed-control">
          <el-select
            v-model="playbackRate"
            @change="onSpeedChange"
            size="small"
            style="width: 80px"
          >
            <el-option
              v-for="speed in speedOptions"
              :key="speed.value"
              :label="speed.label"
              :value="speed.value"
            />
          </el-select>
        </div>

        <div class="volume-control">
          <el-icon @click="toggleMute" class="volume-icon">
            <component :is="volumeIcon" />
          </el-icon>
          <el-slider
            v-model="volume"
            :max="100"
            :show-tooltip="false"
            @change="onVolumeChange"
            class="volume-slider"
            size="small"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { VideoPlay, VideoPause, Mute, Bell } from '@element-plus/icons-vue'

interface Props {
  src: string
  title?: string
  artist?: string
  course?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: '播客音频',
  artist: 'SAP 学习播客',
  course: ''
})

const audioRef = ref<HTMLAudioElement>()
const isPlaying = ref(false)
const isLoading = ref(false)
const currentTime = ref(0)
const duration = ref(0)
const volume = ref(70)
const playbackRate = ref(1)
const isMuted = ref(false)

// 媒体会话和后台播放支持
const mediaSessionSupported = ref(false)
const isBackgroundPlayActive = ref(false)
const pageVisible = ref(true)

const speedOptions = [
  { label: '0.5x', value: 0.5 },
  { label: '0.75x', value: 0.75 },
  { label: '1x', value: 1 },
  { label: '1.25x', value: 1.25 },
  { label: '1.5x', value: 1.5 },
  { label: '2x', value: 2 }
]

const audioSrc = computed(() => props.src)

const progressPercentage = computed({
  get: () => duration.value > 0 ? (currentTime.value / duration.value) * 100 : 0,
  set: (value: number) => {
    if (audioRef.value && duration.value > 0) {
      currentTime.value = (value / 100) * duration.value
      audioRef.value.currentTime = currentTime.value
    }
  }
})

const volumeIcon = computed(() => {
  if (isMuted.value || volume.value === 0) {
    return Mute
  }
  return Bell
})

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

const togglePlay = async () => {
  if (!audioRef.value) return

  isLoading.value = true
  try {
    if (isPlaying.value) {
      audioRef.value.pause()
      isPlaying.value = false
    } else {
      await audioRef.value.play()
      isPlaying.value = true
    }
  } catch (error) {
    console.error('音频播放失败:', error)
  } finally {
    isLoading.value = false
  }
}

const onLoadedMetadata = () => {
  if (audioRef.value) {
    duration.value = audioRef.value.duration
    audioRef.value.volume = volume.value / 100
    audioRef.value.playbackRate = playbackRate.value
  }
}

const onTimeUpdate = () => {
  if (audioRef.value) {
    currentTime.value = audioRef.value.currentTime
  }
}

const onEnded = () => {
  isPlaying.value = false
  currentTime.value = 0
}

const onProgressChange = (value: number) => {
  progressPercentage.value = value
}

const onSpeedChange = (speed: number) => {
  if (audioRef.value) {
    audioRef.value.playbackRate = speed
  }
  // 保存播放速度到本地存储
  localStorage.setItem('audio-playback-rate', speed.toString())
}

const onVolumeChange = (vol: number) => {
  if (audioRef.value) {
    audioRef.value.volume = vol / 100
    if (vol > 0) {
      isMuted.value = false
    }
  }
  // 保存音量到本地存储
  localStorage.setItem('audio-volume', vol.toString())
}

const toggleMute = () => {
  if (audioRef.value) {
    if (isMuted.value) {
      audioRef.value.volume = volume.value / 100
      isMuted.value = false
    } else {
      audioRef.value.volume = 0
      isMuted.value = true
    }
  }
}

// Media Session API 支持
const initMediaSession = () => {
  if ('mediaSession' in navigator) {
    mediaSessionSupported.value = true

    // 设置媒体元数据
    navigator.mediaSession.metadata = new MediaMetadata({
      title: props.title,
      artist: props.artist,
      album: props.course || 'SAP 学习播客',
      artwork: [
        {
          src: '/favicon.ico',
          sizes: '96x96',
          type: 'image/x-icon'
        }
      ]
    })

    // 设置媒体控制处理器
    navigator.mediaSession.setActionHandler('play', handleMediaPlay)
    navigator.mediaSession.setActionHandler('pause', handleMediaPause)
    navigator.mediaSession.setActionHandler('seekto', handleMediaSeekTo)

    // 设置播放状态
    navigator.mediaSession.playbackState = isPlaying.value ? 'playing' : 'paused'
  }
}

const handleMediaPlay = () => {
  if (!isPlaying.value) {
    togglePlay()
  }
}

const handleMediaPause = () => {
  if (isPlaying.value) {
    togglePlay()
  }
}

const handleMediaSeekTo = (event: MediaSessionActionDetails) => {
  if (audioRef.value && event.seekTime !== undefined) {
    audioRef.value.currentTime = event.seekTime
    currentTime.value = event.seekTime
  }
}

// 页面可见性处理
const handleVisibilityChange = () => {
  pageVisible.value = !document.hidden

  // 当页面进入后台但音频正在播放时，激活后台播放指示
  if (!pageVisible.value && isPlaying.value) {
    isBackgroundPlayActive.value = true
  } else if (pageVisible.value) {
    isBackgroundPlayActive.value = false
  }
}

// 更新媒体会话状态
const updateMediaSession = () => {
  if (mediaSessionSupported.value && navigator.mediaSession) {
    navigator.mediaSession.playbackState = isPlaying.value ? 'playing' : 'paused'

    // 更新位置状态
    if (duration.value > 0) {
      navigator.mediaSession.setPositionState({
        duration: duration.value,
        playbackRate: playbackRate.value,
        position: currentTime.value
      })
    }
  }
}

// 从本地存储恢复设置
onMounted(() => {
  const savedVolume = localStorage.getItem('audio-volume')
  if (savedVolume) {
    volume.value = parseInt(savedVolume)
  }

  const savedPlaybackRate = localStorage.getItem('audio-playback-rate')
  if (savedPlaybackRate) {
    playbackRate.value = parseFloat(savedPlaybackRate)
  }

  // 初始化Media Session
  initMediaSession()

  // 监听页面可见性变化
  document.addEventListener('visibilitychange', handleVisibilityChange)
})

// 监听播放状态变化
watch([isPlaying, currentTime, duration], () => {
  updateMediaSession()
})

// 清理
onUnmounted(() => {
  if (audioRef.value && isPlaying.value) {
    audioRef.value.pause()
  }

  // 移除页面可见性监听
  document.removeEventListener('visibilitychange', handleVisibilityChange)

  // 清理Media Session
  if (mediaSessionSupported.value && navigator.mediaSession) {
    navigator.mediaSession.setActionHandler('play', null)
    navigator.mediaSession.setActionHandler('pause', null)
    navigator.mediaSession.setActionHandler('seekto', null)
  }
})
</script>

<style scoped>
.audio-player {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.audio-info {
  margin-bottom: 1rem;
}

.podcast-indicator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #3b82f6;
}

.status-indicators {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
}

.status-item {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
}


.background-play-status {
  background: #fef3c7;
  color: #d97706;
  border: 1px solid #fde68a;
}

.status-icon {
  font-size: 0.875rem;
}

.status-text {
  font-size: 0.75rem;
}

.podcast-icon {
  font-size: 1.125rem;
}

.podcast-text {
  font-size: 0.875rem;
  font-weight: 500;
}

.audio-controls {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.primary-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.time-display {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: #64748b;
  min-width: 80px;
}

.separator {
  color: #94a3b8;
}

.progress-section {
  flex: 1;
}

.progress-slider {
  margin: 0 0.5rem;
}

.secondary-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.speed-control {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.volume-control {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 120px;
}

.volume-icon {
  cursor: pointer;
  color: #64748b;
  font-size: 1rem;
  transition: color 0.2s;
}

.volume-icon:hover {
  color: #3b82f6;
}

.volume-slider {
  width: 80px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .audio-player {
    padding: 1rem;
  }

  .primary-controls {
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .secondary-controls {
    flex-direction: column;
    gap: 0.75rem;
    align-items: stretch;
  }

  .volume-control {
    justify-content: space-between;
    min-width: auto;
  }

  .volume-slider {
    flex: 1;
    max-width: 120px;
  }
}

@media (max-width: 480px) {
  .audio-controls {
    gap: 0.75rem;
  }

  .time-display {
    font-size: 0.75rem;
    min-width: 70px;
  }

  .status-indicators {
    gap: 0.5rem;
  }

  .status-item {
    font-size: 0.65rem;
  }

  .status-text {
    display: none;
  }
}

/* 动画效果 */
@keyframes pulse {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.pulse {
  animation: pulse 2s infinite ease-in-out;
}
</style>