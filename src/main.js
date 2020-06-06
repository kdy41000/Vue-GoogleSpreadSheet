import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import List from './components/List.vue'

import axios from 'axios'
import VueRouter from 'vue-router'

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
    { path : '/list', name:'list', component:List }
    ]
})

new Vue({
  axios,
  router,
  render: h => h(App),
}).$mount('#app')