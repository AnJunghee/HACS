<template>
  <div class="text-center ma-2">
    <v-btn
      dark
      @click="snackbar = true"
    >
      Open Snackbar
    </v-btn>
    <v-snackbar
      v-model="snackbar"
    >
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
  export default {
    data: () => ({
      snackbar: false,
      text: `로그인 완료`,
    }),
  }
</script>