<template>
  <div class="base-a">
    <!-- BaseA.vue接受方 -->
     我是A组件(接受方)
     <p>{{msg}}</p>
  </div>
</template>

<script>
import Bus from '../utils/EventBus.js'
export default {
    data() {
        return {
            msg:'',
        }
    },
    created() {
        Bus.$on('sendMsg', (msg) => {
            // console.log(msg)
            this.msg = msg
        })
    }
}
</script>

<style>
.base-a {
  width: 200px;
  height: 200px;
  border: 3px solid #000;
  border-radius: 3px;
  margin: 10px;
}
</style>