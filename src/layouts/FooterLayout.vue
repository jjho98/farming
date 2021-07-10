<template>
  <q-layout view="hHh lpR fFf">

    <q-page-container>
      <q-page class="q-gutter-b-md">
        <router-view/>
      </q-page>
    </q-page-container>
    <main-footer/>

  </q-layout>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'FooterLayout',
  components: {
    MainFooter: defineAsyncComponent(() => import('components/MainFooter.vue'))
  },
}
</script>