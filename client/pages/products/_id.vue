<template>
  <div>
    <div v-if="product">
      <Product
        @buyCapsules="buyCapsules"
        :product="product.attributes"
        :id="product.id"
      />
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
        .post('http://localhost:1337/api/products-purchaseds', {
          data,
        })
        .then((res) => {
          if (res.data) {
            Swal.fire({
            title: 'محصول با موفقیت خریداری شد',
            icon: 'success',
            iconColor: 'green',
            timerProgressBar: true,
            timer: 4000,
          })
          }
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
