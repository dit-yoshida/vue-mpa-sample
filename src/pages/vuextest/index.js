import Vue from "vue"
import store from "stores/vuextest"
import Vuextest from "components/Pages/Vuextest.vue"

new Vue({
  store,
  render: h => h(Vuextest)
}).$mount("#component")