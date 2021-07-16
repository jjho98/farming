<template>
  <div class="flex">
    <list-item v-for="(item, index) in items" :key="index"/>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import {mapState} from 'vuex'
import api from '../api'

export default {
  components: {
    ListItem: defineAsyncComponent(() => import('../components/ListItem.vue'))
  },
  data() {
    return {
      items: []
    }
  },
  computed: {
    ...mapState('categories', [
      'deliveryCategories'
    ])
  },
  async created() {
    try {
      this.items = await api.get(`/delivery/${this.$route.params.category}`)
    } catch(err) {
      console.error(err)
    }
  }
}
</script>

<style>

</style>