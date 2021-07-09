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
    'categories'
  ],
  data() {
    return {
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
    ...mapMutations('choice', [
      'changeCategory',
    ])
  },
}
</script>

<style lang="sass" scoped>

</style>>