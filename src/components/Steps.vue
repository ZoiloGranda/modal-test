<template>
  <div class="container flex">
    <div class="step">
      <img src="../assets/check.svg" class="icon" alt="checkmark" />
      <p class="gray-text">Draft</p>
      <p class="gray-text font-size-small">Created on</p>
      <p class="black-text font-size-small bold-text">01/31/2020</p>
    </div>
    <div class="step">
      <img src="../assets/check.svg" class="icon" alt="checkmark" />
      <p class="gray-text">Pending Approval</p>
      <p class="gray-text font-size-small">Approval sent</p>
      <p class="black-text font-size-small bold-text">02/14/2020</p>
    </div>
    <div class="step">
      <span class="dot"></span>
      <p class="gray-text">Approved</p>
      <p class="gray-text font-size-small">Abandoned on</p>
      <p class="black-text font-size-small bold-text">02/20/2020</p>
    </div>
    <div class="step">
      <span class="dot"></span>
      <p class="gray-text">Execute</p>
    </div>
    <div class="step">
      <span class="dot"></span>
      <p class="gray-text">Concluded</p>
    </div>
    <div class="step">
      <span class="dot"></span>
      <p class="gray-text">Closed</p>
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
.container {
 height: 130px;
  .step {
    flex-grow: 1;
    height: 30px;
    .icon {
      height: 25px;
      width: 25px;
    }
    .dot {
      height: 25px;
      width: 25px;
      background-color: #bbb;
      border-radius: 50%;
      display: inline-block;
    }
  }
}
</style>
