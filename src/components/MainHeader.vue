<template>
  <q-header elevated class="text-white main-header" height-hint="98">
      <q-toolbar>
        <q-btn flat dense icon="menu" @click="onClick" class="on-left"/>
        <address-box/>
        <q-btn flat dense round icon="account_circle" @click="onClick" class=" on-right"/>
        <q-btn flat dense round icon="notifications" @click="onClick" class="on-right"/>
      </q-toolbar>

      <!-- <q-tabs align="left">
        <q-route-tab to="/page1" label="Page One" />
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />
      </q-tabs> -->
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
.main-header
  background-color: $green-14
</style>