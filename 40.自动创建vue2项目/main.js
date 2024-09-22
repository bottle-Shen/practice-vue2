// 文件核心作用：导入App.vue，基于App.vue创建结构渲染index.html
import Vue from 'vue'//导入Vue核心包
import App from './App.vue'//导入App.vue根组件

//导入编写代码组件
import HmButton from './components/HmButton.vue'

// 提示：当前处于什么环境 (生产环境 / 开发环境)
Vue.config.productionTip = false

//进行全局注册--在所有组件范围内都能直接使用
//Vue.component('组件名',组件对象)
Vue.component('HmButton', HmButton)

//实例化Vue,将App.vue渲染到index.html中
//提供render方法--基于App.vue创建结构渲染index.html
new Vue({
  // el:'#app', 作用：和$mount('选择器')作用一致，用于知道Vue所管理容器
  // render: h => h(App),
  //h相当于createElement
  render: (createElement) => {
    //基于App创建元素结构
    return createElement(App)
  }
}).$mount('#app')//相当于el:'#app'
