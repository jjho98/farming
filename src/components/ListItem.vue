<template>
  <!-- 모바일 크기 화면 -->
  <q-item v-if="$q.screen.lt.md" clickable v-ripple @click="clicked(item.id)">
    <q-item-section side>
      <q-img
        :src="'https://farmon.ml/img/' + item.thumbnail"
        ratio="1"
        width="100px"
      />
    </q-item-section>
    <q-item-section>
      <div class="text-subtitle1">{{ item.name }}</div>
      <div class="text-subtitle2 text-bold price">
        <span>{{ $filters.toCurrency(item.displayPrice) }}원</span>
        <span v-if="!item.hasOneOption">~</span>
      </div>
      <rate-display :item="item" />
    </q-item-section>
  </q-item>

  <!-- pc 크기 화면 -->
  <q-card v-else @click="clicked(item.id)">
    <q-img
      :src="'https://farmon.ml/img/' + item.thumbnail"
      width="200px"
      height="150px"
    />
    <q-card-section class="q-gutter-y-sm">
      <div class="text-h6">{{ item.name }}</div>
      <div class="text-subtitle2 price">
        <span>{{ $filters.toCurrency(item.displayPrice) }}원</span>
        <span v-if="!item.hasOneOption">~</span>
      </div>
      <rate-display :item="item" />
    </q-card-section>
  </q-card>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  emits: ["clicked"],
  props: ["item"],
  components: {
    RateDisplay: defineAsyncComponent(() =>
      import("components/RateDisplay.vue")
    ),
  },
  methods: {
    clicked(id) {
      this.$emit("clicked", id);
    },
  },
};
</script>

<style lang="sass" scoped>
.price
  color: red
.my-card
  width: 200px
</style>
>
