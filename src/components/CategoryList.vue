<template>
  <div class="flex flex-center q-pa-md q-gutter-lg bg-white">
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
      ],
    }
  },
}
</script>

<style lang="sass" scoped>

</style>>