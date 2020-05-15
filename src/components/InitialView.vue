<template>
  <div class="hello">
    <!-- Trigger/Open The Modal -->
    <button id="myBtn" @click="openModal">Open Modal</button>
    <Modal v-if="modalOpen" :isopen="modalOpen"></Modal>
  </div>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  name: "InitialView",
  components: {
    Modal
  },
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
.open-modal {
  box-shadow: 4px 4px 7px 0px #b0b0b0;
  background: linear-gradient(to bottom, #0769fd 5%, #0769fd 100%);
  background-color: #0769fd;
  border-radius: 4px;
  border: 1px solid #057fd0;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  text-shadow: 0px -1px 0px #5b6178;
}
.open-modal:hover {
  background: linear-gradient(to bottom, #0769fd 5%, #0769fd 100%);
  background-color: #0769fd;
}
.open-modal:active {
  position: relative;
  top: 1px;
}
</style>
