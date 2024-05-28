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
    name: 'comunidade',
    data() {
        return {

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
   <!-- html aqui  -->
   <div class="">
    
   </div>
</template>

<style>
/* VC IRÁ TRABALHAR O CSS AQUI DAVID  */

</style>
