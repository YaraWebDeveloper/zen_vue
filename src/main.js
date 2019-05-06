import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import Routes from './routes/router.js';

Vue.config.productionTip = false

var router = new VueRouter({
    routes: Routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
