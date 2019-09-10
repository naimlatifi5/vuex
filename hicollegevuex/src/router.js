import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/state",
      name: "state",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "state" */ "./views/State.vue")
    },
    {
      path: "/getters",
      name: "getters",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "getters" */ "./views/Getters.vue")
    },
    {
      path: "/mutations",
      name: "mutations",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "getters" */ "./views/Mutations.vue")
    },
    {
      path: "/actions",
      name: "actions",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "getters" */ "./views/Actions.vue")
    },
    {
      path: "/modules",
      name: "modules",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "getters" */ "./views/Modules.vue")
    },
    {
      path: "/challenge1",
      name: "challenge1",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "getters" */ "./challenges/challenge1.vue")
    },
    {
      path: "/challenge2",
      name: "challenge2",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "getters" */ "./challenges/challenge2.vue")
    },
    {
      path: "/challenge3",
      name: "challenge3",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "getters" */ "./challenges/challenge3.vue")
    },
    {
      path: "/challenge4",
      name: "challenge4",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "getters" */ "./challenges/challenge4.vue")
    },
    {
      path: "/challenge5",
      name: "challenge5",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "getters" */ "./challenges/challenge5.vue")
    },
    {
      path: "/scenario1",
      name: "scenario1",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "communication" */ "./components/scenario1/parentComponent.vue")
    }
  ]
});
