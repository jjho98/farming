<template>
  <div class="row">
    <q-btn class="cube" outline color="secondary" icon="remove" @click="clickMinus" />
    <q-btn class="cube" outline color="black" :label="count" disable />
    <!-- <q-input class="cube" type="number" outlined color="black" v-model="option.count"/> -->
    <q-btn class="cube" outline color="secondary" icon="add" @click="clickPlus" />
  </div>
</template>

<script>
export default {
  props: [
    'initialCount',
  ],
  emits: [
    'increasedCount',
    'decreasedCount',
  ],
  data() {
    return {
      count: this.initialCount,
    }
  },
  methods: {
    clickMinus() {
      if (this.count > 1) {
        this.count -= 1
      }
      this.$emit('decreasedCount')
    },
    clickPlus() {
      this.count += 1
      this.$emit('increasedCount')
    }
  },
}
</script>

<style lang="sass" scoped>
.cube
  width: 32px
  height: 32px
// .q-field__control
//   height: 100%
//   width: 100%
</style>>
