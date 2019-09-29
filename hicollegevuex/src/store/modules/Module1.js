/* eslint-disable */ 
export default {
  namespaced: true,
  state: {
    countIncrement: 100
  },
  mutations:{
    INCREMENT_COUNT(state) {
      state.countIncrement++;
    }
  },
  actions: {
    incrementMe({ commit }) {
      commit("INCREMENT_COUNT");
    }
  }
}