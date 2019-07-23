<template>
  <div id="app">
    <new-header></new-header>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    'new-header': () =>
      import(
        /* webpackChunkName: "Header" */ "./components/template/Header"
      )
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
