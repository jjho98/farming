<template>
  <q-page class="">
    <category-list/>
  </q-page>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  components: {
    CategoryList: defineAsyncComponent(() => import('src/components/CategoryList.vue')),
  },
  data() {
    return {
      
    }
  },
}
</script>

<style>

</style>