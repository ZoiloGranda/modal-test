<template>
 <div class="hello">
  <MainButton class="open-modal" @click.native="openModal" buttonText="Open Modal"/>
  <transition name="bounce">
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
.bounce-enter-active {
 animation: bounce-in .5s;
}
.bounce-leave-active {
 animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
 0% {
  transform: scale(0);
 }
 50% {
  transform: scale(1.2);
 }
 100% {
  transform: scale(1);
 }
}
</style>
