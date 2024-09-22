<template>
  <div id="app">
    <input type="text" v-model="msg1">
    <br />
    <!-- v-model的原理：底层写法就是:value和@input的简写 -->
    <!-- $event是获取事件的形参 -->
     <!-- v-model提供数据双向绑定：
     数据变，视图跟着变 :value
     视图变，数据跟着变 @input -->
    <input type="text" :value="msg2" @input="msg2 = $event.target.value">
  </div>
</template>

<script>
export default {
    data() {
        return {
            msg1: '',
            msg2:''
        }
    }
}
</script>

<style>

</style>