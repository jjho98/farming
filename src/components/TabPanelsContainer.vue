<template>
  <q-tabs v-model="tab" align="justify" active-color="secondary" indicator-color="secondary" class="bg-white shadow-bottom">
    <q-route-tab :to="{name: 'deliveryList', params: { category: item.name }}" exact replace :label="item.label" 
      :name="item.name" v-for="(item, index) in tabs" :key="index"/>
  </q-tabs>

  <q-tab-panels v-model="tab" keep-alive animated swipeable @update:model-value="replaceRoute">
    <q-tab-panel :name="item.name" v-for="(item, index) in tabs" :key="index">
      <!-- 라우터 주소가 바뀌기 전에 router-view에 전달되는 컴포넌트의 created 훅이 먼저 호출됨 -->
      <!-- 그래서 router-view에 key가 필요 -->
      <keep-alive>
        <router-view :key="$route.path"/>
      </keep-alive>
    </q-tab-panel>
  </q-tab-panels>
</template>

<script>
export default {
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
    replaceRoute(newTab, _) {
      this.$router.replace({name: 'deliveryList', params: { category: newTab }})
    },
  },
}
</script>

<style>

</style>