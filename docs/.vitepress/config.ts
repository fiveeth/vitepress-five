import { defineConfig } from "vitepress";
import { nav } from "./common/en/navbar";
import { sidebar } from "./common/en/sidebar";
import { nav as navForChinese } from "./common/zh/navbar";
import { sidebar as sidebarForChinese } from "./common/zh/sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vitepress-five/',
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0'
      }
    ]
  ],
  locales: {
    root: {
      label: "English",
      lang: "en",
      title: "fiveeth",
      description: "my blog",
      themeConfig: {
        nav: nav,
        sidebar: sidebar,
        outline: {
          level: [2,6],
          label: 'On this page'
        },
      },
    },
    zh: {
      label: "中文",
      lang: "zh",
      title: "fiveeth",
      description: "我的博客",
      themeConfig: {
        nav: navForChinese,
        sidebar: sidebarForChinese,
        outline: {
          level: [2,6],
          label: '目录'
        }
      },
    },
  },
  themeConfig: {
    logo: "/logo.png",
    i18nRouting: true,
    algolia: {
      apiKey: "a4086edf8eebf8cc71a3828f97ef0033",
      indexName: "vitepress-five",
      // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
      appId: "R595FZTYPC"
    },
    socialLinks: [{ icon: "github", link: "https://github.com/fiveeth" }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present fiveeth'
    },
  }
});
