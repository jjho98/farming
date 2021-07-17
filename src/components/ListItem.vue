<template>
  <!-- pc 크기 화면 -->
  <q-card v-if="$q.screen.gt.xs" class="my-card">
    <q-img :src="'http://localhost:3000/img/' + item.thumbnail"/>
    <q-card-section>
      <div class="text-h6">{{ item.name }}</div>
      <div class="text-subtitle2 price">{{ item.displayPrice }}원</div>
    </q-card-section>
    <q-card-section>
      <q-rating
        :model-value="parseFloat(item.averageRate)"
        :color="item.averageRate === '0.0' ? 'grey' : 'yellow'"
        icon-selected="star"
        icon-half="star_half"
        max="5"
        no-dimming
        readonly
      />
      <span>{{ item.averageRate }}</span>
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
      <div class="row">
        <q-rating
        :model-value="parseFloat(item.averageRate)"
        color="grey"
        color-selected="warning"
        color-half="warning"
        icon="star"
        icon-half="star_half"
        max="5"
        readonly
        />
        <span v-if="item.averageRate !== '0.0'" class="q-pl-xs text-subtitle2">{{ item.averageRate }}</span>
      </div>
      
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  props: [
    'item'
  ],
}
</script>

<style lang="sass" scoped>
.price
  color: red
.my-card
  width: 250px

</style>>
