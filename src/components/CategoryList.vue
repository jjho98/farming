<template>
  <div class="flex flex-center q-pa-md q-gutter-lg bg-white">
    <div v-for="(item, index) in categories" :key="index" @click="onClick(item.name)">
      <category-item :img="item.img" :name="item.name"/>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapMutations } from 'vuex'

export default {
  components: {
    CategoryItem: defineAsyncComponent(() => import('components/CategoryItem.vue'))
  },
  props: [
    'parentUrl'
  ],
  data() {
    return {
      categories: [
        {
          img: 'category',
          name: '분류1'
        },
        {
          img: 'category',
          name: '분류2'
        },
        {
          img: 'category',
          name: '분류3'
        },
        {
          img: 'category',
          name: '분류4'
        },
        {
          img: 'category',
          name: '분류5'
        },
        {
          img: 'category',
          name: '분류6'
        },
        {
          img: 'category',
          name: '분류7'
        },
        {
          img: 'category',
          name: '분류8'
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
  methods: {
    onClick(category) {
      this.movePage(category)
      this.changeCategory(category)
    },
    movePage(category) {
      this.$router.push({ path: `${this.$router.currentRoute._value.fullPath}/${category}` })
    },
    ...mapMutations({
      'changeCategory': 'choice/changeCategory',
    })
  },
}
</script>

<style lang="sass" scoped>

</style>>