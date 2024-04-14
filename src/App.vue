<script lang="ts">
import Home from "@/views/Home.vue";
import Nav from '@/components/Nav.vue';
import SectionProduct from '@/components/ProductSection.vue'
export default {
  components: {
    Home,
    Nav,
    SectionProduct
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
  <SectionProduct></SectionProduct>
  <div class="about section">

  </div>
</template>

<style scoped>


</style>
