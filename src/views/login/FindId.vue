<template>
  <login-box :width="344">
    <template v-slot:content>
      <logo></logo>
      <p>회원 가입하실 때 작성한 이메일을 입력해주세요. <br/>이메일이 일치하면 <strong>아이디의 일부</strong>를 확인하실 수 있습니다.</p>
        <v-form ref="form" 
          lazy-validation 
          v-model="valid"
        >
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
  name: 'find_id',
  components: {
    Logo, LoginBox,
  },
  data() {
    return{
      valid: true,
      email: '',
      emailRules: [
        v => !!v || '이메일을 입력해주세요.',
        v => validateEmail(v),
      ],
    }
  },
  methods: {
    sendNewPw(){
      if(this.$refs.form.validate()) {
        // 팝업 보여주고
        // 이동
        this.$router.replace('login');
        bus.$emit('on:snack-bar', '확인하신 아이디로 로그인을 시도해주세요.');
      }
    },
  },
}
</script>