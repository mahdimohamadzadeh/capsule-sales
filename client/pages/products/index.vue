<template>
  <div>
    <div class="d-flex flex-column">
      <Hero />
      <ProductsDisplay
        v-for="product in products"
        :key="product.id"
        :product="product.attributes"
        :id="product.id"
      />
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'products page',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'show all products',
      },
    ],
  },
  async asyncData({ $axios, env }) {
    let data = await $axios.$get(`${env.baseUrl}/products`)
    let products = data.data
    return { products }
  },
}
</script>

<style lang="scss" scoped></style>
