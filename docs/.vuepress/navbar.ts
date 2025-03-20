import { defineNavbarConfig } from 'vuepress-theme-plume'

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/' },
  { text: 'Blog', link: '/blog/' },
  {
    text: 'About',
    items: [
      { text: 'About Me', link: '/about/about/README.md' },
      { text: 'Experience', link: '/about/experience/README.md' }

    ]
  },
  {
    text: 'Notes',
    items: [{ text: 'Demo', link: '/notes/demo/README.md' }]
  },
  
  
  
])
