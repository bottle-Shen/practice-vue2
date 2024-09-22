<template>
  <div>
    <!-- <select :value="selectId" @change="selectCity">
        <option value="101">北京</option>
        <option value="102">上海</option>
        <option value="103">武汉</option>
        <option value="104">广州</option>
        <option value="105">深圳</option>
    </select> -->

    <!-- 子组件：
     props通过value接收数据，
     事件触发 input -->
    <select :value="value" @change="selectCity">
        <option value="101">北京</option>
        <option value="102">上海</option>
        <option value="103">武汉</option>
        <option value="104">广州</option>
        <option value="105">深圳</option>
    </select>
  </div>
</template>

<script>
export default {
    props: {
        value: String
    },
    methods: {
        selectCity(e) {
            // 子组件利用 **$emit** 通知父组件，进行修改更新
            this.$emit('input',e.target.value)
        }
    }
        
}
</script>

<style>

</style>