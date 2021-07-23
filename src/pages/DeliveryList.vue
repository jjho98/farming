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

  <div v-if="isEmptyResult" class="container text-h6 q-pa-xl text-center keep-all">
    <div class="text-center">(; ･`д･´)</div>
    해당 카테고리의 제품은 아직 등록된 게 없어요
  </div>
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
      isEmptyResult: false,
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
          // 해당 카테고리 데이터가 하나도 없는 경우
          if (!this.items.length && !fetchedItems.length) {
            this.isEmptyResult = true
          }
          done(true)
        } else {
          done()
        }
      } catch(err) {
        console.error(err)
      }
    },
  },
}
</script>

<style lang="sass">
.keep-all
  word-break: keep-all
</style>>