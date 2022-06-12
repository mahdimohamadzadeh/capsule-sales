<template>
  <v-footer padless>
    <v-card class="flex grey darken-4 " flat tile >
      <v-card-title >
        <strong class="subheading subtitle-1 "
          >گوسفندها تمام عمر از گرگ می ترسند، اما در نهایت این چوپان است که آنها را می خورد.
</strong
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

// Sheep are afraid of wolves all their lives, but in the end it is the shepherd who eats them.