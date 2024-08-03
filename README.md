<h1 align="center">
Air Conditioner
</h1>

<p align="center">
<a href="https://github.com/YunYouJun/air-conditioner/actions" target="_blank">
<img src="https://img.shields.io/badge/Github-passing-d021d6?style=flat&logo=GitHub" alt="GitHub Pages" />
</a>
</p>

<p align="center">
中文文档 | <a href="./README.en.md">English Docs</a>
</p>

<p align="center">
云空调，便携小空调，为你的夏日带去清凉！
</p>
<br>

该项目创意来自 [云游君](https://www.yunyoujun.cn/), 使用 VUE3 + VITE + TS 构建, 未使用任何 UI 框架，无多余样式资源，打包后仅 84kb。

- 样板房：<https://air-conditioner-soxo.pages.dev/>

## Features

### 优势

- 🕐 随时随地打开空调
- 📱 便携
- 🔋 低功耗（使用 HTML CSS 而非 Canvas 绘制）
- 🔊 静音
- 🎮 操作简单
- 🔧 安装便捷

### 劣势

- 💨 没有风

## 安装

### iframe

```html
<iframe height="740" src="https://loquacious-bienenstitch-58539b.netlify.app/"></iframe>
```

您可以快速为您的网站安装空调。


## Dev

```bash
# 开发预览
npm run dev

# 构建项目
npm run build
# ./build
```

## Todo

- [x] 空调
  - [x] 能耗标签
  - [x] 温度范围（16-31˚C）
  - [x] 风 css
  - [x] 音效
    - [x] 按钮
    - [x] 工作声
    - [ ] 接入 [喜马拉雅](https://m.ximalaya.com/sleepaudio/6?mixedTrackIds=331526646&utm_source=smxkt) 更多音效
- [x] 适应系统的亮暗模式

## Ref

- 数字字体: [Digital 7](https://www.dafont.com/digital-7.font)，Free for personal use
- 空调工作声: [Air Extractor Fan | freesound](https://freesound.org/people/InspectorJ/sounds/403664/)
