<template>
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
    <div v-if="item.averageRate !== '0.0'" class="q-pl-xs text-subtitle2 vertical-middle">{{ item.averageRate }}</div>
  </div>
</template>

<script>
export default {
  props: [
    'item'
  ]
}
</script>

<style>

</style>