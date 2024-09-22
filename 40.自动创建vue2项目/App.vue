<!-- Vue组件化：
页面可拆分成一个个组件，每个组件有着独立的结构、行为、样式
好处：便于维护，利用复用--提升开发效率
组件分类：普遍组件、根组件 -->

<!-- 结构：有且只能有一个根元素 -->
<template>
<div class="App">
  <!-- 头部组件 -->
  <HmHeader></HmHeader>
  <!-- 主体组件 -->
  <HmMain></HmMain>
  <!-- 底部组件 -->
  <HmFooter></HmFooter>
</div>
</template>

<!-- 行为：js逻辑 -->
<script>
import HmHeader from './components/HmHeader.vue';
import HmMain from './components/HmMain.vue'
import HmFooter from './components/HmFooter.vue'
export default {
  components: {//局部注册，只能在当前注册页面使用
    //组件名：组件对象
    HmHeader: HmHeader,
    //组件名和组件对象一致，可省略组件对象
    HmMain,
    HmFooter
  }
}
</script>

<!-- 样式：可支持less，需安装包 lang="less"开启less功能 -->
 <!-- 装包：yarn add less less-loader -->
<style>
.App {
  width: 600px;
  height: 700px;
  background-color: #87ceeb;
  margin: 0 auto;
  padding: 20px;
}
</style>
