// 从零构建vue-cli工程项目
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './styles/index.less'
import './assetc/font/iconfont.css'
import './assetc/index.json'

// 配置文件配置上 浏览器在解析js文件时，可以找出来具体哪个js文件报错了
// console.error("错误")

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
