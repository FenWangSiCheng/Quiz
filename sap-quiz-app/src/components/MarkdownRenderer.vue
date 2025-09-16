<template>
  <div class="markdown-renderer" v-html="renderedContent"></div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { marked } from 'marked'

interface Props {
  content: string
}

const props = defineProps<Props>()

// 配置marked选项
marked.setOptions({
  breaks: true,
  gfm: true,
})

// 自定义渲染器
const renderer = new marked.Renderer()

// 自定义链接渲染，确保外部链接在新窗口打开
// eslint-disable-next-line @typescript-eslint/no-explicit-any
renderer.link = (token: any) => {
  const { href, title, tokens } = token
  const text = tokens?.[0]?.raw || href
  const isExternal = href && (typeof href === 'string') && (href.startsWith('http') || href.startsWith('https'))
  const target = isExternal ? 'target="_blank" rel="noopener noreferrer"' : ''
  const titleAttr = title ? `title="${title}"` : ''
  return `<a href="${href}" ${target} ${titleAttr}>${text}</a>`
}

// 自定义标题渲染，添加锚点 ID
// eslint-disable-next-line @typescript-eslint/no-explicit-any
renderer.heading = (token: any) => {
  const { text, depth } = token
  // 生成锚点 ID：移除特殊字符，保留中英文和数字
  const id = text.replace(/[^\w\u4e00-\u9fa5]/g, '-').toLowerCase()
  return `<h${depth} id="${id}" class="markdown-heading">${text}</h${depth}>`
}

// 自定义代码块渲染
// eslint-disable-next-line @typescript-eslint/no-explicit-any
renderer.code = (token: any) => {
  const { text, lang } = token
  const validLanguage = lang && lang !== '' ? lang : 'text'
  return `<pre class="code-block"><code class="language-${validLanguage}">${text}</code></pre>`
}

// 自定义表格渲染
// eslint-disable-next-line @typescript-eslint/no-explicit-any
renderer.table = (token: any) => {
  const { header, rows } = token
  return `<div class="table-wrapper"><table class="markdown-table">
    <thead>${header}</thead>
    <tbody>${rows}</tbody>
  </table></div>`
}

marked.use({ renderer })

const renderedContent = computed(() => {
  if (!props.content) return ''
  try {
    return marked.parse(props.content)
  } catch (error) {
    console.error('Markdown parsing error:', error)
    return '<p>内容解析错误</p>'
  }
})
</script>

<style scoped>
.markdown-renderer {
  line-height: 1.8;
  color: #374151;
  font-size: 1rem;
}

/* 全局样式 - 由于v-html的内容无法使用scoped样式，这些样式将是全局的 */
</style>

<style>
/* Markdown内容样式 */
.markdown-renderer h1,
.markdown-renderer .markdown-heading {
  scroll-margin-top: 100px;
}

.markdown-renderer h1 {
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin: 2rem 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e2e8f0;
}

.markdown-renderer h2 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #1e293b;
  margin: 1.75rem 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.markdown-renderer h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin: 1.5rem 0 0.75rem 0;
}

.markdown-renderer h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #374151;
  margin: 1.25rem 0 0.75rem 0;
}

.markdown-renderer h5 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #374151;
  margin: 1rem 0 0.5rem 0;
}

.markdown-renderer h6 {
  font-size: 1rem;
  font-weight: 600;
  color: #4b5563;
  margin: 1rem 0 0.5rem 0;
}

.markdown-renderer p {
  margin: 1rem 0;
  line-height: 1.8;
}

.markdown-renderer ul, .markdown-renderer ol {
  margin: 1rem 0;
  padding-left: 2rem;
}

.markdown-renderer li {
  margin: 0.5rem 0;
  line-height: 1.6;
}

.markdown-renderer blockquote {
  margin: 1.5rem 0;
  padding: 1rem 1.5rem;
  background: #f8fafc;
  border-left: 4px solid #3b82f6;
  border-radius: 0 6px 6px 0;
  color: #4b5563;
  font-style: italic;
}

.markdown-renderer blockquote p {
  margin: 0;
}

.markdown-renderer code {
  background: #f1f5f9;
  color: #be185d;
  padding: 0.125rem 0.375rem;
  border-radius: 4px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.875rem;
}

.markdown-renderer .code-block {
  background: #1e293b;
  color: #e2e8f0;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  overflow-x: auto;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
}

.markdown-renderer .code-block code {
  background: transparent;
  color: inherit;
  padding: 0;
  border-radius: 0;
}

.markdown-renderer .table-wrapper {
  overflow-x: auto;
  margin: 1.5rem 0;
}

.markdown-renderer .markdown-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  overflow: hidden;
}

.markdown-renderer .markdown-table th {
  background: #f8fafc;
  color: #374151;
  font-weight: 600;
  padding: 0.75rem 1rem;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}

.markdown-renderer .markdown-table td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #f1f5f9;
}

.markdown-renderer .markdown-table tr:last-child td {
  border-bottom: none;
}

.markdown-renderer .markdown-table tr:nth-child(even) {
  background: #f9fafb;
}

.markdown-renderer a {
  color: #3b82f6;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: all 0.2s ease;
}

.markdown-renderer a:hover {
  color: #2563eb;
  border-bottom-color: #2563eb;
}

.markdown-renderer img {
  max-width: 100%;
  height: auto;
  border-radius: 6px;
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.markdown-renderer hr {
  border: none;
  border-top: 1px solid #e2e8f0;
  margin: 2rem 0;
}

.markdown-renderer strong {
  font-weight: 600;
  color: #1e293b;
}

.markdown-renderer em {
  font-style: italic;
  color: #4b5563;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .markdown-renderer {
    font-size: 0.9rem;
  }

  .markdown-renderer h1 {
    font-size: 1.75rem;
  }

  .markdown-renderer h2 {
    font-size: 1.5rem;
  }

  .markdown-renderer h3 {
    font-size: 1.25rem;
  }

  .markdown-renderer .code-block {
    padding: 1rem;
    font-size: 0.8rem;
  }

  .markdown-renderer .markdown-table th,
  .markdown-renderer .markdown-table td {
    padding: 0.5rem;
    font-size: 0.875rem;
  }
}
</style>