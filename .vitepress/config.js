// .vitepress/config.js
export default {
  title: "友人帐整合包发布页",
  description: "官方发布页 | 更新日志 | 问题反馈",
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '更新日志', link: '/changelog' },
      { text: '加入我们', link: '/join' },
      { text: '反馈', link: '/feedback' }
    ],
    
    sidebar: {
      '/changelog': []
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/SuppeRovo' }
    ],
    
    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2026'
    }
  }
}