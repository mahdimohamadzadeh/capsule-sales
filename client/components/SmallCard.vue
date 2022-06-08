<template>
  <nuxt-link :to="`/products/${card.id}`" class="card-container">
      <v-img
      class="image"
      :src="require(`../assets/image/${card.image || 'fel.jpg'}`)"
      :lazy-src="require(`../assets/image/${card.image || 'fe1.jpg'}`)"
      alt=""
    />
  </nuxt-link>
</template>

<script>
export default {
  props: ["card"],
};
</script>

<style scoped>
.card-container {
  width: 175px;
  height: 230px;
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;
}
.image {
  width: 100%;
  height: 90%;
  border-radius: 20px;
  margin: 8px;
}
</style>
