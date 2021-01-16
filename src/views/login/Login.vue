<template>
  <login-box :width="360">
    <template v-slot:content>
      <logo></logo>
      <div>
        <v-text-field
          label="ID" prepend-icon="mdi-account"
          placeholder="아이디를 입력하세요"
          v-model="user.id"
          filled></v-text-field>
        <v-text-field 
          label="PASSWORD" type="password" prepend-icon="mdi-lock"
          placeholder="비밀번호를 입력하세요"
          v-model="user.password"
          filled></v-text-field>
      <v-btn block v-on:click="login()">로그인</v-btn>
      </div>
      <div>
        <v-btn text v-on:click="btn_findid">아이디 찾기 </v-btn>
        <v-btn text v-on:click="btn_findpw">비밀번호 찾기</v-btn>
        <v-btn text v-on:click="btn_signup">회원가입</v-btn>
      </div>
    </template>
  </login-box>
</template>

<script>
import Logo from '@/components/Logo'
import LoginBox from '@/components/LoginBox'

export default {
  name: 'login',
  components: {
    Logo, LoginBox,
  },
  data() {
    return {
      user : {
        id : '',
        password : ''
      }
    }
  },
  methods: {
    login : function() {
      if(this.user.id=='') {
        alert('아이디를 입력해주세요.');
        return;
      } 
      if(this.user.password=='') {alert('비밀번호를 입력해주세요.');return;}
      if(this.user.id=='admin' && this.user.password=='1234') {
        this.$router.push('thema');
        return;
      } else {alert('회원 정보가 일치하지 않습니다. 다시 입력해주세요.');return;}
    },
    btn_findid: function() {
      this.$router.push('/find_id')
    },
    btn_findpw: function() {
      this.$router.push('/find_pw')
    },
    btn_signup: function() {
      this.$router.push('/signup')
    }
  },
}
</script>

<style>

</style>