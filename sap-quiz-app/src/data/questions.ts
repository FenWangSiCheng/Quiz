// SAP Quiz 题库数据 - 模块化结构
export interface Question {
  id: number
  type: 'true_false' | 'single_choice' | 'multiple_choice'
  question: string
  options: string[]
  correctAnswers: number[]
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

// 导入所有题库模块
import {
  processAutomationQuestions,
  workZoneQuestions,
  buildAppsQuestions,
  certificationQuestions,
  questionBankMetadata
} from './questionBanks/index'

// 合并所有题库
export const questions: Question[] = [
  ...processAutomationQuestions,
  ...workZoneQuestions,
  ...buildAppsQuestions,
  ...certificationQuestions
]

// 导出题库元数据
export { questionBankMetadata }

// 根据题库类型获取题目
export const getQuestionsByBank = (bankType: keyof typeof questionBankMetadata): Question[] => {
  switch (bankType) {
    case 'processAutomation':
      return processAutomationQuestions
    case 'workZone':
      return workZoneQuestions
    case 'buildApps':
      return buildAppsQuestions
    case 'certification':
      return certificationQuestions
    default:
      return []
  }
}

// 根据难度获取题目
export const getQuestionsByDifficulty = (difficulty: Question['difficulty']): Question[] => {
  return questions.filter(question => question.difficulty === difficulty)
}

// 获取有解析的题目
export const getQuestionsWithExplanations = (): Question[] => {
  return questions.filter(question => question.explanation && question.explanation.length > 0)
}

// 获取无解析的题目（认证考试模拟）
export const getQuestionsWithoutExplanations = (): Question[] => {
  return questions.filter(question => !question.explanation || question.explanation.length === 0)
}

// 工具函数：打乱数组顺序
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// 工具函数：根据ID获取题目
export function getQuestionById(id: number): Question | undefined {
  return questions.find(q => q.id === id)
}

// 题库统计信息
export const getQuestionBankStats = () => {
  const stats = {
    total: questions.length,
    byBank: {} as Record<string, number>,
    byDifficulty: {} as Record<string, number>,
    withExplanations: getQuestionsWithExplanations().length,
    withoutExplanations: getQuestionsWithoutExplanations().length
  }

  // 按题库统计
  Object.entries(questionBankMetadata).forEach(([, meta]) => {
    stats.byBank[meta.name] = meta.count
  })

  // 按难度统计
  stats.byDifficulty.easy = getQuestionsByDifficulty('easy').length
  stats.byDifficulty.medium = getQuestionsByDifficulty('medium').length
  stats.byDifficulty.hard = getQuestionsByDifficulty('hard').length

  return stats
}