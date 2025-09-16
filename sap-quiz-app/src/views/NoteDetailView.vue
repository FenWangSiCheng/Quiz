<template>
  <div class="note-detail-layout">
    <!-- 顶部区域 -->
    <header class="note-header">
      <div class="header-content">
        <div class="breadcrumb-section">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item>
              <el-button
                type="text"
                @click="$router.push('/notes')"
                class="breadcrumb-link"
              >
                学习中心
              </el-button>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
              <el-button
                type="text"
                @click="$router.push(`/notes/${course}`)"
                class="breadcrumb-link"
              >
                {{ courseInfo.name }}
              </el-button>
            </el-breadcrumb-item>
            <el-breadcrumb-item>{{ noteInfo.title }}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="title-section">
          <h1 class="main-title">{{ noteInfo.title }}</h1>
          <div class="note-meta">
            <span class="note-unit">{{ noteInfo.unit }}</span>
            <span class="note-type">{{ noteInfo.type }}</span>
          </div>
        </div>
      </div>
    </header>

    <!-- 播客音频区域 -->
    <div v-if="currentNoteAudioSrc" class="audio-section">
      <AudioPlayer
        :src="currentNoteAudioSrc"
        :title="noteInfo.title"
        :artist="courseInfo.name"
        :course="courseInfo.name"
      />
    </div>

    <!-- 主内容区域 -->
    <main class="main-content">
      <div class="content-container">
        <div class="note-content">
          <MarkdownRenderer
            v-if="noteContent"
            :content="noteContent"
          />
          <div v-else-if="loading" class="loading-state">
            <el-icon class="is-loading"><Loading /></el-icon>
            <p>正在加载笔记内容...</p>
          </div>
          <div v-else class="error-state">
            <el-icon><Warning /></el-icon>
            <p>无法加载笔记内容</p>
            <el-button @click="loadNoteContent">重新加载</el-button>
          </div>
        </div>

        <!-- 侧边栏：目录和导航 -->
        <aside class="sidebar">
          <div class="toc-section">
            <h4>目录</h4>
            <div class="toc-list">
              <div
                v-for="heading in tableOfContents"
                :key="heading.id"
                :class="['toc-item', `toc-level-${heading.level}`, { 'toc-active': activeHeadingId === heading.id }]"
                @click="scrollToHeading(heading.id)"
              >
                {{ heading.text }}
              </div>
            </div>
          </div>

        </aside>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Loading, Warning } from '@element-plus/icons-vue'
import MarkdownRenderer from '@/components/MarkdownRenderer.vue'
import AudioPlayer from '@/components/AudioPlayer.vue'
import { getNoteInfo, readNoteContent } from '@/utils/noteReader'
import { getNoteAudioSrc } from '@/utils/audioConfig'

interface NoteInfo {
  title: string
  unit: string
  type: string
}

interface CourseInfo {
  name: string
}

interface TOCItem {
  id: string
  text: string
  level: number
}


const router = useRouter()
const route = useRoute()

const course = computed(() => route.params.course as string)
const note = computed(() => route.params.note as string)

const loading = ref(true)
const noteContent = ref('')
const noteInfo = ref<NoteInfo>({
  title: '',
  unit: '',
  type: ''
})

const courseInfo = ref<CourseInfo>({
  name: ''
})

const tableOfContents = ref<TOCItem[]>([])
const activeHeadingId = ref('')

// 课程信息映射
const courseInfoMap: Record<string, CourseInfo> = {
  'sap-build-process-automation': {
    name: 'SAP Build Process Automation'
  },
  'exploring-sap-business-technology-platform-btp100': {
    name: 'Exploring SAP BTP (BTP100)'
  },
  'designing-sap-build-work-zone': {
    name: 'Designing SAP Build Work Zone'
  },
  'develop-and-automate-with-sap-build-btp110': {
    name: 'Develop and automate with SAP Build (BTP110)'
  },
  'developing-apps-with-sap-build-apps': {
    name: 'Developing Apps with SAP Build Apps'
  },
  'sap-c-lcnc-2406': {
    name: 'SAP-C_LCNC_2406'
  }
}

// 计算当前笔记的音频源
const currentNoteAudioSrc = computed(() => {
  return getNoteAudioSrc(course.value, note.value)
})

const loadNoteContent = async () => {
  loading.value = true
  try {
    // 获取笔记信息
    const noteFileInfo = getNoteInfo(course.value, note.value)
    if (noteFileInfo) {
      noteInfo.value = {
        title: noteFileInfo.title,
        unit: noteFileInfo.unit || '',
        type: '学习笔记'
      }
    } else {
      noteInfo.value = {
        title: '未知笔记',
        unit: '',
        type: '学习笔记'
      }
    }

    // 从文件动态加载笔记内容
    const content = await readNoteContent(course.value, note.value)
    noteContent.value = content

    // 生成目录
    generateTableOfContents()

    // 等待 DOM 更新后设置滚动监听
    await nextTick()
    setupScrollListener()

  } catch (error) {
    console.error('Failed to load note content:', error)
    noteContent.value = ''
  } finally {
    loading.value = false
  }
}

const generateTableOfContents = () => {
  const headings = noteContent.value.match(/^#{1,6}\s.+$/gm) || []
  tableOfContents.value = headings.map((heading) => {
    const level = heading.match(/^#+/)?.[0].length || 1
    const text = heading.replace(/^#+\s/, '')
    // 生成与 MarkdownRenderer 中相同的 ID
    const id = text.replace(/[^\w\u4e00-\u9fa5]/g, '-').toLowerCase()
    return {
      id,
      text,
      level
    }
  })
}


const scrollToHeading = (headingId: string) => {
  const element = document.getElementById(headingId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

// 滚动监听器
let scrollTimer: number | null = null

const setupScrollListener = () => {
  const handleScroll = () => {
    if (scrollTimer) {
      clearTimeout(scrollTimer)
    }

    scrollTimer = window.setTimeout(() => {
      updateActiveHeading()
    }, 100)
  }

  window.addEventListener('scroll', handleScroll)

  // 初始化时也检查一次
  updateActiveHeading()
}

const updateActiveHeading = () => {
  const headings = tableOfContents.value.map(item => {
    const element = document.getElementById(item.id)
    return {
      id: item.id,
      element,
      top: element ? element.getBoundingClientRect().top : Infinity
    }
  }).filter(item => item.element)

  // 找到当前视口中最接近顶部的标题
  let currentActiveId = ''
  for (const heading of headings) {
    if (heading.top <= 120) { // 给导航栏留出空间
      currentActiveId = heading.id
    } else {
      break
    }
  }

  // 如果没有找到，使用第一个标题
  if (!currentActiveId && headings.length > 0) {
    currentActiveId = headings[0].id
  }

  activeHeadingId.value = currentActiveId
}

const removeScrollListener = () => {
  if (scrollTimer) {
    clearTimeout(scrollTimer)
  }
  window.removeEventListener('scroll', updateActiveHeading)
}


onMounted(() => {
  courseInfo.value = courseInfoMap[course.value] || {
    name: '未知课程'
  }

  loadNoteContent()
})

onUnmounted(() => {
  removeScrollListener()
})
</script>

<style scoped>
.note-detail-layout {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f8fafc;
  margin: 0;
  padding: 0;
}

.note-header {
  background: white;
  border-bottom: 1px solid #e2e8f0;
  padding: 2rem 0;
  width: 100%;
}

.header-content {
  width: 100%;
  padding: 0 5%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.breadcrumb-section {
  display: flex;
  align-items: center;
}

.breadcrumb-section :deep(.el-breadcrumb) {
  display: flex;
  align-items: center;
}

.breadcrumb-section :deep(.el-breadcrumb__item) {
  display: flex;
  align-items: center;
}

.breadcrumb-link {
  color: #3b82f6;
  font-size: 0.875rem;
  padding: 0;
  height: auto;
  line-height: normal;
}

.breadcrumb-link:hover {
  color: #2563eb;
}

.main-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.02em;
}

.note-meta {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
}

.note-unit, .note-type {
  background: #f1f5f9;
  color: #475569;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
}

.note-type {
  background: #dbeafe;
  color: #3b82f6;
}

.read-time {
  color: #64748b;
  font-size: 0.875rem;
}

.main-content {
  flex: 1;
  padding: 2rem 5%;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
}

.content-container {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 3rem;
  align-items: start;
}

.note-content {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 3rem;
  min-height: 400px;
}

.loading-state, .error-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 3rem;
  text-align: center;
  color: #64748b;
}

.loading-state .el-icon {
  font-size: 2rem;
  color: #3b82f6;
}

.error-state .el-icon {
  font-size: 2rem;
  color: #ef4444;
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: sticky;
  top: 2rem;
}

.toc-section {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
}

.toc-section h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 1rem 0;
}

.toc-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.toc-item {
  padding: 0.5rem 0;
  color: #64748b;
  cursor: pointer;
  font-size: 0.875rem;
  line-height: 1.4;
  border-left: 2px solid transparent;
  padding-left: 0.5rem;
  transition: all 0.2s ease;
}

.toc-item:hover {
  color: #3b82f6;
  border-left-color: #3b82f6;
}

.toc-level-2 {
  padding-left: 1rem;
}

.toc-level-3 {
  padding-left: 1.5rem;
}

.toc-active {
  color: #3b82f6 !important;
  border-left-color: #3b82f6 !important;
  background: #f0f9ff;
  font-weight: 500;
}


/* 响应式设计 */
@media (max-width: 1024px) {
  .content-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .sidebar {
    position: static;
    order: -1;
  }

  .toc-section {
    padding: 1rem;
  }
}

@media (max-width: 768px) {
  .main-content {
    padding: 1.5rem 3%;
  }

  .note-content {
    padding: 2rem 1.5rem;
  }

  .note-header {
    padding: 1.5rem 0;
  }

  .header-content {
    padding: 0 3%;
  }

  .main-title {
    font-size: 1.75rem;
  }

  .note-meta {
    gap: 0.5rem;
  }
}

@media (max-width: 480px) {
  .main-content {
    padding: 1rem;
  }

  .note-content {
    padding: 1.5rem 1rem;
  }

  .header-content {
    padding: 0 1rem;
  }
}

.audio-section {
  width: 100%;
  padding: 0 5%;
  max-width: 1200px;
  margin: 0 auto;
  background: #f8fafc;
}
</style>