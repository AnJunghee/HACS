<template>
  <v-snackbar v-model="snackbar">
    {{ text }}
    <template v-slot:action="{ attrs }">
      <v-btn
        color="pink"
        text
        v-bind="attrs"
        @click="snackbar = false"
      >
        닫기
      </v-btn>
    </template>
  </v-snackbar>
</template>
<script>
import bus from '@/utils/bus'

export default {
  data: () => ({
    snackbar: false,
    text: '',
  }),
  created(){
    bus.$on('on:snack-bar', (text)=>{
      this.text = text
      this.snackbar = true
    })
  },
}
</script>