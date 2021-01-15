<template>
  <login-box :width="344">
    <template v-slot:content>
      <logo></logo>
      <p>회원 아이디와 비밀번호를 입력하시면 가입하신 이메일로 <strong>임시 비밀번호</strong>가 발송됩니다.</p>
        <v-form ref="form" 
          lazy-validation 
          v-model="valid"
        >
          <v-text-field
            v-model="id"
            label="아이디"
            :rules="idRules"
            required
            outlined
            dense
          ></v-text-field>
          <v-text-field
            v-model="email"
            label="이메일"
            :rules="emailRules"
            required
            outlined
            dense
          ></v-text-field>
          <v-btn
            :disabled="!valid"
            color="success"
            block
            @click="sendNewPw"
          >비밀번호 찾기</v-btn>
        </v-form>
    </template>
  </login-box>
</template>

<script>
import bus from '@/utils/bus'
import Logo from '@/components/Logo'
import LoginBox from '@/components/LoginBox'

export default {
  name: 'find_pw',
  components: {
    Logo, LoginBox,
  },
  data() {
    return{
      id: '',
      email: '',
      valid: true,
      idRules: [
        v => !!v || '아이디를 입력해주세요.',
      ],
      emailRules: [
        v => !!v || '이메일을 입력해주세요.',
        v => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(v) || '유효하지 않은 이메일 입니다.'
        },
      ],
    }
  },
  methods: {
    sendNewPw(){
      if(this.$refs.form.validate()) {
        this.$router.replace('login');
        bus.$emit('on:snack-bar', '비밀번호 변경 성공');
      }
    },
  }
}
</script>

<style>

</style>