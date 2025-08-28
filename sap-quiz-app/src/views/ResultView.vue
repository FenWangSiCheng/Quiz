<template>
  <div class="result-layout">
    <!-- 顶部导航栏 -->
    <header class="result-header">
      <div class="header-content">
        <div class="header-left">
          <el-button @click="goHome" text>
            <el-icon><House /></el-icon>
            返回首页
          </el-button>
          <h1 class="result-title">测验结果</h1>
        </div>
        
        <div class="header-right">
          <div class="quiz-mode-info">
            <el-tag v-if="quizMode === 'selected'" type="warning" size="small">
              模拟测试
            </el-tag>
            <el-tag v-else type="info" size="small">
              全题库测试
            </el-tag>
          </div>
        </div>
      </div>
    </header>

    <!-- 全宽度主内容区域 -->
    <main class="result-main">
      <div class="result-container">
        <el-card class="result-card">
      <!-- 完成状态 -->
      <div class="completion-section">
        <el-result 
          :icon="resultIcon"
          :title="resultTitle"
          :sub-title="resultSubTitle"
        >
          <template #extra>
            <div class="score-display">
              <el-statistic
                :value="Math.round((statistics?.accuracy || 0) * 100)"
                title="正确率"
                suffix="%"
                :value-style="{ 
                  color: getScoreColor(statistics?.accuracy || 0),
                  fontSize: '36px',
                  fontWeight: 'bold'
                }"
              />
            </div>
          </template>
        </el-result>
      </div>

      <!-- 详细统计 -->
      <el-divider />
      <div class="statistics-section">
        <h3>答题统计</h3>
        <div class="stats-grid">
          <el-card class="stat-card" shadow="hover">
            <el-statistic
              :value="statistics?.totalQuestions || 0"
              title="总题数"
              suffix="题"
            >
              <template #prefix>
                <el-icon color="#909399">
                  <Document />
                </el-icon>
              </template>
            </el-statistic>
          </el-card>

          <el-card class="stat-card" shadow="hover">
            <el-statistic
              :value="statistics?.totalAnswered || 0"
              title="已答题"
              suffix="题"
            >
              <template #prefix>
                <el-icon color="#409eff">
                  <Edit />
                </el-icon>
              </template>
            </el-statistic>
          </el-card>

          <el-card class="stat-card" shadow="hover">
            <el-statistic
              :value="statistics?.correctAnswers || 0"
              title="答对"
              suffix="题"
            >
              <template #prefix>
                <el-icon color="#67c23a">
                  <CircleCheck />
                </el-icon>
              </template>
            </el-statistic>
          </el-card>

          <el-card class="stat-card" shadow="hover">
            <el-statistic
              :value="statistics?.wrongAnswers || 0"
              title="答错"
              suffix="题"
            >
              <template #prefix>
                <el-icon color="#f56c6c">
                  <CircleClose />
                </el-icon>
              </template>
            </el-statistic>
          </el-card>
        </div>
      </div>

      <!-- 错题列表 -->
      <div v-if="wrongQuestions.length > 0" class="wrong-questions-section">
        <el-divider />
        <h3>错题回顾 ({{ wrongQuestions.length }}题)</h3>
        
        <el-collapse v-model="activeWrongQuestions">
          <el-collapse-item 
            v-for="(item, index) in wrongQuestions" 
            :key="item.question.id"
            :title="`第${index + 1}题: ${item.question.question}`"
            :name="item.question.id.toString()"
          >
            <div class="wrong-question-content">
              <!-- 题型标签 -->
              <div class="question-tags">
                <el-tag type="info" size="small">
                  {{ typeText(item.question.type) }}
                </el-tag>
              </div>

              <!-- 选项对比 -->
              <div class="options-comparison">
                <div class="user-answer">
                  <h5>你的答案：</h5>
                  <div class="answer-options">
                    <span 
                      v-for="userAnswerIndex in item.userAnswer.userAnswers" 
                      :key="userAnswerIndex"
                      class="answer-option incorrect"
                    >
                      {{ item.question.options[userAnswerIndex] }}
                    </span>
                  </div>
                </div>

                <div class="correct-answer">
                  <h5>正确答案：</h5>
                  <div class="answer-options">
                    <span 
                      v-for="correctIndex in item.question.correctAnswers" 
                      :key="correctIndex"
                      class="answer-option correct"
                    >
                      {{ item.question.options[correctIndex] }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- 解析 -->
              <div class="explanation">
                <h5>解析：</h5>
                <p>{{ item.question.explanation }}</p>
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>

      <!-- 操作按钮 -->
      <el-divider />
      <div class="action-section">
        <div class="action-buttons">
          <el-button type="primary" size="large" @click="goHome">
            <el-icon><House /></el-icon>
            返回首页
          </el-button>
        </div>

      </div>
    </el-card>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useQuizStore } from '@/stores/quiz'
import { questions } from '@/data/questions'
import { 
  Document, Edit, CircleCheck, CircleClose, House
} from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import type { Question } from '@/data/questions'
import type { UserAnswer } from '@/stores/quiz'

const router = useRouter()
const quizStore = useQuizStore()

// 响应式数据
const activeWrongQuestions = ref<string[]>([])

// 计算属性
const statistics = computed(() => quizStore.statistics)

const quizMode = computed(() => quizStore.currentProgress?.quizMode || 'all')

const resultIcon = computed(() => {
  const accuracy = statistics.value?.accuracy || 0
  if (accuracy >= 0.8) return 'success'
  if (accuracy >= 0.6) return 'warning' 
  return 'error'
})

const resultTitle = computed(() => {
  const accuracy = statistics.value?.accuracy || 0
  if (accuracy >= 0.9) return '优秀！'
  if (accuracy >= 0.8) return '良好！'
  if (accuracy >= 0.6) return '及格'
  return '需要加强'
})

const resultSubTitle = computed(() => {
  const stats = statistics.value
  if (!stats) return ''
  
  return `完成了 ${stats.totalAnswered}/${stats.totalQuestions} 题，正确率 ${Math.round(stats.accuracy * 100)}%`
})

// 错题列表
const wrongQuestions = computed(() => {
  if (!quizStore.currentProgress) return []
  
  return quizStore.currentProgress.answers
    .filter(answer => !answer.isCorrect)
    .map(answer => {
      const question = questions.find(q => q.id === answer.questionId)
      return question ? { question, userAnswer: answer } : null
    })
    .filter((item): item is { question: Question; userAnswer: UserAnswer } => item !== null)
})

// 方法
const getScoreColor = (accuracy: number) => {
  if (accuracy >= 0.8) return '#67c23a'
  if (accuracy >= 0.6) return '#e6a23c'
  return '#f56c6c'
}


const typeText = (type: string) => {
  const texts = {
    'true_false': '单选题',
    'single_choice': '单选题',
    'multiple_choice': '多选题'
  }
  return texts[type as keyof typeof texts] || type
}

const goHome = () => {
  router.push('/')
}




// 组件挂载
onMounted(() => {
  // 如果没有测验结果，重定向到首页
  if (!quizStore.currentProgress || !quizStore.currentProgress.completed) {
    router.push('/')
    return
  }
  
  // 自动展开前3个错题
  activeWrongQuestions.value = wrongQuestions.value
    .slice(0, 3)
    .map(item => item.question.id.toString())
})
</script>

<style scoped>
/* 全屏布局 - 与其他界面保持一致 */
.result-layout {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f8fafc;
  margin: 0;
  padding: 0;
}

/* 全宽度顶部导航栏 */
.result-header {
  background: white;
  border-bottom: 1px solid #e2e8f0;
  padding: 1.5rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.result-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
}

.header-right {
  display: flex;
  align-items: center;
}

.quiz-mode-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* 全宽度主内容区域 */
.result-main {
  flex: 1;
  width: 100%;
  padding: 2rem 0;
  background: #f8fafc;
}

.result-container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 5%;
}

.result-card {
  margin-bottom: 20px;
}

.completion-section {
  text-align: center;
  padding: 20px 0;
}

.score-display {
  margin: 20px 0;
}

.statistics-section h3 {
  margin-bottom: 20px;
  color: var(--el-text-color-primary);
  text-align: center;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.stat-card {
  text-align: center;
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-2px);
}

.wrong-questions-section h3 {
  margin-bottom: 20px;
  color: var(--el-text-color-primary);
}

.wrong-question-content {
  padding: 15px 0;
}

.question-tags {
  display: flex;
  gap: 8px;
  margin-bottom: 15px;
}

.options-comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 15px 0;
}

.user-answer h5,
.correct-answer h5 {
  margin: 0 0 8px 0;
  font-size: 14px;
  color: var(--el-text-color-regular);
}

.answer-options {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.answer-option {
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 14px;
}

.answer-option.correct {
  background-color: var(--el-color-success-light-9);
  color: var(--el-color-success);
  border: 1px solid var(--el-color-success-light-3);
}

.answer-option.incorrect {
  background-color: var(--el-color-danger-light-9);
  color: var(--el-color-danger);
  border: 1px solid var(--el-color-danger-light-3);
}

.explanation {
  background-color: var(--el-fill-color-lighter);
  padding: 15px;
  border-radius: 6px;
  margin-top: 15px;
}

.explanation h5 {
  margin: 0 0 8px 0;
  color: var(--el-text-color-primary);
}

.explanation p {
  margin: 0;
  line-height: 1.6;
  color: var(--el-text-color-regular);
}

.action-section {
  text-align: center;
  padding: 20px 0;
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

/* 响应式设计 */
@media (max-width: 1400px) {
  .result-container {
    padding: 0 4%;
  }
}

@media (max-width: 1200px) {
  .result-main {
    padding: 1.5rem 0;
  }
  
  .result-container {
    padding: 0 3%;
  }
}

@media (max-width: 1024px) {
  .result-container {
    padding: 0 3%;
  }
  
  .result-main {
    padding: 1.5rem 0;
  }
  
  .header-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .result-title {
    font-size: 1.25rem;
  }
}

@media (max-width: 768px) {
  .result-container {
    padding: 0 4%;
  }
  
  .completion-section {
    padding: 15px 0;
  }
  
  .stats-grid {
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }
  
  .options-comparison {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .action-buttons {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
  
  .action-buttons .el-button {
    width: 200px;
  }
  
  .question-tags {
    gap: 6px;
  }
  
  .result-header {
    padding: 1rem 0;
  }
  
  .result-main {
    padding: 1rem 0;
  }
}

@media (max-width: 640px) {
  .result-container {
    padding: 0 3%;
  }
}

@media (max-width: 480px) {
  .result-container {
    padding: 0 2%;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .score-display {
    margin: 15px 0;
  }
  
  .action-buttons .el-button {
    width: 100%;
    max-width: 250px;
  }
  
  .answer-option {
    font-size: 13px;
    padding: 6px 10px;
  }
  
  .result-header {
    padding: 0.75rem 0;
  }
  
  .result-main {
    padding: 0.75rem 0;
  }
  
  .header-left {
    gap: 0.5rem;
  }
  
  .result-title {
    font-size: 1.125rem;
  }
}
</style>