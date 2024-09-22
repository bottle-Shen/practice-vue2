<template>
  <div class="article-page">
    <!-- 查询参数传参(适合多个参数) -->
     <!-- /路径?参数=参数值 => this.$route.query.参数名 -->
    <!-- <div
    @click="$router.push(`/detail?id=${item.id}`)"
    v-for="item in articles" :key="item.id"
      class="article-item"
      > -->
      <!-- 动态路由传参(适合单个参数) -->
       <!--在index.js路由里配置 /路径/参数 => this.route.params.参数名 -->
      <div
    @click="$router.push(`/detail/${item.id}`)"
    v-for="item in articles" :key="item.id"
      class="article-item"
      >
      <div class="head">
        <img :src="item.creatorAvatar" alt="" />
        <div class="con">
          <p class="title">{{ item.stem }}</p>
          <p class="other">{{ item.creatorName }} | {{ item.createdAt }}</p>
        </div>
      </div>
      <div class="body">
         {{ item.content }}
      </div>
      <div class="foot">点赞 {{ item.likeCount }} | 浏览 {{ item.views }}</div>
    </div>
  </div>
</template>

<script>
// 请求地址: https://mock.boxuegu.com/mock/3083/articles
// 请求方式: get
// 引入axios
import axios  from 'axios'
export default {
  name: 'ArticlePage',
  data () {
      return {
        articles:[]
    }
    },
    async created() {//created里请求获取存储数据
        const res = await axios.get('https://mock.boxuegu.com/mock/3083/articles')
        //console.log(res)//去控制台查看数据存放位置
        //数据在data下的result的rowa里
        this.articles = res.data.result.rows//可以在这里一层层解构
    // console.log(this.articles)
    },
}
</script>

<style lang="less" scoped>
.article-page {
  background: #f5f5f5;
}
.article-item {
  margin-bottom: 10px;
  background: #fff;
  padding: 10px 15px;
  .head {
    display: flex;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
    .con {
      flex: 1;
      overflow: hidden;
      padding-left: 15px;
      p {
        margin: 0;
        line-height: 1.5;
        &.title {
          text-overflow: ellipsis;
          overflow: hidden;
          width: 100%;
          white-space: nowrap;
        }
        &.other {
          font-size: 10px;
          color: #999;
        }
      }
    }
  }
  .body {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .foot {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
}
</style>