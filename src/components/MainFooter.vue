<template>
  <q-footer bordered class="bg-white text-black">
    <q-tabs dense align="justify" indicator-color="white">
      <!-- <q-route-tab class="col" icon="favorite_border" label="찜" active-class="footer-active"></q-route-tab> -->
      <q-route-tab class="col" :to="{name: 'cart'}" icon="shopping_basket" label="장바구니" active-class="footer-active"></q-route-tab>
      <q-route-tab class="col" icon="content_paste" label="주문내역" active-class="footer-active"></q-route-tab>
      <q-route-tab class="col" :to="{name: 'home'}" icon="home" label="홈" active-class="footer-active"></q-route-tab>
      <q-route-tab class="col" icon="search" label="검색" active-class="footer-active"></q-route-tab>
      <!-- <q-route-tab class="col" icon="notifications_none" label="알림">
        <q-badge rounded floating color="yellow">4</q-badge>
      </q-route-tab> -->
      <q-route-tab :to="{name: 'my'}" class="col" icon="person_outline" label="My" active-class="footer-active"></q-route-tab>
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

.footer-active
  color: $primary
</style>>
