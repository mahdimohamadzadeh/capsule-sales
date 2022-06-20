<template>
  <div>
    <div v-if="product">
      <Product
        @buyCapsules="buyCapsules"
        :product="product.attributes"
        :id="product.id"
      >
        <Btn
          btnStyle="text-body-1"
          @click="buyCapsules"
          color="orange darken-2  ripple"
          >خرید</Btn
        >
      </Product>
    </div>
    <div v-else><Error /></div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  head: {
    title: 'details product page',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'details product',
      },
    ],
  },
  async asyncData({ $axios, env, params }) {
    let data = await $axios.$get(`${env.baseUrl}/products/${params.id}`)
    const product = data.data
    return { product }
  },
  methods: {
    buyCapsules() {
      let data = {
        title: this.product.attributes.title,
        description: this.product.attributes.description,
        src: this.product.attributes.src,
      }
      this.$axios
        .post('http://localhost:8082/api/products-purchaseds', {
          data,
        })
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

          if (res.data) {
            Toast.fire({
              icon: 'success',
              title: 'محصول با موفقیت خریداری شد',
            })
          }
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
            text: ' خرید محصول با خطا مواجه شد',
          })
        })
    },
  },
}
</script>
