<template>
  <div class="actions">
    <h1>Actions</h1>
    <div>Count state : {{ count }}</div>
    <button @click="this.incrementButton">+</button>
    <button @click="decrement">-</button>
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
    ...mapState(["count"])
  },
  methods: {
    ...mapActions(["increment", "decrement"]),
    // use a
    ...mapActions({
      incrementButton: "increment"
    })
  }
};
</script>

<style></style>
