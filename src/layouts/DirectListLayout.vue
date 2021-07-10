<template>
  <q-layout view="hHh lpR fFf">

    <back-header label="직거래"/>

    <q-page-container>
      <q-page>
        <q-tabs v-model="tab" align="justify" active-color="secondary" indicator-color="secondary" class="bg-white shadow-bottom">
          <q-route-tab :to="{path: `/direct/${category.name}`}" exact replace :label="category.label" 
            :name="category.name" v-for="(category, index) in categories" :key="index"/>
        </q-tabs>

        <q-tab-panels v-model="tab" animated keep-alive swipeable @before-transition="replaceRoute">
          <q-tab-panel :name="category.name" v-for="(category, index) in categories" :key="index">
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
      categories: 'directCategories',
    })
  },
  watch: {
    tab: function(val) {
      const category = this.categories.find(category => category.name === val)
      this.changeCategory(category)
    }
  },
  methods: {
    replaceRoute(newTab, oldTab) {
      this.$router.replace({path: `/direct/${newTab}`})
    },
    ...mapMutations('choices', [
      'changeCategory',
    ])
  },
}
</script>

<style>

</style>