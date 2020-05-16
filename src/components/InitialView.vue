<template>
  <div class="hello">
    <MainButton class="open-modal" @click.native="openModal" buttonText="Open Modal"/>
    <Modal v-if="modalOpen" :isopen="modalOpen" :data="data" @close="modalOpen = $event"></Modal>
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
      modalOpen: false,
      data: {}
    };
  },
  methods: {
    openModal() {
      this.modalOpen = !this.modalOpen;
    },
    closeModal() {
      this.modalOpen = false;
    }
  },
  created: function () {
    fetch('data.json').then(res=>res.json()).then(data=>{
     console.log(data);
     this.data = data;
    })
  }
};
</script>

<style scoped lang="scss">

</style>
