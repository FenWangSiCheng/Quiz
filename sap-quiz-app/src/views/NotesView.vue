<template>
  <div class="notes-layout">
    <!-- 顶部区域 -->
    <header class="notes-header">
      <div class="header-content">
        <div class="title-section">
          <el-button
            type="text"
            @click="$router.push('/')"
            class="back-button"
          >
            <el-icon><ArrowLeft /></el-icon>
            返回首页
          </el-button>
          <h1 class="main-title">学习中心</h1>
          <p class="subtitle">探索SAP知识体系，体验多媒体学习内容</p>
        </div>
      </div>
    </header>

    <!-- 主内容区域 -->
    <main class="main-content">
      <div class="courses-grid">
        <div
          v-for="course in courses"
          :key="course.id"
          class="course-card"
          @click="navigateToCourse(course.id)"
        >
          <h3 class="course-title">{{ course.name }}</h3>
          <p class="course-description">{{ course.description }}</p>
          <div class="course-stats">
            <span class="notes-count">{{ course.notesCount }} 篇笔记</span>
          </div>
          <el-button type="primary" size="large" class="view-button">
            开始学习
          </el-button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowLeft } from '@element-plus/icons-vue'
import { getCourseNotes } from '@/utils/noteReader'

interface Course {
  id: string
  name: string
  description: string
  notesCount: number
}

const router = useRouter()

const courses = ref<Course[]>([
  {
    id: 'sap-build-process-automation',
    name: 'SAP Build Process Automation',
    description: '流程自动化与工作流管理相关学习笔记',
    notesCount: 0
  },
  {
    id: 'exploring-sap-business-technology-platform-btp100',
    name: 'Exploring SAP BTP (BTP100)',
    description: 'SAP Business Technology Platform 基础知识',
    notesCount: 0
  },
  {
    id: 'designing-sap-build-work-zone',
    name: 'Designing SAP Build Work Zone',
    description: 'SAP Build Work Zone 设计概念',
    notesCount: 0
  },
  {
    id: 'develop-and-automate-with-sap-build-btp110',
    name: 'Develop and automate with SAP Build (BTP110)',
    description: 'SAP Build 开发与自动化',
    notesCount: 0
  },
  {
    id: 'developing-apps-with-sap-build-apps',
    name: 'Developing Apps with SAP Build Apps',
    description: 'SAP Build Apps 应用开发',
    notesCount: 0
  },
  {
    id: 'sap-c-lcnc-2406',
    name: 'SAP-C_LCNC_2406',
    description: 'SAP 认证相关学习材料',
    notesCount: 0
  }
])

const navigateToCourse = (courseId: string) => {
  router.push(`/notes/${courseId}`)
}

onMounted(() => {
  // 动态计算每个课程的笔记数量
  courses.value.forEach(course => {
    const courseNotes = getCourseNotes(course.id)
    course.notesCount = courseNotes.length
  })
})
</script>

<style scoped>
.notes-layout {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f8fafc;
  margin: 0;
  padding: 0;
}

.notes-header {
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
}

.title-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.back-button {
  align-self: flex-start;
  color: #3b82f6;
  font-size: 0.875rem;
  padding: 0.5rem 0;
  margin-bottom: 0.5rem;
  height: auto;
  line-height: normal;
}

.back-button:hover {
  color: #2563eb;
}

.main-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
  letter-spacing: -0.02em;
}

.subtitle {
  font-size: 1.125rem;
  color: #64748b;
  margin: 0;
  font-weight: 400;
}

.main-content {
  flex: 1;
  padding: 3rem 5%;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.course-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  min-height: 280px;
}

.course-card:hover {
  border-color: #3b82f6;
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.15);
  transform: translateY(-2px);
}


.course-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 1rem 0;
  line-height: 1.4;
}

.course-description {
  color: #64748b;
  margin: 0 0 1.5rem 0;
  line-height: 1.6;
  font-size: 0.875rem;
  flex: 1;
}

.course-stats {
  margin-bottom: 1.5rem;
}

.notes-count {
  background: #dbeafe;
  color: #3b82f6;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
}

.view-button {
  width: 100%;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .courses-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .main-content {
    padding: 2rem 3%;
  }

  .course-card {
    min-height: 250px;
    padding: 1.5rem;
  }

  .main-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .main-content {
    padding: 1.5rem;
  }

  .notes-header {
    padding: 1.5rem 0;
  }

  .header-content {
    padding: 0 1rem;
  }
}
</style>