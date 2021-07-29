<template>
  <category-list :categories="directCategories" />
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapState } from 'vuex'

export default {
  components: {
    CategoryList: defineAsyncComponent(() => import('components/CategoryList.vue')),
  },
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState('fixedTerms', [
      'directCategories'
    ])
  }
}
</script>

<style>

</style>