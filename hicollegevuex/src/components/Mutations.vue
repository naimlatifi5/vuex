<template>
  <div class="mutations">
    <h1>Mutations</h1>
    <div>Count: {{ count }}</div>
    <button @click="increment">Increase</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Mutations",
  computed: {
    ...mapState(["count"])
  },
  mounted() {
    console.log(this.$store);
  },
  methods: {
    ...mapMutations(["increment"])
  }
};
</script>

<style></style>
