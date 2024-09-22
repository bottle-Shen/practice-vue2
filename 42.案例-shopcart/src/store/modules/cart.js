import axios from 'axios'
export default {
  namespaced: true,
  state () {
    return {
      // 购物车数据[{},{}]
      list: []
    }
  },
  mutations: { // 同步获取数据
    updateList (state, newList) {
      state.list = newList
    },
    // obj:{id:xxx,newCount:xxx} 现在obj对象里至少包含两项数据--id你要修改的是谁和newCount要改成什么样子
    updateCount (state, obj) {
      //   console.log(obj)
      // 根据id找到对应的对象，更新count属性即可
      // state.list总数组，完整的数组，
      // find查找符合条件的对象
      // find 去总数组里找item.id是不是和传过来的obj.id是一样的
      const goods = state.list.find(item => item.id === obj.id)
      // 如果是·一样·的·则 说明找到了
      goods.count = obj.newCount// 将vuex里的count修改为传过来的obj里新的newCount
    }
  },
  actions: { // 异步获取数据
    async getList (context) {
      const res = await axios.get('http://localhost:3000/cart')
      //   console.log(res)
      context.commit('updateList', res.data)
    },
    async updateCountAsync (context, obj) { // (context上下文, obj额外传递的参数)
      // actions不可以传递多个参数，但是子组件中有多个参数要传过来
      // 因此，我们需要使用对象，对象的方式拿到多个参数
      //   console.log(obj)
      // :id 值表示修改的是哪个对象
      //   const res = await axios.patch('http://localhost:3000/cart/:id')
    // 将修改更新同步到后台服务器
      // const res =
      await axios.patch(`http://localhost:3000/cart/${obj.id}`, {
        count: obj.newCount// 额外传递的参数
        // 此处的count不能改名，它是要提交给后台的，要和后台名字一致
      })
      //   console.log(res)// 控制台查看 更新后台数据成功，但是前端数据还未更新
      //   context.commit('btnClick', res.data)
      // 将修改更新同步到vuex
      context.commit('updateCount', {
        id: obj.id,
        newCount: obj.newCount// newCount可以改别的名字，但上方的count不能改名
      })
    }
  },
  getters: { // 依赖于state
    // 商品总数量 累加count
    total (state) {
      return state.list.reduce((sum, item) => sum + item.count, 0)
    },
    // 商品总价格 累加count * price
    totalPrice (state) {
      return state.list.reduce((sum, item) => sum + item.count * item.price, 0)
    }

  }
}
