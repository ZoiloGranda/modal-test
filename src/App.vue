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
.flex {
  display: flex;
}

.fg-1 {
  flex-grow: 1;
}

.fg-2 {
  flex-grow: 2;
}

.fg-3 {
  flex-grow: 3;
}

.fg-4 {
  flex-grow: 4;
}

.fg-14 {
  flex-grow: 14;
}

.center-text{
 margin: auto;
}

.bold-text{
 font-weight: 600;
}

.black-text{
 color:#111111;
}

.gray-text{
 color:#595959;
}
.white-text{
 color: white;
}

.font-size-small{
 font-size: 0.8rem
}

.font-size-1{
 font-size: 1rem
}

.font-size-14{
 font-size: 14px;
}

.font-size-12{
 font-size: 12px;
}
.mr-min{
 margin-right: 0.5em
}

.mr-1{
 margin-right: 1em
}
.mr-2{
 margin-right: 2em
}
.mr-3{
 margin-right: 3em
}
.mr-4{
 margin-right: 4em
}
</style>
