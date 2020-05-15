<template>
  <div class="steps-container">
    <div class="flow-container flex">
      <div class="step-1">
        <img src="../assets/check.svg" class="icon" alt="checkmark" />
      </div>
      <div class="step-5">
        <div class="line green"></div>
      </div>
      <div class="step-1">
        <img src="../assets/check.svg" class="icon" alt="checkmark" />
      </div>
      <div class="step-5">
        <div class="line"></div>
      </div>
      <div class="step-1">
        <span class="dot"><p class="white-text bold-text">3</p></span>
      </div>
      <div class="step-5">
        <div class="line"></div>
      </div>
      <div class="step-1">
        <span class="dot"><p class="white-text bold-text">4</p></span>
      </div>
      <div class="step-5">
        <div class="line"></div>
      </div>
      <div class="step-1">
        <span class="dot"><p class="white-text bold-text">5</p></span>
      </div>
      <div class="step-5">
        <div class="line"></div>
      </div>
      <div class="step-1">
        <span class="dot"><p class="white-text bold-text">6</p></span>
      </div>
    </div>
    <div class="description-container flex">
      <div class="description-step">
        <p class="gray-text">Draft</p>
        <p class="gray-text font-size-small">Created on</p>
        <p class="black-text font-size-small bold-text">01/31/2020</p>
      </div>
      <div class="description-step">
        <p class="gray-text">Pending Approval</p>
        <p class="gray-text font-size-small">Approval sent</p>
        <p class="black-text font-size-small bold-text">02/14/2020</p>
      </div>
      <div class="description-step">
        <p class="gray-text">Approved</p>
        <p class="gray-text font-size-small">Abandoned on</p>
        <p class="black-text font-size-small bold-text">02/20/2020</p>
      </div>
      <div class="description-step">
        <p class="gray-text">Execute</p>
      </div>
      <div class="description-step">
        <p class="gray-text">Concluded</p>
      </div>
      <div class="description-step">
        <p class="gray-text">Closed</p>
      </div>
    </div>
  </div>
</template>

<script>
import Steps from "./Steps.vue";

export default {
  name: "Steps",
  data() {
    return {
      modalOpen: false
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
.steps-container{
 width: 90%;
 margin: 0 auto;
}
.flow-container {
  height: 30px;
  .step-1 {
    flex-grow: 1;
    height: 30px;
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
   flex-grow: 5;
   .line {
    width: 100%;
    height: 0;
    border: 1px solid #c4c4c4;
    margin: 3px;
    display: inline-block;
    &.green{
     border: 1px solid #00c221;
    }
   }
  }
}
.description-container {
  .description-step {
    width: 10vw;
  }
}
</style>
