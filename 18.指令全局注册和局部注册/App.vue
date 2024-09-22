<template>
  <div>
    <h1>自定义指令</h1>
    <!-- 注意：在使用指令的时候，一定要**先注册**，**再使用**，否则会报错 -->
     <!-- 使用指令语法： v-指令名。如：<input type="text"  v-focus/> -->
    <input v-focus ref="inp" type="text">
  </div>
</template>

<script>
export default {
    // mounted() {
    //     this.$refs.inp.focus()
    // }
    //2.局部注册指令
    directives: {
        //指令名：指令的配置项
        focus: {
            inserted(el) {
                el.focus()
            }
        }
    }
}
</script>

<style>

</style>