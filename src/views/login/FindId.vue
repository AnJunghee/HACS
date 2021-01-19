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
          @click="sendNewId"
        >아이디 찾기</v-btn>
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
  name: 'find_id',
  components: {
    Logo, LoginBox, Modal,
  },
  data() {
    return{
      valid: true,
      email: '',
      emailRules: [
        v => !!v || '이메일을 입력해주세요.',
        v => validateEmail(v),
      ],
      modal: {
        show: false,
        title: '아이디 찾기',
        content: '아이디는 xxx입니다.',
        redirect: 'login',
      } 
    }
  },
  methods: {
    sendNewId(){
      if(this.$refs.form.validate()) {
        this.modal.show = true;
      }
    },
  },
}
</script>