<template>
  <section class="modal">
    <div class="modal-content">
      <div class="flex content-height">
        <p class="fg-1 title">Engagement Process</p>
        <p class="fg-1 bg-red font-size-14 center-text white-text">Abandoned</p>
        <span class="fg-4"></span>
        <span class="close fg-1">&times;</span>
      </div>
      <div class="flex">
      <p class="font-size-12">2019 Fall Oncology Advisory Board</p>
     </div>
      <Steps/>
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
  padding: 15px 20px 20px 20px;
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

.title {
  color: black;
  font-size: 20px;
  font-weight: bold;
  width: 130px;
}

.bg-red {
  background-color: #e20000;
  width:16px;
  border-radius: 4px;
}

.content-height{
 height: 45px;
}

.row-reverse{
 flex-direction: row-reverse
}
</style>
