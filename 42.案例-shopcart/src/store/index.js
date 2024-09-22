import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {// 提供数据
  },
  getters: {// 提供state计算属性
  },
  mutations: {// 提供方法，修改状态state
  },
  actions: {// 异步操作
  },
  modules: { // 分模块
    cart
  }
})
