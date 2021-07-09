<template>
  <q-page class="">
    <category-list :categories="directCategories" />
  </q-page>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapState } from 'vuex'

export default {
  components: {
    CategoryList: defineAsyncComponent(() => import('src/components/CategoryList.vue')),
  },
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState('categories', [
      'directCategories'
    ])
  }
}
</script>

<style>

</style>