<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: 'صحفه ادمین', icon: 'mdi-home-city', link: '/admin-panel' },
        { title: 'پروفایل', icon: 'mdi-account', link: '/admin-panel/profile' },
        { title: 'محصولات', icon: 'mdi-basket', link: '/admin-panel/products' },
        { title: 'اضافه کردن محصول جدید', icon: 'mdi-basket-plus', link: '/admin-panel/new-product' },
        { title: 'خانه', icon: 'mdi-home', link: '/' },
      ],
      mini: true,
      group: null,
    }
  },
  // async fetch() {
  //   let data = await this.$http.$get('http://localhost:8082/api/users-normals')
  //   let users = data.data
  //   users.forEach((user) => {
  //     this.user = user.attributes
  //   })
  // },
  computed: mapState(['user']),
}
</script>
<template>
  <v-card>
    <v-app-bar color="green" dark>
      <v-toolbar-title class="mr-16">پنل ادمین</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
      height="400"
      width="250"
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      fixed
      right
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://www.w3schools.com/howto/img_avatar.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-title class="mr-2">
          {{ user.userName }}
        </v-list-item-title>

        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list class="d-flex flex-column align-start hover" width="250">
        <v-list-item v-for="item in items" :key="item.title" class="pa-0">
          <nuxt-link
            :to="item.link"
            class="text-decoration-none white--text d-flex"
          >
            <v-list-item-icon class="mr-4">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content class="mr-8">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </nuxt-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
