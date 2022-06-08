<template>
  <v-footer padless>
    <v-card class="flex grey darken-4 " flat tile dark >
      <v-card-title >
        <strong class="subheading "
          >Get connected with us on social networks!</strong
        >

        <v-spacer class="text-center"
          >	&#169;{{ new Date().getFullYear() }}</v-spacer
        >

        <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
