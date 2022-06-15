<template>
  <div>
    <v-card class="mx-auto my-2" max-width="374">
      <v-img
        height="450"
        :src="require('../assets/image/fe25.jpg')"
        :lazy-src="require('../assets/image/fe25.jpg')"
      >
      </v-img>
      <v-card-title v-if="statusCode === 404">
        صحفه مورد نظر پیدا نشد
      </v-card-title>
      <v-card-title v-else> خطایی رخ داد </v-card-title>
      <v-card-actions class="justify-center">
        <v-btn elevation="4" color="orange darken-3"
          ><NuxtLink class="text-h6 white--text" to="/">
            صحفه اصلی
          </NuxtLink></v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Error',
  props: ['statusCode'],
}
</script>
