<template>
  <header>
    <div class="ma-10">
      <v-app-bar color="deep-red accent-4" fixed dense dark>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title
          ><nuxt-link
            to="/"
            class="text-decoration-none text--white white--text"
          >
            Home</nuxt-link
          ></v-toolbar-title
        >

        <v-spacer></v-spacer>
        <v-menu left bottom>
          <template v-slot:activator="{ on, attrs }">
            <nuxt-link  v-bind="attrs" v-on="on" class="text-decoration-none text--white white--text" to="/my-item"
              >My item</nuxt-link
            >
            <nuxt-link  class="text-decoration-none text--white white--text mr-4" to="/products"
              >Products</nuxt-link
            >
          </template>
        </v-menu>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <nuxt-link
              to="/"
              class="purple--text text--darken-4 text-decoration-none"
            >
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item>
            </nuxt-link>
            <nuxt-link
              to="/products"
              class="purple--text text--darken-4 text-decoration-none"
            >
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-basket</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Products</v-list-item-title>
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

<style lang="scss" scoped></style>
