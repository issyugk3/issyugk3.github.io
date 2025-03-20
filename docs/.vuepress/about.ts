import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

/* =================== locale: en-US ======================= */

const enAboutNote = defineNoteConfig({
  dir: 'about',
  link: '/about',
  sidebar: ['About Me'],
})
const enExperienceNote = defineNoteConfig({
    dir: 'experience',
    link: '/experience',
    sidebar: ['Timeline','Awards'],
  })
export const enAbout = defineNotesConfig({
  dir: 'about',
  link: '/',
  notes: [enAboutNote, enExperienceNote],
})