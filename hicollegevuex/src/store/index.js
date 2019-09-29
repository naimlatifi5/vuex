import Vue from "vue";
import Vuex from "vuex";
import Module1 from "./modules/Module1.js";
/* ********* Welcome to store and vuex *******/

Vue.use(Vuex);
export default new Vuex.Store({
  // think of state as data property in vue
  modules: {
    Module1
  },
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
      },
      {
        id: 4,
        text: "I need to buy fish",
        done: false
      }
    ]
  },
  mutations: {
    // you cannot call a mutation handler directly. Think of mutations as events
    // you can pass a payload to mutation as an argument
    // mutation functions are synchronouse meaning that we can capture it will capture the state before and after in devtools and debugging
    // mutations are synchronous and used only to update the state

    /** Inside actions you can run asynchronous code but not in mutations. So use actions for asynchronous code otherwise use mutations.
    Inside actions you can access getters, state, mutations (committing them), actions (dispatching them) in mutations you can access the state. So if you want to access only the state use mutations otherwise use actions. */

    increment(state) {
      state.count++;
    },
    incrementPayload(state, payload) {
      console.log("payload passed", payload);
      // we are chainging the state here
      if (payload) {
        console.log("we have payload");
        state.count = state.count * payload;
      } else {
        state.count++;
      }
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
    increment({ commit }) {
      // context object exposes the methods/properties on the store instance where we can access.
      // state , getters with commit.state/commit.getters and call a mutation with context.commit
      commit("increment");
    },

    incrementPayload({ commit }, payload) {
      commit("incrementPayload", payload);
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
