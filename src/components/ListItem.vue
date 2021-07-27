<template>
  <!-- 모바일 크기 화면 -->
  <q-item v-if="$q.screen.lt.md" clickable v-ripple @click="clicked(item.id)">
    <q-item-section side>
      <q-img :src="'http://localhost:3000/img/' + item.thumbnail" ratio="1" width="100px"/>
    </q-item-section>
    <q-item-section>
      <div class="text-subtitle1">{{ item.name }}</div>
      <div class="text-subtitle2 text-bold price">{{ $filters.toCurrency(item.displayPrice) }}원</div>
      <rate-display :item="item" />
    </q-item-section>
  </q-item>

  <!-- pc 크기 화면 -->
  <q-card v-else @click="clicked(item.id)">
    <q-img :src="'http://localhost:3000/img/' + item.thumbnail"
      width="200px" height="150px"
    />
    <q-card-section class="q-gutter-y-sm">
      <div class="text-h6">{{ item.name }}</div>
      <div class="text-subtitle2 price">{{ $filters.toCurrency(item.displayPrice) }}원</div>
      <rate-display :item="item" />
    </q-card-section>

  </q-card>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  emits: [
    'clicked'
  ],
  props: [
    'item'
  ],
  components: {
    RateDisplay: defineAsyncComponent(() => import('components/RateDisplay.vue'))
  },
  methods: {
    clicked(id) {
      this.$emit('clicked', id)
    }
  },
}
</script>

<style lang="sass" scoped>
.price
  color: red
.my-card
  width: 200px
</style>>
