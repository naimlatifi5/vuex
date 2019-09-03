<template>
  <div class="state">
    <p>
      Store state: <strong>{{ count }}</strong>
    </p>
    <p>
      Store state: <strong>{{ boolVal }}</strong>
    </p>
    <p>
      local <strong>{{ localComputed }}</strong>
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "State",
  computed: {
    localComputed() {
      return "computed property";
    },
    // map state with local computed properties
    ...mapState(["count", "boolVal"])
  }
};
</script>

<style></style>
