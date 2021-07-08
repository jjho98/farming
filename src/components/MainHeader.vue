<template>
  <q-header elevated class="text-white background-primary" height-hint="98">
    <q-toolbar>
      <q-btn flat dense icon="menu" @click="onClick" class="on-left"/>
      <address-box/>
      <q-btn flat dense round icon="shopping_cart" @click="onClick" class=" on-right"/>
      <q-btn flat dense round icon="notifications_none" @click="onClick" class="on-right"/>
    </q-toolbar>

    <q-tabs align="justify">
      <q-route-tab :to="{ name: 'deliveryIndex' }" label="배달" exact/>
      <q-route-tab :to="{ name: 'directIndex' }" label="직거래" exact/> 
    </q-tabs>
  </q-header>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  components: {
    AddressBox: defineAsyncComponent(() => import('components/AddressBox.vue')),
  },
  data() {
    return {
    }
  },
  methods: {
      onClick() {

      }
  },
}
</script>

<style lang="sass">
s
</style>