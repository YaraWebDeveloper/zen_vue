import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue'
import VueRouter from 'vue-router';



Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuex);


import store from './store/Store';
import Routes from './routes/router';


var router = new VueRouter({mode: 'history', routes: Routes})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
