<template>
  <div>
    <v-container>
      <v-row class="mx-auto" max-width="1100" v-if="isProduct">
        <MyItem
          @deleteProduct="deleteProduct"
          v-for="product in products"
          :key="product.id"
          :product="product.attributes"
          :id="product.id"
        />
      </v-row>
      <v-row v-if="!isProduct" class="justify-center mt-16">
        <h1 class="text-h2">محصولی وجود ندارد !</h1>
      </v-row>
      <v-row v-if="!isProduct" class="justify-center mt-16">
        <nuxt-link to="/products" class="text-h5 text--white"
          >مشاهده محصولات</nuxt-link
        >
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  head: {
    title: 'my Item',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Select product',
      },
    ],
  },
  data() {
    return {
      isProduct: false,
    }
  },
  async asyncData({ $axios, env }) {
    let isProduct = false
    let data = await $axios.$get(`${env.baseUrl}/products-purchaseds`)
    if (data.data.length < 1) {
      isProduct = false
    } else {
      isProduct = true
    }
    let products = data.data
    return { products, isProduct }
  },
  methods: {
    deleteProduct(id) {
      this.$axios
        .delete(`${process.env.baseUrl}/products-purchaseds/${id}`)
        .then((res) => {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            },
          })
          Toast.fire({
            icon: 'success',
            text: 'محصول با موفقیت حذف شد ',
          })
        })
        .then(() => {
          this.$nuxt.refresh()
        })
        .then(() => {
          this.products = false
        })
        .catch((e) => {
          console.log(e)
          Swal.fire({
            title: 'خطا!',
            text: ' خرید محصول با خطا مواجه شد',
            icon: 'error',
            iconColor: 'red',
            timerProgressBar: true,
            timer: 4000,
          })
        })
    },
  },
}
</script>
