import Vue from 'vue'
import App from './App.vue'
//配置路由
import Find from './views/Find.vue'
import My from './views/My.vue'
import Friend from './views/Friend.vue'
// npm add vue-router@3.6.5
// 引入VueRouer模块
import VueRouter from 'vue-router'
// 安装注册
Vue.use(VueRouter)

Vue.config.productionTip = false

//创建路由对象
const router = new VueRouter({
    routes: [
        { path: '/find', component: Find },
        //path:'地址栏路径',component:组件
        { path: '/my', component: My },
        {path:'/friend',component:Friend}
    ]
})

new Vue({
    render: (CreateElement) => {
        return CreateElement(App)
    },
    //将路由对象注入到new Vue实例，建立关联
    router
}).$mount('#app')