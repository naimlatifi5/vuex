<template>
  <div>
    #challenge4 Actions
    <br />
    <p>
      In this task we want with the help of actions to perform some operations
      in our data and mutate state:
    </p>
    <p>Add item to our products</p>
    <ul>
      <li>
        Iphone || 10000
      </li>
      <li>
        Samsung || 15998
      </li>
      <li>
        Iphone 6 || 8800
      </li>
      <li>
        Ipad || 7600
      </li>
    </ul>

    <br />
    <div>Phone Model: <input type="text" v-model="phoneItem" /></div>
    <div>
      Price:
      <input type="number" v-model="price" />
    </div>
    <div><button>Add item</button></div>
  </div>
</template>

<script>
export default {
  name: "Challenge4",
  data() {
    return {
      phoneItem: "",
      price: ""
    };
  },
  computed: {},
  methods: {}
};
</script>

<style></style>
