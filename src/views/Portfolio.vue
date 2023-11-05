<template>
  <div class="portfolio">
    <!--    <div class="portfolio-title">-->
    <!--      Портфолио-->
    <!--    </div>-->
    <!--    <cosplay-component/>-->
    <!--    <portrait-component/>-->
    <!--    <ThemesComponent/>-->
    <!--    <report-component/>-->
    <div class="portfolio-list">
      <div class="portfolio-item cosplay">

        <div class="portfolio-item__title">
          <router-link :to=" { name: 'cosplay' } ">Косплей</router-link>
        </div>
        <div class="portfolio-item__img">
        </div>
      </div>

      <div class="portfolio-item portrait">
        <div class="portfolio-item__title">
          <router-link :to=" { name: 'portrait' } ">Портретная съемка</router-link>

        </div>
        <div class="portfolio-item__img">
        </div>
      </div>

      <div class="portfolio-item report">
        <div class="portfolio-item__title">
          <router-link :to=" { name: 'report' } ">Репортажная съемка</router-link>

        </div>
        <div class="portfolio-item__img">
        </div>
      </div>

      <div class="portfolio-item themes">
        <div class="portfolio-item__title">
          <router-link :to=" { name: 'themes' } ">Тематические съемки</router-link>
        </div>
        <div class="portfolio-item__img">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import 'vue3-carousel/dist/carousel.css'
// import { Carousel, Slide, Navigation } from 'vue3-carousel'

// import CosplayComponent from "@/views/cosplay";
// import PortraitComponent from "@/views/portrait";
// import ThemesComponent from "@/views/themes";
// import ReportComponent from "@/views/report";

export default {
  name: "mainPortfolio",
  // components: {ReportComponent, ThemesComponent, PortraitComponent, CosplayComponent},
  // components: {
  //   Carousel,
  //   Slide,
  //   Navigation,
  // },
  // data() {
  //   return {
  //     slides: [
  //       {
  //         image: require('@/assets/img/cosplay/1.jpg')
  //       },
  //       {
  //         image: require('@/assets/img/cosplay/1.jpg')
  //       },
  //       {
  //         image: require('@/assets/img/cosplay/1.jpg')
  //       },
  //       {
  //         image: require('@/assets/img/cosplay/1.jpg')
  //       },
  //       // {
  //       //   image: require('@/assets/img/cosplay/1.jpg')
  //       // },
  //       // {
  //       //   image: require('@/assets/img/cosplay/1.jpg')
  //       // },
  //     ]
  //   }
  // }
}
</script>

<style scoped>

.portfolio {
  /*background: #032623;*/
  padding: 60px 0;
  max-width: 1400px;
  margin: 0 auto;
}

.portfolio-list {
  display: flex;
  justify-content: space-between;
}

.portfolio-item__title {
  width: 300px;
  padding: 150px 20px;
  text-align: center;
  background: rgba(0, 0, 0, 0.58);


}

a:-webkit-any-link {
  width: 300px;
  color: white;
  font-size: 22px;
  font-family: 'Santello', sans-serif;
  text-decoration: none;

}

.portfolio-title {
  font-size: 50px;
  color: white;
  margin-bottom: 40px;
  font-family: 'Santello', sans-serif;
  text-align: left;
  /*border-left: 5px solid #032623;*/
  padding-left: 60px;
}

.portfolio-item {
  /*cursor: pointer;*/
  background-size: cover;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);

}

.portfolio-item.cosplay {
  background-image: url("../assets/img/cosplay/1.jpg");
}

.portfolio-item.portrait {
  background-image: url("../assets/img/portrait/1.jpg");
}

.portfolio-item.themes {
  background-image: url("../assets/img/themes/1.jpg");
}

.portfolio-item.report {
  background-image: url("../assets/img/report/1.jpg");
}

.portfolio-item__img {
  /*overflow: hidden;*/
  /*object-fit: cover;*/
}

.portfolio-item__img img {
  /*object-fit: cover;*/
  max-width: 300px;
}

/*.image {*/
/*  max-width: 300px;*/
/*}*/

.portfolio-item:hover {
  animation: hover-item 1s forwards;
}

@keyframes hover-item {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);

  }
}
</style>