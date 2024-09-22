<template>
  <div class="h5-wrapper">
    <!-- <router-view></router-view> -->
     <!-- <keep-alive :include="['LayoutPage']"> -->
     <keep-alive :include="keepArr">
        <!-- 被keep-alive包裹的一级路由匹配的组件，都会被缓存 -->
    <!-- router-view匹配的组件有：
    Layout页面LayoutPage组件和ArticleDetail组件，都会被缓存 -->
    <!-- 从Layout页面点击进到ArticleDetail页面后，
    再从ArticleDetail页面返回到Layout页面，
    会在停留在缓存的ArticleDetail页面的哪个位置，
    不加keep-alive则会回到ArticleDetail页面的顶部 -->

    <!-- 问题：但是keep-alive全部缓存，不会销毁，
    因此再次点击新的ArticleDetail页面后，还是上一次缓存的页面 -->

    <!-- 解决：
     keep-alive的三个属性
1.include ： 组件名数组，只有匹配的组件会被缓存
语法：:include="['LayoutPage']"
2.exclude ： 组件名数组，任何匹配的组件都不会被缓存
3.max ： 最多可以缓存多少组件实例 -->

<!-- 被缓存的组件会多两个生命周期钩子 -->
<!-- activated 当组件被激活（使用）的时候触发 → 进入这个页面的时候触发
deactivated 当组件不被使用的时候触发 → 离开这个页面的时候触发 

组件缓存后就不会执行组件的created, mounted, destroyed 等钩子了
所以其提供了actived 和 deactived钩子，帮我们实现业务需求
-->

        <router-view></router-view>    
     </keep-alive>
    
  </div>
</template>

<script>
export default {
    name: "h5-wrapper",
    data() {
        return {
            //缓存组件名的数组
            //如果缓存组件很多，我们可以缓存数组
            //:include="keepArr"
        keepArr:['LayoutPage']
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
<style lang="less" scoped>
.h5-wrapper {
  .content {
    margin-bottom: 51px;
  }
  .tabbar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: flex;
    background: #fff;
    border-top: 1px solid #e4e4e4;
    a {
      flex: 1;
      text-decoration: none;
      font-size: 14px;
      color: #333;
      -webkit-tap-highlight-color: transparent;
      &.router-link-active {
        color: #fa0;
      }
    }
  }
}
</style>