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
  },
  {
    path: '/login',
    name : 'Login',
    component: () => import("../views/login/Login.vue") 
  },
  {
    path: '/register',
    name : 'Register',
    component: () => import("../views/register/Register.vue") 
<<<<<<< HEAD
  },
  {
    path: '/course',
    name: 'Course',
    component: () => import("@/views/course/Course.vue")
=======
>>>>>>> 1ba0c158bd0fc3854aaff2d5b50501a628e35b05
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
