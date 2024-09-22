<template>
  <div class="son" style="border: 3px solid #000; margin: 10px">
    我是Son组件 {{ title }}
    <!-- 1.通过this.$emit() 向父组件发送通知 -->
    <button @click="changeFn">修改标题</button>
  </div>
</template>

<script>
export default {
    name: 'Son-Child',
    props: ['title'],
    methods: {
        changeFn() {
            //1.通过this.$emit() 向父组件发送通知
            this.$emit('changTitle','Bottle')
        }
    }
}
</script>

<style>

</style>