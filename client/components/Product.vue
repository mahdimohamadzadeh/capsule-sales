<template>
  <v-card :loading="loading" class="mx-auto mt-6" max-width="900">
    <template slot="progress" v-if="loading">
      <v-progress-linear
        color="green"
        height="5"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-img
      class="white--text align-end img"
      :opacity="0.2"
      :aspect-ratio="16 / 9"
      height="300px"
      :src="require(`../assets/image/${product.src || 'fe1.jpg'}`)"
      :lazy-src="require(`../assets/image/${product.src || 'fe1.jpg'}`)"
    >
      <v-card-title class="text-body-2 title">{{ product.title }}</v-card-title>
    </v-img>
    <v-card-subtitle class="pb-0 text-subtitle-1">
      محصول شماره : {{ id }}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div class="text-subtitle-1 mt-2">قیمت: {{ product.price }}$</div>

      <div class="text-body-2 mt-4 mr-1">
        {{ product.description }}
      </div>
    </v-card-text>

    <v-card-actions>
      <slot />
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon color="orange darken-2">mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon color="orange darken-2">mdi-bookmark</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon color="orange darken-2">mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: {
      type: Object,
      require: true,
    },
    id: {
      type: Number,
      require: true,
    },
    loading: {
      type: Boolean,
      require: false,
      default: false,
    },
  },
}
</script>

<style scoped>
.img {
  direction: ltr;
  opacity: 0.7;
}
.title {
  opacity: 1;
}
</style>
