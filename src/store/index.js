import Vue from 'vue'
import vuex from 'vuex'
import fatherStore from './father_store'
Vue.use(vuex)

export default new vuex.Store({

  modules: {
    father: fatherStore
  }
})
