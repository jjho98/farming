<template>
  <q-footer elevated class="bg-white text-black">
    <q-tabs dense mobile-arrows align="justify" indicator-color="white">
      <q-tab class="col" icon="favorite_border" label="찜"></q-tab>
      <q-tab class="col" icon="content_paste" label="주문내역"></q-tab>
      <q-tab class="col" icon="search" label="검색"></q-tab>
      <q-tab class="col" icon="notifications_none" label="알림">
        <q-badge rounded floating color="yellow" />
      </q-tab>
      <q-tab class="col" icon="person_outline" label="My"></q-tab>
    </q-tabs>
  </q-footer>
</template>

<script>
export default {

}
</script>

<style lang="sass">
.q-tab__content.column
  flex-wrap: nowrap
</style>>
