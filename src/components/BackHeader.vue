<template>
  <q-header elevated class="text-black bg-white" height-hint="98">
    <q-toolbar>
      <q-btn flat dense icon="arrow_back_ios" @click="goBack"/>
      <address-box/>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    goBack() {
      this.$router.back()
    }
  },
}
</script>

<style>

</style>