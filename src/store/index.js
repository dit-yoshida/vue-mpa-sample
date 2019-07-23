import Vue from "vue"
import Vuex from "vuex"
import * as module from "src/store/modules.js"

Vue.use(Vuex)

export default new Vuex.Store({
  a: module.moduleA
})