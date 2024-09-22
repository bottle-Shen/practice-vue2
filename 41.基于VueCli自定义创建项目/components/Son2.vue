<template>
  <div class="box">
    <h2>Son2 子组件</h2>
    从vuex中获取的值:{{ $store.state.count }}
    <label for=""></label>
    <br>
    <button @click="handledel(1)">值 - 1</button>
    <button @click="handledel(5)">值 - 5</button>
    <button @click="handledel(10)">值 - 10</button>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  name: 'Son2Com',
  methods: {
    handledel (n) {
      //   this.$store.commit('delCount')
      this.$store.commit('delCount', n)
    }
    // computed: {
    //   ...mapState(['count'])//不可以用
    // }
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
