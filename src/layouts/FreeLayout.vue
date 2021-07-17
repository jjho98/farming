<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-page class="flex flex-center">
        <router-view/>
      </q-page>
    </q-page-container>

  </q-layout>
</template>

<script>

export default {
  name: 'FreeLayout',
}
</script>