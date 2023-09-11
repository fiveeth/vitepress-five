import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
  {
    text: "首页",
    link: "/zh/",
  },
  {
    text: "前端",
    items: [
      {
        text: "html",
        link: "/zh/column/front-end/html/test",
      },
      {
        text: "css",
        link: "/zh/column/front-end/css/test",
      },
      {
        text: "javascript",
        link: "/zh/column/front-end/javascript/test",
      },
      {
        text: "框架",
        link: "/zh/column/front-end/framework/test",
      },
      {
        text: "http",
        link: "/zh/column/front-end/http/test",
      }
    ],
  },
  {
    text: "区块链",
    items: [
      {
        text: "solidity",
        link: "/zh/column/blockchain/solidity/test",
      },
      {
        text: "defi",
        link: "/zh/column/blockchain/defi/test",
      },
    ],
  },
  {
    text: "英语",
    items: [
      {
        text: '词汇积累',
        link: "/zh/column/english/vocabulary-accumulation/test",
      },
      {
        text: '日常用语',
        link: "/zh/column/english/everyday-phrases/test",
      },
      {
        text: '短文阅读',
        link: "/zh/column/english/reading/test",
      },
    ]
  },
];
