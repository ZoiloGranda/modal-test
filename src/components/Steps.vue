<template>
 <div class="steps-container">
  <div class="flow-container flex"> 
   <div class="step-container flex"
   v-for="(item, index) in steps" 
   v-bind:class="[index+1===steps.length ? 'fg-0' : 'fg-1']">
   <div class="step-1 tooltip">
    <img v-if="item.done" src="../assets/check.svg" class="icon" alt="checkmark" />
    <span v-else class="dot"><p class="white-text">{{index+1}}</p></span>
    <span class="tooltiptext">{{item.done?'Nice':'Not Nice'}}</span>
   </div>
   <div class="step-5 line" 
   v-bind:class="[item.done && index!==1 ? 'green' : '',
   item.done ? 'colored-line':'']">
  </div>
 </div>
</div>

<div class="description-container flex">
 <div class="description-step" v-for="(item, index) in steps">
  <p class="gray-text step-title">{{item.name}}</p>
  <p class="gray-text font-size-small step-status">{{item.description}}</p>
  <p class="black-text font-size-small step-date">{{item.date}}</p>
 </div>
</div>
</div>
</template>

<script>
import Steps from "./Steps.vue";

export default {
 name: "Steps",
 props: {
  steps: Array
 },
 methods: {
  openModal() {
   this.modalOpen = !this.modalOpen;
  },
 }
};
</script>

<style scoped lang="scss">
.steps-container{
 width: 100%;
 margin: 3rem auto auto auto;
}
.flow-container {
 align-items: center;
 width: 85%;
 margin: 3rem auto 0 auto;
 .step-container{
  align-items: center;
  &:last-child .line {
   display: none;
  }
  .step-1 {
   flex: 1 1 0px;
   .icon {
    height: 20px;
    width: 20px;
   }
   .dot {
    height: 25px;
    width: 25px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    p{
     margin: 0;
     line-height: 1.6rem;
     font-weight: 600;
    }
   }
  }
  .step-5{
   flex: 5 1 0px;
   &.line {
    height: 1px;
    border: 0.5px solid #c4c4c4;
    background-color: #c4c4c4;
    margin: 3px;
    
    &.green{
     height: 1px;
     border: 0.5px solid #00c221;
     background-color: #00c221;
    }
   }
  }
  
 }
}
.description-container {
 width: 99%;
 margin: 0 auto 2rem auto;
 .description-step {
  flex: 1 1 0px;
  p.step-title{
   margin: 0.7rem auto 0.9rem auto;
   font-weight: 500;
   @media only screen and (max-width: 580px) {
    font-size: 0.7rem;
   }
  }
  p.step-status{
   margin-bottom: 0rem;
   @media only screen and (max-width: 580px) {
    font-size: 0.6rem;
   }
  }
  p.step-date{
   margin-top: 0.4rem;
   font-weight: 600;
   @media only screen and (max-width: 580px) {
    font-size: 0.6rem;
   }
  }
 }
}

@media only screen and (max-width: 400px) {
 .steps-container{
  display: flex;
  height: 60%;
  margin: 2.5rem auto;
  .flow-container{
   width: 100%;
   flex-direction: column;
   flex-grow: 1;
   margin: 0 auto 0 10vw;
   .step-container{
    width:100%;
    &:last-child{
     flex-grow: 1;
     .line {
      display: block;
    }
   }
   .colored-line{
    height: 1px;
    border: 0.5px solid #00c221;
    background-color: #00c221;
   }
   }
  }
  .description-container{
   flex-direction: column;
   flex-grow: 1;
   margin: 0 auto;
   .description-step{
    margin: 0;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
   }
   p.step-status, p.step-date{
    margin: 0 auto;
   } 
   p.step-title{
    margin: 0 auto;
   }
  }
  
 }
}
</style>
