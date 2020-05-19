<template>
 <section class="modal" @click.self="closeModal()">
  <div class="modal-content border-style">
   <div class="flex close-container">
    <img class="close icon" src="../assets/close.svg" alt="close" @click='closeModal()' />
   </div> 
   <div class="flex content-height">
    <p class="title black-text">{{data.process}}</p>
    <p class="fg-1 bg-red font-size-small white-text">
     {{data.status}}
    </p>
    <span class="fill-flex">     
    </span>
    
   </div>
   <div class="flex">
    <p class="subtitle fg-1">
     {{data.board}}
    </p>
   </div>
   <Steps :steps="data.data"/>
   <div class="flex row-reverse">
    <MainButton buttonText="Draft Revisions" />
    <SecondaryButton buttonText="Reinstate" />
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
 overflow: auto;
 background-color: rgb(0, 0, 0);
 background-color: rgba(0, 0, 0, 0.4);
 .modal-content {
  background-color: #fefefe;
  margin: 10% auto;
  padding: 20px 20px 25px 20px;
  width: 70%;
  &.border-style {
   background: linear-gradient(#fff, #fff) padding-box,
   linear-gradient(to left, #0075ae, #240055) border-box;
   border-top: 4px solid transparent;
   border-radius: 3px;
  }
 }
 .close-container{
   flex-direction: row-reverse;
  .close {
   color: #aaa;
   height: 0.8rem;
   width: 0.8rem;
   align-self: center;
   @media only screen and (max-width: 440px) {
    align-self: end
   }
  }
  .close:hover,
  .close:focus {
   color: black;
   text-decoration: none;
   cursor: pointer;
  }
 }
 .title {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0px 0.5rem 0px 0px;
  text-align: left;
  padding-left: 0.5rem;
  flex: 1 1 12rem;
  @media only screen and (max-width: 440px) {
   flex: 1 1 10rem;
  }
 }
 .subtitle {
  text-align: left;
  padding-left: 0.5rem;
  font-size: 0.9rem;
  margin: 0.6rem auto auto auto;
  font-size: 12px;
 }
 .bg-red {
  background-color: #e20000;
  border-radius: 4px;
  height: 1.3rem;
  line-height: 1.3rem;
  margin: 0;
  font-weight: 500;
  padding: 0 5px;
  @media only screen and (max-width: 440px) {
   justify-content: center;
   align-self: end;
  }
 }
 .fill-flex {
  flex-grow: 50;
 }
 .content-height {
  align-items: flex-end;
 }
 .row-reverse {
  flex-direction: row-reverse;
  @media only screen and (max-width: 400px) {
   justify-content: center;
  }
 }
}
@media only screen and (max-width: 400px) {
 .modal{
  height: 100%;
  overflow:hidden;
  .modal-content{
   height: 75vh;
   margin: 8% auto;
   padding: 20px 20px 10px 20px;
   .close{
    align-self: baseline;
   }
   .content-height{
     flex-direction: column;
     align-items: flex-start;
     margin-left: 0.5rem;
     .title{
      flex: 1 1 0;
      padding-left: 0px;
     }
     .bg-red{
     }
   }
  }
 }
}
</style>
