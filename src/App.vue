<template>
  <div id="app">
    <div id="main">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style  lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  #main {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>