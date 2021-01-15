<template>
  <div class="login-box">
    <v-card 
      class="mx-auto"
      :width="width"
    >
      <v-card-text>
      <slot name="content"></slot>
      </v-card-text>
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
}
</style>