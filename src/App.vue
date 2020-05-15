<template>
  <div id="app">
    <InitialView/>
  </div>
</template>

<script>
import InitialView from './components/InitialView.vue'

export default {
  name: 'App',
  components: {
    InitialView,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
