import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Front End",
    items: [
      {
        text: "html",
        link: "/column/front-end/html/test",
      },
      {
        text: "css",
        link: "/column/front-end/css/test",
      },
      {
        text: "javascript",
        link: "/column/front-end/javascript/test",
      },
      {
        text: "framework",
        link: "/column/front-end/framework/test",
      },
      {
        text: "http",
        link: "/column/front-end/http/test",
      }
    ],
  },
  {
    text: "BlockChain",
    items: [
      {
        text: "solidity",
        link: "/column/blockchain/solidity/test",
      },
      {
        text: "defi",
        link: "/column/blockchain/defi/test",
      },
    ],
  },
  {
    text: "English",
    items: [
      {
        text: 'vocabulary accumulation',
        link: "/column/english/vocabulary-accumulation/test",
      },
      {
        text: 'everyday phrases',
        link: "/column/english/everyday-phrases/test",
      },
      {
        text: 'reading',
        link: "/column/english/reading/test",
      },
    ]
  },
];
