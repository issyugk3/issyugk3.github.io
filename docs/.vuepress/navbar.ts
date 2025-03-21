import { defineNavbarConfig } from 'vuepress-theme-plume'

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/', icon: 'material-symbols:home-outline'},
  { text: 'Blog', link: '/blog/', icon:'material-symbols:speaker-notes-outline-rounded'},
  {
    text: 'About',
    icon:'material-symbols:article-person-outline',
    items: [
      { text: 'About Me', link: '/about/aboutme.md', icon:'material-symbols:person'
         },
      { text: 'Experience', link: '/about/experience/README.md',
        icon:'material-symbols:contract-edit-outline-rounded'
       }

    ]
  },
  {
    text: 'Notes',
    icon:'material-symbols:stylus-note-outline-rounded',
    items: [{ text: 'Demo', link: '/notes/demo/README.md' }]
  },
  
  
  
])
