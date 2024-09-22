const state = {
  theme: 'dark',
  desc: '夜晚'
}
const mutations = {
  setTheme (state, newTheme) {
    state.theme = newTheme
  }
}
const actions = {}
const getters = {}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
