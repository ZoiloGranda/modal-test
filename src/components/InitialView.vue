<template>
 <div class="hello">
  <MainButton class="open-modal" @click.native="openModal" buttonText="Open Modal"/>
  <transition name="fade">
   <Modal v-if="modalOpen" :isopen="modalOpen" :data="data" @close="modalOpen = $event"></Modal>
  </transition>
 </div>
</template>

<script>
import Modal from "./Modal.vue";
import MainButton from "./MainButton.vue";

export default {
 name: "InitialView",
 components: {
  Modal,
  MainButton
 },
 data() {
  return {
   modalOpen: false,
   data: {},
  };
 },
 methods: {
  openModal() {
   this.modalOpen = true;
  },
  closeModal() {
   this.modalOpen = false;
  }
 },
 created: function () {
  fetch('data.json').then(res=>res.json()).then(data=>{
   console.log(data);
   this.data = data;
   
  })
 }
};
</script>

<style scoped lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s linear;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
