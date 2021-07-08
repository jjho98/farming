<template>
  <q-page class="flex flex-center">
    <div class="row content-start  q-pa-md q-gutter-md">
      <div class="col" v-for="(card, index) in cards" :key="index">
        <main-card :header="card.header" :icon="card.icon" :content="card.content"></main-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'PageIndex',
  components: {
    MainCard: defineAsyncComponent(() => import('components/MainCard.vue'))
  },
  data() {
    return {
      cards: [
        {
          header: '배달',
          icon: 'local_shipping',
          content: '가까운 지역에서 재배한 농산물을 배달해드립니다',
        },
        {
          header: '직거래',
          icon: 'shopping_basket',
          content: '방문 구매해서 더 저렴하고 신선한 농산물',
        },
      ],

    }
  },
}
</script>

<style lang="sass">

</style>
