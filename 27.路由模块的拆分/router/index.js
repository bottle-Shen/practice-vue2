// 问题：所有的路由配置都堆在main.js中合适么？
// 目标：将路由模块抽离出来。 好处：拆分模块，利于维护
//创建router目录
//绝对路径：@指代src目录，可以用于快速引入组件
//配置路由
//记得把.改为@路径查找
import Find from '@/views/Find.vue'
import My from '@/views/My.vue'
import Friend from '@/views/Friend.vue'

import Vue from 'vue'
// npm add vue-router@3.6.5
// 引入VueRouer模块
import VueRouter from 'vue-router'
// 安装注册VueRouter插件初始化
Vue.use(VueRouter)

//创建router路由对象
const router = new VueRouter({
    routes: [
        { path: '/find', component: Find },
        //path:'地址栏路径',component:组件
        { path: '/my', component: My },
        {path:'/friend',component:Friend}
    ]
})

export default router//导出router路由对象
