<template>
  <div class="history-layout">
    <header class="history-header">
      <div class="header-content">
        <div class="title-section">
          <el-button @click="goBack" text>
            <el-icon><ArrowLeft /></el-icon>
          </el-button>
          <h1 class="main-title">测试历史</h1>
        </div>
        <div class="header-actions">
          <el-button v-if="history.length > 0" @click="showClearConfirm" type="danger" text>
            清空历史
          </el-button>
        </div>
      </div>
    </header>

    <main class="history-content">
      <!-- 历史记录列表 -->
      <section class="history-list">
        <div v-if="history.length === 0" class="empty-state">
          <div class="empty-icon">📊</div>
          <h3>暂无测试历史</h3>
          <p>完成测试后会自动保存记录</p>
          <el-button type="primary" @click="goHome">开始测试</el-button>
        </div>

        <div v-else class="history-cards">
          <div
            v-for="item in history"
            :key="item.id"
            class="history-card"
            :class="{ 'incomplete': !item.completed }"
          >
            <div class="card-header">
              <div class="status-badge" :class="item.completed ? 'completed' : 'incomplete'">
                {{ item.completed ? '✅ 已完成' : '⏸️ 进行中' }}
              </div>
              <el-dropdown trigger="click">
                <el-button text>
                  <el-icon><MoreFilled /></el-icon>
                </el-button>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item @click="viewDetail(item.id)">查看详情</el-dropdown-item>
                    <el-dropdown-item @click="confirmDelete(item.id)" divided>删除记录</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>

            <div class="card-body">
              <h3 class="bank-names">
                {{ item.bankNames.join(' + ') }}
              </h3>

              <div class="stats-grid">
                <div class="stat-item">
                  <span class="stat-label">得分</span>
                  <span class="stat-value">{{ item.correctAnswers }}/{{ item.totalQuestions }}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">正确率</span>
                  <span class="stat-value accuracy" :class="getAccuracyClass(item.accuracy)">
                    {{ Math.round(item.accuracy * 100) }}%
                  </span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">已答题数</span>
                  <span class="stat-value">{{ item.answeredQuestions }}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">用时</span>
                  <span class="stat-value">{{ formatTime(item.timeSpent) }}</span>
                </div>
              </div>

              <div class="card-meta">
                <span class="meta-item">
                  <el-icon><Calendar /></el-icon>
                  {{ formatDate(item.startTime) }}
                </span>
                <span v-if="item.isRandomOrder" class="meta-item">
                  <el-icon><Refresh /></el-icon>
                  随机顺序
                </span>
              </div>
            </div>

            <div class="card-footer">
              <el-button @click="viewDetail(item.id)" type="primary" text>
                查看详情
              </el-button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useQuizStore } from '@/stores/quiz'
import { ElMessageBox, ElMessage } from 'element-plus'
import { ArrowLeft, MoreFilled, Calendar, Refresh } from '@element-plus/icons-vue'

const router = useRouter()
const quizStore = useQuizStore()

const history = computed(() => {
  // 访问refreshTrigger以监听历史记录的变化
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  quizStore.historyRefreshTrigger
  return quizStore.getHistory()
})

// 格式化日期
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))

  if (days === 0) {
    return `今天 ${date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })}`
  } else if (days === 1) {
    return `昨天 ${date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })}`
  } else if (days < 7) {
    return `${days}天前`
  } else {
    return date.toLocaleDateString('zh-CN', { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })
  }
}

// 格式化时间（秒转为分钟）
const formatTime = (seconds: number) => {
  if (seconds < 60) return `${seconds}秒`
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return remainingSeconds > 0 ? `${minutes}分${remainingSeconds}秒` : `${minutes}分钟`
}

// 获取正确率颜色类
const getAccuracyClass = (accuracy: number) => {
  if (accuracy >= 0.9) return 'excellent'
  if (accuracy >= 0.7) return 'good'
  if (accuracy >= 0.5) return 'fair'
  return 'poor'
}

// 查看详情
const viewDetail = (id: string) => {
  router.push(`/history/${id}`)
}

// 确认删除
const confirmDelete = (id: string) => {
  ElMessageBox.confirm(
    '确定要删除这条测试记录吗？',
    '删除确认',
    {
      confirmButtonText: '删除',
      cancelButtonText: '取消',
      type: 'warning'
    }
  ).then(() => {
    quizStore.deleteHistory(id)
    ElMessage.success('已删除记录')
  }).catch(() => {
    // 取消删除
  })
}

// 显示清空确认
const showClearConfirm = () => {
  ElMessageBox.confirm(
    '确定要清空所有测试历史吗？此操作不可恢复。',
    '清空历史',
    {
      confirmButtonText: '清空',
      cancelButtonText: '取消',
      type: 'warning'
    }
  ).then(() => {
    quizStore.clearAllHistory()
    ElMessage.success('已清空所有历史记录')
  }).catch(() => {
    // 取消清空
  })
}

// 返回首页
const goBack = () => {
  router.push('/')
}

const goHome = () => {
  router.push('/')
}

</script>

<style scoped>
.history-layout {
  width: 100vw;
  min-height: 100vh;
  background: #f8fafc;
  margin: 0;
  padding: 0;
}

.history-header {
  background: white;
  border-bottom: 1px solid #e2e8f0;
  padding: 1.5rem 0;
}

.header-content {
  width: 100%;
  padding: 0 5%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.main-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
}

.history-content {
  width: 100%;
  padding: 2rem 5%;
  box-sizing: border-box;
}

.empty-state {
  background: white;
  border-radius: 12px;
  padding: 4rem 2rem;
  text-align: center;
  border: 1px solid #e2e8f0;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.empty-state h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 0.5rem 0;
}

.empty-state p {
  color: #64748b;
  margin: 0 0 2rem 0;
}

.history-cards {
  display: grid;
  gap: 1.5rem;
}

.history-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  transition: all 0.2s ease;
}

.history-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.history-card.incomplete {
  border-left: 4px solid #f59e0b;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.status-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
}

.status-badge.completed {
  background: #dcfce7;
  color: #166534;
}

.status-badge.incomplete {
  background: #fef3c7;
  color: #92400e;
}

.card-body {
  margin-bottom: 1rem;
}

.bank-names {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 1rem 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stat-label {
  font-size: 0.75rem;
  color: #64748b;
}

.stat-value {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e293b;
}

.accuracy.excellent {
  color: #16a34a;
}

.accuracy.good {
  color: #3b82f6;
}

.accuracy.fair {
  color: #f59e0b;
}

.accuracy.poor {
  color: #dc2626;
}

.card-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.875rem;
  color: #64748b;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.card-footer {
  border-top: 1px solid #f1f5f9;
  padding-top: 1rem;
}

@media (max-width: 768px) {
  .history-content {
    padding: 1rem;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .main-title {
    font-size: 1.5rem;
  }
}
</style>
