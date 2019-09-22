import Vue from "vue";
import Vuex from "vuex";

/* ********* Welcome to store and vuex *******/

Vue.use(Vuex);

export default new Vuex.Store({
  // think of state as data property in vue
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
    // you cannot call a mutation handler directly. Think of mutations as events
    // you can pass a payload to mutation as an argument
    // mutation functions are synchronouse meaning that we can capture it will capture the state before and after in devtools and debugging
    increment(state, payload) {
      console.log("payload passed", payload);
      // we are chainging the state here
      state.count++;
    },
    decrement(state, payload) {
      console.log("decrement payload", payload);
      if (state.count <= 0) {
        return;
      }

      state.count--;
    },
    ADD_TODO(state, payload) {
      // add an object to todos array
      state.todos.push(payload);
    }
  },

  getters: {
    // think of getters as computed data and which are cached
    doneItems(state) {
      return state.todos.filter(item => item.done === true);
    }
  },
  // actions are similar to mutations but with differences that instead of mutating the state.
  // actions commit a mutation.
  // actions can contain asynchronous operations compared to mutations that are synchronous functions
  actions: {
    increment(context) {
      // context object exposes the methods/properties on the store instance where we can access.
      // state , getters with commit.state/commit.getters and call a mutation with context.commit
      context.commit("increment");
    },
    // we can also use destructing to access the commit property as
    increment1({ commit }) {
      commit("increment1");
    },
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit("increment");
      }, 1000);
    },
    actionWithPayload({ commit }, product) {
      console.log(product);
      commit("increment");
    },
    decrement({ commit }) {
      commit("decrement");
    },
    addTodos({ commit }, item) {
      commit("ADD_TODO", item);
    }
  }
});
