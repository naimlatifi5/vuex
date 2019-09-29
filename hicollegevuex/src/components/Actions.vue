<template>
  <div class="actions">
    <h1>Actions</h1>
    <div>Count state : {{ count }}</div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <br />
    <br />
    <button @click="addCountItem">Multiple count</button>
    <br />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "ActionsVuex",
  mounted() {
    // we can dispatch action methods as
    console.log(this.$store.dispatch("increment"));
    console.log(this.$store.state.Module1.countIncrement);
  },
  computed: {
    ...mapState(["count", "todos"])
  },
  methods: {
    addCountItem() {
      return this.incrementWithPayload(2);
    },
    ...mapActions(["increment", "addTodos", "decrement"]),
    // use a
    ...mapActions({
      incrementButton: "increment",
      incrementWithPayload: "incrementPayload"
    })
  }
};
</script>

<style></style>
