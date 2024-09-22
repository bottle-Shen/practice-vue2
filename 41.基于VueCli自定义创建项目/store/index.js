// 导入vue
import Vue from 'vue'
// 导入vuex
import Vuex from 'vuex'
// 引入
import user from './modules/user'
import setting from './modules/setting'

// vuex也是vue插件,需要use一下，进行插件的安装初始化
Vue.use(Vuex)

// 创建store仓库
const store = new Vuex.Store({
  // 通过strict: true 开启严格模式，开启严格模式后，直接修改state中的值会报错
  // 不写strict: false默认为strict: true
  //   store属性strict: false,
  strict: true,
  // state状态：提供数据，使用共享的数据都有统一放到store的state中存储
  // 类似于vue组件中的data
  // 区别:
  // 1.data 是组件组件的数据
  // 2.state 是所有组件共享的数据
  state: { // store属性
    title: 'Bottle',
    count: 101,
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  // 定义mutations对象，对象中存放修改state的方法
  mutations: { // store属性
    // 第一个参数是当前store的state属性
    // payload 载荷 运算参数 调用mutations的时候 可以传递参数 传递载荷
    // 提供mutations函数(带参数)
    addCount (state, n) {
      state.count += n
      //   state.count ++ 错误
    },
    // delCount (state) {
    //   state.count -= 1
    // },
    delCount (state, n) {
      state.count -= n
    },
    setTitle (state) {
      state.title = 'BOTTLE-BOTTLE'
    },
    changeCount (state, newCount) {
      state.count = newCount
    }
    //
  },
  actions: {
    setAsyncCount (context, num) {
      // 一秒后，给一个数，去修改num
      setTimeout(() => {
        context.commit('changeCount', num)
      }, 1000)
    }
  },
  // 除了state之外，有时我们还需要从state中派生出一些状态，这些状态是依赖state的，此时会用到getters
  // 例如：state中定义了list，为 1-10 的数组，组件中，需要显示所有大于5的数据
  getters: {
    //   注意：
    // 1.getters函数第一个参数是state
    // 2.getters函数必须要有返回值
    // filterList (state) {
    //   return state.list.filter(item => item > 5)
    // }
    // 简写为
    filterList: state => state.list.filter(item => item > 5)
  },
  // 在模板中访问getters
  // 原始方法
  //   <div>{{ $store.getters.filterList }}</div>
  // 辅助函数---mapGetters
  //   computed: {
  //     ...mapGetters(['filterList'])
  //     }
  //    <div>{{ filterList }}</div>

  // 由于 vuex 使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，
  // store 对象就有可能变得相当臃肿。(当项目变得越来越大的时候，Vuex会变得越来越难以维护)
  // 因此，module 模块的创建
  // 模块拆分
  //   注册modules中的user和setting模块
  modules: {
    user,
    setting
  }
  // 使用模块中的数据
// 可以直接通过模块名访问 `$store.state.模块名.xxx`  => `$store.state.setting.desc`
  // 也可以通过 mapState 映射 需注意：
//   1.  默认根级别的映射  mapState([ 'xxx' ])
// 2.  子模块的映射 ：mapState('模块名', ['xxx'])
// 需要开启命名空间 ** namespaced: true **
  //   尽管已经分模块了，但其实子模块的状态，还是会挂到根级别的 state 中，属性名就是模块名
  // 控制台vue的左侧Root中查看
})

// 导出仓库
export default store
