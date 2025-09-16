<template>
  <div class="home-layout">
    <!-- 简约顶部区域 -->
    <header class="app-header">
      <div class="header-content">
        <div class="title-section">
          <h1 class="main-title">SAP Quiz</h1>
        </div>
        <div class="stats-section">
          <div class="stat-item">
            <span class="stat-number">{{ questions.length }}</span>
            <span class="stat-label">题</span>
          </div>
          <div v-if="statistics" class="stat-item">
            <span class="stat-number">{{ Math.round(statistics.accuracy * 100) }}%</span>
            <span class="stat-label">正确率</span>
          </div>
        </div>
      </div>
    </header>

    <!-- 全宽度主内容区域 -->
    <main class="main-content">
      <!-- 左侧：开始测验区域 -->
      <section class="quiz-section">
        <h2>开始练习</h2>
        
        <div class="quiz-options">
          <div class="option-card" @click="showBankSelector">
            <div class="option-icon">🎯</div>
            <h3>模拟测试</h3>
            <p>选择一个或多个题库进行专项练习</p>
            <el-button type="warning" size="large">选择题库</el-button>
          </div>

          <div class="option-card" @click="navigateToNotes">
            <div class="option-icon">📚</div>
            <h3>学习中心</h3>
            <p>集中学习SAP课程资料，包含详细笔记和音频播客内容</p>
            <el-button type="primary" size="large">进入学习</el-button>
          </div>
        </div>
      </section>

      <!-- 中间：进度和统计 -->
      <section class="progress-section">
        <div v-if="hasProgress">
          <h2>继续练习</h2>
          <div class="progress-card">
            <div class="progress-info">
              <div class="progress-details">
                <span class="progress-mode">
                  {{ currentProgress?.isRandomOrder ? '🎲 随机顺序' : '📝 按顺序' }}
                </span>
                <span class="progress-text">
                  进度 {{ (currentProgress?.currentQuestionIndex || 0) + 1 }}/{{ currentProgress?.questionOrder.length }}
                  ({{ progressPercentage }}%)
                </span>
              </div>
              <div class="progress-actions">
                <el-button @click="continueQuiz">继续</el-button>
                <el-popconfirm
                  title="确定要重新开始吗？"
                  @confirm="resetProgress"
                >
                  <template #reference>
                    <el-button type="danger" text>重置</el-button>
                  </template>
                </el-popconfirm>
              </div>
            </div>
            
            <el-progress
              :percentage="progressPercentage"
              :stroke-width="6"
              class="progress-bar"
            />
            
            <div v-if="statistics" class="progress-stats">
              <span>✅ {{ statistics.correctAnswers }}</span>
              <span>❌ {{ statistics.wrongAnswers }}</span>
              <span>📊 {{ Math.round(statistics.accuracy * 100) }}%</span>
            </div>
          </div>
        </div>
        
        <div v-else class="welcome-card">
          <h2>欢迎使用 SAP Quiz</h2>
          <p>选择左侧的练习模式开始学习</p>
          <div class="stats-preview">
            <div class="stat-preview-item">
              <span class="stat-preview-number">{{ questions.length }}</span>
              <span class="stat-preview-label">道题目</span>
            </div>
            <div class="stat-preview-item">
              <span class="stat-preview-number">{{ questionBanks.length }}</span>
              <span class="stat-preview-label">个题库</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 右侧：题库信息区域 -->
      <aside class="info-section">
        <h2>题库信息</h2>
        
        <div class="info-cards">
          <div class="info-card">
            <h4>📋 题库信息</h4>
            <div class="quiz-categories">
              <div 
                v-for="bank in questionBanks" 
                :key="bank.id"
                class="category-item"
              >
                <span class="category-name">
                  <span class="bank-icon" :style="{ color: bank.color }">{{ bank.icon }}</span>
                  {{ bank.name }}
                </span>
                <span class="category-count">{{ bank.count }}题</span>
              </div>
            </div>
          </div>
          
          <div class="info-card">
            <h4>ℹ️ 说明</h4>
            <p>共{{ questions.length }}道题目，涵盖SAP Build套件三大核心产品及治理最佳实践的相关知识点，包含官方认证考试题目和学习笔记Quiz，支持进度保存和断点续答。</p>
          </div>
        </div>
      </aside>
    </main>

    <!-- 题库选择对话框 -->
    <el-dialog
      v-model="bankSelectorVisible"
      title="选择题库"
      :width="800"
      :close-on-click-modal="false"
      center
    >
      <QuestionBankSelector
        :visible="bankSelectorVisible"
        @confirm="handleBankSelection"
        @cancel="bankSelectorVisible = false"
      />
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useQuizStore } from '@/stores/quiz'
import { questions } from '@/data/questions'
import { getAllQuestionBanks } from '@/data/questionBankManager'
import QuestionBankSelector from '@/components/QuestionBankSelector.vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const router = useRouter()
const quizStore = useQuizStore()

// 响应式数据
const bankSelectorVisible = ref(false)

// 计算属性
const hasProgress = computed(() => !!quizStore.currentProgress)
const currentProgress = computed(() => quizStore.currentProgress)
const statistics = computed(() => quizStore.statistics)
const questionBanks = computed(() => getAllQuestionBanks())

const progressPercentage = computed(() => {
  if (!currentProgress.value) return 0
  const current = currentProgress.value.currentQuestionIndex + 1
  const total = currentProgress.value.questionOrder.length
  return Math.round((current / total) * 100)
})

// 方法

const continueQuiz = () => {
  ElMessage.info('继续上次练习')
  router.push('/quiz')
}

const resetProgress = () => {
  quizStore.resetQuiz()
  ElMessage.success('已清除练习进度')
}

// 新增方法
const showBankSelector = () => {
  bankSelectorVisible.value = true
}

const navigateToNotes = () => {
  router.push('/notes')
}

const handleBankSelection = (bankIds: string[]) => {
  bankSelectorVisible.value = false
  
  // 显示题库选择模式对话框
  ElMessageBox.confirm(
    `已选择 ${bankIds.length} 个题库，请选择答题模式：`,
    '开始模拟测试',
    {
      distinguishCancelAndClose: true,
      confirmButtonText: '随机顺序',
      cancelButtonText: '按顺序',
      type: 'info'
    }
  ).then(() => {
    // 随机顺序
    quizStore.startQuizWithBanks(bankIds, true)
    ElMessage.success('开始随机顺序模拟测试')
    router.push('/quiz')
  }).catch((action) => {
    if (action === 'cancel') {
      // 按顺序
      quizStore.startQuizWithBanks(bankIds, false)
      ElMessage.success('开始按顺序模拟测试')
      router.push('/quiz')
    }
  })
}

// 组件挂载
onMounted(() => {
  // 尝试加载之前的进度
  quizStore.loadProgress()
})
</script>

<style scoped>
/* 全屏布局 - 真正铺满整个浏览器 */
.home-layout {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f8fafc;
  margin: 0;
  padding: 0;
}

/* 全宽度顶部区域 */
.app-header {
  background: white;
  border-bottom: 1px solid #e2e8f0;
  padding: 2rem 0;
  width: 100%;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 5%;
  max-width: none;
}

.main-title {
  font-size: 3rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
  letter-spacing: -0.02em;
}

.subtitle {
  font-size: 1rem;
  color: #64748b;
  margin: 0.5rem 0 0 0;
  font-weight: 400;
}

.stats-section {
  display: flex;
  gap: 2rem;
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

/* 全宽度主内容区域 */
.main-content {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  padding: 3rem 5%;
  width: 100%;
  max-width: none;
  box-sizing: border-box;
}

/* 测验区域 */
.quiz-section h2,
.info-section h2 {
  font-size: 1.5rem;
  font-weight: 500;
  color: #1e293b;
  margin: 0 0 2rem 0;
}

.quiz-options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 0;
}

.option-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 2.5rem 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.option-card:hover {
  border-color: #3b82f6;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
}

.option-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.option-card h3 {
  font-size: 1.25rem;
  font-weight: 500;
  color: #1e293b;
  margin: 0 0 0.5rem 0;
}

.option-card p {
  color: #64748b;
  margin: 0 0 1.5rem 0;
  line-height: 1.5;
  font-size: 0.875rem;
}

/* 中间进度区域 */
.progress-section {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.progress-section h2 {
  font-size: 1.5rem;
  font-weight: 500;
  color: #1e293b;
  margin: 0 0 2rem 0;
}

/* 欢迎卡片 */
.welcome-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 3rem 2rem;
  text-align: center;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.welcome-card h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 1rem 0;
}

.welcome-card p {
  color: #64748b;
  margin: 0 0 2rem 0;
  font-size: 1rem;
}

.stats-preview {
  display: flex;
  justify-content: center;
  gap: 3rem;
}

.stat-preview-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.stat-preview-number {
  font-size: 2rem;
  font-weight: 700;
  color: #3b82f6;
}

.stat-preview-label {
  font-size: 0.875rem;
  color: #64748b;
}

.progress-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 2rem;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.progress-details {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.progress-mode {
  font-weight: 500;
  color: #1e293b;
}

.progress-text {
  font-size: 0.875rem;
  color: #64748b;
}

.progress-actions {
  display: flex;
  gap: 0.5rem;
}

.progress-bar {
  margin: 1rem 0;
}

.progress-stats {
  display: flex;
  gap: 1rem;
  justify-content: center;
  font-size: 0.875rem;
}

/* 信息区域 */
.info-cards {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 2rem;
}

.info-card h4 {
  font-size: 1rem;
  font-weight: 500;
  color: #1e293b;
  margin: 0 0 1rem 0;
}

.info-card p {
  color: #64748b;
  line-height: 1.6;
  margin: 0;
  font-size: 0.875rem;
}

.quiz-categories {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.category-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.category-name {
  color: #374151;
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.bank-icon {
  font-size: 1rem;
}

.category-count {
  color: #3b82f6;
  font-weight: 600;
  font-size: 0.875rem;
  background: #dbeafe;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  flex-shrink: 0;
  white-space: nowrap;
}

.type-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.type-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
}

.type-label {
  color: #374151;
  font-size: 0.875rem;
}

.type-count {
  color: #3b82f6;
  font-weight: 500;
  font-size: 0.875rem;
}

/* 响应式设计 */
@media (max-width: 1400px) {
  .main-content {
    gap: 3rem;
    padding: 2rem 3rem;
  }
}

@media (max-width: 1200px) {
  .main-content {
    gap: 2rem;
    padding: 2rem;
  }
  
}

@media (max-width: 1024px) {
  .main-content {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 2rem 3%;
  }
}

@media (max-width: 768px) {
  .main-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 1.5rem 3%;
  }
  
  .quiz-options {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .welcome-card {
    min-height: 200px;
    padding: 2rem 1.5rem;
  }
  
  .stats-preview {
    gap: 2rem;
  }
  
  .header-content {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
    padding: 0 3%;
  }
  
  .stats-section {
    gap: 3rem;
  }
}

@media (max-width: 640px) {
  
  .app-header {
    padding: 1.5rem;
  }
  
  .main-content {
    padding: 1rem 1.5rem;
    gap: 1.5rem;
  }
  
  .stats-section {
    gap: 2rem;
  }
  
  .progress-info {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
  
  .progress-actions {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  
  .app-header {
    padding: 1rem;
  }
  
  .main-content {
    padding: 1rem;
    gap: 1rem;
  }
  
  .main-title {
    font-size: 2rem;
  }
  
  .option-card,
  .progress-card,
  .info-card {
    padding: 1rem;
  }
  
  .stats-section {
    gap: 1.5rem;
  }
}
</style>
