import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    render: (CreateElement) => {
        return CreateElement(App)
    }
}).$mount('#app')