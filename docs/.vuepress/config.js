import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress/cli'
import {viteBundler} from '@vuepress/bundler-vite'

export default defineUserConfig({
    lang: 'zh-CN',

    title: 'MaxKnowledge',
    description: 'MaxKnowledge Site',
    base: '/',
    head: [
        ['link', {rel: 'icon', href: '/images/favicon.ico'}],
    ],

    theme: defaultTheme({
        logo: '/images/logo.png',

        navbar: [
            {text: '首页', link: '/'},
            {
                text: '入站必读',
                children: [
                    {text: '关于作者', link: '/入站必读/关于作者'},
                    {text: '文档排版约定', link: '/入站必读/文档排版约定'},
                    {text: '文档更新历史', link: '/入站必读/文档更新历史'},
                ],
            },
            {
                text: '计算机基础',
                children: [
                    {text: '计算机组成原理', link: '/计算机基础/计算机组成原理/'},
                ],
            },
            {
                text: '电路',
                link: '/电路/'
            },
            {
              text: '经验笔记',
              children: [
                  {text: 'MySQL', link: '/经验笔记/MySQL/'},
              ],
            },
        ],

        sidebar: {
            '/计算机基础/计算机组成原理/': [
                {
                    text: '计算机组成原理',
                    children: [
                        {text: '计算机发展史', link: '/计算机基础/计算机组成原理/计算机发展史'},
                    ],
                },
            ],
            '/电路/': [
                {
                    text: '电路',
                    children: [
                        {text: '基本逻辑门电路', link: '/电路/基本逻辑门电路'},
                    ],
                },
            ],
            '/经验笔记/MySQL/': [
                {
                    text: '经验笔记',
                    children: [
                        {text: '解决创建索引卡死的问题', link: '/经验笔记/MySQL/解决创建索引卡死的问题'},
                        {text: '解决PDI升级MySQL8的问题', link: '/经验笔记/MySQL/解决PDI升级MySQL8的问题'},
                    ],
                },
            ],
        },
    }),

    bundler: viteBundler(),
})
