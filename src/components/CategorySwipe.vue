<template>
  <q-tabs
    v-model="category"
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

export default {
  props: [
    'categories'
  ],
  data() {
    return {
    }
  },
  computed: {
    category() {
      return this.$store.state.choice.selectedCategory
    }
  }
}
</script>

<style>

</style>