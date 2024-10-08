import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
    title: "Vue3+TypeScript学习文档",
    description: "学习指南",
    themeConfig: {
        siteTitle: "前端学习",
        logo: "/assets/1.jpg",
        nav:[
            {text:"首页",link:"/"},
            {text:"指南",link:"guide"},
            {text:"Vue3 学习",link:"vue3study"},
        ],
        socialLinks: [
            {icon:"github",link:"https://github.com/1729328500/vue3-ts-docs"}
        ],
        sidebar: {
          "/guide/":[{
            text: "开始",
            collapsible: true,
            items: [
                {text: "介绍", link:"/guide/"},
                {text: "安装", link:"/guide/installation"},
                {text: "基本概念", link:"/guide/concepts"},

            ]
          }] ,
          "/vue3study/":[{
            text: "Vue3 学习",
            items: [
                {text: "介绍", link:"/guide/"},
            ]
          }]
        },
        footer: {
            message:"用心学习 Vue3",
            copyright: "Copyright 2024 whyh"
        }

    }
})
