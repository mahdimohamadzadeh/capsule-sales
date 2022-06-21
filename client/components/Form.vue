<template>
  <v-card outlined :loading="loading" class="my-10" elevation="11">
    <template slot="progress" v-if="loading">
      <v-progress-linear
        color="green"
        height="5"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-card-title class="d-flex justify-center text-h4 mt-2">
      <slot></slot>
    </v-card-title>
    <v-card-text>
      <form @submit.prevent="onSave">
        <ControlInput inputLabel="عنوان محصول" v-model="editProduct.title" />
        <ControlInput inputLabel="ادرس عکس محصول" v-model="editProduct.src"
          >Title</ControlInput
        >
        <ControlInput type="number" inputLabel="امتیاز محصول از 5" v-model="editProduct.rate"
          >Thumbnail Link</ControlInput
        >
        <ControlInput type="number" inputLabel="قیمت محصول" v-model="editProduct.price"
          >Thumbnail Link</ControlInput
        >
        <ControlInput
          inputLabel="توضیحات محصول"
          v-model="editProduct.description"
          control-type="textarea"
          >Content</ControlInput
        >
        <Btn  type="submit" btn-style="mt-3 green">ذخیره</Btn>
        <Btn type="button" btn-style="mt-3 red mr-3" @click="onCancel"
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
    loading: {
      type: Boolean,
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
