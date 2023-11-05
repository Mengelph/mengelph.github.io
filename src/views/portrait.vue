<template>
  <div class="gallery">
    <div class="gallery-img">
      <img src="../assets/img/portrait/1.jpg" alt="">
      <img src="../assets/img/portrait/2.jpg" alt="">
      <img src="../assets/img/portrait/3.jpg" alt="">
      <img src="../assets/img/portrait/4.jpg" alt="">
      <img src="../assets/img/portrait/5.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "portraitGallery"
}
</script>

<style scoped>
.gallery {
  max-width: 1200px;
  margin: 0 auto;
}

.gallery-img {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}
.gallery-img img {
  max-width: 300px;
}
</style>