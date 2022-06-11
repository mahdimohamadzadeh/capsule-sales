<template>
  <div>
    <v-card class="mx-auto mt-6" elevation="0" max-width="700">
      <v-list-item>
        <v-list-item-content>
          <h1 class="text-h3 font-weight-bold">Find your Fire Extinguisher</h1>
          <p class="text-caption mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            consequuntur laboriosam placeat cumque delectus nisi ducimus vero
            impedit. Ipsa iste repudiandae molestiae. Dolore, rerum voluptatum
            velit molestiae quod commodi nobis?
          </p>
        </v-list-item-content>

        <v-list-item-avatar tile size="300" class="mt-2">
          <img
            src="../assets/svg/fire-extinguisher.svg"
            alt="A photo titled Fire Extinguisher"
          />
        </v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn depressed class="rounded-pill py-5 px-10" color="error">
          <nuxt-link to="/products" class="text-decoration-none white--text">Start Looking</nuxt-link>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>
