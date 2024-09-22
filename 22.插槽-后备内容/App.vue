<template>
  <div>
    <!-- 2. 在使用组件时，组件标签内填入内容 -->
    <!--通过插槽完成了内容的定制，传什么显示什么, 
    但是如果不传，则是空白
    能否给插槽设置 默认显示内容  -->
    <MyDialog>
    </MyDialog>
    <!-- 如果有值，则slot后备内容整体会被换掉
     没有值，则显示slot后备内容 -->
    <MyDialog>
      <p>你确认要退出么</p>
    </MyDialog>
  </div>
</template>

<script>
import MyDialog from './components/MyDialog.vue'
export default {
    data() {
        return {
            
        }
    },
    components: {
        MyDialog
    }

}
</script>

<style>
body {
  background-color: #b3b3b3;
}
</style>