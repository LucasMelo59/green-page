<script lang="ts">
import Home from "@/views/Home.vue";
import Nav from '@/components/Nav.vue';
import SectionProduct from '@/components/ProductSection.vue'
import WrappersCards from "./components/WrappersCards.vue";
import SecaoRecentes from "./components/SecaoRecentes.vue";
import GamesRevie from "./components/GamesRevie.vue";
export default {
  components: {
    Home,
    Nav,
    SectionProduct,
    WrappersCards,
    SecaoRecentes,
    GamesRevie
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
  <SecaoRecentes></SecaoRecentes>
  <GamesRevie></GamesRevie>
  <div class="about section">

  </div>
</template>

<style scoped>


</style>
