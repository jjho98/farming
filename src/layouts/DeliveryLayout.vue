<template>
  <q-layout view="hHh lpR fFf">

    <main-header/>

    <q-page-container>
      <router-view />
    </q-page-container>

    <main-footer/>

  </q-layout>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    MainHeader: defineAsyncComponent(() => import('components/MainHeader.vue')),
    MainFooter: defineAsyncComponent(() => import('components/MainFooter.vue')),
  }
}
</script>

<style>

</style>