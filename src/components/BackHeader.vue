<template>
  <q-header class="text-black bg-white" height-hint="98">
    <q-toolbar>
      <q-btn flat dense icon="arrow_back_ios" @click="goBack"/>
      <q-toolbar-title class="text-center text-subtitle2 text-weight-bolder title">
        {{ label }}
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script>
import {mapState} from 'vuex'

export default {
  props: [
    'label'
  ],
  methods: {
    goBack() {
      this.$router.back()
    },
  },
}
</script>

<style lang="sass" scoped>
.title
  margin-left: -32px


</style>
