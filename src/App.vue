<script setup lang="ts"></script>

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
    </ul>
    <div class="action">
      <button>Login</button>
      <button>Idioma</button>
    </div>
  </div>
  <div class="hero-section">
    <div class="text-content">
      <h1>Venha aprender Jogando</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, fugit fugiat harum recusandae totam deleniti cumque exercitationem optio amet saepe repudiandae maxime expedita quis, rerum similique? Ducimus, saepe! Reprehenderit, laudantium.
      </p>
      <button class="button-hero" >Aplicar</button>
    </div>
      <div class="eco-img-constrution">
      <img
        class="folha"
        width="350px"
        height="350px"
        src="@\assets\pngegg.png"
        alt=""
      />
    </div>
    
  </div>
</template>

<style scoped>


.folha {
  margin: 20px auto;
  opacity: 0;
  animation: drawAnimation 2s ease-in-out forwards;
}
.navbar {
  display: flex;
  background: transparent;
}
.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 35px;
  margin: auto;
}
ul,
li,
a {
  text-decoration: none;
  list-style: none;
}
.logo {
  margin-top: 20px;
  margin-left: 25px;
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
  border-bottom: 2px solid #fff;
  transition: margin-bottom 0.5s;
}
.nav-link a {
  color: #fff;
}
.hero-section {
  display: flex;
  justify-content: space-around;
  align-items: center;
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
    from { width: 0 }
    to { width: 100% }
  }

.button-hero {
  border: 2px solid transparent;
  height: 40px;
  width: 120px;
  border-radius: 8px;
  color: #000;
  background-color: yellowgreen;
  font-size: 15px;
  transition: all .6s ease;
  font-weight: 500;
  cursor: pointer;
}

.button-hero:hover{
  transform: scale(1.1);
}

@keyframes drawAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

</style>
