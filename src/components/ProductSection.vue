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
  name: 'Product-Section',
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
  <div class="product-section">
    <div class="right-content">
      <swiper
        @swiper="setThumbsSwiper"
        :loop="true"
        :slidesPerView="3"
        :watchSlidesProgress="true"
        :freeMode="true"
        class="bg-slider-thumbs-product thumbs-container-product"
        :modules="modules"
      >
        <swiper-slide class="" v-for="(item, index) in teste" :key="index">
          <img :src="item.url" alt="" />
        </swiper-slide>
      </swiper>

      <h2>Mais vendidos</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        laborum eaque aliquam veritatis sed deleniti saepe odit praesentium
        tempora sequi aperiam necessitatibus nemo in inventore itaque provident
        totam, voluptatum commodi.
      </p>
    </div>
    <div class="right-game-box">
      <swiper
        :thumbs="{ swiper: thumbsSwiper }"
        :slidesPerView="1"
        :loop="true"
        :pagination="{
          clickable: true
        }"
        :centeredSlides="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="item in teste"
          ><img :src="item.url" alt=""
        /></swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style>
.product-section {
  width: 100%;
  height: 100vh;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr; /* Duas colunas com largura igual */
  gap: 20px;
  padding: 10px 25px;
  margin: 0 auto;
}

.mySwiper {
  position: relative;
  height: 25vh;
  width: 50vh;
}

.right-game-box {
  background-color: blue;
  display: flex;
  align-items: center;
  width: 100%;
}
</style>
