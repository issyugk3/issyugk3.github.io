import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar} from './navbar'
import { enNotes } from './notes'


const kaggle_svg = '<svg height="512px" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="comp_x5F_189-kaggle"><g><path d="    M385.708,472.847L254.742,310.082l125.578-121.534c2.334-2.426,1.526-9.433-4.761-9.433h-62.16c-3.145,0-6.288,1.618-9.433,4.761    L185.128,303.973V36.369c0-4.491-2.247-6.737-6.738-6.737h-46.618c-4.492,0-6.737,2.246-6.737,6.737V475.54    c0,4.491,2.246,6.738,6.737,6.738h46.618c4.491,0,6.738-2.247,6.738-6.738v-97.91l27.666-26.317l99.257,126.294    c2.695,3.145,5.839,4.762,9.432,4.762h60.095c3.143,0,4.939-0.899,5.389-2.696L385.708,472.847z" style="fill:none;stroke:#000000;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"/></g></g><g id="Layer_1"/></svg>'


/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://theme-plume.vuejs.press/plume.png',

  appearance: true,  // 配置 深色模式

  social: [
    { icon: 'github', link: 'https://github.com/issyugk3' },
    { icon: 'x', link:'https://x.com/issyugk3'},
    { icon: 'linkedin', link:''},
    { icon: {svg:kaggle_svg, name:'kaggle'}, link:'https://kaggle.com/issyugk3'},

  ],
  // navbarSocialInclude: ['github'], // 允许显示在导航栏的 social 社交链接
  // aside: true, // 页内侧边栏， 默认显示在右侧
  // outline: [2, 3], // 页内大纲， 默认显示 h2, h3

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  // copyright: true,

  // prevPage: true,   // 是否启用上一页链接
  // nextPage: true,   // 是否启用下一页链接
  // createTime: true, // 是否显示文章创建时间

  /* 站点页脚 */
  footer: {
    message: 'Powered by VuePress',
    copyright: '',
  },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  // transition: {
  //   page: true,        // 启用 页面间跳转过渡动画
  //   postList: true,    // 启用 博客文章列表过渡动画
  //   appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  // },

  locales: {
    '/': {
      /**
       * @see https://theme-plume.vuejs.press/config/basic/#profile
       */
      profile: {
        avatar: '/self.JPG',
        name: 'issyugk3-zxw',
        description: 'At least it is not too late.',
        circle: true,
        location: 'Hangzhou, China',
        organization: 'Zhejiang Uni. of Technolgy',
      },

      navbar: enNavbar,
      notes: enNotes,
      
      

      /**
       * 公告板
       * @see https://theme-plume.vuejs.press/guide/features/bulletin/
       */
       // bulletin: {
       //   layout: 'top-right',
       //   contentType: 'markdown',
       //   title: '',
       //   content: '',
       // },
    },
  },
})
