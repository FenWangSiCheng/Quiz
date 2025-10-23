<template>
  <div class="detail-layout">
    <header class="detail-header">
      <div class="header-content">
        <div class="title-section">
          <el-button @click="goBack" text>
            <el-icon><ArrowLeft /></el-icon>
          </el-button>
          <h1 class="main-title">测试详情</h1>
        </div>
      </div>
    </header>

    <main v-if="historyItem" class="detail-content">
      <!-- 统计信息卡片 -->
      <section class="stats-section">
        <div class="stat-cards">
          <div class="stat-card">
            <div class="stat-icon">📚</div>
            <div class="stat-info">
              <h3>题库</h3>
              <p>{{ historyItem.bankNames.join(' + ') }}</p>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">✅</div>
            <div class="stat-info">
              <h3>得分</h3>
              <p>{{ historyItem.correctAnswers }}/{{ historyItem.totalQuestions }}</p>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">📊</div>
            <div class="stat-info">
              <h3>正确率</h3>
              <p :class="getAccuracyClass(historyItem.accuracy)">
                {{ Math.round(historyItem.accuracy * 100) }}%
              </p>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">⏱️</div>
            <div class="stat-info">
              <h3>用时</h3>
              <p>{{ formatTime(historyItem.timeSpent) }}</p>
            </div>
          </div>
        </div>

        <div class="meta-info">
          <div class="meta-item">
            <span class="label">开始时间:</span>
            <span>{{ formatFullDate(historyItem.startTime) }}</span>
          </div>
          <div v-if="historyItem.endTime" class="meta-item">
            <span class="label">完成时间:</span>
            <span>{{ formatFullDate(historyItem.endTime) }}</span>
          </div>
          <div class="meta-item">
            <span class="label">答题模式:</span>
            <span>{{ historyItem.isRandomOrder ? '随机顺序' : '按顺序' }}</span>
          </div>
          <div class="meta-item">
            <span class="label">状态:</span>
            <span :class="historyItem.completed ? 'status-completed' : 'status-incomplete'">
              {{ historyItem.completed ? '已完成' : '进行中' }}
            </span>
          </div>
        </div>
      </section>

      <!-- 题目列表 -->
      <section class="questions-section">
        <h2>答题详情 ({{ historyItem.answeredQuestions }}/{{ historyItem.totalQuestions }})</h2>

        <div class="filter-tabs">
          <el-radio-group v-model="filterType" size="small">
            <el-radio-button value="all">全部</el-radio-button>
            <el-radio-button value="correct">答对</el-radio-button>
            <el-radio-button value="wrong">答错</el-radio-button>
            <el-radio-button value="unanswered">未答</el-radio-button>
          </el-radio-group>
        </div>

        <div class="questions-list">
          <div
            v-for="(answer, index) in filteredAnswers"
            :key="answer?.questionId || index"
            class="question-card"
            :class="getQuestionCardClass(answer)"
          >
            <div class="question-header">
              <div class="question-number">
                <span class="number">Q{{ index + 1 }}</span>
                <span v-if="answer" class="result-badge" :class="answer.isCorrect ? 'correct' : 'wrong'">
                  {{ answer.isCorrect ? '✓ 正确' : '✗ 错误' }}
                </span>
                <span v-else class="result-badge unanswered">未答题</span>
              </div>
            </div>

            <div class="question-content">
              <div class="question-text">
                {{ getQuestionText(answer?.questionId || index) }}
              </div>

              <div v-if="answer" class="answers-section">
                <div class="answer-item">
                  <span class="answer-label">你的答案:</span>
                  <span class="answer-value" :class="answer.isCorrect ? 'correct' : 'wrong'">
                    {{ formatAnswers(answer.userAnswers, answer.questionId) }}
                  </span>
                </div>

                <div v-if="!answer.isCorrect" class="answer-item">
                  <span class="answer-label">正确答案:</span>
                  <span class="answer-value correct">
                    {{ formatCorrectAnswers(answer.questionId) }}
                  </span>
                </div>

                <div v-if="getExplanation(answer.questionId)" class="explanation">
                  <div class="explanation-header">
                    <el-icon><InfoFilled /></el-icon>
                    解析
                  </div>
                  <p>{{ getExplanation(answer.questionId) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <div v-else class="loading-state">
      <el-empty description="未找到测试记录" />
      <el-button @click="goBack">返回</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useQuizStore, type UserAnswer } from '@/stores/quiz'
import { questions } from '@/data/questions'
import { getQuestionsByBankIds } from '@/data/questionBankManager'
import { ArrowLeft, InfoFilled } from '@element-plus/icons-vue'

const router = useRouter()
const route = useRoute()
const quizStore = useQuizStore()

const historyItem = ref(quizStore.getHistoryById(route.params.id as string))
const filterType = ref<'all' | 'correct' | 'wrong' | 'unanswered'>('all')

// 获取当前历史记录对应的题目列表
const questionList = computed(() => {
  if (!historyItem.value) return []

  if (historyItem.value.quizMode === 'all') {
    return questions
  } else {
    return getQuestionsByBankIds(historyItem.value.selectedBankIds)
  }
})

// 创建包含所有题目的答案列表（包括未答的）
const allAnswers = computed(() => {
  if (!historyItem.value) return []

  return Array.from({ length: historyItem.value.totalQuestions }, (_, index) => {
    const questionId = questionList.value[index]?.id
    return historyItem.value!.answers.find(a => a.questionId === questionId) || null
  })
})

// 过滤后的答案列表
const filteredAnswers = computed(() => {
  switch (filterType.value) {
    case 'correct':
      return allAnswers.value.map((answer, index) => ({ answer, index }))
        .filter(({ answer }) => answer && answer.isCorrect)
        .map(({ answer }) => answer)
    case 'wrong':
      return allAnswers.value.map((answer, index) => ({ answer, index }))
        .filter(({ answer }) => answer && !answer.isCorrect)
        .map(({ answer }) => answer)
    case 'unanswered':
      return allAnswers.value.map((answer, index) => ({ answer, index }))
        .filter(({ answer }) => !answer)
        .map(({ answer }) => answer)
    default:
      return allAnswers.value
  }
})

// 获取题目文本
const getQuestionText = (questionId: number) => {
  const question = questionList.value.find(q => q.id === questionId)
  return question?.question || '题目加载失败'
}

// 获取解析
const getExplanation = (questionId: number) => {
  const question = questionList.value.find(q => q.id === questionId)
  return question?.explanation || ''
}

// 格式化用户答案
const formatAnswers = (answerIndices: number[], questionId: number) => {
  const question = questionList.value.find(q => q.id === questionId)
  if (!question) return '未知'

  if (question.type === 'true_false') {
    return answerIndices[0] === 0 ? '正确' : '错误'
  }

  return answerIndices
    .map(index => question.options[index])
    .join(', ')
}

// 格式化正确答案
const formatCorrectAnswers = (questionId: number) => {
  const question = questionList.value.find(q => q.id === questionId)
  if (!question) return '未知'

  if (question.type === 'true_false') {
    return question.correctAnswers[0] === 0 ? '正确' : '错误'
  }

  return question.correctAnswers
    .map(index => question.options[index])
    .join(', ')
}

// 格式化完整日期
const formatFullDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
}

// 格式化时间
const formatTime = (seconds: number) => {
  if (seconds < 60) return `${seconds}秒`
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return remainingSeconds > 0 ? `${minutes}分${remainingSeconds}秒` : `${minutes}分钟`
}

// 获取正确率颜色类
const getAccuracyClass = (accuracy: number) => {
  if (accuracy >= 0.9) return 'excellent'
  if (accuracy >= 0.7) return 'good'
  if (accuracy >= 0.5) return 'fair'
  return 'poor'
}

// 获取题目卡片类
const getQuestionCardClass = (answer: UserAnswer | null) => {
  if (!answer) return 'unanswered'
  return answer.isCorrect ? 'correct' : 'wrong'
}

// 返回
const goBack = () => {
  router.push('/history')
}

onMounted(() => {
  if (!historyItem.value) {
    console.error('未找到历史记录')
  }
})
</script>

<style scoped>
.detail-layout {
  width: 100vw;
  min-height: 100vh;
  background: #f8fafc;
  margin: 0;
  padding: 0;
}

.detail-header {
  background: white;
  border-bottom: 1px solid #e2e8f0;
  padding: 1.5rem 0;
}

.header-content {
  width: 100%;
  padding: 0 5%;
  box-sizing: border-box;
}

.title-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.main-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
}

.detail-content {
  width: 100%;
  padding: 2rem 5%;
  box-sizing: border-box;
}

.stats-section {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid #e2e8f0;
}

.stat-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
}

.stat-icon {
  font-size: 2rem;
}

.stat-info h3 {
  font-size: 0.875rem;
  color: #64748b;
  margin: 0 0 0.25rem 0;
}

.stat-info p {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
}

.excellent {
  color: #16a34a !important;
}

.good {
  color: #3b82f6 !important;
}

.fair {
  color: #f59e0b !important;
}

.poor {
  color: #dc2626 !important;
}

.meta-info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e2e8f0;
}

.meta-item {
  display: flex;
  gap: 0.5rem;
  font-size: 0.875rem;
}

.meta-item .label {
  color: #64748b;
  font-weight: 500;
}

.status-completed {
  color: #16a34a;
  font-weight: 500;
}

.status-incomplete {
  color: #f59e0b;
  font-weight: 500;
}

.questions-section h2 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 1.5rem 0;
}

.filter-tabs {
  margin-bottom: 1.5rem;
}

.questions-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.question-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.question-card.correct {
  border-left: 4px solid #16a34a;
}

.question-card.wrong {
  border-left: 4px solid #dc2626;
}

.question-card.unanswered {
  border-left: 4px solid #94a3b8;
  opacity: 0.6;
}

.question-header {
  margin-bottom: 1rem;
}

.question-number {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.number {
  font-weight: 600;
  color: #1e293b;
}

.result-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
}

.result-badge.correct {
  background: #dcfce7;
  color: #166534;
}

.result-badge.wrong {
  background: #fee2e2;
  color: #991b1b;
}

.result-badge.unanswered {
  background: #f1f5f9;
  color: #475569;
}

.question-text {
  font-size: 1rem;
  color: #1e293b;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.answers-section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.answer-item {
  display: flex;
  gap: 0.5rem;
  font-size: 0.875rem;
}

.answer-label {
  color: #64748b;
  font-weight: 500;
  min-width: 80px;
}

.answer-value {
  font-weight: 500;
}

.answer-value.correct {
  color: #16a34a;
}

.answer-value.wrong {
  color: #dc2626;
}

.explanation {
  margin-top: 0.75rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
  border-left: 3px solid #3b82f6;
}

.explanation-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.explanation p {
  color: #475569;
  line-height: 1.6;
  margin: 0;
  font-size: 0.875rem;
}

.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  gap: 1rem;
}

@media (max-width: 768px) {
  .detail-content {
    padding: 1rem;
  }

  .stat-cards {
    grid-template-columns: repeat(2, 1fr);
  }

  .meta-info {
    grid-template-columns: 1fr;
  }
}
</style>
