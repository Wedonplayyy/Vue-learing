import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vant from 'vant'
import 'vant/lib/index.css'
import 'lib-flexible'
import FastClick from 'fastclick'
import BScroll from 'better-scroll'

Vue.use(Vant)
Vue.config.productionTip = false
FastClick.attach(document.body)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
