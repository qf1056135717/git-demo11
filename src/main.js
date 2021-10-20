import Vue from 'vue'
import App from './App.vue'
import count from '@/components/count.vue'
import Test from '@/components/Test.vue'

Vue.component('MyCount', count)
Vue.component('MyTest', Test)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')