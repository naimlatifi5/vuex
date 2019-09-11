<template>
  <div class="actions">
    <h1>Actions</h1>
    <div>Count state : {{ count }}</div>
    <button @click="this.incrementButton">+</button>
    <button @click="decrement">-</button>
    <br />
    <h4>Action with payload</h4>
    <div v-for="(todo, index) in todos" :key="index">
      <div>{{ todo.text }}</div>
    </div>
    <button @click="addToDoItem">Add toDo</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "ActionsVuex",
  mounted() {
    // we can dispatch action methods as
    console.log(this.$store.dispatch("increment"));
  },
  computed: {
    ...mapState(["count", "todos"])
  },
  methods: {
    addToDoItem() {
      const item = {
        id: 4,
        text: "hello todos from component",
        done: true
      };
      this.addTodos(item);
    },
    ...mapActions(["increment", "addTodos", "decrement"]),
    // use a
    ...mapActions({
      incrementButton: "increment"
    })
  }
};
</script>

<style></style>
