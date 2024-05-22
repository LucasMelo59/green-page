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
    <div class="container-recentes wrapper-recentes">
        <div class="title">
            <h1>Games Recentes</h1>
        </div>
        <div class="row">
            <div class="cards">
                <img src="/assets/1.jpg" class="recentes-card" alt="">
                <div class="content">
                    <h5>Suspendisse ut justo tem por, rutrum</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit amet, consectetur elit. </p>
                </div>
            </div>
            <div class="cards">
                <img src="/assets/2.jpg" class="recentes-card" alt="">
                <div class="content">
                    <h5>Suspendisse ut justo tem por, rutrum</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit amet, consectetur elit. </p>
                </div>
            </div>
            <div class="cards">
                <img src="/assets/3.jpg" class="recentes-card" alt="">
                <div class="content">
                    <h5>Suspendisse ut justo tem por, rutrum</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit amet, consectetur elit. </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
/* VC IRÁ TRABALHAR O CSS AQUI DAVID  */
.wrapper-recentes {
    background-image: url('/assets/recent-game-bg.png');
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    padding-top: 100px;
    padding-bottom: 100px;
}

.title {
    text-align: center;
    padding-bottom: 150px;
}


.row {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1176px;
    margin: auto;
    gap: 10px;
    background-color: #fff;
}

.content {
    padding: 34px 22px 20px;
    border: 1px solid #d6dee7;
    border-top: none;
}
.content p {
    font-size: 14px;
    color: #878787;
    line-height: 2;
}

img {
    width: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.container-recentes {
    width: 100%;
}

h5 {
    margin-bottom: 20px;
    line-height: 1.5;
    font-size: 20px;
}
</style>
