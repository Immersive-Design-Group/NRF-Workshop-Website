# NRF Workshop Website

这是一个基于 Next.js 构建的研讨会网站，展示"Listening Through the Body: Combining Visual, Auditory, and Haptic Interaction For Designing a Concert Space for XR"活动信息。

## 功能特性

- 响应式设计，支持移动端和桌面端
- 现代化的 UI 设计
- 完整的活动信息展示
- 演讲者信息
- 日程安排
- 场地信息
- 组织者信息

## 技术栈

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS (通过自定义 CSS 实现)

## 安装和运行

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 在浏览器中打开 [http://localhost:3000](http://localhost:3000)

## 项目结构

```
├── app/
│   ├── globals.css      # 全局样式
│   ├── layout.tsx       # 根布局
│   └── page.tsx         # 主页面
├── components/          # React 组件
│   ├── Header.tsx       # 头部组件
│   ├── Hero.tsx         # 主标题区域
│   ├── About.tsx        # 关于研讨会
│   ├── Schedule.tsx     # 日程安排
│   ├── Speakers.tsx     # 演讲者
│   ├── Venue.tsx        # 场地信息
│   ├── Organizers.tsx   # 组织者
│   ├── Supporters.tsx   # 支持机构
│   └── Footer.tsx       # 页脚
├── package.json         # 项目配置
├── tsconfig.json        # TypeScript 配置
└── next.config.js       # Next.js 配置
```

## 自定义

您可以根据需要修改以下内容：

- 在 `components/` 目录中修改各个组件的内容
- 在 `app/globals.css` 中调整样式
- 更新 `app/page.tsx` 中的页面结构

## 部署

构建生产版本：
```bash
npm run build
```

启动生产服务器：
```bash
npm start
```
