<template>
  <div>
    <v-app-bar
      app
      clipped-left
      color="cyan darken-2"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>인사</v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
        안녕하세요 <span>{{ username }}</span>님
      </div>
      <v-btn text>
        로그아웃
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      clipped
      app
    >
      <v-list-item-group
        active-class="cyan--text text--accent-4"
      >
        <v-expansion-panels accordion>
          <v-expansion-panel v-for="title in menu" :key="title.title">
            <v-expansion-panel-header>
              {{ title.title }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list-item v-for="subtitle in title.subMenu" :key="subtitle">
                <v-list-item-title>{{ subtitle }}</v-list-item-title>
              </v-list-item>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-list-item-group>
    </v-navigation-drawer>
    <v-main>
      <emp-list></emp-list>
    </v-main>
  </div>
</template>

<script>
import EmpList from '@/components/hr/EmpList';

export default {
  components: {
    EmpList
  },
  data: () => ({
    drawer: true,
    menu: [
      {title: '직원관리', subMenu: ['직원', '일용직']},
      {title: '근태관리', subMenu: ['근태관리']},
      {title: '급여', subMenu: ['급여']},
      {title: '휴가', subMenu: ['휴가자', '휴가신청', '휴가일수']},
      {title: '복지', subMenu: ['복지']},
      {title: '연말정산', subMenu: ['근태관리', '근태현황']},
      {title: '기타 추가 예정...', subMenu: []},
    ]
  }),
  computed: {
    username(){
      return this.$store.state.user.username
    }
  },

}
</script>

<style scoped>
.v-expansion-panel, .v-expansion-panel::before{
  box-shadow: none;
}
</style>