<template>
  <login-box :width="1000">

    <template v-slot:content>
        
        <div style='width:250px; float:right'>
          <span>안녕하세요 ㅇㅇ님 </span>
          <v-btn
            outlined
            @click="btnLogout"
          >로그아웃</v-btn>
        </div>

        <br>
        <br>

        <div>
          <v-btn
            outlined
            height="300px"
            width="484px"
            @click="btn1"
          >인사</v-btn>
          <v-btn
            outlined
            height="300px"
            width="484px"
            @click="btn2"
          >회계</v-btn>
          <v-btn
            outlined
            height="300px"
            width="484px"
            @click="btn3"
          >편의</v-btn> 
          <v-btn
            outlined
            height="300px"
            width="484px"
            @click="btn4"
          >시스템관리</v-btn>
          
        </div>


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