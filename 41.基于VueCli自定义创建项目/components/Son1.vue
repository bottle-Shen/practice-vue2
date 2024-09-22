<template>
  <div class="box">
    <h2>Son1 子组件</h2>
    从vuex中获取的值:
    <label for="">{{ $store.state.count }}</label>
    <br>
    <button @click="handleAdd(1)">值 + 1</button>
    <button @click="handleAdd(5)">值 + 5</button>
    <button @click="handleAdd(10)">值 + 10</button>
    <button @click="setAsyncCount(666)">1秒后改为666</button>
  <div>
    <!-- 测试访问模块中的getters - 原生 -->
     <!-- 直接访问getters -->
     <!-- {{ $store.getters['user/UpperCaseName'] }} -->
       <!-- 通过命名空间访问 -->
        {{ userInfo }}<br>
        {{ UpperCaseName }}<br>
        <button @click="updateUser">更新个人信息</button>
        <button @click="updateTheme">更新主题色</button>
        <!-- 1.直接通过store调用 -->
        <button @click="setUpdate">一秒后更新信息</button>
        <!-- 2.mapActions映射 -->
        <button @click="setUserSecond({ name:'elttoB=Bottle',age:21})">一秒后更新信息</button>
  </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'Son1Com',
  computed: {
    ...mapState('user', ['userInfo']),
    ...mapGetters('user', ['UpperCaseName'])
  },
  methods: {
    handleAdd (n) {
      // 错误写法，vue默认不会监测，监测需成本，
      // 关闭严格模式后才可以修改
      // 但明确vuex同样遵循单向数据流，组件中不能直接修改仓库的数据
    //   this.$store.state.count++
      //   console.log(this.$store.state.count)
      // 因此，有mutations帮助我们修改state数据
    //   this.$store.commit('addCount')
      // 带参数版
      this.$store.commit('addCount', n)
      // 如果需要传入多个参数，可以传递一个对象
    //   this.$store.commit('addCount', {
    //     count: 10
    //   })
    },
    ...mapActions(['setAsyncCount']),
    // 相当于
    // setAsyncCount () {
    //   this.$store.dispatch('setAsyncCount', 666)
    // }
    updateUser () { // 控制台vuex查看修改数据
      // $store.commit('模块名/mutation名', 额外传参)
      this.$store.commit('user/setUser', {
        name: 'elttoB',
        age: 20
      })
    },
    updateTheme () {
      this.$store.commit('setting/setTheme', 'pink')
    },
    // setUpdate () { // 1.直接通过store调用
    //   // 调用action dispatch
    //   this.$store.dispatch('user/setUserSecond', {
    //     name: 'elttoB-Bottle',
    //     age: 21
    //   })
    // }
    // 2.mapActions映射
    ...mapActions('user', ['setUserSecond'])
  }
}
</script>

<style lang="css" scoped>
.box{
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>
