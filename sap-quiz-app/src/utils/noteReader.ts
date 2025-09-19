// 笔记文件读取工具
export interface NoteFile {
  id: string
  title: string
  filePath: string
  unit?: string
}

// 课程到目录的映射
const COURSE_DIR_MAP: Record<string, string> = {
  'sap-build-process-automation': 'SAP Build Process Automation',
  'exploring-sap-business-technology-platform-btp100': 'Exploring SAP Business Technology Platform (BTP100)',
  'designing-sap-build-work-zone': 'Designing SAP Build Work Zone',
  'develop-and-automate-with-sap-build-btp110': 'Develop and automate with SAP Build (BTP110)',
  'developing-apps-with-sap-build-apps': 'Developing Apps with SAP Build Apps',
  'sap-c-lcnc-2406': 'SAP-C_LCNC_2406'
}

// 笔记ID到文件名的映射
const NOTE_FILE_MAP: Record<string, Record<string, NoteFile>> = {
  'sap-build-process-automation': {
    'unit-1': {
      id: 'unit-1',
      title: 'Explaining SAP Build Process Automation',
      filePath: 'Unit 1 学习笔记.md',
      unit: 'Unit 1'
    },
    'unit-2': {
      id: 'unit-2',
      title: 'Reusing Existing SAP Build Process Automation Content',
      filePath: 'Unit 2 学习笔记.md',
      unit: 'Unit 2'
    },
    'unit-3': {
      id: 'unit-3',
      title: 'Performing Basic Process Building in SAP Build Process Automation',
      filePath: 'Unit 3 学习笔记.md',
      unit: 'Unit 3'
    },
    'unit-4': {
      id: 'unit-4',
      title: 'Explaining Automations in an Overview',
      filePath: 'Unit 4 学习笔记.md',
      unit: 'Unit 4'
    },
    'unit-5': {
      id: 'unit-5',
      title: 'Using Features of Advanced Process Building in SAP Build Process Automation',
      filePath: 'Unit 5 学习笔记.md',
      unit: 'Unit 5'
    },
    'unit-6': {
      id: 'unit-6',
      title: 'Using APIs for Integration in SAP Build Process Automation',
      filePath: 'Unit 6 学习笔记.md',
      unit: 'Unit 6'
    }
  },
  'exploring-sap-business-technology-platform-btp100': {
    'unit-1': {
      id: 'unit-1',
      title: 'Unit 1: Exploring SAP Business Technology Platform',
      filePath: 'Unit 1 学习笔记.md',
      unit: 'Unit 1'
    },
    'unit-2': {
      id: 'unit-2',
      title: 'Unit 2: Deep Dive into SAP Business Technology Platform',
      filePath: 'Unit 2 学习笔记.md',
      unit: 'Unit 2'
    },
    'unit-3': {
      id: 'unit-3',
      title: 'Unit 3: Application Development and Automation in SAP BTP',
      filePath: 'Unit 3 学习笔记.md',
      unit: 'Unit 3'
    },
    'unit-4': {
      id: 'unit-4',
      title: 'Unit 4: Integration and APIs in SAP BTP',
      filePath: 'Unit 4 学习笔记.md',
      unit: 'Unit 4'
    },
    'unit-5': {
      id: 'unit-5',
      title: 'Unit 5: Data and Analytics in SAP BTP',
      filePath: 'Unit 5 学习笔记.md',
      unit: 'Unit 5'
    },
    'unit-6': {
      id: 'unit-6',
      title: 'Unit 6: Artificial Intelligence in SAP BTP',
      filePath: 'Unit 6 学习笔记.md',
      unit: 'Unit 6'
    },
    'unit-7': {
      id: 'unit-7',
      title: 'Unit 7: Security and Identity Management in SAP BTP',
      filePath: 'Unit 7 学习笔记.md',
      unit: 'Unit 7'
    },
    'unit-8': {
      id: 'unit-8',
      title: 'Unit 8: Sustainability in SAP BTP',
      filePath: 'Unit 8 学习笔记.md',
      unit: 'Unit 8'
    }
  },
  'develop-and-automate-with-sap-build-btp110': {
    'unit-1': {
      id: 'unit-1',
      title: 'Develop and automate with SAP Build - Unit 1',
      filePath: 'Unit 1 学习笔记.md',
      unit: 'Unit 1'
    },
    'unit-2': {
      id: 'unit-2',
      title: 'Develop and automate with SAP Build - Unit 2',
      filePath: 'Unit 2 学习笔记.md',
      unit: 'Unit 2'
    },
    'unit-3': {
      id: 'unit-3',
      title: 'Develop and automate with SAP Build - Unit 3',
      filePath: 'Unit 3 学习笔记.md',
      unit: 'Unit 3'
    },
    'unit-4': {
      id: 'unit-4',
      title: 'Develop and automate with SAP Build - Unit 4',
      filePath: 'Unit 4 学习笔记.md',
      unit: 'Unit 4'
    }
  },
  'developing-apps-with-sap-build-apps': {
    'unit-1': {
      id: 'unit-1',
      title: 'SAP Build Apps - Unit 1',
      filePath: 'Unit 1 学习笔记.md',
      unit: 'Unit 1'
    },
    'unit-2': {
      id: 'unit-2',
      title: 'SAP Build Apps - Unit 2',
      filePath: 'Unit 2 学习笔记.md',
      unit: 'Unit 2'
    },
    'unit-3': {
      id: 'unit-3',
      title: 'SAP Build Apps - Unit 3',
      filePath: 'Unit 3 学习笔记.md',
      unit: 'Unit 3'
    },
    'unit-4': {
      id: 'unit-4',
      title: 'SAP Build Apps - Unit 4',
      filePath: 'Unit 4 学习笔记.md',
      unit: 'Unit 4'
    },
    'unit-5': {
      id: 'unit-5',
      title: 'SAP Build Apps - Unit 5',
      filePath: 'Unit 5 学习笔记.md',
      unit: 'Unit 5'
    }
  },
  'designing-sap-build-work-zone': {
    'unit-1': {
      id: 'unit-1',
      title: 'Designing SAP Build Work Zone — Unit 1',
      filePath: 'Unit 1 学习笔记.md',
      unit: 'Unit 1'
    }
  },
  'sap-c-lcnc-2406': {
    'certification': {
      id: 'certification',
      title: 'SAP-C_LCNC_2406 认证问题',
      filePath: 'SAP-C_LCNC_2406-Certification-Questions.md',
      unit: 'Certification'
    }
  }
}

/**
 * 根据课程ID和笔记ID获取笔记信息
 */
export function getNoteInfo(courseId: string, noteId: string): NoteFile | null {
  const courseNotes = NOTE_FILE_MAP[courseId]
  if (!courseNotes) return null

  return courseNotes[noteId] || null
}

/**
 * 获取完整的文件路径
 */
export function getFullFilePath(courseId: string, noteId: string): string | null {
  const courseDir = COURSE_DIR_MAP[courseId]
  const noteFile = getNoteInfo(courseId, noteId)

  if (!courseDir || !noteFile) return null

  return `/Users/wangsicheng/Desktop/个人开发项目/SAP_Learning/study-notes/${courseDir}/${noteFile.filePath}`
}

/**
 * 读取笔记文件内容
 */
export async function readNoteContent(courseId: string, noteId: string): Promise<string> {
  const courseDir = COURSE_DIR_MAP[courseId]
  const noteFile = getNoteInfo(courseId, noteId)

  if (!courseDir || !noteFile) {
    throw new Error(`找不到课程 ${courseId} 的笔记 ${noteId}`)
  }

  // 构建从public目录的相对路径
  const publicPath = `/study-notes/${courseDir}/${noteFile.filePath}`

  try {
    const response = await fetch(publicPath)

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }

    const content = await response.text()
    return content
  } catch (error) {
    throw new Error(`读取文件失败: ${(error as Error).message}`)
  }
}

/**
 * 获取课程的所有笔记列表
 */
export function getCourseNotes(courseId: string): NoteFile[] {
  const courseNotes = NOTE_FILE_MAP[courseId]
  if (!courseNotes) return []

  return Object.values(courseNotes)
}
