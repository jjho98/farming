<template>
  <q-layout view="hHh lpR fFf">

    <main-header/>

    <q-page-container>
      <q-page>
        <tab-panels-container :tabs="menus" @changeTab="onChange"/>
      </q-page>
    </q-page-container>

    <main-footer/>

  </q-layout>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapMutations} from 'vuex'
export default {
  name: 'MainLayout',
  components: {
    MainHeader: defineAsyncComponent(() => import('components/MainHeader.vue')),
    MainFooter: defineAsyncComponent(() => import('components/MainFooter.vue')),
    TabPanelsContainer: defineAsyncComponent(() => import('components/TabPanelsContainer.vue')),
  },
  data() {
    return {
      menus: [
        {
          label: '배달',
          name: 'delivery',
        },
        {
          label: '직거래',
          name: 'direct',
        },
      ],
    }
  },
  methods: {
    onChange(item) {
      this.changeMenu(item)
    },
    ...mapMutations('choices', [
      'changeMenu',
    ])
  },
}
</script>

<style lang="sass">
.q-tab__indicator
  height: 4px
.q-tab__label
  font-weight: bolder
.q-tab-panel
  padding: 0
</style>