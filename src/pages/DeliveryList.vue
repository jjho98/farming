<template>
  <q-infinite-scroll @load="fetchMore" :offset="50" scroll-target="body" :initial-index="-1">
    <div v-if="$q.screen.gt.xs" class="flex flex-center q-gutter-lg">
      <list-item :item="item" v-for="(item, index) in items" :key="index"/>
    </div>

    <q-list separator v-if="$q.screen.xs">
      <list-item :item="item" v-for="item in items" :key="item.id"/>
      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="secondary" size="40px" />
        </div>
      </template>
    </q-list>
  </q-infinite-scroll>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    ListItem: defineAsyncComponent(() => import('components/ListItem.vue'))
  },
  data() {
    return {
      items: [],
    }
  },
  methods: {
    // infinite scroll 때문에 created에서 fetch 하지 않음
    async fetchMore(index, done) {
      try {
        const res = await this.$api.get(`${this.$route.path}?index=${index}`)
        const fetchedItems = res.data.rows
        this.items.push(...fetchedItems)
        if (fetchedItems.length < 10) {
          done(true)
        } else {
          done()
        }
      } catch(err) {
        console.error(err)
      }
    }
  },
}
</script>

<style lang="sass">

</style>>