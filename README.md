# 雨墨星辰个人介绍页

一个简洁、现代化的个人介绍页面，展示个人设备库和友链网站。

## ✨ 特点

- 🎨 简洁现代的设计风格
- 📱 完全响应式布局
- ⚡ 轻量级代码，无冗余
- 🔧 易于配置和自定义
- 🎯 专注于核心功能
- ✨ 保留浮动粒子背景和特效动画

## 📁 项目结构

```
profile/
├── index.html          # 主页面文件
├── style.css           # 样式文件
├── script.js           # 交互脚本
├── config.js           # 配置文件
├── .gitignore          # Git忽略文件
├── README.md           # 项目说明
├── icon/               # 图标文件夹
├── src/                # 图片资源文件夹
└── leaves.webp         # 背景图片
```

## 🚀 使用方法

### 1. 修改个人信息
编辑 `config.js` 文件中的个人信息：

```javascript
profile: {
    name: "你的名字",
    bio: "你的个人介绍",
    avatar: "/src/你的头像.jpg",
    contact: {
        email: "your.email@example.com",
        location: "城市，省份"
    }
}
```

### 2. 添加设备
在 `config.js` 的 `devices` 数组中添加你的设备：

```javascript
{
    name: "设备名称",
    description: "设备描述",
    purchaseDate: "购入时间",
    image: "src/设备图片.jpg"
}
```

### 3. 添加友链
在 `config.js` 的 `links` 数组中添加你的网站链接：

```javascript
{
    name: "网站名称",
    description: "网站描述",
    url: "https://your-website.com",
    icon: "src/图标.png"
}
```

## 🎨 自定义样式

### 主题颜色
在 `config.js` 中修改主题颜色：

```javascript
theme: {
    primaryColor: "#4ECDC4",      // 主色调
    secondaryColor: "#78CDD6",    // 次要色调
    profileBgColor: "#2c3e50",    // 个人资料背景色
    profileBgColor2: "#34495e"    // 个人资料背景色2
}
```

### 背景特效配置
在 `config.js` 中配置背景特效：

```javascript
background: {
    stripesPattern: "",           // 自定义条状背景图片URL
    stripesOpacity: 0.3,         // 条状背景透明度
    particlesColor: "#4ECDC4"    // 浮动粒子颜色
}
```

### CSS变量
主要CSS变量定义在 `:root` 中，可以根据需要调整。

## 📱 响应式设计

- **桌面端**: 左右分栏布局
- **平板端**: 保持分栏，调整间距
- **手机端**: 上下堆叠布局

## 🔧 技术栈

- **HTML5**: 语义化标签
- **CSS3**: Flexbox布局、CSS变量、媒体查询、动画效果
- **JavaScript**: ES6+语法、DOM操作、动画控制
- **无框架**: 纯原生代码，轻量高效

## 📝 精简说明

本次精简删除了以下冗余内容，但保留了核心特效：

### 删除的功能
- ❌ 配置热重载功能
- ❌ 错误处理代码
- ❌ 性能监控代码
- ❌ 加载状态指示器

### 保留的核心功能
- ✅ 个人信息展示
- ✅ 设备库管理
- ✅ 友链网站展示
- ✅ 响应式布局
- ✅ 悬停效果
- ✅ 键盘导航支持
- ✅ 主题颜色配置
- ✨ 浮动粒子背景
- ✨ 装饰性动画元素
- ✨ 页面加载动画
- ✨ 触摸设备支持
- ✨ 背景动画效果

## 🌟 特效动画

### 浮动粒子
- 6个浮动粒子，不同位置和动画延迟
- 可自定义粒子颜色
- 平滑的上升旋转动画

### 背景动画
- 叶子背景图案的动态变化
- 条状背景的移动效果
- 渐变背景的呼吸动画

### 装饰元素
- 左右两侧的浮动装饰符号
- 悬停时的缩放和移动效果
- 平滑的动画过渡

### 页面加载动画
- 左侧个人资料的滑入效果
- 右侧内容的淡入动画
- 设备卡片的逐个出现效果

## 🌟 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**注意**: 这是一个精简版本，删除了不必要的功能，但保留了所有视觉特效和动画，确保用户体验不受影响。
