import Vue from 'vue'
import App from './App.vue'
import plugin from "@/plugins/plugins.js";
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(plugin)
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
