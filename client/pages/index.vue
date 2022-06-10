<template>
  <div>
    <v-row class="d-flex justify-center flex-column">
      <Hero />
      <ProductsDisplay
        v-for="product in products"
        :key="product.id"
        :product="product.attributes"
        :id="product.id"
      />
    </v-row>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Home page',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description',
      },
    ],
  },
  async asyncData({ $axios, env }) {
    let data = await $axios.$get(`${env.baseUrl}/products`)
    let products = data.data
    return { products }
  },
  // computed: {
  //   ...mapGetters(['allLargesCards', 'allSmallsCard', 'getProductById']),
  // },
}
</script>
