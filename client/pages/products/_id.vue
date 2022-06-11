<template>
  <div>
    <div v-if="product">
      <Product :product="product.attributes" :id="product.id" />
    </div>
    <div v-else><Error /></div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'details product page',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'details product',
      },
    ],
  },
  async asyncData({ $axios, env, params }) {
    let data = await $axios.$get(`${env.baseUrl}/products/${params.id}`)
    const product = data.data
    return { product }
  },
  components: { Error },
}
</script>
