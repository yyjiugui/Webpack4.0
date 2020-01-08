import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../views/Home.vue'

export const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '', component: Home }
  ]
})