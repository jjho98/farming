<template>
  <q-card class="my-card">
    <img :src="'http://localhost:3000/img/' + item.thumbnail">
    <q-card-section>
      <div class="text-h6">{{ item.name }}</div>
      <div class="text-subtitle2 price">{{ item.displayPrice }}</div>
    </q-card-section>
    <q-card-section>
      <q-rating
        model-value="item.averageRate"
        size="1.5em"
        collor="yellow"
        icon="star_border"
        icon-selected="star"
        icon-half="star_half"
        max="5"
        no-dimming
        readonly
      />
    </q-card-section>
  </q-card>
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
</style>>
