<template>
  <div>
    <v-container>
      <v-row class="mx-auto" max-width="1100" v-if="isProducts">
        <MyItem
          :admin="true"
          v-for="product in products"
          :key="product.id"
          :product="product.attributes"
          :id="product.id"
        />
      </v-row>
      <v-row v-if="!isProducts" class="justify-center mt-16">
        <h1 class="text-h2">محصولی وجود ندارد !</h1>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  head: {
    title: 'my Item',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Select product',
      },
    ],
  },
  async asyncData({ $axios, env }) {
    let isProducts
    let data = await $axios.$get(`${env.baseUrl}/products-purchaseds`)
    data.data.length < 1 ? (isProducts = false) : (isProducts = true)
    let products = data.data
    return { products, isProducts }
  },
}
</script>
