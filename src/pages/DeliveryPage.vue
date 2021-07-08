<template>
  <q-page class="">
    <delivery-carousel/>
    <delivery-category :categories="categories"/>
  </q-page>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  components: {
    DeliveryCarousel: defineAsyncComponent(() => import('components/DeliveryCarousel.vue')),
    DeliveryCategory: defineAsyncComponent(() => import('src/components/CategoryList.vue')),
  },
  data() {
    return {
      categories: [
        {
          img: 'category',
          name: '분류'
        },
        {
          img: 'category',
          name: '분류'
        },
        {
          img: 'category',
          name: '분류'
        },
        {
          img: 'category',
          name: '분류'
        },
        {
          img: 'category',
          name: '분류'
        },
        {
          img: 'category',
          name: '분류'
        },
        {
          img: 'category',
          name: '분류'
        },
        {
          img: 'category',
          name: '분류'
        },
        {
          img: 'horizontal_rule',
          name: ''
        },
        {
          img: 'horizontal_rule',
          name: ''
        },
      ]
    }
  },
}
</script>

<style>

</style>