<template>
  <div class="button-counter">
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
export default {
  name: "buttonCounter",
  data() {
    return {
      counter: this.count
    };
  },
  props: {
    count: {
      type: Number,
      default: 0
    }
  },
  methods: {
    increment() {
      this.counter++;
      this.$emit("changedCount", this.counter);
    },
    decrement() {
      if (this.counter <= 0) {
        return;
      }
      this.counter--;
      this.$emit("changedCount", this.counter);
    }
  }
};
</script>

<style></style>
