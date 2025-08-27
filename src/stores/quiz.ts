import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { questions, shuffleArray, type Question } from '@/data/questions'

// 用户答案接口
export interface UserAnswer {
  questionId: number
  userAnswers: number[]
  isCorrect: boolean
  answeredAt: string
}

// 答题进度接口
export interface QuizProgress {
  isRandomOrder: boolean
  questionOrder: number[]
  currentQuestionIndex: number
  answers: UserAnswer[]
  completed: boolean
  startTime: string
}

export const useQuizStore = defineStore('quiz', () => {
  // 状态
  const currentProgress = ref<QuizProgress | null>(null)
  const showAnswer = ref(false)
  
  // Getters
  const currentQuestion = computed((): Question | null => {
    if (!currentProgress.value || currentProgress.value.questionOrder.length === 0) {
      return null
    }
    const questionIndex = currentProgress.value.questionOrder[currentProgress.value.currentQuestionIndex]
    return questions[questionIndex] || null
  })
  
  const totalQuestions = computed(() => {
    return currentProgress.value?.questionOrder.length || 0
  })
  
  const currentQuestionNumber = computed(() => {
    return (currentProgress.value?.currentQuestionIndex || 0) + 1
  })
  
  const hasAnswered = computed(() => {
    if (!currentProgress.value || !currentQuestion.value) return false
    return currentProgress.value.answers.some(a => a.questionId === currentQuestion.value!.id)
  })
  
  const currentAnswer = computed(() => {
    if (!currentProgress.value || !currentQuestion.value) return null
    return currentProgress.value.answers.find(a => a.questionId === currentQuestion.value!.id) || null
  })
  
  const isLastQuestion = computed(() => {
    if (!currentProgress.value) return false
    return currentProgress.value.currentQuestionIndex >= currentProgress.value.questionOrder.length - 1
  })
  
  const statistics = computed(() => {
    if (!currentProgress.value) return null
    
    const totalAnswered = currentProgress.value.answers.length
    const correctAnswers = currentProgress.value.answers.filter(a => a.isCorrect).length
    const accuracy = totalAnswered > 0 ? correctAnswers / totalAnswered : 0
    
    return {
      totalQuestions: totalQuestions.value,
      totalAnswered,
      correctAnswers,
      accuracy: Math.round(accuracy * 100) / 100,
      wrongAnswers: totalAnswered - correctAnswers
    }
  })
  
  // Actions
  const startQuiz = (randomOrder: boolean = false) => {
    const questionIndices = Array.from({ length: questions.length }, (_, i) => i)
    const questionOrder = randomOrder ? shuffleArray(questionIndices) : questionIndices
    
    currentProgress.value = {
      isRandomOrder: randomOrder,
      questionOrder,
      currentQuestionIndex: 0,
      answers: [],
      completed: false,
      startTime: new Date().toISOString()
    }
    
    showAnswer.value = false
    saveProgress()
  }
  
  const answerQuestion = (selectedAnswers: number[]) => {
    if (!currentProgress.value || !currentQuestion.value) return
    
    const question = currentQuestion.value
    const isCorrect = arraysEqual(selectedAnswers.sort(), question.correctAnswers.sort())
    
    const answer: UserAnswer = {
      questionId: question.id,
      userAnswers: selectedAnswers,
      isCorrect,
      answeredAt: new Date().toISOString()
    }
    
    // 更新或添加答案
    const existingIndex = currentProgress.value.answers.findIndex(a => a.questionId === question.id)
    if (existingIndex >= 0) {
      currentProgress.value.answers[existingIndex] = answer
    } else {
      currentProgress.value.answers.push(answer)
    }
    
    showAnswer.value = true
    saveProgress()
  }
  
  const nextQuestion = () => {
    if (!currentProgress.value || isLastQuestion.value) return
    
    currentProgress.value.currentQuestionIndex++
    showAnswer.value = false
    saveProgress()
  }
  
  const previousQuestion = () => {
    if (!currentProgress.value || currentProgress.value.currentQuestionIndex <= 0) return
    
    currentProgress.value.currentQuestionIndex--
    showAnswer.value = hasAnswered.value
    saveProgress()
  }
  
  const goToQuestion = (index: number) => {
    if (!currentProgress.value || index < 0 || index >= currentProgress.value.questionOrder.length) return
    
    currentProgress.value.currentQuestionIndex = index
    showAnswer.value = hasAnswered.value
    saveProgress()
  }
  
  const completeQuiz = () => {
    if (!currentProgress.value) return
    
    currentProgress.value.completed = true
    saveProgress()
  }
  
  const resetQuiz = () => {
    currentProgress.value = null
    showAnswer.value = false
    localStorage.removeItem('sap-quiz-progress')
  }
  
  const saveProgress = () => {
    if (!currentProgress.value) return
    localStorage.setItem('sap-quiz-progress', JSON.stringify(currentProgress.value))
  }
  
  const loadProgress = (): boolean => {
    try {
      const saved = localStorage.getItem('sap-quiz-progress')
      if (!saved) return false
      
      const progress = JSON.parse(saved) as QuizProgress
      
      // 验证数据完整性
      if (progress.questionOrder && progress.questionOrder.length > 0) {
        currentProgress.value = progress
        showAnswer.value = hasAnswered.value
        return true
      }
    } catch (error) {
      console.error('加载进度失败:', error)
    }
    
    return false
  }
  
  // 工具函数
  const arraysEqual = (a: number[], b: number[]): boolean => {
    if (a.length !== b.length) return false
    return a.every((val, index) => val === b[index])
  }
  
  return {
    // 状态
    currentProgress,
    showAnswer,
    
    // Getters
    currentQuestion,
    totalQuestions,
    currentQuestionNumber,
    hasAnswered,
    currentAnswer,
    isLastQuestion,
    statistics,
    
    // Actions
    startQuiz,
    answerQuestion,
    nextQuestion,
    previousQuestion,
    goToQuestion,
    completeQuiz,
    resetQuiz,
    saveProgress,
    loadProgress
  }
})