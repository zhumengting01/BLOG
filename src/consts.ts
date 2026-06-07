// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type {AnalyticsConfig} from "./types/analyticsTypes"

/**
 * title {string} website title
 * favicon {string} website favicon url
 * description {string} website description
 * author {string} author
 * avatar {string} Avatar used in the profile
 * motto {string} used in the profile
 * url {string} Website link
 * baseUrl {string} When using GitHubPages, you must enter the repository name, startWith '/', e.g. /repo_name
 * recentBlogSize {number} Number of recent articles displayed in the sidebar
 * archivePageSize {number} Number of articles on archive pages
 * postPageSize {number} Number of articles on blog pages
 * feedPageSize {number} Number of articles on feed pages
 * beian {string} Chinese policy
 * asideTagsMaxSize {number}
 *    0: disable,
 *    > 0: display the limited number of tags in the sidebar
 *    All tags will be displayed in single page "/tags".
 */
export const site = {
  title: '朱梦婷的blog', // required
  favicon: '/favicon.svg', // required
  description: '欢迎来到我的独立博客网站！',
  author: "朱梦婷", // required
  avatar: 'https://i-avatar.csdnimg.cn/f41aae3505c04a66a27b60ffde5e7604_Zmt01015621.jpg!1', // required
  url: 'https://astro-yi-nu.vercel.app', // required
  baseUrl: '', // When using GitHubPages, you must enter the repository name startWith '/'. e.g. '/astro-blog'
  motto: '行动胜于言语。',
  recentBlogSize: 5,
  archivePageSize: 25,
  postPageSize: 10,
  feedPageSize: 20,
  beian: '',
  asideTagsMaxSize: 0,
}

/**
 * busuanzi {boolean} link: https://busuanzi.ibruce.info/
 * lang {string} Default website language
 * codeFoldingStartLines {number}
 * ga {string|false}
 * memosUrl {string} memos server url
 * memosUsername {string} memos login name
 * memosPageSize {number} 10
 */
export const config = {
  lang: 'zh-cn' as 'en' | 'zh-cn' | 'zh-hant' | 'cs', // en | zh-cn | zh-hant | cs
  codeFoldingStartLines: 16, // Need to re-run the project to take effect

  // memos config
  memosUrl: '', // https://xxxx.xxx.xx
  memosUsername: '', // login name
  memosPageSize: 10, // number
}

/**
 * Navigator
 * name {string}
 * iconClass {string} icon style
 * href {string}  link url
 * target {string} optional "_self|_blank" open in current window / open in new window
 */
export const categories = [
  {
    name: "博客",
    iconClass: "ri-draft-line",
    href: "/blog/1",
  },
  // {
  //   name: "Memos",
  //   iconClass: "ri-quill-pen-line",
  //   href: "/memos",
  // },
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

/**
 * Personal link address
 */
export const infoLinks = [
  {
    icon: 'ri-mail-fill',
    name: '邮箱',
    outlink: 'mailto:2133709665@qq.com',
  },
  // {
  //   icon: 'ri-twitter-fill',
  //   name: '推特',
  //   outlink: '',
  // },
  // {
  //   icon: 'ri-instagram-fill',
  //   name: '照片墙',
  //   outlink: '',
  // },
  {
    icon: 'ri-github-fill',
    name: '代码仓库',
    outlink: 'https://github.com/zhumengting01/astro-yi',
  },
  {
    icon: 'csdn-icon',
    name: 'CSDN',
    outlink: 'https://blog.csdn.net/Zmt01015621',
  },
  // {
  //   icon: 'ri-rss-fill',
  //   name: 'RSS 订阅',
  //   outlink: '',
  // }
]

/**
 * donate
 * enable {boolean}
 * tip {string}
 * wechatQRCode: Image addresses should be placed in the public directory.
 * alipayQRCode: Image addresses should be placed in the public directory.
 * paypalUrl {string}
 */
export const donate = {
  enable: false,
  tip: "感谢请我喝咖啡！！！☕",
  wechatQRCode: "/WeChatQR.png",
  alipayQRCode: "/AliPayQR.png",
  paypalUrl: "https://paypal.me/xxxxxxxxxx",
}

/**
 * Friendship Links Page
 * name {string}
 * url {string}
 * avatar {string}
 * description {string}
 */
export const friendshipLinks =
  [
    // {
    //   name: "Cirry's Blog",
    //   url: 'https://cirry.cn',
    //   avatar: "https://cirry.cn/avatar.png",
    //   description: '前端开发的日常11111111111111111111111111111111'
    // },
  ]

/**
 * Comment Feature
 * enable {boolean}
 * type {string} required waline | giscus
 * walineConfig.serverUrl {string} server link
 * walineConfig.lang {string} link: https://waline.js.org/guide/features/i18n.html
 * walineConfig.pageSize {number} number of comments per page. default 10
 * walineConfig.wordLimit {number} Comment word s limit. When a single number is filled in, it 's the maximum number of comment words. No limit when set to 0
 * walineConfig.count {number} recent comment numbers
 * walineConfig.pageview {boolean} display the number of page views and comments of the article
 * walineConfig.reaction {string | string[]} Add emoji interaction function to the article
 * walineConfig.requiredMeta {string[]}  Set required fields, default anonymous
 * walineConfig.whiteList {string[]} set some pages not to display reaction
 */
export const comment = {
  enable: false,
  type: 'giscus', // waline | giscus,
  walineConfig: {
    serverUrl: "",
    lang: 'zh-cn',
    pageSize: 20,
    wordLimit: '',
    count: 5,
    pageview: true,
    reaction: true,
    requiredMeta: ["nick", "mail"],
    whiteList: ['/message/', '/friends/'],
  },

  // giscus config
  giscusConfig: {
    'data-repo': "",
    'data-repo-id': "",
    'data-category': "",
    'data-category-id': "",
    'data-mapping': "",
    'data-strict': "",
    'data-reactions-enabled': "",
    'data-emit-metadata': "",
    'data-input-position': "",
    'data-theme': "",
    'data-lang': "",
    'crossorigin': "",
  }

  //
}

/**
 * Analytics Feature Configuration
 *
 * This file centralizes the analytics configuration for the application.
 * It defines and exports the default settings for Umami and Google Analytics.
 */
export const analytics: AnalyticsConfig = {
  enable: false,
  umamiConfig: {
    enable: false,
    id: "",
    url: ""
  },
  gaConfig: {
    enable: false,
    id: ""
  },
  busuanzi: false,
};
