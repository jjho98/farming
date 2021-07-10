<template>
  <q-layout view="hHh lpR fFf">

    <main-header/>

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
import { mapMutations} from 'vuex'

export default {
  name: 'MainLayout',
  components: {
    MainHeader: defineAsyncComponent(() => import('components/MainHeader.vue')),
    MainFooter: defineAsyncComponent(() => import('components/MainFooter.vue')),
  },
  data() {
    return {
      tab: '',
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

  watch: {
    tab: function(val) {
      const menu = this.menus.find(menu => menu.name === val)
      this.changeMenu(menu)
    }
  },
  methods: {
    replaceRoute(newTab, oldTab) {
      this.$router.replace({name: `${newTab}Index`})
    },
    ...mapMutations({
      changeMenu: 'choice/changeMenu',
    })
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
