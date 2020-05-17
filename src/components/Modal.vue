<template>
 <section class="modal" @click.self="closeModal()">
  <div class="modal-content border-style">
   <div class="flex content-height">
    <p class="fg-1 title black-text">{{data.process}}</p>
    <p class="fg-1 bg-red font-size-small center-text white-text">
     {{data.status}}
    </p>
    <span class="fill-flex">     
    </span>
    <img class="close fg-3 icon tooltip" src="../assets/close.svg" alt="close" @click='closeModal()' />
    
   </div>
   <div class="flex">
    <p class="font-size-12 subtitle fg-1">
     {{data.board}}
    </p>
   </div>
   <Steps :steps="data.data"/>
   <div class="flex row-reverse">
    <MainButton buttonText="Draft Revisions" />
    <SecondaryButton buttonText="Reinstate" class="mr-min" />
   </div>
  </div>
 </section>
</template>
<script>
import Steps from "./Steps.vue";
import MainButton from "./MainButton.vue";
import SecondaryButton from "./SecondaryButton.vue";

export default {
 name: "Modal",
 components: {
  Steps,
  MainButton,
  SecondaryButton
 },
 props: {
  isopen: Boolean,
  data: Object
 },
 methods: {
  closeModal() {
   this.$emit('close', false);
  }
 }
};
</script>

<style lang="scss" scoped>
.modal {
 position: fixed;
 z-index: 1;
 left: 0;
 top: 0;
 width: 100%;
 height: 100%;
 overflow: hidden;
 background-color: rgb(0, 0, 0);
 background-color: rgba(0, 0, 0, 0.4);
 .modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px 20px 25px 20px;
  width: 80%;
  &.border-style {
   background: linear-gradient(#fff, #fff) padding-box,
   linear-gradient(to left, #0075ae, #240055) border-box;
   border-top: 4px solid transparent;
   border-radius: 3px;
  }
 }
 .close {
  color: #aaa;
  height: 0.8rem;
  width: 0.8rem;
 }
 .close:hover,
 .close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
 }
 
 .title {
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  text-align: left;
  padding-left: 0.5rem;
 }
 .subtitle {
  text-align: left;
  padding-left: 0.5rem;
  font-size: 0.9rem;
  margin: 0.6rem auto auto auto;
 }
 .bg-red {
  background-color: #e20000;
  border-radius: 4px;
  height: 1.3rem;
  line-height: 1.3rem;
  margin: 0;
  font-weight: 500;
 }
 .fill-flex {
  flex-grow: 50;
 }
 .content-height {
  align-items: flex-end;
 }
 .row-reverse {
  flex-direction: row-reverse;
 }
}
</style>
