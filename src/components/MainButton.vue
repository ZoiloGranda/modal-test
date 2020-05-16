<template>
 <div class="">
  <button>{{buttonText}}</button>
 </div>
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

<style scoped lang="scss">
button {
 box-shadow: 4px 4px 7px 0px #b3c9ed;
 background: linear-gradient(to bottom, #0969FC 5%, #0768fc 100%);
 background-color: #0769fd;
 border-radius: 4px;
 border: 1px solid #057fd0;
 display: inline-block;
 cursor: pointer;
 color: #ffffff;
 font-family: Arial;
 font-size: 15px;
 font-weight: bold;
 padding: 10px 16px;
 text-decoration: none;
}
button:hover {
 background: linear-gradient(to bottom, #ffffff 5%, #ffffff 100%);
 background-color: #ffffff;
 color: #0969FC;
 border: 1px solid #e0e0e0;
}
button:active {
 position: relative;
 top: 1px;
}
</style>
