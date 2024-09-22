<template>
  <div>
    <!-- v-color自定义指令='参数值' -->
   <h1 v-color="color1">指令的值1测试</h1>
   <h1 v-color="color2">指令的值2测试</h1>
  </div>
</template>

<script>
export default {
    data() {
        return {
            color1: 'pink',
            color2:'blue'
        }
    },
    directives: {
        //指令名：指令的配置项
        color: {
            // 1. inserted 提供的是元素被添加到页面中时的逻辑
            inserted(el,binding) {
                // console.log(el, binding.value);
                // binding.value 就是指令的值,指令值修改会 触发 update 函数
                el.style.color = binding.value
            },
            // 2. update 指令的值修改的时候触发，提供值变化后，dom更新的逻辑
            update(el, binding) {
                console.log('指令的值修改了');
                el.style.color = binding.value
                
            }
        }
    }
}
</script>

<style>

</style>