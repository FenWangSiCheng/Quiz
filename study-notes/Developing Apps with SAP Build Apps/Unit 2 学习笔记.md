# SAP Build Apps - Unit 2 学习笔记

## 概述

Unit 2 专注于 SAP Build Apps 的用户界面构建实践，深入介绍组件系统、属性配置、样式设计和自定义组件开发。本单元从理论转向实际操作，教授如何通过可视化方式构建专业的企业应用界面。

## 1. 组件基础概念 (Components Fundamentals)

### 1.1 组件定义与特性

#### 组件定义
- **定义**：预制的代码块，用作具有预定义功能的构建块来设计 UI 并实现与逻辑的桥接
- **功能**：可以是任何 UI 元素（按钮、输入字段、文本区域、图像）
- **灵活性**：没有固定的大小限制，从小型（图标、分隔线）到大型（地图、视频播放器）

#### 核心特性
- **直观开发体验**：促进直观的开发体验
- **适配性**：可根据特定需求进行调整
- **可重用性**：作为构建块重复使用

### 1.2 组件类型分类

#### Essential 组件
- **标题和文本组件**：基础文本显示功能
- **卡片组件**：组合文本和样式的容器组件

#### 图像和图标组件
- **用户友好性**：增强用户界面的友好性
- **视觉信息定位**：提供视觉信息目标

#### 表单组件
- **用户交互功能**：实现用户交互功能
- **主要类型**：
  - 按钮组件（最常用）
  - 输入和密码字段
  - 复选框
  - 下拉字段
  - 滑块

#### 列表组件
- **数据显示功能**：显示来自数据库的信息
- **连接能力**：
  - 内部应用数据
  - 用户输入
  - 互联网接口
  - SAP/第三方解决方案

#### 布局组件
- **结构优势**：
  - 提供 UI 结构选项
  - 组合组件
  - 并排显示内容
  - 支持动态可见性
  - 支持直观滚动

### 1.3 布局树功能 (Layout Tree Features)

#### 核心功能
- **层次结构显示**：显示页面布局层次结构
- **拖放重构**：允许拖放组件重新构建
- **组件命名**：支持组件自定义命名
- **分组管理**：支持展开/折叠组件组

#### UI 角色定义
UI 定义以下内容：
- 视觉元素
- 基本应用交互
- 通过组件排列和功能实现用户体验

## 2. 属性使用 (Using Properties)

### 2.1 属性基础概念

#### 属性功能
- **动态适配**：允许根据上下文、外观和功能动态适配 UI
- **位置**：位于界面右侧的"Properties"面板
- **组件差异**：默认属性因组件而异

### 2.2 属性绑定类型

#### 六种绑定类型
1. **Static Text**：静态文本
2. **Data and Variables**：数据和变量
3. **Formula**：公式
4. **Component Properties**：组件属性
5. **Data Item in repeat**：重复中的数据项
6. **Mapping**：映射

#### 配置方法
- **静态值配置**：直接在属性面板中添加静态属性值
- **绑定配置**：使用属性值旁的绑定图标进行绑定

### 2.3 高级属性功能

#### 组件命名
- **自定义名称**：可在"Advanced Properties"中设置自定义名称
- **管理优势**：有助于管理具有多个组件的复杂布局

#### 可见性控制
- **Visible 属性**：允许动态控制组件可见性
- **绑定能力**：可绑定以控制组件显示/隐藏时机

#### 重复组件功能
- **"Repeat with"功能**：动态创建组件
- **数据源要求**：需要对象列表作为源
- **重复机制**：为每个列表项重复组件
- **适用范围**：适用于所有组件，常用于列表组件

### 2.4 实际应用场景
- 根据用户变量调整文本显示
- 动态显示/隐藏 UI 元素
- 从数据源创建列表视图
- 自定义组件外观和行为

## 3. 样式和布局 (Style and Layouting)

### 3.1 主题和颜色管理

#### 主题系统
- **主题作用**：决定应用设计和处理方式
- **默认主题组**：Universal 和 SAP Fiori 两个默认主题组
- **智能颜色**：根据背景自动调整组件颜色

#### 主题变量配置
可动态配置：
- 文本大小
- 边框样式
- 阴影效果
- 间距设置
- 字体设置

### 3.2 样式类 (Style Classes)

#### 预定义样式类
- **Primary**：主要样式
- **Secondary**：次要样式
- **Tertiary**：第三级样式
- **Danger**：危险/警告样式
- **Success**：成功样式

#### 样式类特性
- 定义全面的样式属性
- 可创建自定义样式类
- 允许动态绑定样式设置

### 3.3 布局选项

#### Layout 标签配置
- **组件对齐**：配置组件对齐方式
- **宽度和高度**：设置组件尺寸
- **定位**：控制组件位置
- **Z-index**：元素分层管理

#### 间距概念
- **组件间距**："Component gap"概念取代传统边距
- **一致间距**：在垂直和水平布局中保持一致间距

### 3.4 背景样式

#### 背景定制选项
- 自定义页面背景颜色
- 添加背景图像
- 调整内边距
- 可选滚动控制

### 3.5 设计原则

#### 核心原则
- 将组件功能与视觉样式分离
- 使用设计传达组件意图
- 调整视觉元素以增强用户体验
- 确保一致和直观的界面设计

#### 关键建议
利用动态绑定和预定义样式类创建灵活、响应式的应用设计

## 4. 市场组件和自定义组件 (Marketplace and Custom Components)

### 4.1 市场组件系统

#### 市场组件特性
- **组件数量**：包含超过 500 个预构建的拖放组件
- **位置**：位于"Core Component"选项卡中
- **详细信息**：提供详细的组件信息

#### 组件信息内容
- 描述信息
- 创建/更新日期
- 维护者姓名
- 令牌信息
- 样例显示

### 4.2 市场组件筛选

#### 筛选选项
- **All available components**：所有可用组件
- **Installed components**：已安装组件
- **Uninstalled components**：未安装组件
- **Own components**：自己的组件

#### 安装流程
1. 选择所需组件
2. 点击"Install"
3. 组件出现在组件库的"Installed"选项卡中

### 4.3 自定义组件开发

#### 开发方法
- **组合构建**：组合基础组件创建更复杂的组件
- **模板编辑器**：使用组件模板编辑器进行广泛自定义
- **示例**：组合图像和列表组件创建新的"图像列表"组件

#### 核心开发理念
- **构建块方式**："就像将构建块组合在一起一样简单"
- **组件库支持**：组件库中提供个别组件元素
- **个性化创建**：支持创建个性化、可重用组件

### 4.4 实际应用

#### 应用场景
- 可从特定功能映射数据（例如，跟踪器历史）
- 为特定应用需求创建组件
- 通过创造性组合扩展默认组件功能

#### 平台理念
平台强调灵活性和用户驱动的组件创建，允许开发人员根据精确的应用需求定制组件

## 5. Unit 2 知识检测 Quiz

### Quiz 题目与答案解析

#### 题目 1：市场主要用途
**Question**: "The Marketplace is primarily for View Components."
**Type**: True/False (1 correct answer)

**All Options**:
1. True
2. False

**Correct Answer**:
- False

**Incorrect Answer**:
- True

**解析**：市场不仅仅提供视图组件，还为逻辑元素和数据提供大量选择，是一个全面的组件生态系统。

#### 题目 2：文本组件绑定类型
**Question**: "Which binding types are available by default for a text component?"
**Type**: Multiple Select (3 correct answers)

**All Options**:
1. Static Value
2. Component properties
3. Data Item in repeat
4. Formula
5. Mapping

**Correct Answers**:
- Static Value
- Component properties
- Formula

**Incorrect Answers**:
- Data Item in repeat
- Mapping

**解析**：文本组件默认支持静态值、组件属性和公式这三种绑定类型，这些是最基础和常用的绑定方式。

#### 题目 3：按钮组件样式类
**Question**: "Which of these predefined style classes of the button component exist in SAP Build Apps?"
**Type**: Multiple Select (3 correct answers)

**All Options**:
1. Primary Button
2. Secondary Button
3. Access Button
4. Danger Button

**Correct Answers**:
- Primary Button
- Secondary Button
- Danger Button

**Incorrect Answer**:
- Access Button

**解析**：SAP Build Apps 中存在 Primary、Secondary 和 Danger 按钮样式类，这些是标准的设计系统样式分类。

#### 题目 4：组件可拨打能力
**Question**: "Which components can be made dialable?"
**Type**: Multiple Select (3 correct answers)

**All Options**:
1. Button components
2. Card components
3. Only button and list components
4. Title components

**Correct Answers**:
- Button components
- Card components
- Title components

**Incorrect Answer**:
- Only button and list components

**解析**：在 SAP Build Apps 中，所有组件都可以被设置为可拨打的，不仅限于按钮和列表组件，这体现了平台的灵活性。

### Quiz 通过标准
- **及格要求**：至少答对 3 道题目才能通过此单元
- **题目总数**：4 道题目
- **建议**：深入理解组件系统、属性绑定、样式设计和市场组件的使用

## 6. 学习要点总结

1. **掌握组件系统**：理解组件作为构建块的核心概念和分类体系
2. **属性配置能力**：熟练掌握六种属性绑定类型和动态配置方法
3. **样式设计技能**：理解主题系统、样式类和布局选项的使用
4. **市场组件利用**：学会使用市场组件和创建自定义组件
5. **布局管理**：掌握布局树功能和组件层次结构管理
6. **实践应用**：通过重复组件、可见性控制等实现动态 UI
7. **设计原则**：理解功能与样式分离的设计理念

---

*本笔记基于 SAP Learning 平台的 "Develop Apps with SAP Build Apps using Drag-and-Drop Simplicity" 学习路径的 Unit 2 内容整理*