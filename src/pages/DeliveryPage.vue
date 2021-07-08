<template>
  <q-page class="">
    <delivery-carousel/>
  </q-page>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  components: {
    DeliveryCarousel: defineAsyncComponent(() => import('components/DeliveryCarousel.vue')),
  },
  data() {
    return {
    }
  },
}
</script>

<style>

</style>