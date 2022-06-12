<template>
  <div>
    <Erorr :statusCode="error.statusCode" />
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: 'noNav'
};
</script>

<style>
* {
  direction: rtl;
}
</style>
