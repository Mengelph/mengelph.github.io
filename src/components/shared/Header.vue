<template>
  <div class="header">
    <!--    <div class="logo">-->
    <!--      <img src="../../../../../Itgeniy/portfolio/src/logo.png" alt="">-->
    <!--    </div>-->
    <section class="menu">
      <ul class="menu__items">
        <!--        <li class="menu__item">-->
        <!--          <router-link :to=" { name: 'App' } ">Главная</router-link>-->
        <!--        </li>-->
        <li class="menu__item">
          <router-link :to=" { name: 'portfolio' } ">Портфолио</router-link>
        </li>
        <li class="menu__item">
          <router-link :to=" { name: 'attendance' } ">Услуги</router-link>
        </li>
        <li class="menu__item">
          <router-link :to=" { name: 'contacts' } ">Контакты</router-link>
        </li>
      </ul>
    </section>

  </div>
</template>

<script>

// import mainPage from "@/views/MainPage";
export default {
  name: "mainHeader"
}
</script>

<style scoped>
@font-face {
  font-family: 'Santello';
  src: url('../../assets/fonts/SANTELLO.ttf');
}

.header {
  /*background-color: #ffffff;*/
  /*display: grid;*/
  /*max-width: 250px;*/
  /*grid-template-column: ;*/
  font-family: 'Santello', sans-serif;
  justify-content: space-around;
  /*max-width: 1200px;*/
  /*margin: 0 auto;*/
  padding: 40px 20px;
  font-size: 25px;
  height: 100%;
  /*background: rgba(3, 38, 35, 0.73);*/
}

.menu {
  display: flex;
  justify-content: center;
}

.menu__items {
  display: flex;
  /*flex-direction: column;*/
  align-items: flex-start;
  justify-content: center;
  gap: 50px;
  max-width: 600px;
  /*padding: 10px 20px 20px 20px;*/
}

.menu__item {
  list-style: none;
}

.menu__item a {
  text-decoration: none;
  color: black;
  padding: 10px;
}
.menu__item a.router-link-active {
  border-bottom: 3px solid black;
}

</style>