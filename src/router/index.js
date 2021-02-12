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
    path: '/hr',
    redirect: '/hr/emp_list',
    name: 'hr',
    component: () => import('@/views/hr/HR'),
    children: [
      { path: 'emp_list', component: () => import('@/components/hr/EmpList') },
      { path: 'emp_tmp', component: () => import('@/components/hr/EmpTmp') },
      { path: 'commute', component: () => import('@/components/hr/Commute') },
      { path: 'salary', component: () => import('@/components/hr/Salary') },
      { path: 'vac_list', component: () => import('@/components/hr/VacList') },
      { path: 'vac_request', component: () => import('@/components/hr/VacRequest') },
      { path: 'vac_cnt', component: () => import('@/components/hr/VacCnt') },
      { path: 'welfare_list', component: () => import('@/components/hr/WelfareList') },
    ],
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