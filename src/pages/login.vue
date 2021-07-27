<template>
  <login-form/>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    LoginForm: defineAsyncComponent(() => import('components/LoginForm.vue'))
  }
}
</script>

<style>

</style>