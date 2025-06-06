# GoodGame.mom 游戏网站

## 项目概述

GoodGame.mom 是一个在线游戏分享平台，提供各种类型的网页游戏，包括射击游戏、冒险游戏、策略游戏等。该平台旨在为用户提供一个简单、方便的游戏体验，无需下载安装，直接在浏览器中即可游玩。

## 网站结构

网站主要包含以下页面：

1. **首页 (index.html)**
   - 展示热门游戏和游戏分类
   - 提供搜索功能和导航菜单
   - 支持中英文语言切换

2. **游戏列表页 (games-list.html)**
   - 以卡片形式展示所有游戏
   - 提供游戏筛选和搜索功能
   - 按类型分类游戏

3. **游戏页面 (games/[game-id]/index.html)**
   - 游戏介绍页面，包含游戏描述、操作说明等
   - 提供开始游戏的入口
   - 支持中英文语言切换

4. **游戏内容页 (games/[game-id]/game.html)**
   - 实际游戏内容页面
   - 当前包含三个游戏：太空冒险、丛林探险和城市建设者
   - 支持中英文语言切换

## 技术栈

- HTML5：页面结构
- CSS：页面样式和布局
- JavaScript：交互功能和动态内容
- Tailwind CSS：首页样式框架

## 游戏简介

### 太空冒险 (Space Adventure)

在这款刺激的太空射击游戏中，玩家将驾驶宇宙飞船在浩瀚的宇宙中探索，与外星生物战斗，收集能量晶体。游戏操作简单，适合所有年龄段的玩家。

### 丛林探险 (Jungle Adventure)

这是一款激动人心的平台跳跃游戏，玩家将扮演一位勇敢的探险家，深入神秘的丛林寻找失落的宝藏。游戏具有精美的像素风格画面和流畅的平台跳跃体验。

### 城市建设者 (City Builder)

在这款创意十足的城市规划游戏中，玩家将扮演一位城市规划师，从零开始建设理想城市。游戏提供自由的城市规划系统、丰富的建筑类型和城市发展模拟。

## 使用指南

### 游玩游戏

1. 在首页或游戏列表页中点击游戏卡片
2. 阅读游戏介绍和控制说明
3. 点击"开始游戏"按钮开始游玩

### 切换语言

1. 点击页面右上角的语言选择器
2. 选择中文或英文

## 项目目录结构

```
game/
├── index.html          # 网站首页
├── games-list.html     # 游戏列表页
├── README.md           # 项目说明
├── assets/             # 静态资源
│   ├── css/            # CSS样式文件
│   ├── js/             # JavaScript文件
│   │   └── languages.js # 语言配置文件
│   └── images/         # 图片资源
│       └── games/      # 游戏图片
│           ├── space-adventure/
│           ├── jungle-adventure/
│           └── city-builder/
└── games/              # 游戏页面
    ├── space-adventure/    # 太空冒险游戏
    │   ├── index.html      # 游戏介绍页
    │   └── game.html       # 游戏内容页
    ├── jungle-adventure/   # 丛林探险游戏
    │   ├── index.html      # 游戏介绍页
    │   └── game.html       # 游戏内容页
    └── city-builder/       # 城市建设者游戏
        ├── index.html      # 游戏介绍页
        └── game.html       # 游戏内容页
```

## 浏览器兼容性

网站适配所有主流现代浏览器，包括：
- Chrome
- Firefox
- Safari
- Edge

## 未来计划

1. 添加用户登录和注册功能
2. 实现游戏收藏和评分系统
3. 添加更多游戏类型和标签
4. 优化移动端体验
5. 扩展语言支持

## 联系方式

电子邮件：contact@goodgame.mom

## 版权信息

© 2025 GoodGame.mom - 在线游戏平台 