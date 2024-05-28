import Comunidade from '@/components/Comunidade.vue'
import AboutView from '@/views/AboutView.vue'
import Home from '@/views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: AboutView },
    { path: '/comunidade', component: Comunidade }
  ]
})

export default router
