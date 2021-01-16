<template>
  <login-box :width="500">
    <template v-slot:content>
      <logo></logo>
      <div class="product_Info">
        제품 간략 소개 또는 설명 또는 안내 글<br>
        -<br>
        -<br>
        -<br>
        -<br>
        -<br>
        -<br>
        -<br>
        -<br>
        -<br>
        건의사항 시 이메일 aaa@aaa.com<br>
        오류 발생 시 문의 전화번호 000-0000-0000<br>
      </div>
      <form id="lisenceForm">
        <div class="registNum">
        <input v-model="registNum1"> - <input v-model="registNum2"> - <input v-model="registNum3">
        </div>
        <v-btn class="keyRegist_btn" depressed color="primary" v-on:click="lisence">인증키 등록</v-btn>
      </form>
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
      if(this.registNum1 != "1111" && this.registNum2 != "2222" && this.registNum3 != "3333"){
        alert('인증키를 다시 확인해 주세요');
      }
    }
  },

}
</script>
<style scoped>
.product_Info {
  width: 400px;
  height: 300px;
  /* background: #ff5e57; */
  margin: 0 auto;
}
.keyRegist_btn {
  width: 300px;
  height: 25px;
  margin-left: 20%;
  margin-top: 5%;
  margin-bottom: 5%;
}
input {
  border: blue 1px solid;
  width: 130px;
}
.registNum {
  margin-left: 9%;
  margin-top: 5%;
}
</style>