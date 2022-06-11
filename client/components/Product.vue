<template>
  <v-card class="mx-auto mt-6" max-width="900">
    <v-img
      class="white--text align-end"
      height="300px"
      :src="require(`../assets/image/${product.src || 'fe1.jpg'}`)"
      :lazy-src="require(`../assets/image/${product.src || 'fe1.jpg'}`)"
    >
      <v-card-title>{{ product.title }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0"> product-number : {{ id }} </v-card-subtitle>

    <v-card-text class="text--primary">
      <div class="heading mt-2">price:${{ product.price }}</div>

      <div class="caption ml-2 ">
        {{ product.description }}
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" text> Share </v-btn>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-bookmark</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Product',
  props: ['product', 'id'],
}
</script>

<style lang="scss" scoped></style>
