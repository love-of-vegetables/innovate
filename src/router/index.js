import { createRouter, createWebHistory } from 'vue-router'
import Vue from 'vue'
import Router from 'vue-router'
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
  },
  {
    path: '/information',
    name : 'Information',
    component: () => import("../views/information/Information.vue") 
  },
  {
    path: '/password',
    name : 'Passwoed',
    component: () => import("../views/password/Password.vue") 
  },
  {
    path: '/forgetpassword',
    name : 'Forgetpasswoed',
    component: () => import("../views/forgetpassword/Forgetpassword.vue") 
  },
  {
    path: '/examination',
    name : 'Examination',
    component: () => import("../views/examination/Examination.vue") 
  },
  {
    path: '/study',
    name : 'Study',
    component: () => import("../views/study/Study.vue") 
  },
  {
    path: '/volunteer',
    name : 'Volunteer',
    component: () => import("../views/volunteer/Volunteer.vue") ,
    children:[
      {
        path:'/Participating',
        name:'Participating',
        component:() => import("../views/volunteerinfor/Participating.vue"),
      },
      {
        path:'/Finish',
        name:'Finish',
        component:() => import("../views/volunteerinfor/Finish.vue"),
      },
      {
        path:'/myactivity',
        name:'myactivity',
        component:() => import("../views/volunteerinfor/myactivity.vue"),
      },
      
      {
        path:'/activity',
        name:'activity',
        component:() => import("../views/volunteerinfor/activity.vue"),
      },
      {
        path:'/apply',
        name:'apply',
        component:() => import("../views/volunteerinfor/apply.vue"),
      }
    ]
  
  }
  
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
