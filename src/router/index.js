import { createRouter, createWebHistory } from 'vue-router'

import Shouye from '../views/shouye/Shouye.vue'

const routes = [
  {
    path: '/',
    redirect: '/shouye'
  },
  {
    path: '/shouye',
    name: 'Shouye',
    component: Shouye
  },
  {
    path: '/process',
    name : 'Process',
    component: () => import("../views/process/Process.vue") //路由懒加载
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
