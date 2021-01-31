<template>
  <login-box :width="500">
    <template v-slot:content>
      <logo></logo>
      <v-form ref="form" 
        lazy-validation 
        v-model="valid"
      >
        <v-row class="mr-3" no-gutters>
          <v-subheader class="subheader">아이디</v-subheader>
          <v-text-field 
            v-model="id"
            :rules="idRules"
          ></v-text-field>
          <v-btn class="idOverlap_btn" depressed color="primary">ID 중복확인</v-btn> 
        </v-row>
        <v-row class="mr-3" no-gutters>
          <v-subheader>비밀번호</v-subheader>
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="passwordRules"
            :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-row>
        <v-row class="mr-3" no-gutters>
          <v-subheader>비밀번호 확인</v-subheader>
          <v-text-field
            v-model="checkPassword"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="checkPasswordRules"
            :type="show2 ? 'text' : 'password'"
            @click:append="show2 = !show2"
          ></v-text-field>
        </v-row>
        <v-row class="mr-3" no-gutters>
          <v-subheader>이름</v-subheader> 
          <v-text-field
            v-model="userName"
            :rules="userNameRules"
          ></v-text-field>
        </v-row>
        <v-row class="mr-3" no-gutters>
          <v-subheader>이메일</v-subheader>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            type="email"
          ></v-text-field>
        </v-row>
        <v-row class="mr-3" no-gutters>
          <v-subheader>연락처</v-subheader>
          <v-text-field
            v-model="phone"
            :rules="phoneRules"
            placeholder="- 제외 입력"
          ></v-text-field>
        </v-row>

        <v-row class="mr-3" no-gutters>
          <v-subheader>생년월일</v-subheader>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="birthday"
                :rules="birthdayRules"
                readonly
                v-bind="attrs"
                v-on="on"
                style="width: 200px; margin: 0;"
              ></v-text-field>
            </template>
            <v-date-picker
              ref="picker"
              v-model="birthday"
              :max="new Date().toISOString().substr(0, 10)"
              min="1950-01-01"
              @change="save"
            ></v-date-picker>
          </v-menu>
        </v-row>

        <v-row class="mr-3" no-gutters>
          <v-subheader>우편번호</v-subheader>
          <v-text-field 
            v-model="postcode"
            readonly
            style="width: 200px; display: inline-block"
            @click="postcodeModalShow = true"
          ></v-text-field>
          <v-btn class="address_btn" depressed color="primary" @click="postcodeModalShow = true">우편번호</v-btn>
        </v-row>
        <v-row class="mr-3" no-gutters>
          <v-subheader>주소</v-subheader>
          <v-text-field 
            v-model="address"
            :rules="addressRules"
            readonly
            style="width: 300px; display: inline-block"
            @click="postcodeModalShow = true"
          ></v-text-field>
        </v-row>
        <v-row class="mr-3" no-gutters>
          <v-subheader>상세주소</v-subheader>
          <v-text-field 
              v-model="detailAddress"
              :rules="detailAddressRules"
          ></v-text-field>
          <v-text-field 
              v-model="extraAddress"
              :rules="extraAddressRules"
          ></v-text-field>
        </v-row>
        <v-btn
          class="signUp_btn mr-3 mt-2"
          :disabled="!valid"
          type="submit"
          color="success"
          v-on:click="submit"
        >
          회원가입
        </v-btn>
        <v-btn 
         class="ml-3 mt-2"
          color="error"
          @click="clear">
          다시 작성
        </v-btn>
      </v-form>
      <post-code 
        :show="postcodeModalShow"
        @getPostCode="getPostCode"
      ></post-code>
    </template>
  </login-box>
</template>

<script>
import bus from '@/utils/bus'
import { validateEmail, validateName, validatePassword, validatePhone } from '@/utils/validation'
import Logo from '@/components/Logo'
import LoginBox from '@/components/LoginBox'
import PostCode from '@/components/login/PostCode'

export default {
  name: 'signup',
  components: {
    Logo, LoginBox, PostCode,
  },
  data () {
    return {
      valid: true,
      date: null,
      menu: false,
      id: '',
      idRules: [
        v => !!v || '아이디를 입력해주세요.',
      ],
      show1: false,
      show2: false,
      password: '',
      passwordRules: [
        v => validatePassword(v),
      ],
      checkPassword: '',
      checkPasswordRules: [
        v => !!v || '비밀번호를 다시 입력해주세요.',
        v => v===this.password || '비밀번호가 일치하지 않습니다.'
      ],
      userName: '',
      userNameRules: [
        v => !!v || '이름을 입력해주세요.',
        v => validateName(v),
      ],
      email: '',
      emailRules: [
        v => !!v || '이메일을 입력해주세요',
        v => validateEmail(v),
      ],
      phone: '',
      phoneRules: [
        v => !!v || '전화번호를 입력해주세요.',
        v => validatePhone(v),
      ],
      birthday: '',
      birthdayRules: [
        v => !!v || '생년월일을 입력해주세요.',
      ],
      postcode: '',
      postcodeModalShow: false,
      detailAaddress: '',
      detailAaddressRules: [

      ],
      extraAddress: '',
      extraAddressRules: [
        
      ]
    }    
  },
  watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
  },
  methods: {
    getPostCode(data){
      this.postcode = data.result.zonecode;
      this.address = data.result.address;
      this.postcodeModalShow = data.show;
    },
    submit () {
      if (this.$refs.form.validate()) {
        this.$router.push('login')
        bus.$emit('on:snack-bar', '회원가입에 성공하였습니다.')
      }
    },
    clear () {
      this.$refs.form.reset()
    },
    save (birthday) {
      this.$refs.menu.save(birthday)
    },
  },
}


</script>

<style scoped>
  .signUp_btn {
  float: right;
  }
  .idOverlap_btn {
    width: 100px;
  }
</style>