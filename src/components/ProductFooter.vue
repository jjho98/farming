<template>
  <q-footer v-model="footer" v-if="$q.screen.lt.md">
    <!-- 구매하기, 장바구니 버튼 -->
    <div class="row bg-grey-1 text-center buttons-container">
      <div class="width-50 q-pa-sm">
        <q-btn color="secondary" outline class="width-100 bg-white text-secondary text-bold" unelevated label="장바구니" @click="onClickCart" />
      </div>
      <div class="width-50 q-pa-sm">
        <q-btn color="secondary" class="width-100 text-bold" unelevated label="구매하기" @click="onClickPurchase" />
      </div>
    </div>
  </q-footer>
</template>

<script>
import { productOptions } from 'src/store/choices/getters'
import {mapMutations, mapGetters} from 'vuex'

export default {
  data() {
    return {
      footer: true,
    }
  },
  computed: {
    ...mapGetters('choices', [
      'selectedOptions',
      'isShowingBottomTab',
    ])
  },
  methods: {
    ...mapMutations('choices', [
      'showBottomTab',
      'clearSelectedOption',
    ]),
    async onClickCart() {
      if (!this.selectedOptions.length || !this.isShowingBottomTab) {
        this.showBottomTab()
      } else {
        const res = await this.$api.put('/user/cart', {
          selectedOptions: this.selectedOptions
        }) 
        if (res.status === 200) {
          this.$q.notify({
            type: 'positive',
            message: '장바구니에 상품이 담겼습니다'
          })
        }
      }
    },
    onClickPurchase() {
      if (!this.selectedOptions.length || !this.isShowingBottomTab) {
        this.showBottomTab()
      } else {
        // this.$router.push({name: 'purchase'})


      }
    }
  },
}
</script>

<style lang="sass" scoped>
.buttons-container
  height: 50px
</style>>
