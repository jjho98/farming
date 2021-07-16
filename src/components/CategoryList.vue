<template>
  <div class="grid  container q-px-sm">
    <category-item :img="item.img" :label="item.label" v-for="(item, index) in categories" :key="index" @click="onClick(item)"/>
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
    'categories'
  ],
  data() {
    return {
    }
  },
  methods: {
    onClick(category) {
      this.movePage(category.name)
      this.changeCategory(category)
    },
    movePage(categoryName) {
      this.$router.push({ path: `${this.$router.currentRoute._value.fullPath}/${categoryName}` })
    },
    ...mapMutations('choices', [
      'changeCategory',
    ])
  },
}
</script>

<style lang="sass" scoped>
.grid
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(80px, 10fr))
  grid-auto-rows: minmax(100px, auto)
</style>>