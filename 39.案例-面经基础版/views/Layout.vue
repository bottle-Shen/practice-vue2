<template>
    <!-- 首页 -->
  <div class="h5-wrapper">
    <!-- 上方正文内容部分 -->
    <div class="content">
        <!-- 配置二级路由出口，匹配到的二级路由才会显示 -->
         <!-- router-view动态组件，当匹配到哪个路由显示哪个 -->
      <router-view></router-view>
      <Article></Article>
    </div>
    <!-- 下方导航部分 -->
    <nav class="tabbar">
      <!-- <a href="#/article">面经</a>
      <a href="#/collect">收藏</a>
      <a href="#/like">喜欢</a>
      <a href="#/user">我的</a> -->
      <router-link to="/article">面经</router-link>
      <router-link to="/collect">收藏</router-link>
      <router-link to="/like">喜欢</router-link>
      <router-link to="/user">我的</router-link>

    </nav>
  </div>
</template>

<script>
import Article from './Article.vue'
export default {
    name: "LayoutPage",//name:"组件名"，如果没有组件名会找文件名作为组件名
  created() {
  console.log('created组件被加载了')
  },
  mounted() {
  console.log('mounted组件被加载了')
  },
  destroyed() {
  console.log('destroyed组件被加载了')
  },
//首次进入页面执行created，mounted
  //当点击跳转后在返回，组件被缓存了
  //因此控制台不会在执行created，mounted，destroyed等钩子
  //因此提供了activated和deactivated两个钩子
  activated() {
    alert('你好，欢迎回到首页！')//监视用户进入和离开缓存页面
    console.log('activated组件被激活了，看到页面了')
  },
  //首次进入页面执行created创建，mounted挂载，actived缓存
  //点击到别的页面触发deactivated
  //再返回到当前页面触发activated
  //离开再次触发deactivated
  //回来触发activated
  //监视用户进入和离开缓存页面
  deactivated() {
    console.log('deactivated组件失活，离开页面了')
  },
  components: {
    Article
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
    }
    a.router-link-active{
        color: pink;
      }
  }
}
</style>