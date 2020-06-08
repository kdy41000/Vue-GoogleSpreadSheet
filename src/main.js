import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import List from './components/List.vue'
import TestList from './components/TestList.vue'

import axios from 'axios'
import VueRouter from 'vue-router'
import store from './store'

//axios는 Promise기반이다. default로 IE에서는 Promise를 사용 할 수 없기 때문에 polyfill 요소를 참조해야한다.
import ES6Promise from 'es6-promise'
ES6Promise.polyfill()
Vue.use(VueRouter);   // 애플리케이션 전체에서 사용 가능 하도록 설정
//axios 간편사용 설정
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

const router = new VueRouter({
  routes : [
    { path : '/', redirect: '/home' },
    { path : '/home', name:'home', component:Home },
    { path : '/list', name:'list', component:List },
    { path : '/testlist', name:'testlist', component:TestList }
    ]
})

// 전역 수준의 내비게이션 보호 기능을 위해 다음의 기능 사용(beforeEach, afterEach)
router.beforeEach((to, from, next) => {
  console.log("** beforeEach!!",from.path,":",to.path)
  next();   // next()를 사용해야 다음 훅으로 진행됨
})
router.afterEach((to, from) => {
  console.log("** afterEach!!",from.path,":",to.path)
})

new Vue({
  store,
  axios,
  router,
  render: h => h(App),
}).$mount('#app')