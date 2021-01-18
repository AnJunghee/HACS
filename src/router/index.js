import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/Login'),
  },
  {
    path: '/lisence_regist',
    name: 'LisenceRegist',
    component: () => import('@/views/login/LisenceRegist'),
  },
  {
    path: '/find_id',
    name: 'FindId',
    component: () => import('@/views/login/FindId'),
  },
  {
    path: '/find_pw',
    name: 'FindPw',
    component: () => import('@/views/login/FindPw'),
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('@/views/login/SignUp'),
  },
  {
    path: '/thema',
    name: 'Thema',
    component: () => import('@/views/Thema'),
  },
  {
    path: '/hr_emp',
    name: 'hr_emp',
    component: () => import('@/views/hr/HrEmp'),
  },
  {
    path: '*',
    component: () => import('@/views/PageNotFound'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router