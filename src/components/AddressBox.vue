<template>
  <q-toolbar-title>
    <!-- <q-avatar>
    <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
    </q-avatar> -->
    <div class="row no-wrap justify-center address-box">
      <span class="ellipsis text-subtitle2">
          {{ address }}
      </span>
      <span class="material-icons">
          arrow_drop_down
      </span>
    </div>
  </q-toolbar-title>
</template>

<script>
export default {
  data() {
    return {
        address: "홍성읍 오관리 강남 아아 이기 너무 미이 지지 주주 혼란 이게 왜 이렇지",
    }
  },
}
</script>

<style>

</style>