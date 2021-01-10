<template>
  <v-app>
    <router-view/>
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