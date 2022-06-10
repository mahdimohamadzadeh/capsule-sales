<template>
  <div class="mx-auto mt-10" max-width="700">
    <nuxt-link :to="`/products/${id}`">
      <h4 class="">{{ product.title }}</h4>
      <v-card class="d-flex" elevation="0" max-width="700">
        <!-- <Products
        v-for="(card, index) in allCard.cards"
        :key="card.id"
        :card="card"
        :id="card.id"
        :classStyle="index == allCard.length - 1 ? 'mr-0' : ''"
      /> -->
        <v-img
          height="250"
          :src="require(`../assets/image/${product.src || 'fe1.jpg'}`)"
          :lazy-src="require(`../assets/image/${product.src || 'fe1.jpg'}`)"
        >
        </v-img>
      </v-card>
      <span>{{ product.price }}</span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'ProductsDisplay',
  props: ['product', 'id'],
}
</script>
