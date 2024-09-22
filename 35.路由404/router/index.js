import Home from "@/views/Home.vue"
import Search from "@/views/Search.vue"
import NotFind from "@/views/NotFind.vue"
import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)//VueRouter初始化

const router = new VueRouter ({//创建路由对象
    routes: [
        //路由重定向
        // 问题：网页打开，url 默认是 / 路径，未匹配到组件时，会出现空白
        // 说明：重定向---匹配path后, 强制跳转path路径
        // { path: '匹配路径', redirect: '重定向到的路径' },
        {path:'/',redirect:'/home'},
        //{path:'路由',component:组件名}
    //查询参数获取
        // { path: '/home',component:Home },
        // { path:'/search',component:Search }
        //动态参数获取
        { path: '/home',component:Home },
        // { path: '/search/:names', component: Search }
        // 添加动态路由参数可选符 ?
        { path: '/search/:names?', component: Search },
        // 路由404
//         作用：当路径找不到匹配时，给个提示页面
//         位置：配在路由最后
        //         语法：path: "*" 或者"任意路径" – 
        // 前面不匹配就命中最后这个
        {path:'*',component:NotFind}
        
    ]
})

export default router