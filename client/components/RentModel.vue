<template>
  <div class="text-center mt-16">
    <v-bottom-sheet v-model="sheet" inset persistent>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red" width="100%" rounded v-bind="attrs" v-on="on">
          Rent
        </v-btn>
      </template>
      <v-sheet class="text-center" height="700">
        <v-btn class="mt-6" text color="error" @click="sheet = !sheet">
          close
        </v-btn>
        <div class="py-3">
          <!-- <v-date-picker :value="null" color="red" is-dark is-range /> -->
          <v-date-picker
            v-model="picker2"
            color="red"
            header-color="red"
          ></v-date-picker>
          <v-btn
            block
            text
            color="white"
            @click="addProduct"
            class="red lighten-2"
          >
            order
          </v-btn>
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "RentModel",
  props: ["product"],
  data() {
    return {
      sheet: false,
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      picker2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
    };
  },
  methods: {
    ...mapMutations(["addItem"]),
    addProduct() {
      this.addItem(this.product.id);
      this.sheet = false;
    },
  },
};
</script>

<style scoped></style>
