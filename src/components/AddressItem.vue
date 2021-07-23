<template>
  <q-item-section class="q-gutter-y-xs block">
    <q-item-label caption>{{ item.jibunAddr }}</q-item-label>
    <q-badge class="float-left badge" outline color="secondary" label="도로명" />
    <q-item-label caption>{{ item.roadAddr }}</q-item-label>
  </q-item-section>
</template>

<script>
export default {
  props: [
    'item'
  ]
}
</script>

<style lang="sass" scoped>
.block
  display: block
</style>>
