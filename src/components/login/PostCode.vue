<template>
  <v-dialog
    v-model="show"
    persistent
    max-width="400"
  >
    <vue-daum-postcode @complete="result = $event" />
  </v-dialog>
</template>

<script>
export default {
  props: {
    show: Boolean,
  },
  data () {
    return {
      result: '',
    }
  },
  watch: {
    result() {
      this.$emit('getPostCode', {
        result: this.result,
        show: !this.show
      })
    }
  }
}
</script>

<style>

</style>