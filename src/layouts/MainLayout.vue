<template>
  <q-layout view="hHh lpR fFf">
    <main-header/>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'MainLayout',
  components: { 
    MainHeader: defineAsyncComponent(() => import('components/MainHeader.vue'))
   },
  data() {
    return {
      
    }
  },
}
</script>