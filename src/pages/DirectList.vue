<template>
  <q-list separator>
    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-icon color="red" name="icecream" />
      </q-item-section>
      <q-item-section>사과</q-item-section>
    </q-item>
    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-icon color="red" name="icecream" />
      </q-item-section>
      <q-item-section>사과</q-item-section>
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
    ...mapState('fixedTerms', [
      'directCategories'
    ])
  }
}
</script>

<style>

</style>