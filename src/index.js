// 从零构建vue-cli工程项目
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './styles/index.less'
import './assets/font/iconfont.css'
import './assets/index.json'
import './testbabel/index.js'

console.log(process.env)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
