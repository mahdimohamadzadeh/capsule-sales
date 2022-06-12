<template>
  <header>
    <div class="ma-10">
      <v-app-bar color="deep-red accent-4" fixed dense dark>
        <v-icon class="mx-4" @click="drawer = true">mdi-menu</v-icon>

        <v-toolbar-title
          ><nuxt-link
            to="/"
            class="text-decoration-none text--white white--text"
          >
            خانه</nuxt-link
          ></v-toolbar-title
        >

        <v-spacer></v-spacer>
        <v-menu left bottom>
          <template v-slot:activator="{ on, attrs }">
            <nuxt-link  v-bind="attrs" v-on="on" class="text-decoration-none text--white white--text" to="/my-item"
              >کپسول های من</nuxt-link
            >
            <nuxt-link  class="text-decoration-none text--white white--text ml-4" to="/products"
              >لیست محصولات</nuxt-link
            >
          </template>
        </v-menu>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" absolute temporary right>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
          >
            <nuxt-link
              to="/"
              class=" text-decoration-none"
            >
              <v-list-item>
                <v-list-item-icon class="ma-4">
                  <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>خانه</v-list-item-title>
              </v-list-item>
            </nuxt-link>
            <nuxt-link
              to="/products"
              class=" text-decoration-none"
            >
              <v-list-item>
                <v-list-item-icon class="ma-4">
                  <v-icon>mdi-basket</v-icon>
                </v-list-item-icon>
                <v-list-item-title>محصولات</v-list-item-title>
              </v-list-item>
            </nuxt-link>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

