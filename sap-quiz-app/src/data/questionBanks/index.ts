// 题库模块索引文件
// 便于导入和管理各个SAP Build组件的题库

export { processAutomationQuestions } from './processAutomation'
export { workZoneQuestions } from './workZone'
export { buildAppsQuestions } from './buildApps'
export { certificationQuestions } from './certification'
export { developAutomateQuestions } from './developAutomate'
export { exploringBTPQuestions } from './exploringBTP'

// 题库元数据信息
export const questionBankMetadata = {
  processAutomation: {
    name: 'SAP Build Process Automation',
    description: '官方学习网站的 Quiz',
    count: 31,
    difficulty: 'medium',
    hasExplanations: true
  },
  workZone: {
    name: 'Designing SAP Build Work Zone', 
    description: '官方学习网站的 Quiz',
    count: 10,
    difficulty: 'medium',
    hasExplanations: true
  },
  buildApps: {
    name: 'Developing Apps with SAP Build Apps',
    description: '官方学习网站的 Quiz',
    count: 20,
    difficulty: 'medium',
    hasExplanations: true
  },
  certification: {
    name: 'SAP C_LCNC_2406 认证题库',
    description: '官方认证考试题目',
    count: 60,
    difficulty: 'hard',
    hasExplanations: false
  },
  developAutomate: {
    name: 'Develop and automate with SAP Build (BTP110)',
    description: '官方学习网站的 Quiz',
    count: 26,
    difficulty: 'medium',
    hasExplanations: true
  },
  exploringBTP: {
    name: 'Exploring SAP Business Technology Platform (BTP100)',
    description: '官方学习网站的 Quiz',
    count: 50,
    difficulty: 'medium',
    hasExplanations: true
  }
} as const