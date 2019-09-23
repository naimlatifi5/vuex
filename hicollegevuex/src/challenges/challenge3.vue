<template>
  <div>
    #challenge3 Mutations
    <br />
    <p>
      In this task we want with the help of mutation to perform some operations
      on div element below:
    </p>
    <p>
      1. We want to mutate state so that class active will change its state on
      page load loads
    </p>
    <p>
      2. When we click the div element it will mutate state and toggle the class
      active
    </p>
    <div class="my-div">
      Hello my DIV
    </div>

    <p>Div with class active</p>
    <div class="my-div active">
      Hello my DIV
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "myDiv",
  mounted() {
    this.initPageLoad(true);
  },
  computed: {
    ...mapState(["toggle"])
  },
  methods: {
    ...mapMutations(["toggleElement", "initPageLoad"])
  }
};
</script>

<style>
.my-div {
  width: 100px;
  height: 100px;
  background-color: grey;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.my-div.active {
  background-color: red;
}
</style>
