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
      <li>
        Iphone || 5000
      </li>
      <li>
        Samsung || 7999
      </li>
      <li>
        Iphone 6 || 4400
      </li>
      <li>
        Ipad || 3800
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
