import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import VueDaumPostcode from 'vue-daum-postcode'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'


Vue.config.productionTip = false

Vue.use(VueDaumPostcode)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
