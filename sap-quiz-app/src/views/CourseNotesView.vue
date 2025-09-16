<template>
  <div class="course-notes-layout">
    <!-- 顶部区域 -->
    <header class="course-header">
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
            <el-breadcrumb-item>{{ courseInfo.name }}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="title-section">
          <div class="title-content">
            <h1 class="main-title">{{ courseInfo.name }}</h1>
            <p class="subtitle">{{ courseInfo.description }}</p>
          </div>
        </div>
        <div class="stats-section">
          <div class="stat-item">
            <span class="stat-number">{{ notes.length }}</span>
            <span class="stat-label">篇笔记</span>
          </div>
        </div>
      </div>
    </header>

    <!-- 主内容区域 -->
    <main class="main-content">
      <div class="notes-list">
        <div
          v-for="note in notes"
          :key="note.id"
          class="note-card"
          @click="navigateToNote(note.id)"
        >
          <div class="note-header">
            <h3 class="note-title">{{ note.title }}</h3>
            <div class="note-badges">
              <span class="note-unit">{{ note.unit }}</span>
              <span v-if="note.hasAudio" class="podcast-badge" title="此单元包含音频内容">
                🎧 播客
              </span>
            </div>
          </div>
          <p class="note-preview">{{ note.preview }}</p>
          <div class="note-meta">
            <span class="note-type">{{ note.type }}</span>
          </div>
          <el-button type="primary" text class="read-button">
            开始学习
          </el-button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getCourseNotes } from '@/utils/noteReader'
import { hasNoteAudio } from '@/utils/audioConfig'

interface Note {
  id: string
  title: string
  unit: string
  preview: string
  type: string
  estimatedReadTime: number
  hasAudio: boolean
}

interface CourseInfo {
  name: string
  description: string
}

const router = useRouter()
const route = useRoute()

const course = computed(() => route.params.course as string)

const courseInfo = ref<CourseInfo>({
  name: '',
  description: ''
})

const notes = ref<Note[]>([])

// 课程信息映射
const courseInfoMap: Record<string, CourseInfo> = {
  'sap-build-process-automation': {
    name: 'SAP Build Process Automation',
    description: '流程自动化与工作流管理相关学习笔记'
  },
  'exploring-sap-business-technology-platform-btp100': {
    name: 'Exploring SAP BTP (BTP100)',
    description: 'SAP Business Technology Platform 基础知识'
  },
  'designing-sap-build-work-zone': {
    name: 'Designing SAP Build Work Zone',
    description: 'SAP Build Work Zone 设计概念'
  },
  'develop-and-automate-with-sap-build-btp110': {
    name: 'Develop and automate with SAP Build (BTP110)',
    description: 'SAP Build 开发与自动化'
  },
  'developing-apps-with-sap-build-apps': {
    name: 'Developing Apps with SAP Build Apps',
    description: 'SAP Build Apps 应用开发'
  },
  'sap-c-lcnc-2406': {
    name: 'SAP-C_LCNC_2406',
    description: 'SAP 认证相关学习材料'
  }
}


const navigateToNote = (noteId: string) => {
  router.push(`/notes/${course.value}/${noteId}`)
}

onMounted(() => {
  // 设置课程信息
  courseInfo.value = courseInfoMap[course.value] || {
    name: '未知课程',
    description: '课程描述暂无'
  }

  // 使用动态笔记数据
  const courseNotes = getCourseNotes(course.value)
  notes.value = courseNotes.map(noteFile => ({
    id: noteFile.id,
    title: noteFile.title,
    unit: noteFile.unit || '',
    preview: `${noteFile.title}的详细学习内容...`,
    type: '学习笔记',
    estimatedReadTime: 15,
    hasAudio: hasNoteAudio(course.value, noteFile.id)
  }))
})
</script>

<style scoped>
.course-notes-layout {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f8fafc;
  margin: 0;
  padding: 0;
}

.course-header {
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
  gap: 1.5rem;
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

.title-section {
  display: flex;
  align-items: flex-start;
}

.title-content {
  flex: 1;
}

.main-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.02em;
}

.subtitle {
  font-size: 1rem;
  color: #64748b;
  margin: 0;
  font-weight: 400;
}

.stats-section {
  align-self: flex-end;
}

.stat-item {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stat-number {
  font-size: 2rem;
  font-weight: 600;
  color: #3b82f6;
}

.stat-label {
  font-size: 0.875rem;
  color: #64748b;
}

.main-content {
  flex: 1;
  padding: 3rem 5%;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
}

.notes-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.note-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.note-card:hover {
  border-color: #3b82f6;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
}

.note-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}

.note-badges {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-end;
}

.note-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
  line-height: 1.4;
  flex: 1;
}

.note-unit {
  background: #f1f5f9;
  color: #475569;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  white-space: nowrap;
}

.podcast-badge {
  background: #dbeafe;
  color: #3b82f6;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: help;
  transition: all 0.2s ease;
}

.podcast-badge:hover {
  background: #bfdbfe;
  transform: translateY(-1px);
}

.note-preview {
  color: #64748b;
  margin: 0;
  line-height: 1.6;
  font-size: 0.875rem;
  flex: 1;
}

.note-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  font-size: 0.75rem;
  color: #64748b;
}

.note-type {
  background: #dbeafe;
  color: #3b82f6;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: 500;
}

.note-length {
  color: #64748b;
}

.read-button {
  align-self: flex-start;
  font-weight: 500;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .notes-list {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .main-content {
    padding: 2rem 3%;
  }

  .title-section {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    gap: 1rem;
  }

  .stats-section {
    align-self: flex-start;
  }

  .main-title {
    font-size: 1.75rem;
  }

  .note-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .note-badges {
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
  }
}

@media (max-width: 480px) {
  .main-content {
    padding: 1.5rem;
  }

  .course-header {
    padding: 1.5rem 0;
  }

  .header-content {
    padding: 0 1rem;
  }

  .note-card {
    padding: 1.5rem;
  }

  .note-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>