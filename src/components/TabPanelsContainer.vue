<template>
  <q-tabs v-model="tab" align="justify" active-color="secondary" indicator-color="secondary" class="bg-white shadow-bottom">
    <q-route-tab :to="{path: makePath(item.name)}" exact replace :label="item.label" 
      :name="item.name" v-for="(item, index) in tabs" :key="index"/>
  </q-tabs>

  <q-tab-panels v-model="tab"  animated swipeable  @update:model-value="replaceRoute">
    <q-tab-panel class="scroll"  @scroll="scrolled"  :name="item.name" v-for="(item, index) in tabs" :key="index">
      <!-- 라우터 주소가 바뀌기 전에 router-view에 전달되는 컴포넌트의 created 훅이 먼저 호출됨 -->
      <!-- 그래서 router-view에 key가 필요 -->
      <!-- <router-view v-slot="{ Component }">
        <keep-alive include="DeliveryList">
          <component :is="Component" :key="$route.path" />
        </keep-alive>
      </router-view> -->
  
      <router-view/>


      <!-- <router-view v-slot="{ Component }">
        <component :is="Component"/>
      </router-view> -->

    </q-tab-panel>
  </q-tab-panels>
</template>

<script>
export default {
  name: 'TabPanels',
  emits: [
    'changeTab'
  ],
  props: [
    'tabs'
  ],
  data() { 
    return {
      tab: '',
    }
  },
  methods: {
    //  when tab changed
    replaceRoute(newTab) {
      console.log('here')
      this.$router.replace({path: this.makePath(newTab)})
    },
    makePath(name) {
      let pathSplit = this.$router.currentRoute._value.fullPath.split('/')
      pathSplit[pathSplit.length - 1] = name
      return pathSplit.join('/')
    },


    scrolled(details) {
      // 위로 스크롤 시 탭 보여주기
      if (details.direction === 'up') {
        consol.log('scrolled up')
      }
    }
  },
}
</script>

<style>

</style>