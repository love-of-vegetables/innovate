import { createRouter, createWebHistory } from 'vue-router'
import Vue from 'vue'
import Router from 'vue-router'
import Shouye from '../views/shouye/Shouye.vue'
import CourseStu from '../views/course/CourseStu'
import Process from "../views/process/Process.vue"

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Shouye
  },
  {
    path: '/process',
    name : 'Process',
    component: Process
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
  // 党课党考学习模块
  {
    path: '/course',
    name: 'Course',
    component: () => import('@/views/course/course'),
    redirect: '/course/courseStu',
    children: [
      {
        path: 'courseStu',
        component: CourseStu,
      },
      {
        path: 'test',
        name: 'Test',
        component: () => import('../views/course/Test')
      },
      {
        path: 'record',
        name: 'Record',
        component: () => import('../views/course/Record')
      },
      {
        path: 'collect',
        name: 'Collect',
        component: () => import('../views/course/Collect')
      },
    ]
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
      },
      
    ]
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404')
  }
]


const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({
    y: 0
  }),
  routes,

})

export default router
