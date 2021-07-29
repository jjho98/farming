<template>
  <q-tabs
    v-model="selectedCategory"
    active-color="secondary" indicator-color="secondary"
    class="text-black bg-white"
  >
    <q-tab :name="item.name" :label="item.name" v-for="(item, index) in categories" :key="index"/>
  </q-tabs>
</template>

<script>
import {mapState} from 'vuex'

export default {
  props: [
    'categories'
  ],
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState('fixedTerms', [
        'selectedCategory'
      ])
  }
}
</script>

<style>

</style>