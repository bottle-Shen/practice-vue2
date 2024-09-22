import Vue from 'vue'

//非父子通信event bus事件总线
//非父子组件之间，进行简易消息传递。（复杂场景-->Vuex)
const Bus = new Vue()
export default Bus