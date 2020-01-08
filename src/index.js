import './styles/style.css'
import '../public/assess/font/iconfont.css'
import '../public/assess/index.json'

function f() {
  console.log('从零构建Vue-cli项目')
}
f()

function f1() {
  let element = document.getElementById('template')
  element.innerHTML = JSON.stringify('holle-world'.split('-'))
}
f1()
// document.body.appendChild(f1())
console.log('webpack学习第一天')
console.log('webpack学习第二天!')
console.log('webpack学习第三天')

// 配置文件配置上 浏览器在解析js文件时，可以找出来具体哪个js文件报错了
// console.error("错误")

// 从零构建vue-cli工程项目

import Vue from 'vue'
import App from './App.vue'
import { router } from './router/index'

new Vue({
	el: '#app',
	router,
  render: h => h(App)
})
