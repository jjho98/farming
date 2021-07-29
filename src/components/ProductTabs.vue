<template>
  <product-filter/>
  <tab-panels :tabs="tabs"/>
</template>

<script>
import {defineAsyncComponent} from 'vue'

export default {
  props: [
    'tabs',
  ],
  components: {
    TabPanels: defineAsyncComponent(() => import('components/TabPanelsContainer.vue')),
    ProductFilter: defineAsyncComponent(() => import('components/ProductFilter.vue')),
  },
}
</script>

<style>

</style>