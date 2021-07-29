<template>
  <q-header class="product-header bg-white text-black">
    <q-toolbar>
      <q-btn flat dense icon="arrow_back_ios" @click="goBack"/>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.back()
    }
  },
}
</script>

<style lang="sass" scoped>
.product-header
  // background-color: rgba(255, 255, 255, 0)
</style>>
