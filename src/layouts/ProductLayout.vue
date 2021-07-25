<template>
  <q-layout view="hHh lpR fFf">
    <back-header/>

    <q-page-container>
      <q-page>
        <router-view/>
      </q-page>
    </q-page-container>

    <!-- <router-view name="footer" /> -->
    <product-footer/>
  </q-layout>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'ProductLayout',
  components: {
    BackHeader: defineAsyncComponent(() => import('components/BackHeader.vue')),
    ProductFooter: defineAsyncComponent(() => import('components/ProductFooter.vue'))
  },
}
</script>

<style lang="sass" scoped>

</style>>
