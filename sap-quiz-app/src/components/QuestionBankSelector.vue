<template>
  <div class="bank-selector">
    <div class="bank-selector-header">
      <h3>选择题库</h3>
      <p>选择一个或多个题库进行模拟测试</p>
    </div>

    <!-- 快速选择按钮 -->
    <div class="quick-actions">
      <el-button size="small" @click="selectAll">全选</el-button>
      <el-button size="small" @click="selectNone">取消全选</el-button>
    </div>

    <!-- 题库展示 -->
    <div class="banks-grid">
      <div 
        v-for="bank in allBanks" 
        :key="bank.id"
        :class="['bank-card', { 'selected': selectedBanks.has(bank.id) }]"
        @click="toggleBank(bank.id)"
      >
        <div class="bank-card-header">
          <span class="bank-icon" :style="{ color: bank.color }">{{ bank.icon }}</span>
          <el-checkbox 
            :model-value="selectedBanks.has(bank.id)"
            @click.stop
            @change="(checked: boolean) => handleBankSelection(bank.id, checked)"
          />
        </div>
        <div class="bank-info">
          <h5 class="bank-name">{{ bank.name }}</h5>
          <p class="bank-description">{{ bank.description }}</p>
          <div class="bank-meta">
            <span class="bank-count">{{ bank.count }}题</span>
            <span class="bank-difficulty" :class="`difficulty-${bank.difficulty}`">
              {{ getDifficultyText(bank.difficulty) }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- 选择总结 -->
    <div class="selection-summary" v-if="selectedBanks.size > 0">
      <div class="summary-info">
        <span class="summary-text">
          已选择 <strong>{{ selectedBanks.size }}</strong> 个题库，
          共 <strong>{{ totalSelectedQuestions }}</strong> 道题目
        </span>
      </div>
      <div class="summary-actions">
        <el-button type="primary" @click="confirmSelection" :disabled="selectedBanks.size === 0">
          开始测试
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { 
  getAllQuestionBanks, 
  getQuestionsByBankIds,
  type QuestionBank 
} from '@/data/questionBankManager'
import { ElMessage } from 'element-plus'

interface Emits {
  (e: 'confirm', bankIds: string[]): void
  (e: 'cancel'): void
}

const emit = defineEmits<Emits>()

// 响应式数据
const selectedBanks = ref<Set<string>>(new Set())
const allBanks = ref<QuestionBank[]>([])

// 计算属性

const totalSelectedQuestions = computed(() => {
  const bankIds = Array.from(selectedBanks.value)
  return getQuestionsByBankIds(bankIds).length
})

// 方法
const loadBanks = () => {
  allBanks.value = getAllQuestionBanks()
}

const toggleBank = (bankId: string) => {
  if (selectedBanks.value.has(bankId)) {
    selectedBanks.value.delete(bankId)
  } else {
    selectedBanks.value.add(bankId)
  }
}

const handleBankSelection = (bankId: string, checked: boolean) => {
  if (checked) {
    selectedBanks.value.add(bankId)
  } else {
    selectedBanks.value.delete(bankId)
  }
}

const selectAll = () => {
  selectedBanks.value = new Set(allBanks.value.map(bank => bank.id))
  ElMessage.success('已选择所有题库')
}

const selectNone = () => {
  selectedBanks.value.clear()
  ElMessage.info('已取消所有选择')
}


const getDifficultyText = (difficulty: QuestionBank['difficulty']) => {
  const difficultyMap = {
    beginner: '初级',
    intermediate: '中级',
    advanced: '高级'
  }
  return difficultyMap[difficulty]
}

const confirmSelection = () => {
  if (selectedBanks.value.size === 0) {
    ElMessage.warning('请至少选择一个题库')
    return
  }
  
  const bankIds = Array.from(selectedBanks.value)
  emit('confirm', bankIds)
}

// 生命周期
onMounted(() => {
  loadBanks()
})
</script>

<style scoped>
.bank-selector {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  max-height: 80vh;
  overflow-y: auto;
}

.bank-selector-header {
  text-align: center;
  margin-bottom: 2rem;
}

.bank-selector-header h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 0.5rem 0;
}

.bank-selector-header p {
  color: #64748b;
  margin: 0;
}

.quick-actions {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.banks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.bank-card {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.bank-card:hover {
  border-color: #3b82f6;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
}

.bank-card.selected {
  border-color: #3b82f6;
  background: #eff6ff;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
}

.bank-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.bank-icon {
  font-size: 2rem;
}

.bank-info {
  flex: 1;
}

.bank-name {
  font-size: 1rem;
  font-weight: 500;
  color: #1e293b;
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
}

.bank-description {
  font-size: 0.875rem;
  color: #64748b;
  margin: 0 0 1rem 0;
  line-height: 1.4;
}

.bank-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bank-count {
  font-size: 0.875rem;
  font-weight: 500;
  color: #3b82f6;
  background: #dbeafe;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}

.bank-difficulty {
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  text-transform: uppercase;
}

.difficulty-beginner {
  background: #dcfce7;
  color: #16a34a;
}

.difficulty-intermediate {
  background: #fef3c7;
  color: #d97706;
}

.difficulty-advanced {
  background: #fee2e2;
  color: #dc2626;
}

.selection-summary {
  margin-top: 2rem;
  padding: 1.5rem;
  background: #f1f5f9;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.summary-info {
  flex: 1;
}

.summary-text {
  color: #1e293b;
  font-size: 0.875rem;
}

.summary-actions {
  display: flex;
  gap: 0.75rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .bank-selector {
    padding: 1.5rem;
  }
  
  .banks-grid {
    grid-template-columns: 1fr;
  }
  
  .quick-actions {
    gap: 0.5rem;
  }
  
  .selection-summary {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .bank-selector {
    padding: 1rem;
  }
  
  .category-section {
    padding: 1rem;
  }
  
  .bank-card {
    padding: 1rem;
  }
}
</style>