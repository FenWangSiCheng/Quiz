# SAP Build Apps - Unit 3 学习笔记

## 概述

Unit 3 专注于 SAP Build Apps 中的变量和数据类型系统，深入介绍变量的需求、类型分类、作用域管理和数据类型应用。本单元从静态 UI 构建转向动态数据管理，教授如何通过变量系统实现应用的数据存储、传递和处理功能。

## 1. 变量需求和基础概念 (Explaining the Need for Variables)

### 1.1 变量定义与作用

#### 变量核心功能
- **临时存储机制**：为应用中的数据提供临时存储空间
- **数据容器**：作为数据的载体，支持不同类型数据的存储和访问
- **状态管理**：维护应用运行时的状态信息

#### 变量存储内容类型
- **计算数据**：操作数和计算结果
- **外部数据**：来自外部资源的数据
- **用户信息**：用户相关的个人信息
- **用户偏好**：用户设置和偏好配置
- **页面状态**：当前页面或产品的详细信息

### 1.2 变量分类系统

#### 四种核心变量类型

##### App Variable (应用变量)
- **定义**：用于存储整个应用中可访问的信息
- **作用域**：全局作用域，跨页面可访问
- **使用场景**：存储需要在整个应用中共享的数据

##### Page Variable (页面变量)
- **定义**：用于存储仅在当前页面中可访问的信息
- **作用域**：页面级作用域，局限于当前页面
- **组织优势**：通过页面级别组织数据，避免应用变量的混乱

##### Page Parameter (页面参数)
- **定义**：用于存储打开当前页面所需的信息
- **功能**：实现页面间的数据传递
- **使用时机**：页面导航时的参数传递

##### Data Variable (数据变量)
- **定义**：用于存储从外部数据资源检索的信息
- **数据源**：连接外部数据资源（SAP 系统、第三方 API）
- **特殊能力**：支持 OData 过滤器和专用逻辑画布

### 1.3 实际应用场景

#### 计算器应用示例
变量在计算器应用中的应用：
- 存储用户输入的数字
- 保存计算结果
- 管理中间计算数据

#### 组织管理优势
- **应用变量集中显示**：可能导致界面混乱
- **页面变量分类组织**：通过页面特定数据实现更好的组织结构
- **高效变量管理**：保持清晰、可管理的应用开发环境

## 2. 数据类型系统 (Using Data Types)

### 2.1 数据类型分类

#### 简单类型 (Simple Types)
- **Number**：数字类型，支持整数和浮点数
- **Boolean**：布尔类型，true/false 值
- **String**：字符串类型，文本数据

#### 特定格式文本类型 (Text Types with Specific Format)
- **Email**：电子邮件地址格式
- **Date/Time**：日期和时间格式
- **URL**：统一资源定位符格式
- **Color Code**：颜色代码格式

#### 引用类型 (Reference Types)
- **Icon**：图标引用类型

#### 复杂类型 (Complex Types)
- **Object**：对象类型，包含多个属性
- **List**：列表类型，包含多个元素
- **Any Value**：任意值类型，灵活的数据类型

### 2.2 数据类型特性

#### 功能特性
- **类型约束**：定义变量的预期数据类型
- **专用接口**：在属性和公式编辑器中提供类型特定接口
- **类型警告**：SAP Build Apps 对不正确的数据类型发出警告但不严格阻止

#### 变量交互机制
- **类型定义**：定义变量时指定其数据类型
- **类型一致性**：确保数据一致性和结构化处理
- **专用输入界面**：根据数据类型提供专门的输入体验

### 2.3 实际应用示例

#### 具体类型示例
- **颜色变量**：期望颜色代码如 "#000000"
- **日期变量**：要求 ISO 8601 格式，例如 "2023-05-14T07:08:05.671Z"
- **图标变量**：使用 JSON 表示，如 {"set":"fiori", "name":"windows-doors"}

#### 数据类型重要性
- **专用编辑体验**：提供类型特定的编辑界面
- **潜在匹配检查**：帮助捕获可能的数据不匹配
- **结构化处理**：实现更结构化和可预测的数据处理

## 3. 应用和页面变量 (Using App and Page Variables)

### 3.1 应用变量 (App Variables)

#### 核心特性
- **全局上下文**：存在于应用的全局上下文中
- **重置时机**：仅在应用首次打开或关闭/重新打开时重置
- **命名空间**：使用 "appVars" 命名空间访问
- **跨页面持久化**：在页面导航过程中保持数据

#### 理想使用场景
- **当前用户邮箱**：用户身份信息
- **用户设置**：全局用户偏好配置
- **游戏状态**：跨页面的游戏进度信息
- **当前位置**：地理位置信息

### 3.2 页面变量 (Page Variables)

#### 核心特性
- **页面上下文**：仅存在于单个页面的上下文中
- **重置时机**：导航离开页面时重置
- **命名空间**：使用 "pageVars" 命名空间访问
- **页面隔离**：数据局限于特定页面

#### 理想使用场景
- **搜索条件**：页面特定的搜索参数
- **当前页码**：分页相关的页面状态
- **页面特定时间跟踪**：页面级别的时间记录
- **字段禁用指示器**：页面内的 UI 状态控制

### 3.3 变量选择指导

#### 关键差异对比
1. **作用域差异**：应用变量是全局的，页面变量是页面特定的
2. **生命周期差异**：应用变量跨页面导航持久化，页面变量重置
3. **使用依据**：根据数据的相关性和所需的持久化程度选择

#### 配置要点
- **变量命名规则**：只能包含字母和数字
- **避免特殊字符**：变量名中避免空格或标点符号
- **按需绑定**：根据需要将变量绑定到组件属性

#### 最佳实践原则
仅在特别需要的地方定义变量，以便更容易维护应用

## 4. 数据变量创建 (Creating Data Variables)

### 4.1 数据变量概述

#### 数据变量定义
- **核心功能**：保存来自外部数据源的数据，如 SAP 系统或第三方 API
- **UI 交互**：使 UI 组件能够与数据交互
- **系统扩展**：支持构建增强核心系统的 SAP 扩展

#### 数据变量特殊能力
- **OData 过滤器**：在检索数据时定义 OData 过滤器
- **专用逻辑画布**：具有用于数据检索的专用逻辑画布
- **自动类型推断**：数据类型自动从连接的数据资源中获取

### 4.2 数据变量配置类型

#### 三种主要类型
1. **记录集合 (Collection of records)**
   - 存储多条记录的集合
   - 适用于列表和批量数据处理

2. **单个记录 (Single record)**
   - 存储单一数据记录
   - 适用于详细信息显示

3. **空记录 (Empty record)**
   - 待填充的空记录
   - 用于添加到后端系统的新数据

### 4.3 创建流程和最佳实践

#### 创建流程
- **基于现有资源**：始终基于现有数据资源创建
- **模式复制**：从数据资源复制模式结构
- **无需手动定义**：无需手动定义数据类型

#### 最佳实践指导
- **类型选择**：根据具体用例选择适当的数据变量类型
- **源结构理解**：理解源数据资源的结构
- **精确检索**：使用 OData 过滤器实现精确的数据检索

#### 推荐后续步骤
- 连接到适当的数据资源
- 定义具体的数据变量配置
- 将数据变量映射到 UI 组件

## 5. 变量使用实践 (Using Variables)

### 5.1 变量实现和使用模式

#### 变量类型指导
- **公式编辑器**：在设置具有不符合数据类型的变量时提供指导
- **类型检查**：通过公式编辑器进行类型检查和指导
- **类型对齐**：确保适当的数据类型对齐

### 5.2 变量作用域管理

#### 应用变量 vs 页面变量
- **应用变量**：可以在任何地方引用
- **页面变量**：只能在特定页面中引用
- **作用域选择**：根据数据使用范围选择合适的变量类型

### 5.3 变量使用原因

#### 核心使用场景
1. **临时数据存储**：存储用户偏好等临时数据
2. **后端数据存储**：存储从后端数据源检索的数据

#### 后端数据处理
- **数据变量优先**：用于存储从后端系统检索的信息
- **系统集成**：实现与外部系统的数据交换
- **数据同步**：保持前端和后端数据的同步

### 5.4 变量绑定和组件集成

#### 绑定实践
- **组件属性绑定**：将变量绑定到组件属性
- **动态更新**：通过变量实现组件的动态内容更新
- **数据流管理**：控制应用中的数据流向

#### 战略实施指导
- **变量作用域理解**：深入理解不同变量类型的作用域
- **类型战略选择**：根据应用需求选择合适的变量类型
- **开发最佳实践**：在 SAP Build Apps 开发中实施变量管理最佳实践

## 6. Unit 3 知识检测 Quiz

### Quiz 题目与答案解析

#### 题目 1：应用变量与页面变量差异
**Question**: "What is the main difference between an app variable and a page variable?"
**Type**: Single Select (1 correct answer)

**All Options**:
1. An app variable can have fewer data types than a page variable
2. An app variable's value can be set once and not changed
3. An app variable can be referenced anywhere, but a page variable can only be referenced in a particular page
4. You can have only one app variable but many page variables

**Correct Answer**:
- An app variable can be referenced anywhere, but a page variable can only be referenced in a particular page

**Incorrect Answers**:
- An app variable can have fewer data types than a page variable
- An app variable's value can be set once and not changed
- You can have only one app variable but many page variables

**解析**：这是应用变量和页面变量的根本区别，应用变量具有全局作用域可在任何地方引用，而页面变量只能在特定页面中引用。

#### 题目 2：变量使用原因
**Question**: "What are the reasons for using variables?"
**Type**: Multiple Select (2 correct answers)

**All Options**:
1. To connect to the back-end data
2. To store temporary data, such as user preferences
3. To store data retrieved from back-end data source
4. To define application logic

**Correct Answers**:
- To store temporary data, such as user preferences
- To store data retrieved from back-end data source

**Incorrect Answers**:
- To connect to the back-end data
- To define application logic

**解析**：变量的两个核心使用目的是存储临时数据（如用户偏好）和存储从后端数据源检索的数据，这体现了变量作为数据容器的基本功能。

#### 题目 3：后端数据存储变量类型
**Question**: "Which variable do you use to store information retrieved from a back-end system?"
**Type**: Single Select (1 correct answer)

**All Options**:
1. App variable
2. Page parameter
3. Page variable
4. Data variable

**Correct Answer**:
- Data variable

**Incorrect Answers**:
- App variable
- Page parameter
- Page variable

**解析**：数据变量专门用于存储从后端系统检索的信息，这是其设计的主要目的和最佳实践用法。

#### 题目 4：变量类型指导工具
**Question**: "Which of the following will guide you if you try to set a variable with a value that does not conform to its data type?"
**Type**: Single Select (1 correct answer)

**All Options**:
1. Marketplace
2. Lobby
3. Formula editor
4. Data tab

**Correct Answer**:
- Formula editor

**Incorrect Answers**:
- Marketplace
- Lobby
- Data tab

**解析**：公式编辑器在设置不符合数据类型的变量值时提供类型检查和指导，帮助开发者避免数据类型不匹配的问题。

### Quiz 通过标准
- **及格要求**：至少答对 3 道题目才能通过此单元
- **题目总数**：4 道题目
- **建议**：深入理解变量类型、作用域差异、数据类型系统和变量使用场景

## 7. 学习要点总结

1. **掌握变量系统**：理解变量作为临时存储机制的核心概念和四种变量类型
2. **数据类型应用**：熟练掌握简单类型、特定格式类型、引用类型和复杂类型的使用
3. **作用域管理**：深入理解应用变量和页面变量的作用域差异和选择标准
4. **数据变量创建**：学会创建和配置数据变量，实现外部数据源集成
5. **变量绑定技能**：掌握变量到组件的绑定方法和动态数据更新
6. **类型检查实践**：利用公式编辑器进行类型检查和数据类型对齐
7. **最佳实践应用**：按需定义变量，选择合适的变量类型，维护清晰的数据架构

---

*本笔记基于 SAP Learning 平台的 "Develop Apps with SAP Build Apps using Drag-and-Drop Simplicity" 学习路径的 Unit 3 内容整理*