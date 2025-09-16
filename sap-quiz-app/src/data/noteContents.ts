// 笔记内容数据模块
// 现在使用动态文件加载，这个模块作为备用和向后兼容

import { readNoteContent } from '@/utils/noteReader'

/**
 * 获取笔记内容 (已迁移到动态文件加载)
 * @deprecated 使用 readNoteContent 直接从文件加载
 */
export function getNoteContent(courseId: string, noteId: string): Promise<string> {
  return readNoteContent(courseId, noteId)
}