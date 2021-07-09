<template>
  <q-carousel
      keep-alive
      animated
      v-model="slideNo"
      navigation
      infinite
      autoplay
      swipeable
      transition-prev="slide-right"
      transition-next="slide-left"
      height="150px"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
  </q-carousel>
</template>

<script>
export default {
  data() {
    return {
      slideNo: 1,
    }
  },
}
</script>

<style>

</style>