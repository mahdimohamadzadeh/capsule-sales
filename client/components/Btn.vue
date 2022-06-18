<template>
  <v-btn :class="btnStyle" v-bind="$attrs" v-on="$listeners">
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: 'Btn',
  props: ['btnStyle'],
}
</script>

<style lang="scss" scoped></style>
