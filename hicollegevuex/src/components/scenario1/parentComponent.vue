<template>
  <div class="counter">
    <button-counter :count="count"></button-counter>
  </div>
</template>

<script>
import buttonCounter from "./buttonCounter.vue";
export default {
  data() {
    return {
      count: 0
    };
  },
  components: {
    buttonCounter
  }
};
</script>

<style></style>
