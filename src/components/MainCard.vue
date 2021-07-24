<template>
  <q-card class="main-card">
    <q-card-section>
      <div class="text-h5  text-weight-bolder">
        {{ header }}
        <span class="material-icons">
          {{ icon }}
        </span>
      </div>
    </q-card-section>
    <q-card-section class="keep-all">
      {{ content }}
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: [
    'header',
    'icon',
    'content',
  ],
}
</script>

<style lang="sass" scoped>


.main-card
  background-color: $grey-2
  border-radius: 10px
  height: 100%

</style>>
