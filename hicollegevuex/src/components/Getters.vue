<template>
  <div class="getters">
    hello getters
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <strong> {{ todo.id }}</strong> - {{ todo.text }} --
        <strong>{{ todo.done }}</strong>
      </li>
    </ul>
    <br />
    <div>
      Done items:
      <div v-for="(item, index) in doneItems" :key="index">
        {{ item.id }} -- {{ item.text }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "helloGetters",
  data() {
    return {
      // what if we need this todos items to list in another component, then we can use getters and vuex with state
      // todos: [
      //   {
      //     id: 1,
      //     text: "I need to finish getters in vuex",
      //     done: false
      //   },
      //   {
      //     id: 2,
      //     text: "I need to finish hicollege with vuex",
      //     done: true
      //   },
      //   {
      //     id: 3,
      //     text: "I need to buy milk",
      //     done: true
      //   }
      // ]
    };
  },
  mounted() {
    // we can access getters with store
    console.log(this.$store.getters.doneItems);
  },
  computed: {
    ...mapState(["todos"]),
    // doneItems() {
    //   return this.todos.filter(item => item.done === true);
    // }
    ...mapGetters(["doneItems"])
  }
};
</script>

<style>
ul {
  margin: 0;
  padding: 0;
}
</style>
