<template>
  <login-box :width="400">
    <template v-slot:content>
      <logo></logo>
      <v-form ref="form" 
        lazy-validation 
        v-model="valid"
      >
        <v-text-field
          label="ID" 
          prepend-icon="mdi-account"
          v-model="id"
          :rules="idRules"
          filled
        ></v-text-field>
        <v-text-field 
          label="PASSWORD" 
          type="password" 
          prepend-icon="mdi-lock"
          v-model="pw"
          :rules="pwRules"
          filled
        ></v-text-field>
        <v-btn 
          color="primary"
          large
          block
          @click="login"
          :disabled="!valid"
        >로그인
        </v-btn>
      </v-form>
    </template>
    <template v-slot:actions>
      <v-btn text color="primary" @click="btnFindid">아이디 찾기</v-btn>
      <v-btn text color="primary" @click="btnFindpw">비밀번호 찾기</v-btn>
      <v-btn text color="primary" @click="btnSignup">회원가입</v-btn>
    </template>
  </login-box>
</template>

<script>
import bus from '@/utils/bus'
import Logo from '@/components/Logo'
import LoginBox from '@/components/LoginBox'

export default {
  name: 'login',
  components: {
    Logo, LoginBox,
  },
  data() {
    return {
      valid: true,
      id : '',
      pw : '',
      idRules: [
        v => !!v || '아이디를 입력해주세요.',
      ],
      pwRules: [
        v => !!v || '비밀번호를 입력해주세요.',
      ],
    }
  },
  methods: {
    login() {
      if(this.$refs.form.validate()) {
        this.$router.push('thema')
        bus.$emit('on:snack-bar', '로그인에 성공하였습니다.')
      }
    },
    btnFindid() {
      this.$router.push('find_id')
    },
    btnFindpw() {
      this.$router.push('find_pw')
    },
    btnSignup() {
      this.$router.push('signup')
    },
  },
}
</script>

<style>

</style>