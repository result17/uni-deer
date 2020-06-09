import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import uView from "uview-ui"

Vue.config.productionTip = false
Vue.prototype.$store = store

Vue.use(uView)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()