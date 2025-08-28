<template>
  <div class="quiz-layout">
    <!-- 顶部导航栏 -->
    <header class="quiz-header">
      <div class="header-content">
        <div class="header-left">
          <el-button @click="goBack" text>
            <el-icon><ArrowLeft /></el-icon>
            返回
          </el-button>
          <h1 class="quiz-title">SAP Quiz</h1>
        </div>
        
        <div class="header-right">
          <div class="progress-info">
            <span class="progress-text">{{ currentQuestionNumber }} / {{ totalQuestions }}</span>
            <el-progress 
              :percentage="Math.round((currentQuestionNumber / totalQuestions) * 100)"
              :stroke-width="6"
              :show-text="false"
              class="progress-bar"
            />
          </div>
        </div>
      </div>
    </header>

    <!-- 全宽度主内容区域 -->
    <main class="quiz-main">
      <div class="quiz-container">
        <div class="quiz-content">

      <!-- 题目内容 -->
      <div v-if="currentQuestion" class="question-section">
        <div class="question-header">
          <el-tag 
            type="info" 
            size="small"
          >
            {{ typeText(currentQuestion.type) }}
          </el-tag>
        </div>

        <h2 class="question-title">{{ currentQuestion.question }}</h2>

        <!-- 选项区域 -->
        <div class="options-section">
          <!-- 单选题（包括判断题） -->
          <el-radio-group 
            v-if="currentQuestion.type === 'true_false' || currentQuestion.type === 'single_choice'" 
            v-model="selectedAnswers[0]"
            :disabled="showAnswer"
          >
            <el-radio 
              v-for="(option, index) in currentQuestion.options" 
              :key="index" 
              :value="index"
              :class="getOptionClass(index)"
            >
              {{ option }}
            </el-radio>
          </el-radio-group>

          <!-- 多选题 -->
          <el-checkbox-group 
            v-else-if="currentQuestion.type === 'multiple_choice'" 
            v-model="selectedAnswers"
            :disabled="showAnswer"
          >
            <div class="multiple-choice-hint">
              <el-text type="info" size="small">
                请选择 {{ currentQuestion.correctAnswers.length }} 个正确答案
              </el-text>
            </div>
            <el-checkbox 
              v-for="(option, index) in currentQuestion.options" 
              :key="index" 
              :value="index"
              :class="getOptionClass(index)"
            >
              {{ option }}
            </el-checkbox>
          </el-checkbox-group>
        </div>

        <!-- 答案解析 -->
        <div v-if="showAnswer" class="answer-section">
          <el-divider />
          
          <div class="result-indicator">
            <el-icon v-if="currentAnswer?.isCorrect" color="#67c23a" size="24px">
              <CircleCheck />
            </el-icon>
            <el-icon v-else color="#f56c6c" size="24px">
              <CircleClose />
            </el-icon>
            <span 
              :class="['result-text', currentAnswer?.isCorrect ? 'correct' : 'incorrect']"
            >
              {{ currentAnswer?.isCorrect ? '回答正确！' : '回答错误' }}
            </span>
          </div>

          <div class="explanation">
            <h4>解析：</h4>
            <p>{{ currentQuestion.explanation }}</p>
          </div>
        </div>

        <!-- 操作按钮 -->
        <div class="action-buttons">
          <el-button 
            v-if="!showAnswer" 
            type="primary" 
            :disabled="selectedAnswers.length === 0"
            @click="submitAnswer"
          >
            提交答案
          </el-button>

          <div v-else class="navigation-buttons">
            <el-button 
              :disabled="currentQuestionNumber <= 1"
              @click="previousQuestion"
            >
              <el-icon><ArrowLeft /></el-icon>
              上一题
            </el-button>

            <el-button 
              type="warning"
              @click="resubmitAnswer"
            >
              <el-icon><Refresh /></el-icon>
              重新答题
            </el-button>

            <el-button 
              v-if="!isLastQuestion"
              type="primary"
              @click="nextQuestion"
            >
              下一题
              <el-icon><ArrowRight /></el-icon>
            </el-button>

            <el-button 
              v-else
              type="success"
              @click="completeQuiz"
            >
              完成测验
              <el-icon><Check /></el-icon>
            </el-button>
          </div>
        </div>
      </div>

      <!-- 加载状态 -->
      <div v-else class="loading-section">
        <el-empty description="加载中..." />
      </div>
      </div>

      <!-- 右侧信息栏 -->
      <aside class="quiz-sidebar">
        <div class="sidebar-card">
          <h3>答题进度</h3>
          <div class="progress-details">
            <div class="progress-item">
              <span class="progress-label">当前题目</span>
              <span class="progress-value">{{ currentQuestionNumber }}/{{ totalQuestions }}</span>
            </div>
            <div class="progress-item">
              <span class="progress-label">完成度</span>
              <span class="progress-value">{{ Math.round((currentQuestionNumber / totalQuestions) * 100) }}%</span>
            </div>
          </div>
          
          <el-progress 
            :percentage="Math.round((currentQuestionNumber / totalQuestions) * 100)"
            :stroke-width="8"
            class="sidebar-progress"
          />
        </div>

        <div class="sidebar-card">
          <h3>答题提示</h3>
          <div class="tips-list">
            <div class="tip-item">
              <el-icon><Check /></el-icon>
              <span>仔细阅读题目</span>
            </div>
            <div class="tip-item">
              <el-icon><ArrowRight /></el-icon>
              <span>可以跳过后回答</span>
            </div>
            <div class="tip-item">
              <el-icon><Refresh /></el-icon>
              <span>答案可以修改</span>
            </div>
          </div>
        </div>
      </aside>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useQuizStore } from '@/stores/quiz'
import { storeToRefs } from 'pinia'
import { CircleCheck, CircleClose, ArrowLeft, ArrowRight, Check, Refresh } from '@element-plus/icons-vue'

const router = useRouter()
const quizStore = useQuizStore()

// 响应式数据
const selectedAnswers = ref<number[]>([])

// 计算属性 - 使用storeToRefs保持响应性
const {
  currentQuestion,
  totalQuestions,
  currentQuestionNumber,
  showAnswer,
  currentAnswer,
  isLastQuestion
} = storeToRefs(quizStore)

// 监听当前题目变化，重置选中答案
watch(currentQuestion, (newQuestion) => {
  if (newQuestion) {
    selectedAnswers.value = []
    
    // 如果已经回答过，恢复之前的答案
    if (currentAnswer.value) {
      selectedAnswers.value = [...currentAnswer.value.userAnswers]
    }
  }
}, { immediate: true })

// 方法
const submitAnswer = () => {
  if (selectedAnswers.value.length === 0) return
  quizStore.answerQuestion(selectedAnswers.value)
}

const nextQuestion = () => {
  quizStore.nextQuestion()
}

const previousQuestion = () => {
  quizStore.previousQuestion()
}

const completeQuiz = () => {
  quizStore.completeQuiz()
  router.push('/result')
}

const goBack = () => {
  router.push('/')
}

const resubmitAnswer = () => {
  quizStore.showAnswer = false
}

// 获取选项样式类
const getOptionClass = (index: number) => {
  if (!showAnswer.value) return ''
  
  const isCorrect = currentQuestion.value?.correctAnswers.includes(index)
  const isSelected = selectedAnswers.value.includes(index)
  
  if (isCorrect) return 'option-correct'
  if (isSelected && !isCorrect) return 'option-incorrect'
  return ''
}

// Removed unused utility functions for difficulty and type tags

const typeText = (type: string) => {
  const texts = {
    'true_false': '单选题',
    'single_choice': '单选题',
    'multiple_choice': '多选题'
  }
  return texts[type as keyof typeof texts] || type
}

// 组件挂载时检查是否有进度
onMounted(() => {
  if (!currentQuestion.value) {
    // 如果没有当前题目，可能需要重新开始或加载进度
    router.push('/')
  }
})
</script>

<style scoped>
/* 全屏布局 - 真正铺满整个浏览器 */
.quiz-layout {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f8fafc;
  margin: 0;
  padding: 0;
}

/* 全宽度顶部导航栏 */
.quiz-header {
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
  max-width: none;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.quiz-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
}

.header-right {
  display: flex;
  align-items: center;
}

.progress-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.progress-text {
  font-size: 14px;
  color: #64748b;
  font-weight: 500;
  min-width: 60px;
}

.progress-bar {
  width: 200px;
}

/* 全宽度主内容区域 */
.quiz-main {
  flex: 1;
  width: 100%;
  padding: 2rem 0;
  background: #f8fafc;
}

.quiz-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  max-width: none;
  width: 100%;
  padding: 0 5%;
  box-sizing: border-box;
}

.quiz-content {
  width: 100%;
  background: white;
  border-radius: 12px;
  padding: 3rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid #e2e8f0;
  min-height: 600px;
}

.question-section {
  min-height: 500px;
}

.question-header {
  display: flex;
  gap: 8px;
  margin-bottom: 2rem;
}

.question-title {
  font-size: 1.5rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  color: #1e293b;
  font-weight: 500;
}

/* 右侧边栏 */
.quiz-sidebar {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.sidebar-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
}

.sidebar-card h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 1.5rem 0;
}

.progress-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.progress-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.progress-label {
  color: #64748b;
  font-size: 0.875rem;
}

.progress-value {
  color: #1e293b;
  font-weight: 500;
  font-size: 0.875rem;
}

.sidebar-progress {
  margin: 0;
}

.tips-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tip-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #64748b;
  font-size: 0.875rem;
}

.tip-item .el-icon {
  color: #3b82f6;
}

.options-section {
  margin-bottom: 2.5rem;
}

.multiple-choice-hint {
  margin-bottom: 1.5rem;
}

.el-radio,
.el-checkbox {
  display: flex;
  align-items: center;
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  border: 1px solid #e2e8f0;
  font-size: 1rem;
  background-color: #ffffff;
  min-height: 60px;
}

.el-radio:hover,
.el-checkbox:hover {
  background-color: #f1f5f9;
  border-color: #3b82f6;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
}

.el-radio.is-checked,
.el-checkbox.is-checked {
  background-color: #eff6ff;
  border-color: #3b82f6;
  color: #1d4ed8;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.2);
}

.option-correct {
  background-color: #f0fdf4;
  border: 1px solid #22c55e;
  color: #166534;
}

.option-incorrect {
  background-color: #fef2f2;
  border: 1px solid #ef4444;
  color: #991b1b;
}

.answer-section {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e2e8f0;
}

.result-indicator {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1.5rem;
}

.result-text {
  font-size: 1.125rem;
  font-weight: 600;
}

.result-text.correct {
  color: #22c55e;
}

.result-text.incorrect {
  color: #ef4444;
}

.explanation {
  background-color: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #3b82f6;
}

.explanation h4 {
  margin: 0 0 1rem 0;
  color: #1e293b;
  font-size: 1rem;
}

.explanation p {
  margin: 0;
  line-height: 1.7;
  color: #475569;
}

.action-buttons {
  margin-top: 2.5rem;
  text-align: center;
}

.navigation-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.loading-section {
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 响应式设计 */
@media (max-width: 1400px) {
  .quiz-container {
    gap: 2rem;
    padding: 0 4%;
  }
}

@media (max-width: 1200px) {
  .quiz-main {
    padding: 1.5rem 0;
  }
  
  .quiz-content {
    padding: 2rem;
  }
  
  .quiz-container {
    gap: 2rem;
    padding: 0 3%;
  }
}

@media (max-width: 1024px) {
  .quiz-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 3%;
  }
  
  .quiz-sidebar {
    order: -1;
    margin-bottom: 1rem;
  }
  
  .sidebar-card {
    padding: 1.5rem;
  }
  
  .quiz-main {
    padding: 1.5rem 0;
  }
  
  .quiz-content {
    padding: 2rem;
  }
  
  .header-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .progress-info {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .progress-bar {
    width: 150px;
  }
  
  .question-title {
    font-size: 1.25rem;
  }
  
  .navigation-buttons {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }
  
  .navigation-buttons .el-button {
    width: 200px;
  }
}

@media (max-width: 640px) {
  
  .quiz-header {
    padding: 1rem;
  }
  
  .quiz-main {
    padding: 1rem;
  }
  
  .quiz-content {
    padding: 1rem;
  }
  
  .question-title {
    font-size: 1.125rem;
  }
  
  .el-radio,
  .el-checkbox {
    padding: 0.75rem;
    font-size: 0.9rem;
  }
  
  .navigation-buttons .el-button {
    width: 100%;
    max-width: 250px;
  }
}

@media (max-width: 480px) {
  
  .quiz-header {
    padding: 0.75rem;
  }
  
  .quiz-main {
    padding: 0.75rem;
  }
  
  .quiz-content {
    padding: 0.75rem;
  }
  
  .question-title {
    font-size: 1rem;
  }
  
  .header-left {
    gap: 0.5rem;
  }
  
  .quiz-title {
    font-size: 1.25rem;
  }
}
</style>