export const site = {
  title: '朱梦婷的BLOG',
  favicon: '/favicon.svg',
  description: '欢迎来到我的独立博客网站！',
  author: "朱梦婷",
  avatar: 'https://i-avatar.csdnimg.cn/f41aae3505c04a66a27b60ffde5e7604_Zmt01015621.jpg!1',
  url: 'https://astro-yi-nu.vercel.app',
  baseUrl: '',
  motto: '行动胜于言语。',
  recentBlogSize: 5,
  archivePageSize: 25,
  postPageSize: 10,
  feedPageSize: 20,
  beian: '',
  asideTagsMaxSize: 0,
}

export const config = {
  lang: 'zh-cn' as 'en' | 'zh-cn' | 'zh-hant' | 'cs',
  codeFoldingStartLines: 16,
}

export const categories = [
  {
    name: "博客",
    iconClass: "ri-draft-line",
    href: "/blog/1",
  },
  {
    name: "归档",
    iconClass: "ri-archive-line",
    href: "/archive/1",
  },
  {
    name: "留言",
    iconClass: "ri-chat-1-line",
    href: "/message",
  },
  {
    name: "搜索",
    iconClass: "ri-search-line",
    href: "/search",
  },
  {
    name: "动态",
    iconClass: "ri-lightbulb-flash-line",
    href: "/feed/1",
  },
  {
    name: '关于',
    iconClass: 'ri-information-line',
    href: '/about',
  }
]

export const infoLinks = [
  {
    icon: 'ri-mail-fill',
    name: '邮箱',
    outlink: 'mailto:2133709665@qq.com',
  },
  {
    icon: 'ri-github-fill',
    name: '代码仓库',
    outlink: 'https://github.com/zhumengting01/astro-yi',
  },
  {
    icon: 'csdn-icon',
    name: 'CSDN',
    outlink: 'https://blog.csdn.net/Zmt01015621',
  }
]
