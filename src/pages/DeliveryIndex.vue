<template>
  <delivery-carousel/>
  <category-list :categories="deliveryCategories"/>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapState } from 'vuex'

export default {
  components: {
    DeliveryCarousel: defineAsyncComponent(() => import('components/DeliveryCarousel.vue')),
    CategoryList: defineAsyncComponent(() => import('src/components/CategoryList.vue')),
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState('categories', [
      'deliveryCategories'
    ])
  }
}
</script>

<style>

</style>