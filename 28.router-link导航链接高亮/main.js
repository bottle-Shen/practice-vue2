import Vue from 'vue'
import App from './App.vue'
// 引入router
import router from './router/index.js'

Vue.config.productionTip = false

new Vue({
    render: (CreateElement) => {
        return CreateElement(App)
    },
    //将路由对象注入到new Vue实例，建立关联
    router
}).$mount('#app')