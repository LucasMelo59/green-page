<script lang="ts">
import Home from "@/views/Home.vue";
import Nav from '@/components/Nav.vue';
import SectionProduct from '@/components/ProductSection.vue'
import WrappersCards from "./components/WrappersCards.vue";
export default {
  components: {
    Home,
    Nav,
    SectionProduct,
    WrappersCards
  },
  setup() {
   
    return {
     
    }
  },
  
}
</script>

<template>
  <Nav></Nav>
  <Home></Home>
  <!-- <SectionProduct></SectionProduct> -->
  <WrappersCards></WrappersCards>
  <div class="about section">

  </div>
</template>

<style scoped>


</style>
