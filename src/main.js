import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api'
import vuetify from './vuetify'
import VueObserveVisibility from "vue-observe-visibility";

Vue.use(VueObserveVisibility)
Vue.use(VueCompositionApi)

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
