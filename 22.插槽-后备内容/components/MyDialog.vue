<template>
  <div class="dialog">
    <div class="dialog-header">
        <h3>友情提示</h3>
        <span class="close">✖️</span>
    </div>
    <!-- 插槽的基本语法 -->
     <!-- 
    1. 组件内需要定制的结构部分，改用**<slot></slot>**占位
    2. 使用组件时, **<MyDialog></MyDialog>**标签内部, 传入结构替换slot
    3. 给插槽传入内容时，可以传入**纯文本、html标签、组件** -->
    <div class="dialog-content">
        <!-- 1. 在需要定制的位置，使用slot占位 -->
         <!-- 在 <slot> 标签内，放置内容, 作为默认显示内容 -->
        <slot>我是后备内容</slot>
    </div>
    <div class="dialog-footer">
        <button>取消</button>
        <button>确认</button>
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