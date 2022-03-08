import Vue from 'vue'
import App from './App.vue'

import anime from 'animejs/lib/anime.min.js';
Vue.prototype.$anime = anime;

import './assets/output.css'
Vue.config.productionTip = false

import VueRouter from "vue-router";
import router from "./routers"; // 引用路由器
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router, // 装载路由器
}).$mount('#app')