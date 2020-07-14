import Vue from 'vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Dashboard from "@/pages/Management/Management.vue";

Vue.config.productionTip = false


new Vue({
  router,
  store,
  vuetify,
  render: h => h(Dashboard)
}).$mount('#app')
