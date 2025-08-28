// 题库模块索引文件
// 便于导入和管理各个SAP Build组件的题库

export { processAutomationQuestions } from './processAutomation'
export { workZoneQuestions } from './workZone'
export { buildAppsQuestions } from './buildApps'
export { certificationQuestions } from './certification'

// 题库元数据信息
export const questionBankMetadata = {
  processAutomation: {
    name: 'SAP Build Process Automation',
    description: 'SAP流程自动化相关题目',
    count: 21,
    difficulty: 'medium',
    hasExplanations: true
  },
  workZone: {
    name: 'Designing SAP Build Work Zone', 
    description: 'SAP工作区设计相关题目',
    count: 10,
    difficulty: 'medium',
    hasExplanations: true
  },
  buildApps: {
    name: 'Developing Apps with SAP Build Apps',
    description: 'SAP Build Apps应用开发相关题目',
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
  }
} as const