<template>
  <q-layout view="hHh lpR fFf">
    <back-header/>

    <q-page-container>
      <q-page>
        <router-view/>
      </q-page>
    </q-page-container>

  </q-layout>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'ProductLayout',
  components: {
    BackHeader: defineAsyncComponent(() => import('components/BackHeader.vue'))
  },
}
</script>

<style lang="sass" scoped>

</style>>
