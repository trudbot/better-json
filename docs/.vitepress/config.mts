import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Better Json!",
  description: "trudbot的json小工具",
  head: [
    ['link', { rel: 'icon', href: 'https://trudbot-pic.oss-cn-hangzhou.aliyuncs.com/trubdot/1FCEBC130F5CD4909174FFACCD09B5B5.webp' }]
  ],
  base: '/repo/'
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://trudbot-pic.oss-cn-hangzhou.aliyuncs.com/trubdot/1FCEBC130F5CD4909174FFACCD09B5B5.webp',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'trudbot', link: 'https://trudbot.cn' }
    ],

    sidebar: [
      {
        text: 'npm包',
        items: [
          { text: 'Json 美化工具', link: '/json-format/index' },
        ]
      },
      {
        text: '浏览器扩展',
        items: [
          { text: 'Json数据自动格式化', link: '/auto-format/index' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/trudbot/better-json' }
    ]
  }
})
