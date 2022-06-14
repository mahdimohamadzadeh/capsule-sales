<template>
  <div class="my-10">
    <v-card class="mx-9" max-width="300" :loading="loading">
      <template slot="progress">
        <v-progress-linear
          color="yellow"
          height="5"
          indeterminate
        ></v-progress-linear>
      </template>
      <v-img
        :src="require(`../assets/image/${product.src || 'fe1.jpg'}`)"
        :lazy-src="require(`../assets/image/${product.src || 'fe1.jpg'}`)"
        height="250"
      ></v-img>
      <h3 class="title">{{ product.title }}</h3>
      <v-card-subtitle>محصول شماره:{{ id }}</v-card-subtitle>
      <v-card-text>{{ product.description }}</v-card-text>
      <v-card-actions>
        <v-btn color="error" @click="$emit('deleteProduct', id)"
          >حذف محصول</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['loading', 'product', 'id'],
}
</script>

<style scoped>
.title {
  margin: 20px 20px 0 20px;
}
</style>
