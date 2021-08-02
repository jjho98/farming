<template>
  <join-form/>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    JoinForm: defineAsyncComponent(() => import('components/JoinPanel.vue'))
  }
}
</script>

<style>

</style>