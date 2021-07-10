<template>
  <q-list separator>
    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-icon color="pink" name="rice_bowl" />
      </q-item-section>
      <q-item-section>햇쌀</q-item-section>
    </q-item>
    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-icon color="pink" name="rice_bowl" />
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