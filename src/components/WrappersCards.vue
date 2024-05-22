<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { defineComponent } from 'vue'

import {
  FreeMode,
  Navigation,
  Thumbs,
  Pagination,
  Autoplay
} from 'swiper/modules'
import { ref } from 'vue'

export default defineComponent({
  name: 'WrapperCards',
  data() {
    return {
      teste: [
        {
          url: 'src/assets/pexels-kaique-rocha-775201.jpg' // Corrija o caminho da imagem se necessário
        },
        {
          url: 'src/assets/pexels-senuscape-1658967.jpg'
        },
        {
          url: 'src/assets/pexels-sohail-nachiti-807598.jpg'
        }
      ],
      cities: [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const thumbsSwiper = ref(null)

    const setThumbsSwiper = (swiper: any) => {
      thumbsSwiper.value = swiper
    }

    return {
      setThumbsSwiper,
      thumbsSwiper,
      modules: [FreeMode, Thumbs, Pagination, Autoplay]
    }
  }
})
</script>
<template>
  <div class="wrapper">
    <!-- VC IRÁ TRABALHAR O HTML AQUI DAVID -->
  </div>
</template>

<style>
     /* VC IRÁ TRABALHAR O CSS AQUI DAVID  */
</style>
