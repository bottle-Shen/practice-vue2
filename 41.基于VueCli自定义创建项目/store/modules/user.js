const state = {
  userInfo: {
    name: 'Bottle',
    age: 18
  },
  myMsg: '我的消息'
}
const mutations = {
// 1. 直接通过 store 调用   $store.commit('模块名/xxx ',  额外参数)
// 2. 通过 mapMutations 映射
// 1. 默认根级别的映射  mapMutations([ 'xxx' ])
// 2. 子模块的映射 mapMutations('模块名', ['xxx'])  -  需要开启命名空间
  setUser (state, newUserInfo) {
    state.UserInfo = newUserInfo
  }
}
const actions = {
  setUserSecond (context, newUserInfo) {
    setTimeout(() => {
      // 调用mutation
      // context上下文，
      // 默认提交的就是自己模块的action和mutation
      context.commit('setUser', newUserInfo)
      // commit提交
    }, 1000)
  }
}
const getters = {
  // 分模块后,state指代子模块的state
  UpperCaseName (state) {
    // toUpperCase转为大写字母
    return state.userInfo.name.toUpperCase()
  }
}
export default {
  // 注意：
  // 默认模块中的 mutation 和 actions 会被挂载到全局，
  // 需要开启命名空间，才会挂载到子模块。
  // 开启命名空间
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
