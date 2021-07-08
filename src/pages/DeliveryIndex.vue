<template>
  <q-page class="">
    <delivery-carousel/>
    <category-list/>
  </q-page>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  components: {
    DeliveryCarousel: defineAsyncComponent(() => import('components/DeliveryCarousel.vue')),
    CategoryList: defineAsyncComponent(() => import('src/components/CategoryList.vue')),
  },
  data() {
    return {
    }
  },
}
</script>

<style>

</style>