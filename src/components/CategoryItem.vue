<template>
  <div class="text-center q-gutter-y-xs cursor-pointer item">
    <div>
      <span class="material-icons">
        {{ img }}
      </span>
    </div>
    <div>
      {{ label }}
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'img',
    'label'
  ],
}
</script>

<style lang="sass" scoped>
.material-icons
  font-size: 3em

.item
  -webkit-transition: font-size 1s
  transition: font-size 0.1s
  padding: 10px

.item:active
  font-size: 80%

</style>>
