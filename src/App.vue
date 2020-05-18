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
  font-family: 'Ubuntu', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.flex {
  display: flex;
}

.fg-1 {
  flex-grow: 1;
}

.black-text{
 color:#202020;
}

.gray-text{
 color:#777777;
}
.white-text{
 color: white;
}

.font-size-small{
 font-size: 0.8rem
}

.tooltiptext {
  visibility: hidden;
  width: 4.5rem;
  background-color: #bbb;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
}

.tooltip:hover {
  .tooltiptext{
   visibility:visible;
  }
}
</style>
