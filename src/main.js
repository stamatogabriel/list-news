import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

import VueResource from 'vue-resource'
import router from './router'

Vue.use(VueResource)
Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    title: 'teste'
  },
  mutations: {
    newTitle (state, text) {
      state.title = text
    }
  }
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
