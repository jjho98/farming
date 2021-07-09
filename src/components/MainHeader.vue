<template>
  <q-header elevated class="text-black bg-white" height-hint="98">
    <q-toolbar>
      <q-btn flat dense icon="menu" @click="onClick" class="on-left"/>
      <address-box/>
      <q-btn flat dense round icon="shopping_cart" @click="onClick" class=" on-right"/>
      <q-btn flat dense round icon="notifications_none" @click="onClick" class="on-right"/>
    </q-toolbar>

    <q-tabs v-model="menu" align="justify" active-color="secondary" indicator-color="secondary">
      <q-tab :label="item.label" :name="item.name" v-for="(item, index) in menus" :key="index"/>
      
      <!-- <q-tab label="배달" name="delivery"/>
      <q-tab label="직거래" name="direct"/> -->
    </q-tabs>
  </q-header>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapMutations } from 'vuex'

export default {
  components: {
    AddressBox: defineAsyncComponent(() => import('components/AddressBox.vue')),
  },
  data() {
    return {
      menu: '',
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
  watch: {
    menu: function(val) {
      const menu = this.menus.find(menu => menu.name === val)
      this.changeMenu(menu)
    }
  },
  methods: {
    onClick() {

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
</style>