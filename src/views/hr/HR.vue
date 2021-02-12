<template>
  <div>
    <app-side-bar :menu="menu"></app-side-bar>
  </div>
</template>
<script>
import AppSideBar from '@/components/AppSideBar'

export default {
  components: {
    AppSideBar
  },
  data: () => ({
    menu: [
      { 
        title: '직원관리', 
        subMenu: [
          { title: '직원', link: 'emp_list'},          
          { title: '일용직', link: 'emp_tmp'},          
        ]
      },
      { 
        title: '근태관리', 
        subMenu: [
          { title: '근퇴관리', link: 'commute'},
        ]
      },
      { 
        title: '급여', 
        subMenu: [
          { title: '급여', link: 'salary'},
        ]
      },
      { 
        title: '휴가', 
        subMenu: [
          { title: '휴가자', link: 'vac_list'},
          { title: '휴가신청', link: 'vac_request'},
          { title: '휴가일수', link: 'vac_cnt'},
        ]
      },
      { 
        title: '복지', 
        subMenu: [
          { title: '복지', link: 'welfare_list'},
        ]
      },
      { 
        title: '기타 추가 예정...', 
        subMenu: []
      },
    ]
  }),
}
</script>

