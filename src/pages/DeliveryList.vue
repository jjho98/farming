<template>
  
<!-- 인피니트 스크롤이 window의 위치를 파악하기 때문에 keep-alive애 의해 살아있는 탭도 같이 반응하는 문제  -->
  <q-infinite-scroll @load="fetchMore" :offset="50" scroll-target="body" :initial-index="-1" v-if="isUrlChanged">
    <!-- pc 화면 -->
    <div v-if="$q.screen.gt.xs" class="flex flex-center q-gutter-lg">
      <list-item :item="item" v-for="(item, index) in items" :key="index" @clicked="routePush"/>
    </div>

    <!-- 모바일 화면 -->
    <q-list separator v-if="$q.screen.xs">
      <list-item :item="item" v-for="item in items" :key="item.id" @clicked="routePush"/>
    </q-list>

    <!-- 무한 스크롤이 로딩 중일 때 -->
    <template v-slot:loading v-if="isLoading">
      <div class="row justify-center q-my-md">
        <q-spinner-dots color="secondary" size="40px" />
      </div>
    </template>

    <div v-if="isEmptyResult" class="container text-h6 q-pa-xl text-center keep-all">
      <div>(; ･`д･´)</div>
      해당 카테고리의 제품은 아직 등록된 게 없어요
    </div>
  </q-infinite-scroll>

  
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'DeliveryList',
  components: {
    ListItem: defineAsyncComponent(() => import('components/ListItem.vue'))
  },
  data() {
    return {
      items: [],
      isEmptyResult: false,
      isLoading: true,
      isUrlChanged: false,
    }
  },
  methods: {
    // infinite scroll 때문에 created에서 fetch 하지 않음
    async fetchMore(index) {
      try {
        this.isLoading = true
        const res = await this.$api.get(`${this.$route.path}?index=${index}`)
        console.log(res)
        const fetchedItems = res.data.rows
        this.items.push(...fetchedItems)
        if (fetchedItems.length < 10) {
          // 해당 카테고리 데이터가 하나도 없는 경우
          if (!this.items.length && !fetchedItems.length) {
            this.isEmptyResult = true
          }
        }
        //   done(true)
        // } else {
        //   done()
        // }
        this.isLoading = false
      } catch(err) {
        console.error(err)
      }
    },
    routePush(id) {
      this.$router.push({name: 'productDetail', params: {id}})
    }
  },
  created() {
    console.log('created')
  },
  beforeRouteEnter (to, from, next) {
    console.log('befoe enter')
    next(vm => {
      vm.isUrlChanged = true
    })
  },
  beforeRouteUpdate(to, from, next) {
    this.isUrlChanged = false
    console.log('before update')
    console.log(to.path, from.path)
    if (to.path === from.path) {
      this.isUrlChanged = true
    }
    next()
  },
  activated() {
    console.log('activated')
  },
  deactivated() {
    console.log('deactivated')
  }
}
</script>

<style lang="sass">

</style>>