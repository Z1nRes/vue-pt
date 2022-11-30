import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../view/IndexView.vue'
import LoginView from '../view/LoginView.vue'
import CartView from '../view/CartView.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/page-not-found',
    component: { render: (h) => h('div', '404! Page Not Found!') }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
