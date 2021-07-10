<template>
  <q-layout view="hHh lpR fFf">

    <back-header/>

    <q-page-container>
      <q-page>
        <q-tabs v-model="tab" align="justify" active-color="secondary" indicator-color="secondary" class="bg-white">
          <q-route-tab :to="{name: `${menu.name}Index`}" exact replace :label="menu.label" :name="menu.name" v-for="(menu, index) in menus" :key="index"/>
        </q-tabs>

        <q-tab-panels v-model="tab" animated keep-alive swipeable @before-transition="replaceRoute">
          <q-tab-panel :name="menu.name" v-for="(menu, index) in menus" :key="index">
            <router-view/>
          </q-tab-panel>
        </q-tab-panels>
      </q-page>
    </q-page-container>

    <main-footer/>

  </q-layout>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapState, mapMutations} from 'vuex'

export default {
  name: 'MainLayout',
  components: {
    BackHeader: defineAsyncComponent(() => import('components/BackHeader.vue')),
    MainFooter: defineAsyncComponent(() => import('components/MainFooter.vue')),
  },
  data() {
    return {
      tab: '',
    }
  },
  computed: {
    ...mapState('categories', {
      categories: 'deliveryCategories',
    })
  },
  watch: {
    tab: function(val) {
      const menu = this.categories.find(category => menu.name === val)
      this.changeMenu(menu)
    }
  },
  methods: {
    replaceRoute(newTab, oldTab) {
      this.$router.replace({name: `${newTab}Index`})
    },
    ...mapMutations('choices', [
      'changeMenu',
    ])
  },
}
</script>

<style>

</style>