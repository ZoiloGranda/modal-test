<template>
  <div class="steps-container">
    <div class="flow-container flex">
     <!-- <p>{{steps[0].description}}</p> -->
      <!-- v-for="item in steps" -->
      <div class="step-1">
        <img src="../assets/check.svg" class="icon" alt="checkmark" />
      </div>
      <div class="step-5 line green">
      </div>
      <div class="step-1">
        <img src="../assets/check.svg" class="icon" alt="checkmark" />
      </div>
      <div class="step-5 line">
      </div>
      <div class="step-1">
        <span class="dot"><p class="white-text bold-text">3</p></span>
      </div>
      <div class="step-5 line">
      </div>
      <div class="step-1">
        <span class="dot"><p class="white-text bold-text">4</p></span>
      </div>
      <div class="step-5 line">
      </div>
      <div class="step-1">
        <span class="dot"><p class="white-text bold-text">5</p></span>
      </div>
      <div class="step-5 line">
      </div>
      <div class="step-1">
        <span class="dot"><p class="white-text bold-text">6</p></span>
      </div>
    </div>
    <div class="description-container flex">
      <div class="description-step">
        <p class="gray-text step-title">Draft</p>
        <p class="gray-text font-size-small step-status">Created on</p>
        <p class="black-text font-size-small bold-text step-date">01/31/2020</p>
      </div>
      <div class="description-step">
        <p class="gray-text step-title">Pending Approval</p>
        <p class="gray-text font-size-small step-status">Approval sent</p>
        <p class="black-text font-size-small bold-text step-date">02/14/2020</p>
      </div>
      <div class="description-step">
        <p class="gray-text step-title">Approved</p>
        <p class="gray-text font-size-small step-status">Abandoned on</p>
        <p class="black-text font-size-small bold-text step-date">02/20/2020</p>
      </div>
      <div class="description-step">
        <p class="gray-text step-title">Execute</p>
      </div>
      <div class="description-step">
        <p class="gray-text step-title">Concluded</p>
      </div>
      <div class="description-step">
        <p class="gray-text step-title">Closed</p>
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
    }
  },
  created: function () {
    console.log(this.steps);
  },
  mounted: function () {
    console.log(this.steps);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.steps-container{
 width: 100%;
 margin: 3rem auto auto auto;
}
.flow-container {
  align-items: center;
  width: 85%;
  margin: 3rem auto 0 auto;
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
      }
    }
  }
  .step-5{
   flex: 5 1 0px;
   &.line {
    height: 0;
    border: 1px solid #c4c4c4;
    margin: 3px;
    &.green{
     border: 1px solid #00c221;
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
   }
   p.step-status{
    margin-bottom: 0rem;
   }
   p.step-date{
    margin-top: 0.4rem;
   }
  }
}
</style>
