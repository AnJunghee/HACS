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
            color="primary"
            block
            @click="sendNewPw"
          >비밀번호 찾기</v-btn>
        </v-form>
    </template>
  </login-box>
</template>

<script>
import bus from '@/utils/bus'
import { validateEmail } from '@/utils/validation'
import Logo from '@/components/Logo'
import LoginBox from '@/components/LoginBox'

export default {
  name: 'find_pw',
  components: {
    Logo, LoginBox,
  },
  data() {
    return{
      valid: true,
      id: '',
      email: '',
      idRules: [
        v => !!v || '아이디를 입력해주세요.',
      ],
      emailRules: [
        v => !!v || '이메일을 입력해주세요.',
        v => validateEmail(v),
      ],
    }
  },
  methods: {
    sendNewPw(){
      if(this.$refs.form.validate()) {
        this.$router.replace('login')
        bus.$emit('on:snack-bar', '변경된 비밀번호로 로그인을 시도해주세요.')
      }
    },
  },
}
</script>