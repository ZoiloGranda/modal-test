<template>
 <button>{{buttonText}}</button>
</template>

<script>
export default {
 name: "SecondaryButton",
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
 margin-right: 0.5em;
 box-shadow: 4px 4px 7px 0px #e2e2e2;
 background: linear-gradient(to bottom, #ffffff 5%, #ffffff 100%);
 background-color: #ffffff;
 border-radius: 4px;
 border: 1px solid #e0e0e0;
 display: inline-block;
 cursor: pointer;
 color: #0769fd;
 font-family: Arial;
 font-size: 15px;
 font-weight: bold;
 padding: 10px 16px;
 text-decoration: none;
 @media only screen and (max-width: 680px) {
  font-size: 12px;
 }
 @media only screen and (max-width: 300px) {
  padding: 0px;
  font-size: 10px;
  width: 40%;
 }
}
button:hover {
 background: linear-gradient(to bottom, #0969FC 5%, #0768fc 100%);
 background-color: #0769fd;
 color: #fff;
}
button:active {
 position: relative;
 top: 1px;
}
</style>
