import Vue from 'vue'
import VueRouter from 'vue-router'
// 테마(HOME)
import Thema from '@/views/Thema'
// 로그인 영역
import Login from '@/views/login/Login';
import LisenceRegist from '@/views/login/LisenceRegist'
import FindId from '@/views/login/FindId'
import FindPw from '@/views/login/FindPw'
import SignUp from '@/views/login/SignUp'
// 인사(HR) 영역
import HrEmp from '@/views/hr/HrEmp'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/lisence_regist',
    name: 'LisenceRegist',
    component: LisenceRegist,
  },
  {
    path: '/find_id',
    name: 'FindId',
    component: FindId,
  },
  {
    path: '/find_pw',
    name: 'FindPw',
    component: FindPw,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/thema',
    name: 'Thema',
    component: Thema
  },
  {
    path: '/hr_emp',
    name: 'hr_emp',
    component: HrEmp,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
