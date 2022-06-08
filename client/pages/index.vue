<template>
  <div>
    <v-row class="d-flex justify-center flex-column">
      <Hero />
      <LargeCardDisplay
        v-for="allCard in allLargesCards"
        :key="allCard.id"
        :allCard="allCard"
      />
      <SmallCardDisplay
        v-for="allCard in allSmallsCard"
        :key="allCard.id"
        :allCard="allCard"
      />
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
  head: {
    title: 'Home page',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description',
      },
    ],
  },
  asyncData() {
    axios
      .get('http://localhost:1337/api/restaurants')
      .then((res) => console.log(res))
  },
  computed: {
    ...mapGetters(['allLargesCards', 'allSmallsCard', 'getProductById']),
  },
}
</script>
