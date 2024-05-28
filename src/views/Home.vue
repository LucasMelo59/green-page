<script lang="ts">
import { defineComponent } from "vue";
import Home from "@/views/Home.vue";
import Nav from '@/components/Nav.vue';
import SectionProduct from '@/components/ProductSection.vue'


import WrappersCards from "@/components/WrappersCards.vue";
import SecaoRecentes from "@/components/SecaoRecentes.vue";
import GamesRevie from "@/components/GamesRevie.vue";

export default defineComponent({
  name: "Home",
  components: {
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
  data() {
    return {
    }
  }
})
</script>
<template>
  <div class="">
    <SectionProduct></SectionProduct>
    <WrappersCards></WrappersCards>
    <SecaoRecentes></SecaoRecentes>
    <GamesRevie></GamesRevie>
  </div>
</template>

<style>

</style>
