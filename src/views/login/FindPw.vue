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
        <modal 
        :show="modal.show"
        :title="modal.title"
        :content="modal.content"
        :redirect="modal.redirect"
      ></modal>
    </template>
  </login-box>
</template>

<script>
import { validateEmail } from '@/utils/validation'
import Logo from '@/components/Logo'
import LoginBox from '@/components/LoginBox'
import Modal from '@/components/Modal'

export default {
  name: 'find_pw',
  components: {
    Logo, LoginBox, Modal,
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
      modal: {
        show: false,
        title: '비밀번호 찾기',
        content: '입력한 이메일로 임시 비밀번호를 발송했습니다.',
        redirect: 'login',
      }
    }
  },
  methods: {
    sendNewPw(){
      if(this.$refs.form.validate()) {
        this.modal.show = true;
      }
    },
  },
}
</script>