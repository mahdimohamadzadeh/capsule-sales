<template>
  <div>
    <div class="d-flex flex-column">
      <v-container>
        <v-row>
          <v-col>
            <ProductsDisplay
              v-for="product in products"
              :key="product.id"
              :product="product.attributes"
              :id="product.id"
              linkId="/admin-panel/products/"
            />
          </v-col>
          <v-col>
            <ProductsDisplay
              v-for="product in products"
              :key="product.id"
              :product="product.attributes"
              :id="product.id"
              linkId="/admin-panel/products/"
            />
          </v-col>
          <v-col>
            <ProductsDisplay
              v-for="product in products"
              :key="product.id"
              :product="product.attributes"
              :id="product.id"
              linkId="/admin-panel/products/"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  head: {
    title: 'products',
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
