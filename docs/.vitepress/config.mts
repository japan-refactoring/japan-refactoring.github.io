import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "日本リファクタリング",
  titleTemplate: ':title - 日本リファクタリング',
  description: "生産性を高めて日本を豊かにする",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  lang: 'ja-JP',
  srcDir: './src',
  assetsDir: 'static',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'ホーム', link: '/' },
      { text: '方針', link: '/policy' },
      { text: '政策', link: '/policy_recommendations' },
    ],

    sidebar: [
      {
        text: '方針',
        items: [
          { text: 'HRTの重視', link: '/policy/hrt' },
          { text: '批判よりも改善提案', link: '/policy/improvement' },
          { text: 'ITを最大限活用', link: '/policy/use-it' },
          { text: '完璧を求めない', link: '/policy/no-perfection' },
        ]
      },
      {
        text: '政策',
        items: [
          { text: 'HRTの重視', link: '/policy/hrt' },
          { text: '批判よりも改善提案', link: '/policy/improvement' },
          { text: 'ITを最大限活用', link: '/policy/use-it' },
          { text: '完璧を求めない', link: '/policy/no-perfection' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/japan-refactoring' },
      { icon: 'x', link: 'https://twitter.com/home' },
    ]
  }
})
