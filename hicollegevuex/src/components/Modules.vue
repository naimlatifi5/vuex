<template>
  <div>
    <h1>Modules</h1>
    Count: {{ countIncrement }}
    <button @click="incrementMe">Increment</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("Module1", ["countIncrement"])
  },
  methods: {
    ...mapActions("Module1", ["incrementMe"])
  }
};
</script>

<style></style>
