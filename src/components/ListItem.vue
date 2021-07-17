<template>
  <!-- pc 크기 화면 -->
  <q-card v-if="$q.screen.gt.xs" class="my-card">
    <q-img :src="'http://localhost:3000/img/' + item.thumbnail"/>
    <q-card-section>
      <div class="text-h6">{{ item.name }}</div>
      <div class="text-subtitle2 price">{{ item.displayPrice }}원</div>
    </q-card-section>
    <q-card-section class="row">
      <rate-display :item="item" />
    </q-card-section>
  </q-card>

  <!-- 모바일 크기 화면 -->
  <q-item v-if="$q.screen.xs" clickable v-ripple>
    <q-item-section side>
      <q-img :src="'http://localhost:3000/img/' + item.thumbnail" ratio="1" width="100px"/>
    </q-item-section>
    <q-item-section>
      <div class="text-subtitle1">{{ item.name }}</div>
      <div class="text-subtitle2 text-bold price">{{ item.displayPrice }}원</div>
      <rate-display :item="item" />
    </q-item-section>
  </q-item>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  props: [
    'item'
  ],
  components: {
    RateDisplay: defineAsyncComponent(() => import('components/RateDisplay.vue'))
  }
}
</script>

<style lang="sass" scoped>
.price
  color: red
.my-card
  width: 250px
</style>>
