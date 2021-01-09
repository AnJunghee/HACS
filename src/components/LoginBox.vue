<template>
  <div class="login-box">
    <v-card 
      class="mx-auto"
      :width="width"
    >
      <slot name="content"></slot>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    width: Number,
  }
}
</script>

<style scoped>
.login-box{
  display: flex;
  align-items: center;
  height: 100vh;
  background-color: #c7c7c7;
}
</style>