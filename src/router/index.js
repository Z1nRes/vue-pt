import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '../components/IndexPage.vue'
import LoginPage from '../components/LoginPage.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexPage
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
