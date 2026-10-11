# Zyfera Academy

**A StarPeak Learning Hub · 星峰学习中心**

[在线学习](https://wynnttt.github.io/zyfera-academy/) · [开源仓库](https://github.com/wynnttt/zyfera-academy)

一个中文 Token 中转站学习网站，覆盖行业链、上游采购、API、计费、支付、稳定运行、数据安全与经营。

## 功能

- 14章课程、全文关键词筛选和章节导航。
- 每章自测题及解释。
- 可交互调用成本计算器。
- 浏览器本地学习进度、深色模式和响应式布局。

## 独立运行

网站使用原生 HTML、CSS 和 JavaScript，不需要 ChatGPT 登录、OpenAI API Key、后端服务、数据库或 npm 依赖。所有运行资源在 `web/` 中；资料中的外部链接仅在点击后打开。学习进度保存在当前浏览器，不跨设备同步。

安装 Node.js 后在项目目录运行：

```sh
node server.mjs
```

打开 `http://127.0.0.1:8765`。也可以使用任意静态 HTTP 服务器提供 `web/` 目录。

## 部署

静态网站根目录为 `web/`，没有构建步骤。可以部署到 GitHub Pages、Cloudflare Pages 或自己的服务器。具体步骤见 [DEPLOY.md](DEPLOY.md)。上传部署时选择 `web/` 中的文件，确保部署根目录直接包含 `index.html`。

## 修改课程

编辑 `content/guide.md`，然后运行：

```sh
python build-content.py
```

生成的 `web/content.js` 已纳入项目，访问和部署不需要 Python。课程顺序改变时，应同步更新 `web/app.js` 中的自测题与课程卡片说明。增删课程时还需调整14章相关计数与进度逻辑。

修改页面：`web/index.html`；修改样式：`web/style.css`；修改交互：`web/app.js`。

## 检查

```sh
node --check web/app.js
node --check web/content.js
node --check server.mjs
```

再在浏览器检查章节、自测、计算器、搜索和进度保存。课程资料核实日期为2026年10月11日；实际模型价格、支付和服务条款需持续核实原始资料。

## 开源与署名

MIT License，见 [LICENSE](LICENSE)。品牌 **Zyfera** 结合梓实、文远和峰的名字元素，**StarPeak** 对应星峰。项目发起成员：殷梓实、郭峰、张文远。

网站由 GitHub Pages 独立托管，任何人都可以访问；更新 main 分支后自动部署。源码可下载并部署到自己的静态服务器。
