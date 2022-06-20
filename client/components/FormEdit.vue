<template>
  <v-card outlined class="my-10" elevation="11">
    <v-card-title class="d-flex justify-center text-h4 mt-2">
      ویرایش پست
    </v-card-title>
    <v-card-text>
      <form @submit.prevent="onSave">
        <ControlInput inputLabel="عنوان محصول" v-model="editProduct.title" />
        <ControlInput inputLabel="ادرس عکس محصول" v-model="editProduct.src"
          >Title</ControlInput
        >
        <ControlInput inputLabel="امتیاز محصول از 5" v-model="editProduct.rate"
          >Thumbnail Link</ControlInput
        >
        <ControlInput inputLabel="قیمت محصول" v-model="editProduct.price"
          >Thumbnail Link</ControlInput
        >
        <ControlInput
          inputLabel="توضیحات محصول"
          v-model="editProduct.description"
          control-type="textarea"
          >Content</ControlInput
        >
        <Btn type="submit" btn-style="green">ذخیره</Btn>
        <Btn type="button" btn-style="red mr-3" @click="onCancel"
          >کنسل</Btn
        >
      </form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    productAttributes: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      editProduct: this.productAttributes
        ? { ...this.productAttributes }
        : {
            title: '',
            src: '',
            rate: 0,
            price: 0,
            description: '',
          },
    }
  },
  methods: {
    onSave() {
      // Save form
      this.$emit('submit', { ...this.editProduct })
    },
    onCancel() {
      // Navigate back
      this.$router.push('/admin-panel')
    },
  },
}
</script>
