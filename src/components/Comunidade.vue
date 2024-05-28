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
            data: [{
                img: '/assets/profiles/1.jpg',
                texto: 'Desde a atualização 1.6.6, não consigo plantar nenhum coco dourado :( Isso é apenas uma questão de má sorte da minha parte ou outras pessoas também estão percebendo a mesma coisa?'
            },
            {
                img: '/assets/profiles/2.jpg',
                texto: 'Eu reorganizei completamente minha fazenda de Gengibre nos últimos dias e agora tenho uma pergunta para a qual não consegui encontrar facilmente a resposta. Ainda tenho 4 terrenos vazios de 5x5 e quero ter certeza de plantar culturas que continuarão a crescer indefinidamente sem replantio. Existe uma lista em algum lugar, ou todas as culturas simplesmente continuarão a crescer após cada colheita?'
            },
            {
                img: '/assets/profiles/3.jpg',
                texto: 'Desde a atualização 1.6.6, não consigo plantar nenhum coco dourado :( Isso é apenas uma questão de má sorte da minha parte ou outras pessoas também estão percebendo a mesma coisa?'
            },
            {
                img: '/assets/profiles/4.jpg',
                texto: 'Desde a atualização 1.6.6, não consigo plantar nenhum coco dourado :( Isso é apenas uma questão de má sorte da minha parte ou outras pessoas também estão percebendo a mesma coisa?'
            },
            {
                img: '/assets/profiles/5.jpg',
                texto: 'Acabei de ter uma vontade repentina e decidi voltar a jogar Green forest, mas sou péssimo nisso, então se alguém quiser jogar comigo, ficaria grato.'
            },
            {
                img: '/assets/profiles/6.jpg',
                texto: 'O que você odeia e ama em Green Forest? Primeiro, me diga o que você odeia. Em seguida, me diga o que você ama sobre Green Forest.'
            },
            {
                img: '/assets/profiles/7.jpg',
                texto: 'Desde a atualização 1.6.6, não consigo plantar nenhum coco dourado :( Isso é apenas uma questão de má sorte da minha parte ou outras pessoas também estão percebendo a mesma coisa?'
            },
            {
                img: '/assets/profiles/8.jpg',
                texto: 'Desde a atualização 1.6.6, não consigo plantar nenhum coco dourado :( Isso é apenas uma questão de má sorte da minha parte ou outras pessoas também estão percebendo a mesma coisa?'
            },
        ]
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
   <div class="comunidade">
    <div class="hero">
        <div class="content-info">
            <div class="text">
                <h2>Bem vindo a nossa comunidade</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nostrum itaque eos, numquam dolor commodi earum quis enim rem dolorem, veritatis dolorum, non cumque. Repellat quam beatae odio aperiam ea?</p>
            </div>
        </div>
    </div>
    <div class="container-posters">
        <div class="info">
            <h1>Todos os membros(344)</h1>
        </div>
        <div class="container-post" v-for="item of data ">
            <div class="profile">
                <img :src="item.img" alt="">
                <div class="profile-info">
                    <p>João Vincente</p>
                    <p class="data" >21 de Junho, 2024</p>
                    <div class="text-post">
                        <p>{{item.texto}}</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
   </div>
</template>

<style>
/* VC IRÁ TRABALHAR O CSS AQUI DAVID  */
    .comunidade {
        width: 100%;
    }
    .hero {
        background-image: url('/assets/sunny-tropical-landscape.jpg');
        height: 800px;
        background-size: cover;
    }
    .content-info {
        height: 100%;
        display: flex;
        align-items: center;
    }
    .text {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: center;
        padding: 60px 80px 0 60px;
        color: #fff;
        gap: 10px;
        max-width: 1100px;
    }

    .text h2 {
        font-size: 40px;
        font-weight: 600;
        line-height: 20px;
    }
    .text p {
        font-size: 20px;
        font-weight: 600;
        line-height: 20px;
    }
    .container-posters {
        height: 100%;
        width: 100%;
        padding: 30px;
    }

    .profile {
        display: flex;
        gap: 10px;
        padding: 33px 55px 65px;
        background-color: #1f2225;
        color: #fff;
        line-height: 30px;
        max-width: 1176px;
    }

    .profile .text-post {
        padding-right: 20px;
    }

    .text-post p{
        font-size: 25px;
        font-weight: 400;
        line-height: 40px;
    }

    .profile img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }

    .container-post {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    }
</style>
