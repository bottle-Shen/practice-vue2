import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 1.在main.js中全局注册指令
// Vue.directive('指令名', {
// Vue.directive('focus', {
//     //inserted 会在 指令所在的元素，被插入到页面中时触发
//    // inserted:被绑定元素插入父节点时调用的钩子函数
//     inserted(el) {
//         // el 就是指令所绑定的元素,可以对el标签扩展额外功能
//         // console.log(el)
//         el.focus()
//     }
// })
new Vue({
    render: (CreateElement) => {
        return CreateElement(App)
    }
}).$mount('#app')