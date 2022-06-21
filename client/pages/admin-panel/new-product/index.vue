<template>
  <div>
    <Form :loading="loading" @submit="onSubmitted">محصول جدید</Form>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  layout: 'admin',
  data() {
    return {
      loading: false,
      errorText: '',
    }
  },
  methods: {
    onSubmitted(value) {
      Swal.fire({
        icon: 'warning',
        title: 'آیا مطمئن هستید؟',
        text: 'شما درحال ویرایش محصول خود هستید',
        text: `عنوان :${value.title} | عکس :${value.src} | قیمت :${value.price}$ | امتیاز : ${value.rate} | توضیحات :${value.description} `,
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
            .post(`${process.env.baseUrl}/products`, {
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
                text: 'محصول با موفقیت اضافه شد',
              })
            })
            .catch((error) => {
              console.log()
              switch (error.response.data.error.message) {
                case 'This attribute must be unique':
                  this.errorText = 'مقدار مورد نظر قبلا ثبت شده است'
                  break
                default:
                  this.errorText = 'ایجاد محصول با خطا مواجهه شد'
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
          this.$router.push('/admin-panel/products')
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
