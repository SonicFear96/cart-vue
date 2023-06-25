<template>
  <div class="input-component">
    <input
      ref="input"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      @input="input($event.target.value)"
      @change="change($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "input-component",
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: [String, Number],
    placeholder: String,
  },
  methods: {
    input(value) {
      this.$emit("input", value);
    },
    change(value) {
      this.$emit("change", value);
    },
  },
};
</script>

<style lang="scss">
.input-component {
  input {
    padding: 20px;
    background: $color-grey;
    width: 100%;
    color: $color-black;
    font-size: $font-size-default;
    font-weight: $font-weight-medium;
    &::placeholder {
      color: $color-black;
    }
  }
}
</style>
