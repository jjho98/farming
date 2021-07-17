<template>
  <sign-in-form/>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    SignInForm: defineAsyncComponent(() => import('components/SignInForm.vue'))
  }
}
</script>

<style>

</style>