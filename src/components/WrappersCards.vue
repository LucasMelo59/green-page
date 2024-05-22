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
  name: 'WrapperCards',
  data() {
    return {
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
   <!-- <div class="opa">
        Ultimas Noticias
    </div>
    
    <div class="carousel-container">
        <div class="carousel">
            <div class="carousel-item">Frase 1: A vida é bela.</div>
            <div class="carousel-item">Frase 2: Sempre há esperança.</div>
            <div class="carousel-item">Frase 3: Continue lutando.</div>
            <div class="carousel-item">Frase 4: Acredite em si mesmo.</div>
            <div class="carousel-item">Frase 5: O sucesso está próximo.</div>
        </div>
    </div> -->
    <div class="container-wrapper">
      <div class="box-images">
        <div class="imgs" style="background-image: url(https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt60f5d7e2095fa266/65556d537c884ff9070fc7bf/112023_SN24-GameplaySpotlight-Banner.jpg?width=1500&quality=50);">
          <div class="separacao"></div>  
          <div class="overlay">
                <h2>Suspendisse ut justo tem por, rutrum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
        <div class="imgs" style="background-image: url(https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt60f5d7e2095fa266/65556d537c884ff9070fc7bf/112023_SN24-GameplaySpotlight-Banner.jpg?width=1500&quality=50);">
          <div class="separacao"></div>    
          <div class="overlay">
                <h2>Suspendisse ut justo tem por, rutrum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
        <div class="imgs" style="background-image: url(https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt60f5d7e2095fa266/65556d537c884ff9070fc7bf/112023_SN24-GameplaySpotlight-Banner.jpg?width=1500&quality=50);">
          <div class="separacao"></div>    
          <div class="overlay">
                <h2>Suspendisse ut justo tem por, rutrum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
        <div class="imgs" style="background-image: url(https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt60f5d7e2095fa266/65556d537c884ff9070fc7bf/112023_SN24-GameplaySpotlight-Banner.jpg?width=1500&quality=50);">
            <div class="overlay">
                <h2>Suspendisse ut justo tem por, rutrum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
      </div>
    </div>

    <!-- <div class="rectangle">
        <div class="division" style="background-image: url(https://liquipedia.net/commons/images/9/99/League_Infobox_Thresh.jpg);">
            <div class="overlay">
                <h2>Título 1</h2>
                <p>Descrição 1</p>
            </div>
        </div>
        <div class="division" style="background-image: url(https://liquipedia.net/commons/images/9/94/League_Infobox_Lee_Sin.jpg);">
            <div class="overlay">
                <h2>Título 2</h2>
                <p>Descrição 2</p>
            </div>
        </div>
        <div class="division" style="background-image: url('https://liquipedia.net/commons/images/b/b6/League_Infobox_Zed.jpg');">
            <div class="overlay">
                <h2>Título 3</h2>
                <p>Descrição 3</p>
            </div>
        </div>
        <div class="division" style="background-image: url(https://liquipedia.net/commons/images/d/d1/League_Infobox_Rakan.jpg);">
            <div class="overlay">
                <h2>Título 4</h2>
                <p>Descrição 4</p>
            </div>
        </div>
    </div> -->
</template>

<style>
/* VC IRÁ TRABALHAR O CSS AQUI DAVID  */
.wrapper {
  height: 100vh;
}

.container-wrapper {
  width: 100%;
  height: 100vh;
}

.imgs {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 415px;
  width: 350px;
}

.box-images {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.opa {
    width: 20%;
    max-width: 3000px; /* Ajusta conforme necessário */
    height: 80px; /* Altura do retângulo */
    
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    border: 1px solid #ccc;
    background-color:aqua;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.carousel-container {
    width: 100%;
    max-width: 3000px; /* Ajusta conforme necessário */
    height: 80px; /* Altura do retângulo */
    overflow: hidden;
    position: relative;
    border: 1px solid #ccc;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.carousel {
    display: flex;
    height: 100%;
    animation: slide 25s infinite;
}

.carousel-item {
    min-width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
}

@keyframes slide {
    0%, 20% { transform: translateX(0); }
    20%, 40% { transform: translateX(-100%); }
    40%, 60% { transform: translateX(-200%); }
    60%, 80% { transform: translateX(-300%); }
    80%, 100% { transform: translateX(-400%); }
}

.rectangle {
    width: 100%;
    height: 500px;
    display: flex;
    overflow: hidden;
    border: 1px solid #ccc;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.division {
    flex: 1;
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.overlay {
    background: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 50px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
}

h2 {
    margin: 0;
    font-size: 1.2rem;
}

p {
    margin: 5px 0 0;
    font-size: 0.9rem;
}
</style>
