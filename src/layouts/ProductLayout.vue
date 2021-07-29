<template>
  <q-layout view="hHh lpR fFf">
    <product-header/>

    <q-page-container>
      <q-page class="narrow">
        <router-view/>
      </q-page>
    </q-page-container>

    <product-footer/>
  </q-layout>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'ProductLayout',
  components: {
    ProductHeader: defineAsyncComponent(() => import('components/ProductHeader.vue')),
    ProductFooter: defineAsyncComponent(() => import('components/ProductFooter.vue'))
  },
}
</script>

<style lang="sass" scoped>

</style>>
