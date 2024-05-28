<script lang="ts">
import { defineComponent } from "vue";
import { ref } from "vue";


export default defineComponent({
  name: 'Nav',
  data() {
    return {
      isScrolled: false
    };
  },
  mounted() {
    // Adiciona um ouvinte de evento para o evento de rolagem
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    // Remove o ouvinte de evento quando o componente for destruído
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Verifica se o scroll da página é maior que 0
      this.isScrolled = window.scrollY > 0;
    }
  },
  setup() {
    return {}
  }
})
</script>
<template>
<div class="navbar" :class="{ 'sticky': isScrolled }">
    <a href="#" class="logo">
      <img
        src="/assets/kisspng-leaf-logo-green-leaves-5ab4681eb98b34.54704653152177257476.png"
        width="40px"
        height="40px"
        alt=""
      />
    </a>

    <ul class="nav">
      <li class="nav-link active" router-liun >
        <a href="#">
          <router-link to="/">Inicio</router-link>
        </a>
      </li>
      <li class="nav-link">
        <a href="#">
          <router-link to="/comunidade">Comunidade</router-link>
        </a>
      </li>
      <li class="nav-link">
        <a href="#">
          <router-link to="/about">Sobre</router-link>
        </a>
      </li>
      <li class="nav-link"><a href="#">Apoio</a></li>
      <li class="nav-link"><a href="#">Doações</a></li>
    </ul>
    <div class="action">
      <button>Login</button>
      <button>Idioma</button>
    </div>
  </div>
</template>
<style>
.navbar {
  display: flex;
  background: transparent;
  z-index: 9999;
  position: fixed;
  width: 100%;
  height: calc(5rem + 1rem);
  transition: 0.5s ease;
}
.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 35px;
  margin: auto;
  color: #fff;
}
.logo {
  margin: auto 25px 
}
.action {
  display: flex;
  padding-right: 40px;
  gap: 35px;
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
  border-bottom: 2px solid green;
  transition: margin-bottom 0.5s;
}
.nav-link a {
  color: #fff;
}
.navbar.sticky{
  background-color: black;
  /* background-color: rgba(255, 255, 255, 0.1); */
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
</style>