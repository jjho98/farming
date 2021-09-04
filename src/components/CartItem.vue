<template>
  <q-list class="container relative">
    <!-- 판매 중 -->
    <q-item v-if="item.Option.Product.isSelling" exact>
      <q-item-section side>
        <q-img
          :src="'https://farmon.ml/img/' + item.Option.Product.thumbnail"
          :ratio="1"
          width="100px"
          spinner-color="primary"
          spinner-size="82px"
          @click="routePush"
        />
      </q-item-section>
      <q-item-section>
        <div class="ellipsis-row">
          <div class="ellipsis text-suubtitle1 text-weight-bold">
            {{ item.Option.Product.name }}
          </div>
          <q-space />
          <q-btn flat dense color="primary" icon="clear" @click="onClick" />
        </div>
        <div class="text-caption">옵션명: {{ item.Option.name }}</div>
        <count-controller
          :initialCount="count"
          size="10px"
          @increasedCount="increaseCount"
          @decreasedCount="decreaseCount"
        />
        <div class="text-subtitle2 text-weight-bold">
          {{ item.Option.price * item.count }}원
        </div>
      </q-item-section>
    </q-item>

    <!-- 판매 중 X -->
    <q-item v-else class="sold-out">
      <q-item-section side>
        <q-img
          :src="'https://farmon.ml/img/' + item.Option.Product.thumbnail"
          :ratio="1"
          width="100px"
          spinner-color="primary"
          spinner-size="82px"
        />
      </q-item-section>
      <q-item-section>
        <div class="text-suubtitle1 text-weight-bold">
          {{ item.Option.Product.name }}
        </div>
        <div class="text-caption">옵션명: {{ item.Option.name }}</div>
        <count-controller
          :initialCount="count"
          @increasedCount="increaseCount"
          @decreasedCount="decreaseCount"
        />
        <!-- <div class="text-caption text-grey-7">X{{ item.count }}</div> -->
        <div class="text-subtitle2 text-weight-bold">
          {{ item.Option.price * item.count }}원
        </div>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    CountController: defineAsyncComponent(() =>
      import("components/CountController.vue")
    ),
  },
  props: ["item"],
  data() {
    return {
      count: this.item.count,
    };
  },
  methods: {
    routePush() {
      this.$router.push({
        name: "productDetail",
        params: { id: this.item.Option.Product.id },
      });
    },
    async saveChangedCount() {
      await this.$api.put("/user/cart/count");
    },
    // 작성 필요
    increaseCount() {},
    decreaseCount() {},
  },
};
</script>

<style lang="sass" scoped>
.sold-out
  opacity: 0.5
  &::after
    content: '품절'
    position: absolute
    top: 50%
    right: 10px
    transform: translateY(-50%)
    font-weight: bold
    font-size: 1.5rem
</style>
>
