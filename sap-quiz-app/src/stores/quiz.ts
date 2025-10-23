import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { questions, shuffleArray, type Question } from '@/data/questions'
import { getQuestionsByBankIds, getAllQuestionBanks } from '@/data/questionBankManager'

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
  selectedBankIds: string[]  // 新增：所选题库ID列表
  quizMode: 'all' | 'selected' // 新增：测试模式
}

// 历史记录接口
export interface QuizHistoryItem {
  id: string                      // 唯一ID (时间戳)
  quizMode: 'all' | 'selected'
  selectedBankIds: string[]
  bankNames: string[]             // 题库名称（便于展示）

  startTime: string               // 开始时间
  endTime: string | null          // 完成时间（未完成为null）
  completed: boolean              // 是否完成

  totalQuestions: number          // 总题数
  answeredQuestions: number       // 已答题数
  correctAnswers: number          // 答对题数
  accuracy: number                // 正确率 (0-1)
  timeSpent: number               // 用时（秒）

  answers: UserAnswer[]           // 完整答题记录
  isRandomOrder: boolean          // 是否随机顺序
}

export const useQuizStore = defineStore('quiz', () => {
  // 状态
  const currentProgress = ref<QuizProgress | null>(null)
  const showAnswer = ref(false)
  const selectedQuestions = ref<Question[]>([]) // 新增：当前选中的题目列表
  const historyRefreshTrigger = ref(0) // 历史记录刷新触发器
  
  // Getters
  const currentQuestion = computed((): Question | null => {
    if (!currentProgress.value || currentProgress.value.questionOrder.length === 0) {
      return null
    }
    const questionIndex = currentProgress.value.questionOrder[currentProgress.value.currentQuestionIndex]
    // 根据测试模式选择题目源
    const questionSource = currentProgress.value.quizMode === 'selected' ? selectedQuestions.value : questions
    return questionSource[questionIndex] || null
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
    // 开始新测试前，保存当前进度到历史（仅保存未完成的测试）
    if (currentProgress.value && !currentProgress.value.completed) {
      saveToHistory()
    }

    const questionIndices = Array.from({ length: questions.length }, (_, i) => i)
    const questionOrder = randomOrder ? shuffleArray(questionIndices) : questionIndices

    currentProgress.value = {
      isRandomOrder: randomOrder,
      questionOrder,
      currentQuestionIndex: 0,
      answers: [],
      completed: false,
      startTime: new Date().toISOString(),
      selectedBankIds: [], // 全部题库模式
      quizMode: 'all'
    }

    selectedQuestions.value = questions // 使用全部题目
    showAnswer.value = false
    saveProgress()
  }
  
  // 新增：支持选择题库的测试开始函数
  const startQuizWithBanks = (bankIds: string[], randomOrder: boolean = false) => {
    // 开始新测试前，保存当前进度到历史（仅保存未完成的测试）
    if (currentProgress.value && !currentProgress.value.completed) {
      saveToHistory()
    }

    // 1. 根据 bankIds 获取对应的题目列表
    const bankQuestions = getQuestionsByBankIds(bankIds)

    if (bankQuestions.length === 0) {
      console.warn('没有找到任何题目，请检查题库ID')
      return
    }

    // 2. 创建题目索引数组
    const questionIndices = Array.from({ length: bankQuestions.length }, (_, i) => i)

    // 3. 根据 randomOrder 决定是否打乱顺序
    const questionOrder = randomOrder ? shuffleArray(questionIndices) : questionIndices

    // 4. 设置 currentProgress 包含选中的题库信息
    currentProgress.value = {
      isRandomOrder: randomOrder,
      questionOrder,
      currentQuestionIndex: 0,
      answers: [],
      completed: false,
      startTime: new Date().toISOString(),
      selectedBankIds: [...bankIds], // 保存选中的题库ID
      quizMode: 'selected'
    }

    // 5. 更新 selectedQuestions
    selectedQuestions.value = bankQuestions

    // 6. 保存进度
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
    // 完成测试时保存到历史
    saveToHistory()
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
        
        // 根据测试模式恢复题目数据
        if (progress.quizMode === 'selected' && progress.selectedBankIds) {
          selectedQuestions.value = getQuestionsByBankIds(progress.selectedBankIds)
        } else {
          selectedQuestions.value = questions
        }
        
        showAnswer.value = hasAnswered.value
        return true
      }
    } catch (error) {
      console.error('加载进度失败:', error)
    }
    
    return false
  }
  
  // 历史记录管理
  const HISTORY_STORAGE_KEY = 'sap-quiz-history'
  const MAX_HISTORY_COUNT = 500

  // 将当前进度保存到历史记录
  const saveToHistory = () => {
    if (!currentProgress.value) return

    const now = new Date().toISOString()
    const startTime = new Date(currentProgress.value.startTime)
    const timeSpent = Math.floor((new Date(now).getTime() - startTime.getTime()) / 1000)

    // 获取题库名称
    const bankNames = currentProgress.value.quizMode === 'all'
      ? ['全部题库']
      : currentProgress.value.selectedBankIds.map(id => {
          const bank = getAllQuestionBanks().find(b => b.id === id)
          return bank?.name || id
        })

    const historyItem: QuizHistoryItem = {
      id: currentProgress.value.startTime, // 使用开始时间作为唯一ID
      quizMode: currentProgress.value.quizMode,
      selectedBankIds: currentProgress.value.selectedBankIds,
      bankNames,
      startTime: currentProgress.value.startTime,
      endTime: currentProgress.value.completed ? now : null,
      completed: currentProgress.value.completed,
      totalQuestions: currentProgress.value.questionOrder.length,
      answeredQuestions: currentProgress.value.answers.length,
      correctAnswers: currentProgress.value.answers.filter(a => a.isCorrect).length,
      accuracy: currentProgress.value.answers.length > 0
        ? currentProgress.value.answers.filter(a => a.isCorrect).length / currentProgress.value.answers.length
        : 0,
      timeSpent,
      answers: currentProgress.value.answers,
      isRandomOrder: currentProgress.value.isRandomOrder
    }

    // 获取现有历史记录
    const history = getHistory()

    // 检查是否已存在相同ID的记录，如果存在则更新，否则添加
    const existingIndex = history.findIndex(h => h.id === historyItem.id)
    if (existingIndex >= 0) {
      history[existingIndex] = historyItem
    } else {
      history.unshift(historyItem) // 添加到开头
    }

    // 限制历史记录数量为500条
    if (history.length > MAX_HISTORY_COUNT) {
      history.splice(MAX_HISTORY_COUNT)
    }

    // 保存到 localStorage
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(history))
  }

  // 获取所有历史记录
  const getHistory = (): QuizHistoryItem[] => {
    try {
      const saved = localStorage.getItem(HISTORY_STORAGE_KEY)
      if (!saved) return []
      return JSON.parse(saved) as QuizHistoryItem[]
    } catch (error) {
      console.error('加载历史记录失败:', error)
      return []
    }
  }

  // 根据ID获取历史记录
  const getHistoryById = (id: string): QuizHistoryItem | null => {
    const history = getHistory()
    return history.find(h => h.id === id) || null
  }

  // 删除指定历史记录
  const deleteHistory = (id: string) => {
    const history = getHistory()
    const filtered = history.filter(h => h.id !== id)
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(filtered))
    // 触发刷新
    historyRefreshTrigger.value++
  }

  // 清空所有历史记录
  const clearAllHistory = () => {
    localStorage.removeItem(HISTORY_STORAGE_KEY)
    // 触发刷新
    historyRefreshTrigger.value++
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
    selectedQuestions,
    historyRefreshTrigger,

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
    startQuizWithBanks,
    answerQuestion,
    nextQuestion,
    previousQuestion,
    goToQuestion,
    completeQuiz,
    resetQuiz,
    saveProgress,
    loadProgress,

    // 历史记录
    saveToHistory,
    getHistory,
    getHistoryById,
    deleteHistory,
    clearAllHistory
  }
})