<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import {
  FreeMode,
  Navigation,
  Thumbs,
  Pagination,
  Autoplay
} from 'swiper/modules'
import { ref } from 'vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
export default {
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
      thumbsSwiper,
      setThumbsSwiper,
      modules: [FreeMode, Thumbs, Pagination, Autoplay]
    }
  },
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
  }
}
</script>

<template>
  <div class="navbar">
    <a href="#">
      <img
        src="@\assets\kisspng-leaf-logo-green-leaves-5ab4681eb98b34.54704653152177257476.png"
        width="60px"
        height="60px"
        class="logo"
        alt=""
      />
    </a>

    <ul class="nav">
      <li class="nav-link active"><a href="#">Inicio</a></li>
      <li class="nav-link"><a href="#">Jogo</a></li>
      <li class="nav-link"><a href="#">Sobre</a></li>
      <li class="nav-link"><a href="#">Apoio</a></li>
      <li class="nav-link"><a href="#">Doações</a></li>
    </ul>
    <div class="action">
      <button>Login</button>
      <button>Idioma</button>
    </div>
  </div>
  <div class="home">
    <swiper
      :loop="true"
      :autoplay="{
        delay: 4500,
        disableOnInteraction: false
      }"
      :pagination="{
        clickable: true
      }"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="modules"
      class="bg-slider"
    >
      <swiper-slide v-for="(item, index) in teste" :key="index">
        <img :src="item.url" alt="" />
        <div class="text-content">
          <h2 class="title">Testando <span>Season</span></h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis vero
            voluptatibus dolorum quos voluptas optio pariatur voluptatum
            accusantium, fuga adipisci maiores autem, recusandae illo unde
            nihil! Deleniti doloribus expedita rem.
          </p>
          <button class="read-btn">
            Saiba Mais
            <font-awesome-icon :icon="['fas', 'leaf']" />
          </button>
        </div>
      </swiper-slide>
    </swiper>

    <swiper
      @swiper="setThumbsSwiper"
      :loop="true"
      :slidesPerView="teste.length"
      :watchSlidesProgress="true"
      :freeMode="true"
      class="bg-slider-thumbs thumbs-container"
      :modules="modules"
    >
      <swiper-slide class="" v-for="(item, index) in teste" :key="index">
        <img :src="item.url" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
.options-info {
  color: #fff;
}

.home {
  min-height: 100vh;
}
.bg-slider {
  z-index: 777;
  position: relative;
  width: 100%;
  min-height: 100vh;
}

.bg-slider .swiper-slide {
  position: relative;
  width: 100%;
  height: 100vh;
}

.bg-slider .swiper-slide img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  background-position: center;
  background-size: cover;
  pointer-events: none;
}

.swiper-slide .text-content {
  position: absolute;
  top: 25%;
  color: #fff;
  margin: 0 200px;
  transition: 0.3s ease;
}

.swiper-slide .text-content .title {
  font-size: 4em;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: var(--text-shadow);
  transform: translateY(-50px);
  opacity: 0;
}

.swiper-slide-active .text-content .title {
  transform: translateY(0);
  opacity: 1;
  transition: 1s ease;
  transition-delay: 0.3s;
  transition-property: transform, opacity;
}

.swiper .text-content .title span {
  font-size: 0.3em;
  font-weight: 300;
}

.swiper-slide .text-content p {
  max-width: 700px;
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  text-shadow: var(--text-shadow);
  backdrop-filter: blur(10px);
  box-shadow: var(--box-shadow);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  transform: translateX(-80px);
  opacity: 0;
}

.swiper-slide-active .text-content p {
  transform: translateX(0);
  opacity: 1;
  transition: 1s ease;
  transition-delay: 0.3s;
}

.swiper-slide .text-content .read-btn {
  border: none;
  outline: none;
  background-color: #fff;
  color: #000;
  font-size: 1em;
  font-weight: 500;
  padding: 8px 25px;
  display: flex;
  align-items: center;
  margin-top: 40px;
  border-radius: 8px;
  cursor: pointer;
  transform: translateX(50px);
  opacity: 0;
}

.swiper-slide-active .text-content .read-btn {
  transform: translateX(0);
  opacity: 1;
  transition: 1s ease;
  transition-delay: 0.3s;
}
.read-btn:hover {
  transform: scale(1.1);
  background-color: #000;
}

.bg-slider-thumbs {
  z-index: 777;
  position: absolute;
  bottom: 7em;
  left: 50%;
  transform: translateX(-50%);
  transition: 0.3s ease;
}

.thumbs-container {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 10px 3px;
  border-radius: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: var(--box-shadow);
}

.thumbs-container img {
  width: 50px;
  height: 35px;
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
  object-fit: cover;
}

.swiper-slide-thumb-active img {
  border: 1px solid #fff;
  transform: scale(1.2);
}

.navbar {
  display: flex;
  background: transparent;
  z-index: 9999;
  position: fixed;
  width: 100%;
  height: calc(5rem + 1rem);
}
.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 35px;
  margin: auto;
}

.logo {
  margin-top: 20px;
  margin-left: 25px;
}
.action {
  display: flex;
  padding-right: 40px;
  gap: 35px;
  height: calc(5rem + 1rem);
}
.action button {
  width: 90px;
  color: #fff;
  border: 2px solid gray;
  height: 30px;
  margin: auto;
  border-radius: 8px;
  transition: all 0.2s ease;
  cursor: pointer;
}
.action button:hover {
  transform: scale(1.1);
  color: yellowgreen;
}
.nav-link:hover {
  border-bottom: 2px solid #fff;
  transition: margin-bottom 0.5s;
}
.nav-link.active {
  border-bottom: 2px solid #fff;
  transition: margin-bottom 0.5s;
}
.nav-link a {
  color: #fff;
}
.hero-section {
  height: 100vh;
  width: 100%;
}
.eco-img-constrution {
  color: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.eco-img-constrution .text {
  font-size: 50px;
  width: 100%;
  text-align: center;
  margin: auto;
  gap: 30px;
}
.text-content {
  color: #fff;
}

.text-content h1 {
  font-size: 50px;
  font-weight: 900;
  margin: 15px 0;
}

.text-content p {
  width: 100%;
  max-width: 620px;
  font-size: 15px;
  font-weight: 400;
  line-height: 32px;
  margin-bottom: 40px;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>
