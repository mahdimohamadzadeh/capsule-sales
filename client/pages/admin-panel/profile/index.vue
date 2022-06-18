<template>
  <v-card class="mx-auto" max-width="1000" tile>
    <v-img
      height="200"
      src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
      lazy-src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row> </template
    ></v-img>
    <v-row style="margin: 2.5%; position: absolute; top: 130px">
      <v-list-item>
        <v-list-item-avatar size="100">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            :alt="user.userName"
          />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title mt-10">{{
            user.userName
          }}</v-list-item-title>
          <v-list-item-subtitle class="mt-5"
            >ایمیل: {{ user.email }}</v-list-item-subtitle
          >
          <v-list-item-subtitle class="mt-5"
            >ایجاد در:
            {{
              new Date(user.createdAt).toLocaleDateString()
            }}</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </v-row>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'admin',
  computed: mapState(['user']),
}
</script>

<style lang="scss" scoped></style>
