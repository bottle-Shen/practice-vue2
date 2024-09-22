<template>
  <div class="grandson">
    我是子孙Grandson组件
    {{ color }}--{{ userInfo.name }}--{{userInfo.age}}
  </div>
</template>

<script>
export default {
    inject: ['color', 'userInfo'],
}
</script>

<style>
.grandSon {
  border: 3px solid #000;
  border-radius: 6px;
  margin: 10px;
  height: 100px;
}
</style>