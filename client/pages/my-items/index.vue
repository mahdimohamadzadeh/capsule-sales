<template>
  <div>
    <v-container>
      <v-row class="mx-auto" max-width="1100" v-if="isProducts">
        <MyItem
          @deleteProduct="deleteProduct"
          v-for="product in products"
          :key="product.id"
          :product="product.attributes"
          :id="product.id"
          :loading="loading"
        />
      </v-row>
      <v-row v-if="!isProducts" class="justify-center mt-16">
        <h1 class="text-h2">محصولی وجود ندارد !</h1>
      </v-row>
      <v-row v-if="!isProducts" class="justify-center mt-16">
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
      loading: false,
      confrimDelete: false,
    }
  },
  async asyncData({ $axios, env }) {
    let isProducts
    let data = await $axios.$get(`${env.baseUrl}/products-purchaseds`)
    data.data.length < 1 ? (isProducts = false) : (isProducts = true)
    let products = data.data
    return { products, isProducts }
  },
  methods: {
    deleteProduct(id) {
      Swal.fire({
        icon: 'warning',
        title: 'آیا مطمئن هستید؟',
        text: 'شما درحال حذف محصول مورد نظر هستید',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        cancelButtonColor: '#00D41A',
        confirmButtonColor: '#FF1B1B',
      }).then((isConfirm) => {
        if (isConfirm.isConfirmed) {
          this.loading = true
          this.$axios
            .delete(`${process.env.baseUrl}/products-purchaseds/${id}`)
            .then(() => {
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
                icon: 'error',
                title: 'خطا!',
                text: 'حذف محصول با خطا مواجهه شد',
              }).finally(() => {
                this.loading = false
              })
            })
        }
      })
    },
  },
}
</script>
