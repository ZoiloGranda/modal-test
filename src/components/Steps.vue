<template>
  <div class="container">
   <div class="step">
   <h6>Draft</h6>
   <p>Created on</p>
   <p>01/31/2020</p>
   </div>
   <div class="step">
   <h6>Pending Approval</h6>
   <p>Approval sent</p>
   <p>02/14/2020</p>
   </div>
   <div class="step">
   <h6>Approved</h6>
   <p>Abandoned on</p>
   <p>02/20/2020</p>
   </div>
   <div class="step">
   <h6>Execute</h6>
   </div>
   <div class="step">
   <h6>Concluded</h6>
   </div>
   <div class="step">
   <h6>Closed</h6>
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
  display: flex;
  .step{
   background-color: red;
   flex-grow: 1;
   height: 30px;
  }
}
</style>
