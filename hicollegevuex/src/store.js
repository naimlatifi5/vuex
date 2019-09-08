import Vue from "vue";
import Vuex from "vuex";

/* ********* Welcome to store and vuex *******/

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    boolVal: false,
    todos: [
      {
        id: 1,
        text: "I need to finish getters in vuex",
        done: false
      },
      {
        id: 2,
        text: "I need to finish hicollege with vuex",
        done: true
      },

      {
        id: 3,
        text: "I need to buy milk",
        done: true
      }
    ]
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },

  getters: {
    doneItems(state) {
      return state.todos.filter(item => item.done === true);
    }
  },
  actions: {
  }
});
