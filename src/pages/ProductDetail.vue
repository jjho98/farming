<template>
  <div class="test" v-if="isLoaded">
    <q-parallax
      :speed="0.7"
      v-if="product"
      :height="200"
    >
      <template v-slot:media>
        <img :src="'http://localhost:3000/img/' + product.thumbnail">
      </template>
    </q-parallax>

    <div class="container q-pa-lg q-gutter-y-sm">
      <div class="text-h4 text-bold">{{ product.name }}</div>
      <div>
        <span>{{ $filters.toCurrency(product.displayPrice) }}원</span>
        <span v-if="!onlyOneOption">~</span>
      </div>
    </div>
    <q-separator spaced color="black" size="10px"/>

    <div class="container text-center q-gutter-y-lg q-pa-lg keep-all">
      <div class="text-h5 text-bold">{{ product.summary }}</div>
      <div class="text-subtitle1 q-pa-lg">{{ product.description }}</div>
      <q-img
        v-for="(imgUrl, index) in product.ProductImages" :key="index"
        :src="'http://localhost:3000/img/' + imgUrl.img"
        spinner-color="primary"
        spinner-size="82px"
        class="img"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: null,
      isLoaded: false,
    }
  },
  computed: {
    onlyOneOption() {
      return !!this.product.hasOneOption
    }
  },
  async created() {
    const res = await this.$api.get(`/product/${this.$route.params.id}`)
    this.product = res.data
    console.log(res)
    this.isLoaded = true
  },
  activated() {
    console.log('activated')
  },
  deactivated() {
    console.log('deactivated')
  }
}
</script>

<style lang="sass" scoped>
.q-parallax__media
  z-index: -3

.test
  max-width: 1000px
  margin: 0 auto
</style>
