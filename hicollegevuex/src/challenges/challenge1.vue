<template>
  <div>
    <h1>#Challenge1</h1>
    <p>
      We want to store the products data to a centrized store so that we can
      access in our other components
    </p>
    <p>
      1. Your task in this challenge is to call the products from Vuex store and
      loop through them as below
    </p>
    <ul>
      <li v-for="(product, index) in products" :key="index">
        {{ product.name }} || <strong>{{ product.price }} kr</strong>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { name: "Iphone 11", price: 1000 },
        { name: "Samsung", price: 799 },
        { name: "Iphone 6", price: 500 },
        { name: "Ipad", price: 800 }
      ]
    };
  }
};
</script>

<style>
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
