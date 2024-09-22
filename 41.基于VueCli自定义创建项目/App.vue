<template>
  <div class="app">
    <h1>根组件-state数据-{{title}}-{{ count }}</h1>
    <input :value="count" @input="handleInput" type="text" name="" id="">
    <button @click="setTitle">修改标题</button>
    <Son1></Son1>
    <hr>
    <Son2></Son2>
    <!-- 1.原始方法 -->
    <!-- <p>{{ $store.getters.filterList }}</p> -->
     <!-- 2.辅助函数---mapGetters -->
    <p>{{ filterList }}</p>
    <!-- 1.直接通过模块名访问 -->
    <!-- <p>用户名：{{$store.state.user.userInfo.name}}</p> -->
     <!-- 2.通过 mapState 映射 -->
      <p>用户名：{{ userInfo.name }}</p>
      <p>{{ theme }}---{{ desc }}</p>
  </div>
</template>

<script>
import Son1 from './components/Son1.vue'
import Son2 from './components/Son2.vue'
// 导入mapState 它是vuex中的一个函数
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'app',
  data: function () {
    return {
    }
  },
  created () {
    // console.log(this.$store)
    // console.log(this.$store.state.count)
  },
  computed: {
    // count () {
    //   return this.$store.state.count
    // }
    // 类似于
    // 利用展开运算符导出的状态映射给计算属性
    ...mapState(['title']),
    ...mapState(['count']),
    ...mapGetters(['filterList']),
    // 默认根级别映射
    // ...mapState(['user']) 子模块映射不这样写
    // 子模块的映射 ：mapState('模块名', ['xxx'])  -  需要开启命名空间 **namespaced:true**
    ...mapState('user', ['userInfo']),
    ...mapState('setting', ['theme', 'desc'])
  },
  methods: {
    setTitle () {
      this.$store.commit('setTitle')
    },
    handleInput (e) {
      // 1.实时获取输入框的值
      const num = +e.target.value
      // 2.提交mutation,调用mutation函数
      this.$store.commit('changeCount', num)
    },
    ...mapMutations(['addCount'])
    // 相当于
    // addCount() {
    // commit(方法名,载荷参数)
    //   this.$store.commit('addCount')
    // }
    // 注意： Vuex中mutations中要求不能写异步代码，如果有异步的ajax请求，应该放置在actions中
    // 1.state是存放数据的
    // 2.mutations是同步更新数据(便于监测数据的变化, 更新视图等, 方便于调试工具查看变化)
    // 3.actions则负责进行异步操作
    // **说明：mutations必须是同步的**
    // **需求: 一秒钟之后, 要给一个数 去修改state**
    // 1.store的index.js添加actions异步
    // 2.组件中通过dispatch调用
  },
  components: {
    Son1,
    Son2
  }
}
</script>

<style>
.app {
  width: 600px;
  margin: 20px auto;
  border: 3px solid #ccc;
  border-radius: 3px;
  padding: 10px;
}
</style>
