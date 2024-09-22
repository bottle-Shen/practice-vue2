<template>
  <div>
    <div class="footer_wrap">
      <!-- 路由导航 -->
      <!-- <a href="#/find">发现音乐</a>
      <a href="#/my">我的音乐</a>
      <a href="#/friend">朋友</a> -->

    <!-- 
vue-router 提供了一个全局组件 router-link (取代 a 标签)
1.能跳转，配置 to 属性指定路径(必须) 。
本质还是 a 标签 ，to 无需 #
2.能高亮，默认就会提供高亮类名，可以直接设置高亮样式 -->

<!-- 通过router-link自带的两个样式进行高亮
使用router-link跳转后，我们发现。
当前点击的链接默认加了两个class的值
 `router-link-exact-active`和`router-link-active`
我们可以给任意一个class属性添加高亮样式即可实现功能 -->
      <!-- 修改为： -->
       <router-link to="/find">发现音乐</router-link>
       <router-link to="/my">我的音乐</router-link>
       <router-link to="/friend">朋友</router-link>
    </div>
    <div class="top">
      <!-- 路由出口---匹配的组件所展示的位置 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
.footer_wrap {
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}

/* 
  router-link-active 模糊匹配(更多)
  to="/find"  =>  地址栏 /find   /find/one   /find/two  ...

  router-link-exact-active 精确匹配
  to="/find"  =>  地址栏 /find  
*/
.footer_wrap a:hover {
  background-color: #555;
}
/* 精确匹配---点击高亮变色 */
/* .footer_wrap  a.router-link-exact-active{
  background-color: purple;
} */
/* 模糊匹配---点击高亮变色 */
.footer_wrap a.router-link-active {
  background-color: purple;
}
</style>