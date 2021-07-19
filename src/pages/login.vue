<template>
  <login-form/>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    LoginForm: defineAsyncComponent(() => import('components/loginForm.vue'))
  }
}
</script>

<style>

</style>