<template>
  <q-tabs
    v-model="tab"
  >
    <q-tab :name="item.name" :label="item.label"  v-for="(item, index) in productFilters" :key="index" @click="changeFilter(item)"/>
  </q-tabs>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
  data() {
    return {
      tab: 'orderCount',
    }
  },
  computed: {
    ...mapState('fixedTerms', [
      'productFilters',
    ]),
  },
  methods: {
    ...mapMutations('choices', [
      'changeFilter',
    ])
  },
}
</script>

<style>

</style>