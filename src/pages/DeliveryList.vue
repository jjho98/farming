<template>
  <q-page class="">
    <category-tabs :categories="deliveryCategories" />
  </q-page>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import {mapState} from 'vuex'

export default {
  components: {
    CategoryTabs: defineAsyncComponent(() => import('components/CategoryTabs.vue'))
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