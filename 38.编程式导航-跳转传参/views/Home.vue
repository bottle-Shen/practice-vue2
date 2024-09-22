<template>
  <div class="home">
    <div class="logo-box"></div>
    <div class="search-box">
        <!-- 添加v-model -->
      <input v-model="inpValue" type="text">
      <!-- 问题：点击搜索按钮，跳转需要传参如何实现？ -->
       <!-- 两种传参方式：查询参数 + 动态路由传 -->
        <!-- 两种跳转方式，对于两种传参方式都支持： -->
<!-- 
        1.path 路径跳转传参
        2.name 命名路由跳转传 -->
      <button @click="goSearch">搜索一下</button>
    </div>
    <div class="hot-link">
      热门搜索：
      <!-- 动态路由传参 (优雅简洁，传单个参数比较方便)
            1.配置动态路由router目录下index.js：path: "/path/参数名"
            2.跳转：to="/path/参数值"
            3.获取：$route.params.参数-->
      <router-link to="/search/Bottle">Bottle</router-link>
      <router-link to="/search/BOTTLE">BOTTLE</router-link>
      <!-- <router-link to="/search">Bottle-BOTTLE</router-link>空白页 -->
       <!-- 原因：
       问题：配了路由 path: "/search/:words" 为什么按下面步骤操作，会未匹配到组件，显示空白？
       原因： /search/:words 表示，必须要传参数。如果不传参数，也希望匹配，可以加个可选符 "?" -->
       <router-link to="/search">Bottle-BOTTLE</router-link>
    </div>
  </div>
</template>

<script>
export default {
    name: 'FindMusic',
    data() {
        return {
            inpValue: ''
        }
    },
    methods: {
        goSearch() {
            // 1.通过path路径方式跳转
            // this.$router.push('路由路径')简写
            // this.$router.push('/search')
            //path传值：this.$router.push('路由路径?参数名=参数值')
            // this.$router.push(`/search?name=${this.inpValue}`)
            // this.$router.push({//完整写法 更适合传参
            //     path: '路由路径'
            // })
            //this.$router.push({
            //    path: '/search'
            //})
            //path传值
            // this.$router.push({ //完整写法 更适合传参
      //         path: '路由路径'
      //         query: {
      //            参数名: 参数值,
      //            参数名: 参数值
      //         }
            //     })
            // this.$router.push({
            //     path: '/search',
            //     query: {
            //         name: this.inpValue
            //     }
            // })
            //简化
            // this.$router.push({
            //     path:`/search/${this.inpValue}`
            // })
            //2.通过name命名路由器的方式跳转(需要给路由起名字)适合长路径
            // 注意：需要去router目录下的index.js给对应路由起名字，否则空白页
            // { name: '路由名', path: '/path/xxx', component: XXX },
            //this.$router.push({
            //    name: '路由名'
            //})
            // this.$router.push({
            //     name:'search'
            // })
            //name传值
            //    this.$router.push({
      //        name: '路由名'
      //        query: { 参数名: 参数值 },
      //        params: { 参数名: 参数值 }
            //    })
            this.$router.push({
                name: 'search',
                // query: {
                //     name: this.inpValue
                // },
                params: {
                    names: this.inpValue
                }
      })
        }
    }
}
</script>

<style>
.logo-box {
  height: 150px;
  background: url('@/assets/logo.jpeg') no-repeat center;
}
.search-box {
  display: flex;
  justify-content: center;
}
.search-box input {
  width: 400px;
  height: 30px;
  line-height: 30px;
  border: 2px solid #c4c7ce;
  border-radius: 4px 0 0 4px;
  outline: none;
}
.search-box input:focus {
  border: 2px solid #ad2a26;
}
.search-box button {
  width: 100px;
  height: 36px;
  border: none;
  background-color: #ad2a26;
  color: #fff;
  position: relative;
  left: -2px;
  border-radius: 0 4px 4px 0;
}
.hot-link {
  width: 508px;
  height: 60px;
  line-height: 60px;
  margin: 0 auto;
}
.hot-link a {
  margin: 0 5px;
}
</style>