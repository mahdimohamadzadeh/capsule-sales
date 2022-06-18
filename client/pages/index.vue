<template>
  <div>
    <Hero />
    <v-container>
      <v-row>
        <v-col>
          <ProductsDisplay
            v-for="product in products"
            :key="product.id"
            :product="product.attributes"
            :id="product.id"
            linkId="/products/"
          />
        </v-col>
        <v-col>
          <ProductsDisplay
            v-for="product in products"
            :key="product.id"
            :product="product.attributes"
            :id="product.id"
            linkId="/products/"
          />
        </v-col>
        <v-col>
          <ProductsDisplay
            v-for="product in products"
            :key="product.id"
            :product="product.attributes"
            :id="product.id"
            linkId="/products/"
          />
        </v-col>
      </v-row>
    </v-container>
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
