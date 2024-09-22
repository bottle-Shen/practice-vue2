<template>
  <div id="app">
    <BaseOne></BaseOne>
    <BaseTwo></BaseTwo>
  </div>
</template>

<script>
// 如果不加scoped，组件的css会全局应用
// 根据import引入的前后顺序，后者覆盖前者的CSS样式
// import BaseOne from './components/BaseOne.vue'
import BaseTwo from './components/BaseTwo.vue'
import BaseOne from './components/BaseOne.vue'


export default {
    name:'App',
    components: {
        BaseOne,
        BaseTwo
    }
}
</script>

<style>

</style>