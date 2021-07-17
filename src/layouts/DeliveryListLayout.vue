<template>
  <q-layout view="hHh lpR fFf">

    <back-header label="배달"/>

    <q-page-container>
      <q-page>
        <tab-panels-container :tabs="categories" @changeTab="onChange"/>
      </q-page>
    </q-page-container>

    <main-footer/>

  </q-layout>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapState, mapMutations} from 'vuex'

export default {
  components: {
    BackHeader: defineAsyncComponent(() => import('components/BackHeader.vue')),
    MainFooter: defineAsyncComponent(() => import('components/MainFooter.vue')),
    TabPanelsContainer: defineAsyncComponent(() => import('components/TabPanelsContainer.vue')),
  },
  computed: {
    ...mapState('categories', {
      categories: 'deliveryCategories',
    })
  },
  methods: {
    onChange(item) {
      this.changeCategory(item)
    },
    ...mapMutations('choices', [
      'changeCategory',
    ])
  },
}
</script>

<style>

</style>