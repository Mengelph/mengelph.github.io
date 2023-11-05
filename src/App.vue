<template class="main">
  <main-header/>
  <router-view/>

</template>

<script>
import MainHeader from "@/../../../portfolio/mengel_ph/src/components/shared/Header";

export default {
  name: "App",
  components: {
    MainHeader
  }

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  /*display: grid;*/
  /*grid-template-columns: 250px 1fr;*/
  /*grid-template-rows: 1fr;*/
  height: 100%;
  /*background: #c5bfbf;*/
}

/*main-header {*/
/*  grid-column: 1/2;*/
/*  grid-row: 1/3;*/

/*}*/

a.router-link-active {
  color: aqua;
}
</style>