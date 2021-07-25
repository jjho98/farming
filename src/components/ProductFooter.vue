<template>
  <q-footer v-model="footer" reveal>
    <div class="row bg-grey-3 text-center">
      <div class="width-50 q-pa-sm">
        <q-btn color="secondary" outline class="width-100 bg-white text-secondary text-bold" unelevated label="장바구니" @click="onClick" />
      </div>
      <div class="width-50 q-pa-sm">
        <q-btn color="secondary" class="width-100 text-bold" unelevated label="구매하기" @click="onClick" />
      </div>
    </div>
  </q-footer>
</template>

<script>
export default {
  data() {
    return {
      footer: true,
    }
  },
}
</script>

<style lang="sass" scoped>

</style>>
