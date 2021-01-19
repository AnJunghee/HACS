<template>
  <login-box :width="500">
    <template v-slot:content>
      <logo></logo>
      <v-form ref="form" 
        lazy-validation 
        v-model="valid"
      >
        <v-text-field 
          v-model="id"
          :rules="idRules"
          label="아이디"
          style="width: 340px; display: inline-block"
        ></v-text-field>
        <v-btn class="idOverlap_btn" depressed color="primary" v-on:click="idOverlap">ID 중복확인</v-btn> 
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          color="deep-purple"
          label="비밀번호"
          type="password"
        ></v-text-field>
        <v-text-field
          v-model="checkPassword"
          :rules="checkPasswordRules"
          color="deep-purple"
          label="비밀번호 확인"
          type="password"
        ></v-text-field>
        <v-text-field
          v-model="userName"
          :rules="userNameRules"
          color="deep-purple"
          label="이름"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          color="deep-purple"
          label="이메일"
          type="email"
        ></v-text-field>
        <v-text-field
          v-model="phone"
          :rules="phoneRules"
          color="deep-purple"
          label="연락처"
          placeholder="- 제외 입력"
        ></v-text-field>
        <v-text-field 
            v-model="adress"
            :rules="adressRules"
            label="주소"
            style="width: 345px; display: inline-block"
        ></v-text-field>
        <v-btn class="adress_btn" depressed color="primary" v-on:click="adress">우편번호</v-btn>
        <v-text-field 
            v-model="detailAaddress"
            :rules="detailAaddressRules"
            label="상세주소"
        ></v-text-field>
        <v-btn
          class="signUp_btn"
          :disabled="!valid"
          type="submit"
          color="success"
          v-on:click="submit"
        >
          회원가입
        </v-btn>
        <v-btn 
         class="clear_btn"
          color="error"
          @click="clear">
          다시 작성
        </v-btn>
      </v-form>
    </template>
  </login-box>
</template>

<script>
import Logo from '@/components/Logo'
import LoginBox from '@/components/LoginBox'

export default {
  name: 'signup',
  components: {
    Logo, LoginBox,
  },
  data () {
    return {
      valid: true,
      id: '',
      idRules: [
        v => !!v || '아이디를 입력해주세요.',
      ],
      password: '',
      passwordRules: [
        v => /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,20}$/.test(v) || '최소 6 자, 최대 20 자, 최소 하나의 문자, 하나의 숫자 ',
      ],
      checkPassword: '',
      checkPasswordRules: [
        v => !!v || '비밀번호를 다시 입력해주세요',
        /* v => this.password === this.checkPassword || '비밀번호가 일치하지 않습니다.'*/
      ],
      userName: '',
      userNameRules: [
        v => !!v || '이름을 입력해주세요.',
        v => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(v) || '옳바른 형식이 아닙니다.'
      ],
      email: '',
      emailRules: [
        v => !!(v || '').match(/@/) || '이메일 형식으로 작성해주세요.',
      ],
      phone: '',
      phoneRules: [
        v => !!(v || '').match(/^\d{2,3}\d{3,4}\d{4}$/) || '전화번호를 입력해주세요.',
      ],
      adress: '',
      adressRules: [

      ],
      detailAaddress: '',
      detailAaddressRules: [

      ],
    }    
  },
    methods: {
      submit () {
        if (!this.$refs.form.validate()) {
          return;
        }
        alert('회원가입 성공');
        this.reset();
      },
      clear () {
        this.id = ''
        this.password = ''
        this.passwordConfirm = ''
        this.userName = ''
        this.email = ''
        this.phone = ''
        this.adress = ''
        this.detailAaddress = ''
        this.$refs.observer.reset()
      },
    },
}
</script>

<style scoped>
  .signUp_btn {
    float: right;
    margin-right: 5px;
    margin-top: 20px;
  }
  .clear_btn {
    margin-top: 20px;
  }
  .idOverlap_btn {
    width: 100px;
    margin-left: 20px;
    margin-bottom: 20px;
  }
  .adress_btn {
    width: 90px;
    margin-left: 20px;
    margin-bottom: 20px;
  }
</style>