// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        resume: resolve(__dirname, 'resume.html'),
        skills: resolve(__dirname, 'skills.html'),
        about: resolve(__dirname, 'about.html'),
        projects: resolve(__dirname, 'projects.html')
      },
    },
  },
})