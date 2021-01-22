<template>
  <login-box :width="344">

    <template v-slot:content>
    
        <div style="width=75px">
          <logo></logo>
        </div>
        <p>안녕하세요</p>
        <v-btn
          outlined
          plain
          @click="btnLogout"
        >로그아웃</v-btn>
   

      <v-form>
        <div>
          <v-btn
            outlined
            plain
            @click="btn1"
          >인사</v-btn>
          <v-btn
            outlined
            plain
            @click="btn2"
          >회계</v-btn>
        </div>
        <div>
          <v-btn
            outlined
            plain
            @click="btn3"
          >편의</v-btn>
          <v-btn
            outlined
            plain
            @click="btn4"
          >시스템관리</v-btn>
        </div>
      </v-form>

    </template>
  </login-box>
</template>

<script>
import Logo from '@/components/Logo'
import LoginBox from '@/components/LoginBox'

export default {
  name: 'thema',
  components: {
    Logo, LoginBox,
  },
  methods : {
    btnLogout() {
      this.$router.push('Login')
    },
    btn1(){
      this.$router.push('Login')
    },
    btn2(){
      this.$router.push('Login')
    },
    btn3(){
      this.$router.push('Login')
    },
    btn4(){
      this.$router.push('Login')
    },
  },
}
</script>

<style>

</style>