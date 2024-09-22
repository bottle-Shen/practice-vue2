import Home from "@/views/Home.vue"
import Search from "@/views/Search.vue"
import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)//VueRouter初始化

const router = new VueRouter ({//创建路由对象
    routes: [
        //{path:'路由',component:组件名}
    //查询参数获取
        // { path: '/home',component:Home },
        // { path:'/search',component:Search }
        //动态参数获取
        { path: '/home',component:Home },
        { path:'/search/:names',component:Search }
    ]
})

export default router