<template>
  <div>
    <v-app-bar
      app
      clipped-left
      prominent
      color="cyan darken-2"
      dark
    >
      <v-toolbar-title>인사</v-toolbar-title>

      <v-spacer></v-spacer>
      <div class="display-2 d-flex align-self-end">로고</div>
      <v-spacer></v-spacer>
      
      <v-btn large outlined class="mt-3">
        로그아웃
        <v-icon>mdi-logout</v-icon>
      </v-btn>
      <template v-slot:extension>
        <v-breadcrumbs :items="items">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </template>
    </v-app-bar>

    <v-navigation-drawer
      clipped
      app
    >
      <v-list-item-group
        active-class="cyan--text text--accent-4"
      >
        <v-expansion-panels tile accordion>
          <v-expansion-panel>
            <v-expansion-panel-header>
              직원관리
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list-item>
                <v-list-item-title>직원</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>일용직</v-list-item-title>
              </v-list-item>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              근태관리
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list-item>
                <v-list-item-title>근태관리</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>근태현황</v-list-item-title>
              </v-list-item>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-list-item-group>
    </v-navigation-drawer>
    <v-main>
      asdfadsf
    </v-main>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        text: 'Dashboard',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        text: 'Link 1',
        disabled: false,
        href: 'breadcrumbs_link_1',
      },
      {
        text: 'Link 2',
        disabled: true,
        href: 'breadcrumbs_link_2',
      },
    ],
  }),

}
</script>

<style scoped>
.hr{
  font-size: 2rem;
}
.v-expansion-panel, .v-expansion-panel::before{
  box-shadow: none;
}
</style>