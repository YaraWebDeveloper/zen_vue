export default {
  state: {
    list: [],
    msg: 'Welcome to zen vue'
  },
  mutations: {
    setList: function (state, payload) {
      state.list = payload.list;
    }
  },
  actions: {
    listAllClients: function ({commit, state}) {
      commit('setList', {list: [{name: 'Fernando'}]})
    }
  }
}
