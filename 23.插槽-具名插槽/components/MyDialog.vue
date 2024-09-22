<template>
  <div class="dialog">
    <!-- 一个组件内有多处结构，需要外部传入标签，进行定制
    弹框中有**三处不同**，
    但是**默认插槽**只能**定制一个位置**，
    这时候怎么办呢
    解决：给slot起名字 
    template配合v-slot:名字来分发对应标签-->
    <div class="dialog-header">
        <!-- 一旦插槽起了名字，就是具名插槽，只支持定向分发 -->
        <slot name="head"></slot>
    </div>
    
    <div class="dialog-content">
        <!-- 多个slot使用name属性区分名字  -->
        <slot name="content"></slot>
    </div>
    <div class="dialog-footer">
        <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
        
    }
}
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.dialog {
  width: 470px;
  height: 230px;
  padding: 0 25px;
  background-color: #ffffff;
  margin: 40px auto;
  border-radius: 5px;
}
.dialog-header {
  height: 70px;
  line-height: 70px;
  font-size: 20px;
  border-bottom: 1px solid #ccc;
  position: relative;
}
.dialog-header .close {
  position: absolute;
  right: 0px;
  top: 0px;
  cursor: pointer;
}
.dialog-content {
  height: 80px;
  font-size: 18px;
  padding: 15px 0;
}
.dialog-footer {
  display: flex;
  justify-content: flex-end;
}
.dialog-footer button {
  width: 65px;
  height: 35px;
  background-color: #ffffff;
  border: 1px solid #e1e3e9;
  cursor: pointer;
  outline: none;
  margin-left: 10px;
  border-radius: 3px;
}
.dialog-footer button:last-child {
  background-color: #007acc;
  color: #fff;
}
</style>