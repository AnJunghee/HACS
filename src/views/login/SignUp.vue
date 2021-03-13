<template>
  <login-box :width="500">
    <template v-slot:content>
      <logo></logo>
      <v-form ref="form" 
        lazy-validation 
        v-model="valid"
        style="width:350px; margin:0 auto"
      >
        <h3>아이디</h3>
        <v-row no-gutters>
          <v-text-field 
            v-model="id"
            :rules="idRules"
          ></v-text-field>
          <v-btn class="idOverlap_btn" depressed color="primary">ID 중복확인</v-btn> 
        </v-row>
        <h3>비밀번호</h3>
        <v-text-field
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="passwordRules"
          :type="show1 ? 'text' : 'password'"
          @click:append="show1 = !show1"
        ></v-text-field>
        <h3>비밀번호 확인</h3>
        <v-text-field
          v-model="checkPassword"
          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="checkPasswordRules"
          :type="show2 ? 'text' : 'password'"
          @click:append="show2 = !show2"
        ></v-text-field>
        <h3>이름</h3> 
        <v-text-field
          v-model="userName"
          :rules="userNameRules"
        ></v-text-field>
        <h3>이메일</h3>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          type="email"
        ></v-text-field>
        <h3>연락처</h3>
        <v-text-field
        v-model="phone"
        :rules="phoneRules" 
        placeholder="- 제외 입력"
        ></v-text-field>
        <h3>생년월일</h3>
        <v-row no-gutters>
          <v-text-field
            class="mr-3"
            v-model="birthYear"
            :rules="birthYearRules"
            style="width: 90px"
            placeholder="년(4자리)"
          ></v-text-field>
          <v-select
            class="mr-3"
            v-model="birthMonth"
            :rules="birthMonthRules"
            :items="monthItems"
            style="width: 90px"
            label="월"
          ></v-select>
          <v-text-field
            v-model="birthDay"
            :rules="birthDayRules"
            style="width: 90px"
            placeholder="일"
          ></v-text-field>
        </v-row>
        <h3>성별</h3>
        <v-radio-group
          v-model="gender"
          :rules="genderRules"
          row
        >
          <v-radio value="male">
            <template v-slot:label>
              <div><strong>남성</strong></div>
            </template>
          </v-radio>
          <v-radio value="female">
            <template v-slot:label>
              <div><strong>여성</strong></div>
              </template>
          </v-radio>
        </v-radio-group>
        <h3>우편번호</h3>
        <v-row no-gutters>
          <v-text-field 
            v-model="postcode"
            :rules="postcodeRules"
            readonly
            style="width: 200px; display: inline-block"
            @click="postcodeModalShow = true"
          ></v-text-field>
          <v-btn class="address_btn" depressed color="primary" @click="postcodeModalShow = true">우편번호</v-btn>
        </v-row>
        <h3>주소</h3>
        <v-text-field 
          v-model="address"
          :rules="addressRules"
          readonly
          @click="postcodeModalShow = true"
        ></v-text-field>
        <h3>상세주소</h3>
        <v-text-field 
          v-model="detailAddress"
          :rules="detailAddressRules"
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
import { validateEmail, validateName, validatePassword, validatePhone, validateBithYear, validateBithDay } from '@/utils/validation'
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
      birthYear: '',
      birthYearRules:[
        v => !!v || '',
        v => validateBithYear(v),
      ],
      birthMonth: '',
      monthItems: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'
      ],
      birthMonthRules:[
        v => !!v || '',
      ],
      birthDay: '',
      birthDayRules:[
        v => !!v || '',
        v => validateBithDay(v),
      ],
      gender: '',
      genderRules: [
        v => !!v || '성별을 선택해주세요.',
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
      postcodeRules: [
        v => !!v || '우편번호를 입력해주세요.',
      ],
      postcodeModalShow: false,
      detailAddress: '',
      detailAddressRules: [

      ],
      address: '',
      addressRules: [
        v => !!v || '주소를 입력해주세요.',
      ],
    }    
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
  },
}


</script>

<style scoped>
  .login-box{
    display: flex;
    align-items: center;
    height: 150vh;
  }
  .signUp_btn {
  float: right;
  }
  .idOverlap_btn {
    width: 100px;
  }
</style>