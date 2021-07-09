<template>
  <q-tabs
    v-model="selectedCategory"
    class="text-teal"
  >
    <span class="container" v-for="(item, index) in categories" :key="index">
      <q-tab name="item.name" label="item.name" />
    </span>
    <q-tab name="alarms" label="Alarms" />
    <q-tab name="movies" label="Movies" />
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
      ...mapState('choice', [
        'selectedCategory'
      ])
    }
  },
  computed: {
    
  }
}
</script>

<style>

</style>