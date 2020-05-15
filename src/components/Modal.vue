<template>
  <div id="myModal" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <h1>Engagement Process</h1>
      <span>Abandoned</span>
      <Steps />
      <p>2019 Fall Oncology Advisory Board</p>
      <p>{{ isopen }}</p>
      <SecondaryButton buttonText="Reinstate" />
      <MainButton buttonText="Draft Revisions" />
    </div>
  </div>
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
    isopen: Boolean
  },
  methods: {
    close() {
      this.$emit("input", !this.value);
    }
  }
};
</script>

<style lang="css" scoped>
/* The Modal (background) */
.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
