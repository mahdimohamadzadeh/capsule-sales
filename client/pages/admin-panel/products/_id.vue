<template>
  <div>
    <div v-if="product">
      <Product
        :loading="loading"
        :product="product.attributes"
        :id="+product.id"
      >
        <Btn btnStyle="text-body-1" @click="onDelete" color="red  ripple"
          >حذف</Btn
        >
        <a href="#edit">
          <Btn btnStyle="text-body-1 mr-2" @click="onEdit" color="blue  ripple"
            >ویرایش</Btn
          >
        </a>
      </Product>
    </div>
    <div v-else><Error /></div>
    <FormEdit
      id="edit"
      @submit="onSubmitted"
      :productAttributes="product.attributes"
      v-if="edit"
    />
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  layout: 'admin',
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
  data() {
    return {
      edit: false,
      input: '',
      loading: false,
      errorText: '',
    }
  },
  methods: {
    onDelete() {
      let id = this.$route.params.id
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
            .delete(`${process.env.baseUrl}/products/${id}`)
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
              this.$router.push('/admin-panel/products')
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
    onEdit() {
      this.edit = !this.edit
    },
    onSubmitted(value) {
      let isCompare =
        JSON.stringify(value) == JSON.stringify(this.product.attributes)
      console.log(isCompare)
      if (!isCompare) {
        let id = this.$route.params.id
        Swal.fire({
          icon: 'warning',
          title: 'آیا مطمئن هستید؟',
          text: 'شما درحال ویرایش محصول خود هستید',
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
              .put(`${process.env.baseUrl}/products/${id}`, {
                data: { ...value },
              })
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
                  text: 'محصول با موفقیت ویرایش شد',
                })
              })
              .then(() => {
                this.loading = false
                this.$nuxt.refresh()
              })
              .then(() => {
                this.edit = false
              })
              .catch((error) => {
                console.log()
                switch (error.response.data.error.message) {
                  case 'This attribute must be unique':
                    this.errorText = 'مقدار مورد نظر قبلا ثبت شده است'
                    break
                  default:
                    this.errorText = 'ویرایش محصول با خطا مواجهه شد'
                    break
                }
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
                  text: this.errorText,
                }).finally(() => {
                  this.loading = false
                })
              })
          }
        })
      } else {
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
          text: 'محتوا تعغیری نکرده است',
        }).finally(() => {
          this.loading = false
        })
      }
    },
  },
}
</script>
