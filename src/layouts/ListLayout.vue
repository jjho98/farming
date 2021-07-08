<template>
  <q-layout view="hHh lpR fFf">

    <back-header/>

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
    BackHeader: defineAsyncComponent(() => import('components/BackHeader.vue')),
    MainFooter: defineAsyncComponent(() => import('components/MainFooter.vue')),
  }
}
</script>

<style>

</style>