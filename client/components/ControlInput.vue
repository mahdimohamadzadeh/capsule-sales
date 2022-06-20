<template>
  <div class="pt-12">
    <v-text-field
      :label="inputLabel"
      name="inputText"
      :rules="rules"
      hide-details="auto"
      v-bind="$attrs"
      @input="$emit('input', $event)"
      v-if="controlType === 'input'"
      class="text-right blue-grey darken-4 rounded-lg pa-5"
      :value="value"
      color="orange"
      
    ></v-text-field>
    <v-textarea
      :label="inputLabel"
      name="textareaText"
      rows="3"
      @input="$emit('input', $event)"
      v-if="controlType === 'textarea'"
      class="text-right blue-grey darken-4 rounded-lg pa-5"
      :value="value"
      color="orange"
      
    ></v-textarea>
  </div>
</template>

<script>
export default {
  props: {
    controlType: {
      type: String,
      default: 'input',
    },
    inputLabel: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number],
      default: '',
      required: false,
    },
  },
  data() {
    return {
      rules: [(value) => !!value || 'اجباری'],
    }
  },
}
</script>
