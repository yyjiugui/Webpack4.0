// 从零构建vue-cli工程项目
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './styles/index.less'
import './assetc/font/iconfont.css'
import './assetc/index.json'

// 配置文件配置上 浏览器在解析js文件时，可以找出来具体哪个js文件报错了
// console.error("错误")

setTimeout(function() {
  console.log('没用箭头函数')
}, 1000)
// 执行npm run build 查看dist打包后的代码 发现webpack没有帮我们转换
setTimeout(() => {
  console.log('箭头函数')
}, 100)
// 执行npm run build 发现webpack没有帮我们转换
class Person {
  // static gender = '男'
  constructor(name) {
    this.name = name
  }
}
const person = new Person('张三')

async function fun() {
  await 10
}

/*
使用babel来帮webpack
为什么需要babel 有些老版本浏览器不认识 es的高级语法 例如: Promise(大部分浏览器支持了)
配置好loader后发现代码全部转化为了浏览器能运行的语法
*/

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
