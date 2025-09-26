// 题库管理器 - 基于现有题库数据构建选择功能
import type { Question } from './questions'
import {
  processAutomationQuestions,
  workZoneQuestions,
  buildAppsQuestions,
  certificationQuestions,
  developAutomateQuestions,
  exploringBTPQuestions,
  questionBankMetadata
} from './questionBanks/index'

// 扩展题库接口，添加UI需要的字段
export interface QuestionBank {
  id: string
  name: string
  description: string
  icon: string
  color: string
  count: number
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  category: 'learning' | 'certification' | 'practice'
  hasExplanations: boolean
}

// 转换现有元数据为扩展格式
const convertMetadataToBank = (key: string, metadata: typeof questionBankMetadata[keyof typeof questionBankMetadata]): QuestionBank => {
  const iconMap: Record<string, string> = {
    'processAutomation': '🔄',
    'workZone': '🏢',
    'buildApps': '📱',
    'certification': '🏆'
  }

  const colorMap: Record<string, string> = {
    'processAutomation': '#06b6d4',
    'workZone': '#8b5cf6',
    'buildApps': '#10b981',
    'certification': '#f59e0b'
  }

  const difficultyMap: Record<string, QuestionBank['difficulty']> = {
    'easy': 'beginner',
    'medium': 'intermediate',
    'hard': 'advanced'
  }

  return {
    id: key,
    name: metadata.name,
    description: metadata.description,
    icon: iconMap[key] || '📝',
    color: colorMap[key] || '#3b82f6',
    count: metadata.count,
    difficulty: difficultyMap[metadata.difficulty] || 'intermediate',
    category: key === 'certification' ? 'certification' : 'learning',
    hasExplanations: metadata.hasExplanations
  }
}

// 获取所有题库的信息
export const getAllQuestionBanks = (): QuestionBank[] => {
  return Object.entries(questionBankMetadata).map(([key, metadata]) => 
    convertMetadataToBank(key, metadata)
  )
}

// 根据类别获取题库
export const getQuestionBanksByCategory = (category: QuestionBank['category']): QuestionBank[] => {
  return getAllQuestionBanks().filter(bank => bank.category === category)
}

// 根据难度获取题库
export const getQuestionBanksByDifficulty = (difficulty: QuestionBank['difficulty']): QuestionBank[] => {
  return getAllQuestionBanks().filter(bank => bank.difficulty === difficulty)
}

// 根据题库ID获取题目
export const getQuestionsByBankId = (bankId: string): Question[] => {
  switch (bankId) {
    case 'processAutomation':
      return processAutomationQuestions
    case 'workZone':
      return workZoneQuestions
    case 'buildApps':
      return buildAppsQuestions
    case 'certification':
      return certificationQuestions
    case 'developAutomate':
      return developAutomateQuestions
    case 'exploringBTP':
      return exploringBTPQuestions
    default:
      return []
  }
}

// 根据多个题库ID获取题目
export const getQuestionsByBankIds = (bankIds: string[]): Question[] => {
  const allQuestions: Question[] = []
  bankIds.forEach(bankId => {
    allQuestions.push(...getQuestionsByBankId(bankId))
  })
  return allQuestions
}

// 题库统计信息
export const getQuestionBankStatistics = () => {
  const banks = getAllQuestionBanks()
  const totalQuestions = banks.reduce((sum, bank) => sum + bank.count, 0)
  
  const categoryCounts = banks.reduce((acc, bank) => {
    acc[bank.category] = (acc[bank.category] || 0) + bank.count
    return acc
  }, {} as Record<string, number>)
  
  const difficultyCounts = banks.reduce((acc, bank) => {
    acc[bank.difficulty] = (acc[bank.difficulty] || 0) + bank.count
    return acc
  }, {} as Record<string, number>)
  
  return {
    totalBanks: banks.length,
    totalQuestions,
    categoryCounts,
    difficultyCounts,
    banks
  }
}