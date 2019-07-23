import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);
import clients from './modules/Clients';

var store = new Vuex.Store({
  modules: {
    clients
  }
});

export default store;
