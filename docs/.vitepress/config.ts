import { defineConfig } from "vitepress";
import { nav } from "./common/en/navbar";
import { sidebar } from "./common/en/sidebar";
import { nav as navForChinese } from "./common/zh/navbar";
import { sidebar as sidebarForChinese } from "./common/zh/sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vitepress-five/',
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
    search: {
      provider: 'local'
    },
    socialLinks: [{ icon: "github", link: "https://github.com/fiveeth" }],
  }
});
