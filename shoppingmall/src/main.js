// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vant from 'vant'
import FastClick from 'fastclick'
import App from './App.vue';
import router from '../router';
import store from './store';
import 'vant/lib/index.css'
import 'lib-flexible'

Vue.use(Vant)
Vue.config.productionTip = false
FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
