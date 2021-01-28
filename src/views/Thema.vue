<template>
  <login-box :width="1000">
    <template v-slot:content>
      <v-container>
        <v-row class="mb-6">
          <h1>로고</h1>
          <v-spacer/>
          <div>
            <span>안녕하세요 ㅇㅇ님 </span>
            <v-btn
              outlined
              @click="btnLogout"
            >로그아웃</v-btn>
          </div>
        </v-row>
        <v-row no-gutters>
          <template v-for="(item, idx) in thema">
            <v-col :key="idx">
              <v-btn
                tile
                outlined
                width="100%"
                height="30vh"
                @click="$router.push(item.link)"
              >{{ item.value }}</v-btn>
            </v-col>
            <v-responsive
              v-if="idx === 1"
              :key="`width-${idx}`"
              width="100%"
            ></v-responsive>
          </template>
        </v-row>
      </v-container>
    </template>
  </login-box>
</template>

<script>

import LoginBox from '@/components/LoginBox'

export default {
  name: 'thema',
  components: {
   LoginBox,
  },
  data(){
    return{
      thema: [
        {value: "인사", link: "login"},
        {value: "회계", link: "login"},
        {value: "편의", link: "login"},
        {value: "시스템 관리", link: "login"},
      ]
    }
  },
  methods : {
    btnLogout() {
      this.$router.push('Login')
    },
  },
}
</script>

<style>

</style>