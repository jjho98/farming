<template>
  <q-list seperator>
    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-icon color="pink" name="icecream" />
      </q-item-section>
      <q-item-section>햇쌀</q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import {mapState} from 'vuex'

export default {
  components: {
  },
  computed: {
    ...mapState('categories', [
      'deliveryCategories'
    ])
  }
}
</script>

<style>

</style>