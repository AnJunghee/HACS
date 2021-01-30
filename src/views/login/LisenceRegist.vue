<template>
  <login-box :width="500">
    <template v-slot:content>
      <logo></logo>
      <v-sheet
        color="white"
        height="200"
        width="465"
      >
      제품 간략 소개 또는 설명 또는 안내 글<br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      건의사항 시 이메일 <a>aaa@aaa.com</a><br>
      오류 발생 시 문의 전화번호 000-0000-0000<br>
      </v-sheet>

      <v-text-field
        outlined
        v-model="registNum1"
      ></v-text-field>
      <v-text-field
        outlined
        v-model="registNum2"
      ></v-text-field>
      <v-text-field
        outlined
        v-model="registNum3"
      ></v-text-field>

        <v-btn
          block
          color="primary"
          outlined
          @click="lisence"
        >인증키 등록</v-btn>
    
    </template>
  </login-box>
</template>

<script>
import Logo from '@/components/Logo'
import LoginBox from '@/components/LoginBox'

export default {
  name: 'lisence_regist',
  components: {
    Logo, LoginBox,
  },
  data () {
    return {
      registNum1: "",
      registNum2: "",
      registNum3: "",
    }
  },
  methods: {
    lisence() {
      if(this.registNum1 != "1111" || this.registNum2 != "2222" || this.registNum3 != "3333"){
        alert('인증키를 다시 확인해 주세요')
      }
      else{
        alert('인증키 성공')
      }
    },
  },

}
</script>
<style scoped>

</style>