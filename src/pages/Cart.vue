<template>
  <div class="q-gutter-y-sm q-py-sm">
    <cart-item :item="item" v-for="(item, index) in items" :key="index"/>
  </div>
</template>

<script>
import {defineAsyncComponent} from 'vue'

export default {
  components: {
    CartItem: defineAsyncComponent(() => import('components/CartItem.vue'))
  },
  data() {
    return {
      items: [],
    }
  },
  async created() {
    const res = await this.$api.get('/user/cart')
    console.log(res)
    if (res && res.status === 200) {
      this.items = res.data
    } 
  }
}
</script>

<style>

</style>