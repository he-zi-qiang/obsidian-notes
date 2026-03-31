import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "接口测试笔记",           // 站点标题
    pageTitleSuffix: " | he-zi-qiang",  // 页面标题后缀
    enableSPA: true,                     // 单页应用模式，页面切换更流畅
    enablePopovers: true,                // 悬浮预览双向链接
    analytics: null,                     // 暂不启用分析
    locale: "zh-CN",                     // 中文语言
    baseUrl: "he-zi-qiang.github.io/obsidian-notes",  // GitHub Pages 地址
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",         // 默认显示修改日期
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Noto Sans SC",          // 中文标题字体
        body: "Noto Sans SC",            // 中文正文字体
        code: "JetBrains Mono",          // 代码字体
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#284b63",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#1e1e2e",              // 深色背景（类 One Dark）
          lightgray: "#313244",
          gray: "#6c7086",
          darkgray: "#cdd6f4",
          dark: "#e4e4e7",
          secondary: "#89b4fa",          // 链接蓝色
          tertiary: "#a6e3a1",           // 辅助绿色
          highlight: "rgba(137, 180, 250, 0.15)",
          textHighlight: "#f9e2af88",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // CustomOgImages disabled - enable after deployment if needed
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
