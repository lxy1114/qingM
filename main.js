import Vue from 'vue'
import App from './App'
import './static/icon/iconfont.css'
import util from '@/utils/util.js'

Vue.prototype.$utils = util
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
