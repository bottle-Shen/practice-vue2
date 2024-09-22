<template>
  <div class="base-b">
    <!-- BaseB.vue发布方 -->
     我是B组件(发布方)
     <button @click="sendMsgFn">发送消息</button>
  </div>
</template>

<script>
import Bus from '../utils/EventBus.js'
export default {
    methods: {
        sendMsgFn() {
            Bus.$emit('sendMsg','Bottle')
        }
    }
}
</script>

<style>
.base-b {
  width: 200px;
  height: 200px;
  border: 3px solid #000;
  border-radius: 3px;
  margin: 10px;
}
</style>