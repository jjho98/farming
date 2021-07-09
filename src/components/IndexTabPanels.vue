<template>
  <q-tab-panels v-model="tab" animated keep-alive swipeable @transition="temp">
    <q-tab-panel name="mails">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </q-tab-panel>
    <q-tab-panel name="alarms">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </q-tab-panel>
    <q-tab-panel name="movies">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </q-tab-panel>
  </q-tab-panels>
</template>

<script>
export default {
  data() {
    return {
      tab: '',
    }
  },
  methods: {
    temp(){

    }
  },
}
</script>

<style>

</style>