<template>
  <q-list separator>
    <list-item item=item v-for="item in items" :key="item.id" />
    <!-- <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-icon color="pink" name="rice_bowl" />
      </q-item-section>
      <q-item-section>햇쌀</q-item-section>
    </q-item> -->
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
    // ...mapState('chocies', {
    //   category: 'selectedCategory'
    // }),
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