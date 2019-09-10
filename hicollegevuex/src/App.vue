<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/scenario1">Components communication</router-link> |
      <router-link to="/state">State</router-link> |
      <router-link to="/getters">Getters</router-link> |
      <router-link to="/mutations">Mutations</router-link> |
      <router-link to="/actions">Actions</router-link> |
      <router-link to="/modules">Modules</router-link> ||
      <router-link to="/challenge1">Challenge1</router-link> ||
      <router-link to="/challenge2">Challenge2</router-link> ||
      <router-link to="/challenge3">Challenge3</router-link> ||
      <router-link to="/challenge4">Challenge4</router-link> ||
      <router-link to="/challenge5">Challenge5</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
