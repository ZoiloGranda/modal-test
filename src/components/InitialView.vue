<template>
  <div class="hello">
    <!-- Trigger/Open The Modal -->
    <MainButton class="open-modal" @click.native="openModal" buttonText="Open Modal"/>
    <Modal v-if="modalOpen" :isopen="modalOpen"></Modal>
  </div>
</template>

<script>
import Modal from "./Modal.vue";
import MainButton from "./MainButton.vue";

export default {
  name: "InitialView",
  components: {
    Modal,
    MainButton
  },
  data() {
    return {
      modalOpen: false
    };
  },
  methods: {
    openModal() {
     console.log('jai');
      this.modalOpen = !this.modalOpen;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
