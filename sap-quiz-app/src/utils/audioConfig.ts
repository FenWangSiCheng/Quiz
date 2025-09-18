/**
 * 音频配置工具
 * 通用可扩展的课程播客音频配置和管理系统
 */

// 音频单元配置接口
export interface AudioUnitConfig {
  title: string
  audioFile: string
  duration?: string
  description?: string
}

// 课程音频配置接口
export interface CourseAudioConfig {
  courseId: string
  courseName: string
  audioPath: string // 音频文件基础路径
  units: {
    [unitId: string]: AudioUnitConfig
  }
}

// 全局音频配置 - 支持多课程扩展
const audioConfigurations: CourseAudioConfig[] = [
  {
    courseId: 'sap-build-process-automation',
    courseName: 'SAP Build Process Automation',
    audioPath: '/media/sap-build-process-automation',
    units: {
      'unit-1': {
        title: 'Unit 1: 基础概念',
        audioFile: 'course-audio.m4a',
        description: 'SAP Build Process Automation 基础概念学习'
      },
      'unit-2': {
        title: 'Unit 2: 重用现有内容',
        audioFile: 'reusing-content.m4a',
        description: '学习如何重用现有的SAP Build Process Automation内容'
      },
      'unit-3': {
        title: 'Unit 3: 基础流程构建',
        audioFile: 'basic-process-building.m4a',
        description: '学习如何在SAP Build Process Automation中进行基础流程构建'
      },
      'unit-4': {
        title: 'Unit 4: 自动化概述',
        audioFile: 'automations-overview.m4a',
        description: '学习SAP Build Process Automation中的自动化概述'
      },
      'unit-5': {
        title: 'Unit 5: 高级流程构建特性',
        audioFile: 'advanced-process-features.m4a',
        description: '学习SAP Build Process Automation中的决策和操作集成'
      },
      'unit-6': {
        title: 'Unit 6: 使用API进行集成',
        audioFile: 'unit-6-content.m4a',
        description: '学习SAP Build Process Automation中使用API进行系统集成'
      }
    }
  }
  // 未来可以轻松添加其他课程:
  /*
  {
    courseId: 'exploring-sap-btp-btp100',
    courseName: 'Exploring SAP Business Technology Platform',
    audioPath: '/media/exploring-sap-btp-btp100',
    units: {
      'unit-1': {
        title: 'Unit 1: BTP Overview',
        audioFile: 'unit-1-overview.m4a'
      }
    }
  },
  {
    courseId: 'designing-sap-build-work-zone',
    courseName: 'Designing SAP Build Work Zone',
    audioPath: '/media/designing-sap-build-work-zone',
    units: {
      'unit-1': {
        title: 'Unit 1: Work Zone Basics',
        audioFile: 'unit-1-basics.m4a'
      }
    }
  }
  */
]

// 构建传统映射以保持向后兼容
export const noteAudioMap: Record<string, string> = audioConfigurations.reduce((map, course) => {
  Object.keys(course.units).forEach(unitId => {
    const unitConfig = course.units[unitId]
    const noteKey = `${course.courseId}/${unitId}`
    const audioPath = `${course.audioPath}/${unitConfig.audioFile}`
    map[noteKey] = audioPath
  })
  return map
}, {} as Record<string, string>)

/**
 * 获取课程音频配置
 * @param courseId 课程ID
 * @returns 课程音频配置对象，如果没有则返回undefined
 */
export function getCourseAudioConfig(courseId: string): CourseAudioConfig | undefined {
  return audioConfigurations.find(config => config.courseId === courseId)
}

/**
 * 获取音频单元配置
 * @param courseId 课程ID
 * @param unitId 单元ID
 * @returns 音频单元配置对象，如果没有则返回undefined
 */
export function getAudioUnitConfig(courseId: string, unitId: string): AudioUnitConfig | undefined {
  const courseConfig = getCourseAudioConfig(courseId)
  return courseConfig?.units[unitId]
}

/**
 * 检查指定笔记是否有音频内容
 * @param courseId 课程ID
 * @param noteId 笔记ID
 * @returns 是否有音频内容
 */
export function hasNoteAudio(courseId: string, noteId: string): boolean {
  const noteKey = `${courseId}/${noteId}`
  return noteKey in noteAudioMap
}

/**
 * 获取指定笔记的音频源路径
 * @param courseId 课程ID
 * @param noteId 笔记ID
 * @returns 音频源路径，如果没有则返回undefined
 */
export function getNoteAudioSrc(courseId: string, noteId: string): string | undefined {
  const noteKey = `${courseId}/${noteId}`
  return noteAudioMap[noteKey]
}

/**
 * 获取课程下所有有音频的笔记ID列表
 * @param courseId 课程ID
 * @returns 有音频的笔记ID数组
 */
export function getCourseAudioNotes(courseId: string): string[] {
  return Object.keys(noteAudioMap)
    .filter(key => key.startsWith(`${courseId}/`))
    .map(key => key.substring(courseId.length + 1))
}

/**
 * 获取所有有音频配置的课程列表
 * @returns 课程音频配置数组
 */
export function getAllAudioCourses(): CourseAudioConfig[] {
  return [...audioConfigurations]
}

/**
 * 获取音频元数据（用于Media Session API）
 * @param courseId 课程ID
 * @param unitId 单元ID
 * @returns 音频元数据对象
 */
export function getAudioMetadata(courseId: string, unitId: string): {
  title: string
  artist: string
  album: string
  description?: string
} | undefined {
  const courseConfig = getCourseAudioConfig(courseId)
  const unitConfig = getAudioUnitConfig(courseId, unitId)

  if (!courseConfig || !unitConfig) {
    return undefined
  }

  return {
    title: unitConfig.title,
    artist: 'SAP 学习播客',
    album: courseConfig.courseName,
    description: unitConfig.description
  }
}

/**
 * 验证音频路径是否有效（基础验证）
 * @param audioPath 音频文件路径
 * @returns 路径是否符合预期格式
 */
export function validateAudioPath(audioPath: string): boolean {
  return audioPath.startsWith('/media/') && (audioPath.endsWith('.m4a') || audioPath.endsWith('.mp3'))
}