import Article from '@/views/Article.vue'
import ArticleDetail from '@/views/ArticleDetail.vue'
import Collect from '@/views/Collect.vue'
import Layout from '@/views/Layout.vue'
import Like from '@/views/Like.vue'
import User from '@/views/User.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/', component: Layout,
            redirect:'/article',//重定向
            //通过children配置项，可以配置嵌套子路由(二级路由)
            //1.在children配置项中，配规则
            //2.准备二级路由出口(否则页面不显示)
            children: [
                { path: '/article', component: Article },
                { path: '/collect', component: Collect },
                { path: '/user', component: User },
                { path: '/like', component: Like },
            ]
        },//首页
        // { path: '/detail', component:ArticleDetail },//面经详情
         { path: '/detail/:id', component:ArticleDetail },//1.动态传参改造路由
    ]
})

export default router