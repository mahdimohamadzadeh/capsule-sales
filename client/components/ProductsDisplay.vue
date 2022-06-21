<template>
  <div class="mt-10" max-width="350">
    <v-card class="mx-auto" max-width="330">
      <nuxt-link :to="`${linkId}${id}`"
        ><v-img
          :src="require(`../assets/image/${product.src || 'fe1.jpg'}`)"
          :lazy-src="require(`../assets/image/${product.src || 'fe1.jpg'}`)"
          height="200px"
        ></v-img
      ></nuxt-link>
      <h3 class="text-justify title">{{ product.title }}</h3>
      <v-card-subtitle>قیمت: {{ product.price }}$</v-card-subtitle>
      <v-card-actions>
        <nuxt-link :to="`${linkId}${id}`" class="text-decoration-none"
          ><v-btn
            class="text-body-1 grey--text text--lighten-3"
            color="orange darken-2 ripple"
          >
            مشاهده محصول
          </v-btn></nuxt-link
        >
        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon color="orange darken-2">{{
            show ? 'mdi-chevron-up' : 'mdi-chevron-down'
          }}</v-icon>
        </v-btn>
      </v-card-actions>
      <v-card-text class="mt-2">
        <v-row align="center" class="mx-0">
          <v-rating
            rtl
            :value="product.rate"
            color="orange lighten-2"
            dense
            half-increments
            size="16"
            readonly
          ></v-rating>
        </v-row>
      </v-card-text>

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
  props: ['product', 'id','linkId'],
  data() {
    return {
      show: false,
    }
  },
}
</script>

<style scoped>
.title {
  margin: 20px 20px 0 20px;
}
</style>
