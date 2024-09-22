<template>
  <div class="app">
    <!-- <BaseSelect 
    :selectId="selectId"
    @changeCity="selectId = $event"
    ></BaseSelect> -->


    <!-- 父组件通过v-model **简化代码**，实现子组件和父组件数据 **双向绑定** -->
    <!-- v-model其实就是 :value和@input事件的简写 -->
    <!-- 父组件：v-model直接绑定数据 -->
    <BaseSelect 
    v-model="selectId"
    ></BaseSelect>
  </div>
</template>

<script>
import BaseSelect from './components/BaseSelect.vue'
export default {
    data() {
        return {
            selectId:'102',
        }
    },
    components: {
        BaseSelect
    }

}
</script>

<style>

</style>