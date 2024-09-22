<template>
    <!-- 面经详情 -->
     <!-- 发请求需要时间，页面会有短暂空白
     给页面加上判断v-if="article.id"当axios数据获取完成到后才渲染页面 -->
  <div class="article-detail-page" v-if="article.id">
    <!-- $router.back()返回上一个路由 -->
    <nav class="nav"><span @click="$router.back()" class="back">&lt;</span> 面经详情</nav>
    <header class="header">
        <!-- 从下方article对象里取值 -->
      <h1>{{ article.stem }}</h1>
      <p>{{ article.createdAt }} | {{ article.views }} 浏览量 | {{ article.likeCount }} 点赞数</p>
      <p>
        <img
          :src="article.creatorAvatar"
          alt=""
        />
        <span>{{ article.creatorName }}</span>
      </p>
    </header>
    <main class="body">
      {{ article.content }}
    </main>
  </div>
</template>

<script>
import axios from 'axios';

// 请求地址: https://mock.boxuegu.com/mock/3083/articles/:id
// 请求方式: get
export default {
  name: "ArticleDetailPage",
  data() {
    return {
      article:{}//因为控制台result是对象，所以article也写成对象
    }
    },
    async created() {
        // console.log(this.$route.query.id)//获取参数---查询参数传参
        //console.log(this.$route.params.id)//获取参数---动态传参

        const id = this.$route.params.id//拿到传过来的id
        const {data} = await axios.get(`https://mock.boxuegu.com/mock/3083/articles/${id}`)//:id动态参数,地址栏能拿到
        //console.log(res)// 解构数据 res--{data}
        // console.log(data)
        this.article = data.result
        console.log(this.article)
  }
}
</script>

<style lang="less" scoped>
.article-detail-page {
  .nav {
    height: 44px;
    border-bottom: 1px solid #e4e4e4;
    line-height: 44px;
    text-align: center;
    .back {
      font-size: 18px;
      color: #666;
      position: absolute;
      left: 10px;
      top: 0;
      transform: scale(1, 1.5);
    }
  }
  .header {
    padding: 0 15px;
    p {
      color: #999;
      font-size: 12px;
      display: flex;
      align-items: center;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
  }
  .body {
    padding: 0 15px;
  }
}
</style>