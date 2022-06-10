<template>
    <NuxtLink class="text-decoration-none" :to="`/products/${id}`">
        <v-card elevation="0" class="my-4 mr-4" :class="classStyle" max-width="215">
    
            <v-img height="250" :src="require(`../assets/image/${card.image || 'fe1.jpg'}`)" :lazy-src="require(`../assets/image/${card.image || 'fe1.jpg'}`)">
                <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
    
                indeterminate
    
                color="grey lighten-5"
    
              ></v-progress-circular>
    
            </v-row>
    </v-img>

      <v-card-title>{{ card.title }}</v-card-title>

      <v-card-text>
        <div>
          {{ card.snippet }}
        </div>
      </v-card-text>
    </v-card>
  </NuxtLink>
</template>

<script>
export default {
    name: "Products",
    props: ["card", "id", "classStyle"],
};
</script>

<style lang="scss" scoped>

</style>
