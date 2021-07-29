<template>
  <q-header elevated class="text-black bg-white" height-hint="98">
    <q-toolbar>
      <q-btn flat dense icon="menu" @click="onClick" class="on-left"/>
      <address-box/>
      <q-btn flat dense round icon="shopping_cart" @click="onClick" class=" on-right"/>
      <q-btn flat dense round icon="notifications_none" @click="onClick" class="on-right"/>
    </q-toolbar>

    <q-tabs v-model="tab" align="justify" active-color="secondary" indicator-color="secondary">
      <q-tab :label="item.label" :name="item.name" v-for="(item, index) in menus" :key="index"/>
    </q-tabs>
  </q-header>

  <q-tab-panels v-model="tab" animated keep-alive swipeable>
    <q-tab-panel :name="menus[0].name">
      <delivery-carousel/>
      <category-list :categories="deliveryCategories"/>
    </q-tab-panel>

    <q-tab-panel :name="menus[1].name">
      <category-list :categories="directCategories" />
    </q-tab-panel>
  </q-tab-panels>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapMutations, mapState } from 'vuex'

export default {
  components: {
    AddressBox: defineAsyncComponent(() => import('components/AddressBox.vue')),
    DeliveryCarousel: defineAsyncComponent(() => import('components/DeliveryCarousel.vue')),
    CategoryList: defineAsyncComponent(() => import('src/components/CategoryList.vue')),
  },
  data() {
    return {
      tab: 'delivery',
      menus: [
        {
          label: '배달',
          name: 'delivery',
        },
        {
          label: '직거래',
          name: 'direct',
        },
      ]
    }
  },
  computed: {
    ...mapState('fixedTerms', [
      'deliveryCategories',
      'directCategories'
    ])
  },
  watch: {
    tab: function(val) {
      const menu = this.menus.find(menu => menu.name === val)
      this.changeMenu(menu)
    }
  },
  methods: {
    onClick() {

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
</style>