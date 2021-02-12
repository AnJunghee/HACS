<template>
  <div>
    <v-app-bar
      app
      clipped-left
      color="cyan darken-2"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>인사</v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
        안녕하세요 <span>{{ username }}</span>님
      </div>
      <v-btn text>
        로그아웃
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      clipped
      app
    >
      <v-list-item-group
        active-class="cyan--text text--accent-4"
      >
        <v-expansion-panels accordion>
          <v-expansion-panel v-for="title in menu" :key="title.title">
            <v-expansion-panel-header>
              {{ title.title }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list-item 
                v-for="subtitle in title.subMenu" 
                :key="subtitle.title" 
                @click="changeRouter(subtitle.link)">
                <v-list-item-title>{{ subtitle.title }}</v-list-item-title>
              </v-list-item>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-list-item-group>
    </v-navigation-drawer>
    <v-main>
      <transition name="routing-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-main>
  </div>
</template>

<script>
export default {
  props: {
    menu: Array,
  },
  data: () => ({
    drawer: true,
  }),
  computed: {
    username(){
      return this.$store.state.user.username
    }
  },
  methods: {
    changeRouter(link){
      if(this.$route.path !== `/hr/${link}`){
        this.$router.push(link);
      }
    }
  }
}
</script>

<style scoped>
.v-expansion-panel, .v-expansion-panel::before{
  box-shadow: none;
}
.routing-fade-enter-active, .routing-fade-leave-active {
  transition: opacity .3s ease;
}
.routing-fade-enter, .routing-fade-leave-to
/* .routing-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>