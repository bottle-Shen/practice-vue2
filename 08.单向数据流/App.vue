<template>
  <div id="app">
<BaseCount
:count="count" @changeCount="handleChange"
></BaseCount>
  </div>
</template>

<script>
import BaseCount from './components/BaseCount.vue'
export default {
    name: 'App',
    data() {
        return {
            count:100,
        }
    },
    components: {
    BaseCount,
    },
    methods: {
        handleChange(newVal) {
        this.count = newVal
    }
}
}
</script>

<style>

</style>