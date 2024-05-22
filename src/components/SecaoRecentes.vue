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
import Slider from 'primevue/slider';
import InputText from 'primevue/inputtext';

export default defineComponent({
  name: 'SecaoRecentes',
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
      ],
      value: ref(50)
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    Slider,
    InputText
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
  <div class="wrapper-recentes">
    <!-- VC IRÁ TRABALHAR O HTML AQUI DAVID -->
    
  </div>
</template>

<style>
/* VC IRÁ TRABALHAR O CSS AQUI DAVID  */
.wrapper-recentes {
  height: 100vh;
  background-image: url('src/assets/recent-game-bg.png');
  
}
</style>
