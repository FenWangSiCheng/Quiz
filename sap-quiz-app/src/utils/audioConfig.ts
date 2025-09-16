/**
 * 音频配置工具
 * 管理课程笔记的播客音频映射和检查功能
 */

// 笔记音频映射 - 根据课程和笔记ID映射音频文件
export const noteAudioMap: Record<string, string> = {
  'sap-build-process-automation/unit-1': '/media/sap-build-process-automation/course-audio.mp4'
  // 未来可以添加更多音频映射:
  // 'sap-build-process-automation/unit-2': '/media/sap-build-process-automation/unit-2-audio.mp4',
  // 'exploring-sap-btp-btp100/unit-1': '/media/exploring-sap-btp-btp100/unit-1-audio.mp4',
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