<template>
  <div id="app" style="border: 3px solid #000; margin: 10px">
    我是App组件
        <!-- 2.父组件监听事件 -->
        <Son :title="msg" @changTitle="handleChange"></Son>
  </div>
</template>

<script>
import Son from './components/Son.vue'
export default {
    name:'App',
    data() {
        return {
            msg:'BottleBottle'
        }
    },
    components: {
        Son
    },
    methods: {
        // 3.提供处理函数，形参获取参数
        handleChange(newTitle) {
            this.msg = newTitle
        }
    },
}
</script>

<style>

</style>