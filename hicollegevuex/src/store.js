import Vue from "vue";
import Vuex from "vuex";

/* ********* Welcome to store and vuex *******/

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    boolVal: false
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {}
});
