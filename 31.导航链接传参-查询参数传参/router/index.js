import Home from "@/views/Home.vue"
import Search from "@/views/Search.vue"
import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)//VueRouter初始化

const router = new VueRouter ({//创建路由对象
    routes: [
    //{path:'路由',component:组件名}
        { path: '/home',component:Home },
        { path:'/search',component:Search }
    ]
})

export default router