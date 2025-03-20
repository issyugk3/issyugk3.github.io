export const blogPostData = [{"path":"/zh/article/nn5gc4w8/","title":"Markdown","categoryList":[{"id":"5ebeb6","sort":10000,"name":"preview"}],"tags":["markdown"],"createTime":"2025/03/20 10:55:35","lang":"zh-CN","excerpt":""},{"path":"/zh/article/9o73k78r/","title":"自定义组件","categoryList":[{"id":"5ebeb6","sort":10000,"name":"preview"}],"tags":["预览","组件"],"createTime":"2025/03/20 10:55:35","lang":"zh-CN","excerpt":""},{"path":"/article/hoe91jfu/","title":"Markdown","categoryList":[{"id":"5ebeb6","sort":10000,"name":"preview"}],"tags":["markdown"],"createTime":"2025/03/20 10:55:35","lang":"en-US","excerpt":""},{"path":"/article/967cguxw/","title":"Custom Component","categoryList":[{"id":"5ebeb6","sort":10000,"name":"preview"}],"tags":["preview","component"],"createTime":"2025/03/20 10:55:35","lang":"en-US","excerpt":""}]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogPostData) {
    __VUE_HMR_RUNTIME__.updateBlogPostData(blogPostData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ blogPostData }) => {
    __VUE_HMR_RUNTIME__.updateBlogPostData(blogPostData)
  })
}
