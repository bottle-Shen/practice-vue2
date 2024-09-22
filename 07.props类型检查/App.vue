<template>
  <div id="app">
<BaseProgress
:w="width"
></BaseProgress>
  </div>
</template>

<script>
import BaseProgress from './components/BaseProgress.vue'
export default {
    name: 'App',
    data() {
        return {
            width:30,
        }
    },
    components: {
    BaseProgress,
}
}
</script>

<style>

</style>