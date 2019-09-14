<template>
  <div class="counter">
    Parent value count passed as props and recieves value
    <div>{{ count }}</div>
    <button-counter
      :count="count"
      @changedCount="counter($event)"
    ></button-counter>
  </div>
</template>

<script>
import buttonCounter from "./buttonCounterChildComponent.vue";
export default {
  data() {
    return {
      count: 0
    };
  },
  components: {
    buttonCounter
  },
  methods: {
    counter(counter) {
      this.count = counter;
    }
  }
};
</script>

<style></style>
