<template>
  <div class="flex flex-center q-pa-md q-gutter-lg delivery-category">
    <div v-for="(item, index) in categories" :key="index">
      <category-item :img="item.img" :name="item.name" />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  components: {
    CategoryItem: defineAsyncComponent(() => import('components/CategoryItem.vue'))
  },
  props: [
    'categories',
  ],
}
</script>

<style lang="sass" scoped>
.delivery-category
  background-color: white
</style>>