import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iview from 'iview';  //UI框架，常用开发组件
import 'iview/dist/styles/iview.css';
// 嫁接
Vue.use(iview)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
