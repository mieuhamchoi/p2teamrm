import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
        count: 0
    };
  },
  mutations: {
    setCount(state, value) {
      return state.count = value
    }
  },
  actions: {
    setCountAction({commit}, value) {
      commit('setCount', value)
    }
  },
  getters: {
    getCount(state) {
      return state.count
    }
  },
  modules: {

  }
});

export default store;