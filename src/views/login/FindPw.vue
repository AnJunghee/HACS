<template>
  <login-box :width="344">
    <template v-slot:content>
      <logo></logo>


    <form class="contact-form" @submit.prevent="sendEmail">
    <div style="padding-left: 22px">
    <fieldset>
    <legend>아이디</legend>
    <input type="text" name="user_name" class="text">
    </fieldset>
    </div>
    <br>
    <div style="padding-left: 22px">
    <fieldset>
    <legend>이메일</legend>
    <input type="email" name="user_email" class="text">
    </fieldset>
    </div>
    <br>
    <input type="submit" value="비밀번호 찾기" class="submit" style="margin-left : 17px">
  </form>

    </template>
  </login-box>
</template>

<script>

import Logo from '@/components/Logo'
import LoginBox from '@/components/LoginBox'


export default {
  name: 'find_pw',
  components: {
    Logo, LoginBox,
  },

  methods: {
    // sendEmail: (e) => {
    //   emailjs.sendForm('Kong_email', 'template_776wqjg', e.target, 'user_pX0wfFfQUvxPyoTvUpNha')
    //     .then((result) => {
    //         console.log('SUCCESS!', result.status, result.text);
    //         alert('입력하신 e-mail로 새로운 비밀번호를 전송했습니다. 확인하고 다시 로그인 해주세요. ');
    //     }, (error) => {
    //         console.log('FAILED...', error);
    //         alert('아이디,이메일을 확인해주세요');
    //     });
    // }

  }
}
</script>


<style>
.text{
  width: 280px;
  margin-bottom: 8px;
  margin-left: 10px
}
fieldset{
  width: 300px;
  border:grey solid 0.5px;
  border-radius: 5px 5px 5px 5px;
}
.submit{
  color : whitesmoke;
  width: 310px;
  border-radius: 5px 5px 5px 5px;
  background-color: green;
  margin-bottom:25px;
}
</style>