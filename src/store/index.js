import Vue from 'vue'
import Vuex from 'vuex'

import home from './modules/home'
import common from './modules/common'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common,
    home
  }
})
