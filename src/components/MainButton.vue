<template>
    <button>{{buttonText}}</button>
</template>

<script>
export default {
  name: "MainButton",
  props:{
   buttonText:String
  },
  data() {
    return {
      modalOpen: true
    };
  },
  methods: {
    openModal() {
      this.modalOpen = !this.modalOpen;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button {
  box-shadow: 4px 4px 7px 0px #b0b0b0;
  background: linear-gradient(to bottom, #0769fd 5%, #0769fd 100%);
  background-color: #0769fd;
  border-radius: 4px;
  border: 1px solid #057fd0;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
}
button:hover {
  background: linear-gradient(to bottom, #0769fd 5%, #0769fd 100%);
  background-color: #0769fd;
}
button:active {
  position: relative;
  top: 1px;
}
</style>
