<template>
  <div v-if="$q.screen.gt.xs" class="flex flex-center q-gutter-lg">
    <list-item :item="item" v-for="(item, index) in items" :key="index"/>
  </div>

  <q-list separator v-if="$q.screen.xs">
    <list-item :item="item" v-for="(item, index) in items" :key="index"/>
  </q-list>
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
      const res = await api.get(`/delivery/${this.$route.params.category}`)
      this.items = res.data.rows
      console.log(this.items)
    } catch(err) {
      console.error(err)
    }
  }
}
</script>

<style>

</style>