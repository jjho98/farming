<template>
  <q-header elevated class="text-black bg-white" height-hint="98">
    <q-toolbar>
      <q-btn flat dense icon="menu" @click="onClick" class="on-left"/>
      <address-box/>
      <q-btn flat dense round icon="shopping_cart" @click="onClick" class=" on-right"/>
      <q-btn flat dense round icon="notifications_none" @click="onClick" class="on-right"/>
    </q-toolbar>

    <q-tabs v-model="menu" align="justify" active-color="secondary" indicator-color="secondary">
      <q-route-tab :to="{ name: 'deliveryIndex' }" label="배달" name="배달" exact/>
      <q-route-tab :to="{ name: 'directIndex' }" label="직거래" name="직거래" exact/> 
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
    }
  },
  watch: {
    menu: function(val) {
      this.changeMenu(val)
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