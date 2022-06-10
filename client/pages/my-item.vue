<template>
  <div class="container">
    <!-- <MyItem v-for="rental in myRentals" :key="rental.id" :item="rental" /> -->
    <div class="container">
      <div v-if="error">
        {{ error }}
      </div>
      <ul v-else>
        <li v-for="restaurant in restaurants" :key="restaurant.id">
          {{ restaurant.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
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
  layout: 'noNav',
  data() {
    return {
      restaurants: [],
      error: null,
    }
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>
