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
    <v-card class="mx-auto" max-width="330">
      <nuxt-link :to="`/products/${id}`"
        ><v-img
          :src="require(`../assets/image/${product.src || 'fe1.jpg'}`)"
          :lazy-src="require(`../assets/image/${product.src || 'fe1.jpg'}`)"
          height="200px"
        ></v-img
      ></nuxt-link>
      <h3 class="text-justify title"> {{ product.title }} </h3>
      <v-spacer />
      <v-card-subtitle >قیمت: {{ product.price }}$</v-card-subtitle>
      <v-card-actions>
        <nuxt-link :to="`/products/${id}`" class="text-decoration-none"
          ><v-btn class="text-body-1" color="orange darken-2 ripple">
            خرید
          </v-btn></nuxt-link
        >
        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon color="orange darken-2">{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
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

<style scoped>
.title{
  margin: 20px;
}
</style>