<template>
  <q-tabs v-model="tab" align="justify" active-color="secondary" indicator-color="secondary" class="bg-white shadow-bottom">
    <q-route-tab :to="{path: makePath(item.name)}" exact replace :label="item.label" 
      :name="item.name" v-for="(item, index) in tabs" :key="index"/>
  </q-tabs>

  <q-tab-panels v-model="tab" animated keep-alive swipeable @before-transition="replaceRoute">
    <q-tab-panel :name="item.name" v-for="(item, index) in tabs" :key="index">
      <router-view/>
    </q-tab-panel>
  </q-tab-panels>
</template>

<script>
export default {
  emits: [
    'changeTab'
  ],
  props: [
    'tabs'
  ],
  data() {
    return {
      tab: '',
    }
  },
  watch: {
    tab: function(val) {
      const item = this.tabs.find(item => item.name === val)
      this.$emit('changeTab', item)
      // this.changeCategory(item)
    }
  },
  methods: {
    replaceRoute(newTab, oldTab) {
      this.$router.replace({path: this.makePath(newTab)})
    },
    makePath(name) {
      let pathSplit = this.$router.currentRoute._value.fullPath.split('/')
      pathSplit[pathSplit.length - 1] = name
      return pathSplit.join('/')
    },
  },
}
</script>

<style>

</style>