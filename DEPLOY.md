# 独立部署

## GitHub Pages：源码公开并自动部署

1. 在自己的 GitHub 账号或组织创建公开仓库，例如 `zyfera-academy`。
2. 上传本项目全部文件，包括隐藏目录 `.github/workflows/`。
3. 仓库默认分支使用 `main`；如使用其他名称，调整工作流里的分支设置。
4. 打开仓库 Settings → Pages，把 Source 设置为 GitHub Actions。
5. 在 Actions 运行 Deploy Zyfera Academy；每次推送到 `main` 也会触发。
6. 成功后从部署任务或 Settings → Pages 获取实际网址。

工作流只发布 `web/`，不发布源 Markdown 或本地项目说明。

[GitHub 官方部署说明](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)

## Cloudflare Pages：直接上传

1. 登录自己的 Cloudflare 账号，进入 Workers & Pages，选择 Pages 的直接上传功能。
2. 创建项目，并上传 `zyfera-academy-web.zip` 或 `web/` 中的静态资源。
3. 确认部署根目录包含 `index.html`，完成发布。
4. 在项目设置中按实际需要配置自有域名。

直接上传项目和 Git 自动部署项目是不同模式；如需每次提交自动发布，应一开始采用 Git 集成。

[Cloudflare 官方直接上传说明](https://developers.cloudflare.com/pages/get-started/direct-upload/)

## 自有服务器

把 `web/` 内容放到现有 Nginx、Apache、Caddy 或其他静态网站的根目录，并配置域名与 HTTPS。章节地址使用 `#chapter-数字`，不需要单页应用路由回退。

访问者不需要 ChatGPT 账号；托管账号只供站点维护者使用。
