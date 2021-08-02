<template>
  <q-layout view="hHh lpR fFf">

    <back-header/>

    <q-page-container>
      <q-page class="flex flex-center container">
        <router-view/>
      </q-page>
    </q-page-container>
    <main-footer/>

  </q-layout>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'FullLayout',
  components: {
    MainFooter: defineAsyncComponent(() => import('components/MainFooter.vue')),
    BackHeader: defineAsyncComponent(() => import('components/BackHeader.vue')),
  },
}
</script>

<style lang="sass" scoped>

</style>