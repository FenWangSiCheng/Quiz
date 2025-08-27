<template>
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
              <!-- 题型和难度标签 -->
              <div class="question-tags">
                <el-tag :type="difficultyTag(item.question.difficulty)" size="small">
                  {{ difficultyText(item.question.difficulty) }}
                </el-tag>
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
          <el-button size="large" @click="goHome">
            <el-icon><House /></el-icon>
            返回首页
          </el-button>
          
          <el-button type="primary" size="large" @click="retryWrongQuestions" :disabled="wrongQuestions.length === 0">
            <el-icon><Refresh /></el-icon>
            重做错题
          </el-button>
          
          <el-button type="success" size="large" @click="startNewQuiz">
            <el-icon><VideoPlay /></el-icon>
            重新测验
          </el-button>
        </div>

        <!-- 分享成绩 -->
        <div class="share-section">
          <el-button size="small" @click="shareResult">
            <el-icon><Share /></el-icon>
            分享成绩
          </el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useQuizStore } from '@/stores/quiz'
import { questions } from '@/data/questions'
import { 
  Document, Edit, CircleCheck, CircleClose, House, 
  Refresh, VideoPlay, Share 
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

const difficultyTag = (difficulty: string) => {
  const tags = { easy: 'success', medium: 'warning', hard: 'danger' }
  return tags[difficulty as keyof typeof tags] || 'info'
}

const difficultyText = (difficulty: string) => {
  const texts = { easy: '简单', medium: '中等', hard: '困难' }
  return texts[difficulty as keyof typeof texts] || difficulty
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

const retryWrongQuestions = () => {
  // 这里可以实现只重做错题的功能
  ElMessage.info('重做错题功能开发中...')
}

const startNewQuiz = () => {
  quizStore.resetQuiz()
  router.push('/')
}

const shareResult = async () => {
  const stats = statistics.value
  if (!stats) return
  
  const shareText = `我在SAP Learning Quiz中获得了${Math.round(stats.accuracy * 100)}%的正确率！完成了${stats.totalAnswered}/${stats.totalQuestions}题，答对${stats.correctAnswers}题。`
  
  try {
    if (navigator.share) {
      await navigator.share({
        title: 'SAP Learning Quiz 成绩',
        text: shareText,
        url: window.location.origin
      })
    } else {
      // 降级到复制到剪贴板
      await navigator.clipboard.writeText(shareText)
      ElMessage.success('成绩已复制到剪贴板')
    }
  } catch (error) {
    console.error('分享失败:', error)
    ElMessage.error('分享失败')
  }
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
.result-container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
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
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.share-section {
  padding-top: 15px;
  border-top: 1px solid var(--el-border-color-lighter);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .result-container {
    max-width: 100%;
    padding: 15px;
  }
}

@media (max-width: 768px) {
  .result-container {
    padding: 12px;
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
}

@media (max-width: 480px) {
  .result-container {
    padding: 10px;
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
}
</style>