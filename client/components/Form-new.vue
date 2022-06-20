<template>
  <form @submit.prevent="onSave">
    <ControlInput v-model="editedPost.author">Author Name</ControlInput>
    <ControlInput v-model="editedPost.title">Title</ControlInput>
    <ControlInput v-model="editedPost.thumbnail">Thumbnail Link</ControlInput>
    <ControlInput control-type="textarea" v-model="editedPost.previewText"
      >Preview Text</ControlInput
    >
    <ControlInput control-type="textarea" v-model="editedPost.content"
      >Content</ControlInput
    >
    <Btn type="submit">Save</Btn>
    <Btn
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel"
      >Cancel</Btn
    >
  </form>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: false,
    },
    edited: {
      type: Object,
      required: false,
    },
  },
  methods: {
    onSave() {
      // Save the post
      this.$emit('submit', this.editedPost)
    },
    onCancel() {
      // Navigate back
      this.$router.push('/admin')
    },
  },
}
</script>

<style lang="scss" scoped></style>
