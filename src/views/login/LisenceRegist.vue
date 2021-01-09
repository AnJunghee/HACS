<template>
  <login-box :width="344">
    <template v-slot:content>
      <logo></logo>
    </template>
  </login-box>
</template>

<script>
import Logo from '@/components/Logo'
import LoginBox from '@/components/LoginBox'

export default {
  name: 'lisence_regist',
  components: {
    Logo, LoginBox,
  },
}
</script>

<style>

</style>