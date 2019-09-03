import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store, // the store is injected here which is available in all child components and where we can access with this.$store
  render: h => h(App)
}).$mount("#app");
