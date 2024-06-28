import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress/cli'
import {viteBundler} from '@vuepress/bundler-vite'

export default defineUserConfig({
    lang: 'zh-CN',

    title: 'MaxKnowledge',
    description: 'MaxKnowledge Site',

    theme: defaultTheme({
        logo: 'https://vuejs.press/images/hero.png',

        navbar: [
            {text: '首页', link: '/'},
            {
                text: '入站必读',
                children: [
                    {text: '关于作者', link: '/入站必读/关于作者'},
                    {text: '文档排版约定', link: '/入站必读/文档排版约定'},
                    {text: '文档书写计划', link: '/入站必读/文档书写计划'},
                ],
            },
            {
                text: '计算机基础',
                children: [
                    {text: '计算机组成原理', link: '/计算机基础/计算机组成原理/'},
                ],
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
                        {text: '计算机科学速成课', link: '/计算机基础/计算机组成原理/计算机科学速成课'},
                    ],
                },
            ],
            '/经验笔记/MySQL/': [
                {
                    text: '经验笔记',
                    children: [
                        {text: '解决创建索引卡死的问题', link: '/经验笔记/MySQL/解决创建索引卡死的问题'},
                    ],
                },
            ],
        },
    }),

    bundler: viteBundler(),
})
