<template>
  <v-app id="app">
    <transition name="routing-fade" mode="out-in">
      <router-view/>
    </transition>
    <snack-bar></snack-bar>
  </v-app>
</template>

<script>
import SnackBar from '@/components/SnackBar'

export default {
  components: {
    SnackBar,
  },
}
</script>

<style scoped>
#app{
  background-color: #ebebeb;
}
/* Router Transition */
.routing-fade-enter-active, .routing-fade-leave-active {
  transition: opacity .3s ease;
}
.routing-fade-enter, .routing-fade-leave-to
/* .routing-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>