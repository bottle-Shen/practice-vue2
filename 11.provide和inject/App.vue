<template>
  <div id="app">
    我是爷爷APP组件
    <button @click="change">修改数据</button>
    <SonA></SonA>
    <SonB></SonB>
  </div>
</template>

<script>
import SonA from './components/SonA.vue'
import SonB from './components/SonB.vue'
export default {
    provide() {
        return {
            //简单类型 非响应式
            color: this.color,
            //复杂类型 响应式
            userInfo:this.userInfo,
        }
    },
    data() {
        return {
            color: 'pink',
            userInfo: {
                name: 'Bottle',
                age:18
            }
        }
    },
    methods: {
        change() {
            this.color = 'blue'//修改不成功，因为简单类型非响应式，子孙接收不成功
            this.userInfo.name= 'BottleBottle'
        }
    },
    name: 'App',
    components: {
    SonA,
    SonB
    }
}
</script>

<style>
#app {
  border: 3px solid #000;
  border-radius: 6px;
  margin: 10px;
}
</style>