# SAP Build Apps - Unit 5 学习笔记

## 概述

Unit 5 专注于 SAP Build Apps 中的数据资源系统，深入介绍数据连接、集成和管理的完整解决方案。本单元从应用逻辑转向数据层面，教授如何通过多种数据资源类型实现与外部系统的数据交互，包括 OData 服务、REST API、设备存储和市场数据资源的集成应用。

## 1. 数据资源基础概念 (Describing Data Resources)

### 1.1 数据资源定义与作用

#### 核心定义
- **数据资源定义**：定义访问数据所需的连接详细信息
- **标准描述**："通常是 REST 或 OData 服务，需要 URL 和一些参数来指定要返回的数据"
- **关键作用**：作为应用与外部数据源之间的桥梁

#### 数据在应用中的关键地位
- **生命线地位**："应用的生死取决于其数据，没有某种形式的数据，应用将无法做很多事情"
- **双重功能**：
  - 应用运行时的临时数据存储
  - 集中式数据库中的持久数据存储

### 1.2 数据资源类型分类

#### 四种主要数据资源类型

##### 1. OData Integration (OData 集成)
- **应用场景**：连接到业务数据服务
- **规范特性**：遵循严格的 URL 和响应格式规则
- **典型用途**：常用于 SAP 业务数据公开

##### 2. REST API Direct Integration (REST API 直接集成)
- **灵活特性**：更灵活的连接方法
- **规范宽松**：对 URL 和响应要求较少严格
- **服务范围**：支持各种服务，如天气、体育、游戏等

##### 3. On-Device Storage (设备存储)
- **本地存储**：在用户设备上创建本地数据存储
- **用户数据**：存储用户特定数据
- **应用场景**：用于偏好设置和当前应用状态

##### 4. Marketplace Data Resources (市场数据资源)
- **预定义资源**：预定义的可重用数据资源
- **快速部署**：可快速安装并在项目间共享
- **生态系统**：丰富的社区共享资源库

### 1.3 高级数据资源类型

#### 企业级集成选项
- **Visual Cloud Functions Integration**：可视化云函数集成
- **OData/REST Integration with BTP Destination**：与 BTP 目标的 OData/REST 集成

#### 数据资源战略意义
数据资源系统提供了企业应用所需的全面数据连接能力，从简单的本地存储到复杂的企业系统集成

## 2. OData 资源应用 (Using OData Resources)

### 2.1 OData 资源概述

#### OData 协议特性
- **协议定义**：遵循 OData 协议的数据存储连接
- **实体概念**：定义一组代表现实世界对象的"实体"（客户、产品、位置）
- **字段结构**：每个实体包含表示特定信息的多个字段
- **元数据提供**：提供关于服务、字段和数据类型的元数据

### 2.2 OData 实体结构示例

#### 客户实体字段示例
- **CustomerID**：客户标识符
- **CompanyName**：公司名称
- **ContactName**：联系人姓名
- **ContactTitle**：联系人职位
- **Address**：地址信息
- **City**：城市
- **Region**：地区
- **PostalCode**：邮政编码
- **Country**：国家
- **Phone**：电话号码
- **Fax**：传真号码

### 2.3 OData 集成实施流程

#### 创建 OData 资源步骤
1. **资源创建**：在 SAP Build Apps 中打开数据选项卡
2. **集成选择**：选择"OData Integration"
3. **URL 配置**：输入基础 API URL（如 Northwind 服务）
4. **URL 验证**：验证 URL 有效性
5. **实体选择**：切换所需实体

#### 数据访问实现
1. **数据变量创建**：基于选定实体创建数据变量
2. **UI 组件配置**：配置 UI 组件显示数据
3. **重复功能使用**：使用"Repeat with"功能列出数据
4. **字段选择**：选择特定字段进行显示

### 2.4 实际应用示例

#### Northwind 服务演示
- **连接目标**："Customers"实体
- **显示内容**：公司名称列表
- **数据检索**：动态数据检索

#### OData 优势特性
- **元数据探索**：支持自动元数据探索
- **集成简化**：简化数据集成过程
- **连接灵活**：提供到各种数据源的灵活连接

### 2.5 技术参考资源
- **官方信息**：更多信息请访问 https://www.odata.org/

## 3. REST 资源创建 (Creating REST Resources)

### 3.1 REST 资源定义和特性

#### 核心定义
- **协议遵循**：遵循 REST 协议的数据源连接
- **泛化特性**：比 OData 服务更通用
- **元数据要求**：不要求强制性元数据

#### 关键配置要求
1. **数据模式**：定义数据结构
2. **HTTP 请求类型**：配置适当的 HTTP 方法

### 3.2 REST 资源配置功能

#### 配置方面
- **结构化信息视图**：提供结构化的信息查看方式
- **HTTP 方法支持**：支持各种 HTTP 方法
- **服务连接能力**：可连接数千种服务（天气、体育、笑话等）

### 3.3 REST 资源创建流程

#### 创建过程
1. **服务选择**：选择适当的 REST 服务
2. **数据结构定义**：定义数据结构
3. **端点详细配置**：配置端点详细信息
4. **认证设置**：设置认证（如需要）

### 3.4 数据访问实施步骤

#### 数据访问流程
1. **数据变量创建**：基于 REST 资源创建数据变量
2. **UI 组件配置**：配置 UI 组件显示检索到的数据
3. **数据项映射**：将数据项映射到 UI 元素

### 3.5 实际应用案例

#### MLB 团队数据示例
- **数据检索**：检索 MLB 团队数据
- **显示内容**：在应用中显示团队名称
- **动态填充**：动态填充文本组件

### 3.6 最佳实践和限制

#### 最佳实践
- **模式映射**：仔细映射模式
- **端点要求理解**：理解端点要求
- **数据检索测试**：彻底测试数据检索

#### 技术限制
- **手动配置需求**：可能需要手动配置
- **无自动元数据生成**：没有自动元数据生成
- **复杂集成挑战**：复杂 API 集成中的潜在复杂性

## 4. 设备资源使用 (Using On-Device Resources)

### 4.1 设备存储目的和特性

#### 核心目的
- **用户特定数据**：存储"特定于当前用户且不需要与其他用户共享的信息"
- **离线可用**：无需互联网连接即可使用
- **本地存储**：存储在移动设备或浏览器中

#### 关键特性
- **用户独享**：数据"仅对当前用户可用"
- **本地持久化**：提供本地数据持久性
- **离线功能**：启用离线功能

### 4.2 适用数据类型

#### 设备存储适用场景
- **个人应用设置/偏好**：用户个性化配置
- **临时数据**：尚未发送到后端的临时数据
- **离线应用数据**：支持离线操作的数据
- **用户特定信息**：个人相关的特定信息

### 4.3 设备存储实施示例

#### 偏好设置实体示例
创建名为"Preferences"的设备存储实体，包含字段：
- **User**：用户标识
- **Color**：颜色偏好
- **Font Size**：字体大小偏好

#### 健康跟踪应用案例
- **图标值传输**：展示设备存储如何传输和存储图标值
- **日期显示**：在单独页面上按日期显示数据
- **离线功能**：支持离线健康数据跟踪

### 4.4 设备存储优势

#### 技术优势
- **离线访问**：无需后端系统调用
- **快速响应**：本地数据访问速度快
- **用户体验**：提供流畅的用户体验
- **数据隐私**：用户数据保持在本地设备上

#### 应用场景优势
- **移动优化**：特别适合移动应用场景
- **网络独立**：不依赖网络连接状态
- **个人化程度高**：高度个性化的数据存储

## 5. 市场数据资源 (Using Marketplace Data Resources)

### 5.1 市场数据资源概述

#### 核心价值
- **示例数据提供**：SAP Build Apps 为项目和测试提供示例数据资源
- **预构建连接**：市场提供用户可以利用的预构建数据连接
- **社区生态**：构建丰富的数据资源共享生态系统

### 5.2 可用市场数据资源

#### RestCountries 示例演练
- **安装来源**：可从集成选项卡安装
- **功能演示**：展示如何创建数据变量并显示国家名称
- **实用性**：提供真实可用的地理数据

### 5.3 市场数据资源使用流程

#### 使用步骤
1. **集成选项卡打开**：打开集成选项卡
2. **经典数据实体选择**：选择"SAP Build Apps classic data entities"
3. **市场搜索**：选择"Create Data Entity" → "Marketplace Search"
4. **资源浏览**：浏览可用资源
5. **选择安装**：选择并安装所需资源

### 5.4 数据资源共享机制

#### 发布流程
- **个人资源发布**：用户可以将自己的数据资源发布到市场
- **描述添加**：需要添加描述信息
- **GUID 生成**：生成唯一 GUID 进行标识
- **租户内共享**：在同一租户内可共享

#### 示例工作流程
1. **数据资源创建**：创建数据资源（例如，客户）
2. **描述添加**：添加详细描述
3. **市场发布**：使用垂直点菜单发布到市场
4. **发布确认**：选择"PUBLISH NEW"

### 5.5 学习目标和应用价值

#### 核心学习目标
- **市场资源查找**：在市场中查找数据资源
- **数据资源创建和共享**：创建并共享数据资源

#### 生态价值
市场数据资源系统促进了 SAP Build Apps 社区内的知识和资源共享，加速应用开发过程

## 6. 数据资源连接 (Connecting to Data Resources)

### 6.1 数据资源连接概述

#### 支持的数据资源类型
- **OData**：企业标准数据协议
- **REST**：灵活的 API 连接方式
- **On-device storage**：本地设备存储

#### 核心连接特性
- **后端系统数据检索**：数据资源允许从后端系统检索数据
- **可定义操作**：可以定义和启用特定操作

### 6.2 可配置数据操作

#### 标准数据操作
- **Get Record**：获取记录
- **Create Record**：创建记录
- **Update Record**：更新记录

#### 操作配置注意事项
根据应用需求仔细选择和配置所需的数据操作

### 6.3 设备存储特殊优势

#### 离线能力优势
- **离线可用**：无需互联网连接
- **无后端调用需求**：不需要后端系统调用
- **响应速度快**：本地数据访问速度快

### 6.4 数据资源实施指导

#### 实施最佳实践
- **适当类型选择**：定义数据资源连接到外部系统时选择适当类型
- **操作匹配**：配置与应用需求匹配的特定操作
- **离线能力考虑**：考虑使用设备存储的离线能力

#### 关键技术要点
- **行为操作限制**：并非所有操作都可以启用（例如，"Retrieve All Records"不是可用操作）
- **原生类型识别**：SQL 不被视为原生数据资源类型
- **跨项目重用**：市场数据资源可以跨项目重用

### 6.5 连接配置策略

#### 配置考虑因素
- **数据源特性**：了解数据源的特性和限制
- **安全配置**：考虑安全性配置要求
- **性能优化**：优化数据访问性能
- **错误处理**：建立适当的错误处理机制

## 7. Unit 5 知识检测 Quiz

### Quiz 题目与答案解析

#### 题目 1：数据资源定义目的
**Question**: "Why would you need to define a data resource?"
**Type**: Single Select (1 correct answer)

**All Options**:
1. To define valid values for a variable
2. To retrieve data from a back-end system
3. To define the look and feel of the user interface
4. To define the logic for app and user events

**Correct Answer**:
- To retrieve data from a back-end system

**Incorrect Answers**:
- To define valid values for a variable
- To define the look and feel of the user interface
- To define the logic for app and user events

**解析**：数据资源的主要目的是从后端系统检索数据，这是数据资源连接的核心功能。

#### 题目 2：市场数据资源用途
**Question**: "The available data section in the Marketplace of SAP Build Apps is only used to test functions of the app."
**Type**: True/False (1 correct answer)

**All Options**:
1. True
2. False

**Correct Answer**:
- False

**Incorrect Answer**:
- True

**解析**：市场中的可用数据部分不仅仅用于测试应用功能，它还提供可重用的数据资源，可以在实际项目中使用。

#### 题目 3：数据资源操作限制
**Question**: "When setting up a data resource, you can define and enable its actions. Which one of the following actions you cannot enable?"
**Type**: Single Select (1 correct answer)

**All Options**:
1. Retrieve All Records
2. Get Record
3. Create Record
4. Update Record

**Correct Answer**:
- Retrieve All Records

**Incorrect Answers**:
- Get Record
- Create Record
- Update Record

**解析**："Retrieve All Records" 不是可以启用的操作。可用的标准操作包括获取记录、创建记录和更新记录。

#### 题目 4：数据资源类型
**Question**: "Which of the following is not a type of data resource?"
**Type**: Single Select (1 correct answer)

**All Options**:
1. OData
2. REST
3. SQL
4. On-device

**Correct Answer**:
- SQL

**Incorrect Answers**:
- OData
- REST
- On-device

**解析**：SQL 不是 SAP Build Apps 中的数据资源类型。支持的类型包括 OData、REST 和设备存储（On-device）。

#### 题目 5：设备存储优势
**Question**: "What is the benefit of using on-device storage versus an OData or REST data resource?"
**Type**: Single Select (1 correct answer)

**All Options**:
1. It has more data types
2. It is available offline without backend calls
3. It can hold more data
4. It can be accessed by the UI

**Correct Answer**:
- It is available offline without backend calls

**Incorrect Answers**:
- It has more data types
- It can hold more data
- It can be accessed by the UI

**解析**：设备存储相比 OData 或 REST 数据资源的主要优势是离线可用性，无需后端调用即可访问数据。

### Quiz 通过标准
- **及格要求**：完成所有题目以通过此单元
- **题目总数**：5 道题目（与官方平台一致）
- **建议**：理解数据资源的定义目的、类型差异、操作限制以及设备存储的离线优势

## 8. 学习要点总结

1. **掌握数据资源基础**：理解数据资源的定义目的和从后端系统检索数据的核心功能
2. **数据资源类型掌握**：熟练区分 OData、REST 和设备存储三种主要数据资源类型
3. **操作配置理解**：掌握数据资源的标准操作（Get Record、Create Record、Update Record）和限制
4. **设备存储应用**：理解本地存储的离线优势和无需后端调用的特性
5. **市场资源理解**：掌握市场数据资源的实际用途，不仅限于测试功能
6. **Quiz 重点掌握**：重点理解数据资源定义目的、类型限制、操作约束和离线存储优势
7. **实际应用指导**：根据应用需求选择合适的数据资源类型和配置策略
8. **离线功能设计**：利用设备存储实现离线功能和个性化用户体验

---

*本笔记基于 SAP Learning 平台的 "Develop Apps with SAP Build Apps using Drag-and-Drop Simplicity" 学习路径的 Unit 5 内容整理*