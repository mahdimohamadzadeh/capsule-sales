<template>
  <div class="mt-10" max-width="350">
    <!-- <h4 class="">{{ product.title }}</h4>
      <v-card class="d-flex" elevation="0" max-width="700">
        <Products
        v-for="(card, index) in allCard.cards"
        :key="card.id"
        :card="card"
        :id="card.id"
        :classStyle="index == allCard.length - 1 ? 'mr-0' : ''"
      />
        <v-img
          height="250"
          :src="require(`../assets/image/${product.src || 'fe1.jpg'}`)"
          :lazy-src="require(`../assets/image/${product.src || 'fe1.jpg'}`)"
        >
        </v-img>
      </v-card> -->
    <v-card class="mx-auto" max-width="344">
      <nuxt-link :to="`/products/${id}`"
        ><v-img
          :src="require(`../assets/image/${product.src || 'fe1.jpg'}`)"
          :lazy-src="require(`../assets/image/${product.src || 'fe1.jpg'}`)"
          height="200px"
        ></v-img
      ></nuxt-link>
      <v-card-title> {{ product.title }} </v-card-title>
      <v-spacer />
      <v-card-subtitle class="ma1">price: ${{ product.price }}</v-card-subtitle>
      <v-card-actions>
        <nuxt-link :to="`/products/${id}`" class="text-decoration-none"
          ><v-btn color="orange lighten-2 ripple text " text>
            Explore
          </v-btn></nuxt-link
        >
        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            {{ product.description }}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'ProductsDisplay',
  props: ['product', 'id'],
  data() {
    return {
      show: false,
    }
  },
}
</script>
