# GoodGame.mom 游戏网站

## 项目概述

GoodGame.mom 是一个在线游戏分享平台，提供各种类型的网页游戏，包括射击游戏、冒险游戏、策略游戏等。该平台旨在为用户提供一个简单、方便的游戏体验，无需下载安装，直接在浏览器中即可游玩。

## 网站结构

网站主要包含以下页面：

1. **首页 (index.html)**
   - 展示热门游戏、游戏分类和新游戏
   - 提供搜索功能和导航菜单

2. **游戏列表页 (games-list.html)**
   - 以卡片形式展示所有游戏
   - 提供游戏筛选和搜索功能

3. **游戏详情页 (game.html)**
   - 显示游戏的详细信息，包括描述、标签、操作说明等
   - 提供开始游戏的入口

4. **游戏页面 (games/[game-id]/index.html)**
   - 实际游戏内容页面
   - 当前包含三个游戏：太空冒险、丛林探险和城市建设者

5. **管理工具**
   - 游戏创建工具 (game-creator.html)：用于创建新游戏
   - 批量添加游戏工具 (add_games.html)：用于批量添加游戏

6. **网站导航页 (navigation.html)**
   - 提供网站所有功能模块的链接

## 技术栈

- HTML5：页面结构
- CSS：页面样式和布局
- JavaScript：交互功能和动态内容
- Tailwind CSS：首页样式框架

## 游戏数据结构

游戏数据保存在 `games-data.json` 文件中，每个游戏包含以下信息：

```json
{
  "id": "game-id",
  "title": "游戏标题",
  "description": "游戏描述",
  "iframe_url": "游戏iframe链接",
  "tags": ["标签1", "标签2"],
  "controls": {
    "movement": "移动控制",
    "action": "动作控制"
  },
  "screenshots": [
    "截图1链接",
    "截图2链接"
  ],
  "tips": [
    "游戏提示1",
    "游戏提示2"
  ],
  "story": "游戏背景故事",
  "related_games": [
    {
      "id": "相关游戏ID",
      "title": "相关游戏标题"
    }
  ]
}
```

## 使用指南

### 添加新游戏

1. **使用游戏创建工具**
   - 访问 `game-creator.html` 页面
   - 填写游戏信息表单
   - 点击"预览"可预览游戏页面
   - 点击"生成HTML"生成游戏HTML文件

2. **批量添加游戏**
   - 访问 `add_games.html` 页面
   - 使用JSON格式输入多个游戏信息
   - 点击"批量添加"添加所有游戏

### 修改现有游戏

1. 直接编辑 `games-data.json` 文件
2. 更新对应游戏目录中的 `index.html` 文件

## 项目目录结构

```
game/
├── index.html          # 网站首页
├── games-list.html     # 游戏列表页
├── game.html           # 游戏详情页
├── game-creator.html   # 游戏创建工具
├── add_games.html      # 批量添加游戏工具
├── navigation.html     # 网站导航页
├── games-data.json     # 游戏数据
├── README.md           # 项目说明
├── assets/             # 静态资源
│   ├── css/            # CSS样式文件
│   ├── js/             # JavaScript文件
│   └── images/         # 图片资源
│       └── games/      # 游戏图片
│           ├── space-adventure/
│           ├── jungle-adventure/
│           └── city-builder/
└── games/              # 游戏页面
    ├── space-adventure/    # 太空冒险游戏
    ├── jungle-adventure/   # 丛林探险游戏
    └── city-builder/       # 城市建设者游戏
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

## 联系方式

电子邮件：contact@goodgame.mom

## 版权信息

© 2025 GoodGame.mom - 最好玩的在线游戏站 