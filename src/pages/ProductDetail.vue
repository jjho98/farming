<template>
  <div v-if="isLoaded">
    <q-parallax :speed="0.7" v-if="product" :height="200">
      <template v-slot:media>
        <img :src="'https://farmon.ml/img/' + product.thumbnail" />
      </template>
    </q-parallax>

    <div class="container q-pa-lg q-gutter-y-sm">
      <div class="text-h4 text-bold">{{ product.name }}</div>
      <div>
        <span>{{ $filters.toCurrency(product.displayPrice) }}원</span>
        <span v-if="!product.hasOneOption">~</span>
      </div>
    </div>
    <q-separator spaced color="black" size="10px" />

    <div class="container text-center q-gutter-y-lg q-pa-lg keep-all">
      <div class="text-h5 text-bold">{{ product.summary }}</div>
      <div class="text-subtitle1">{{ product.description }}</div>
    </div>

    <div class="q-gutter-y-xs">
      <q-img
        v-for="(imgUrl, index) in product.ProductImages"
        :key="index"
        :src="'https://farmon.ml/img/' + imgUrl.img"
        spinner-color="primary"
        spinner-size="82px"
        class="img"
      />
    </div>

    <option-overlay />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { defineAsyncComponent } from "vue";

export default {
  components: {
    OptionOverlay: defineAsyncComponent(() =>
      import("components/OptionOverlay.vue")
    ),
  },
  data() {
    return {
      product: null,
      isLoaded: false,
    };
  },
  async created() {
    const res = await this.$api.get(`/product/${this.$route.params.id}`);
    this.product = res.data;
    console.log(res);
    // 옵션 오버레이에서 vuex를 통해 자원에 접근하므로 state.product가 바뀌기 전까지 대기 필요
    this.changeProduct(res.data);
    this.isLoaded = true;
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
  methods: {
    ...mapMutations("choices", ["changeProduct", "clearProductDetailSetting"]),
  },
  beforeUnmount() {
    this.clearProductDetailSetting();
  },
};
</script>

<style lang="sass" scoped>
.q-parallax__media
  z-index: -3
</style>
