<template>
  <v-dialog
    v-model="show"
    persistent
    max-width="290"
  >
    <v-card>
      <v-card-title class="headline">
        {{ title }}
      </v-card-title>
      <v-card-text>{{ content }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="green darken-1"
          text
          @click="btnOkClick"
        >
          확인
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    show: Boolean,
    title: String,
    content: String,
    redirect: String,
  },
  methods: {
    btnOkClick(){
      this.show = !this.show;
      this.$router.replace(this.redirect);
    }
  }
}
</script>

<style>

</style>