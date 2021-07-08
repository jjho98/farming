<template>
  <q-page class="">
    <delivery-carousel/>
    <delivery-category/>
  </q-page>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  components: {
    DeliveryCarousel: defineAsyncComponent(() => import('components/DeliveryCarousel.vue')),
    DeliveryCategory: defineAsyncComponent(() => import('components/DeliveryCategory.vue')),
  },
  data() {
    return {
    }
  },
}
</script>

<style>

</style>