import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
import "regenerator-runtime/runtime"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    code: ""
  },
  getters: {
    getCode(state){
      return state.code
    }
  },
  mutations: {
    setCode(state, payload) {
      state.code = payload.code
    }
  },
  actions: {
    async setCodeAction(context, param){
      const payload = {
        code: ""
      }
      const url = new URL("https://jsonplaceholder.typicode.com/posts")
      const seachParams = new URLSearchParams()
      seachParams.append(param.key, param.value)
      const response = await axios.get(url + `?${seachParams.toString()}`)
      payload.code = response.data[0].title
      context.commit("setCode", payload)
    }
  }
})
