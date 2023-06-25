<template>
  <a
    class="button-component"
    :class="[classList, { disabled }]"
    role="button"
    :type="native"
    @click="click"
    @focus="$emit('focus')"
    @blur="$emit('blur')"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "button-component",
  props: {
    type: {
      type: String,
      default: "default",
    },
    native: {
      type: String,
      default: "button", // button, submit, confirm
    },
    target: {
      type: String,
      default: "_blank", // _blank, _self
    },
  },
  computed: {
    classList() {
      return `button-type-${this.type}`;
    },
  },
  methods: {
    click(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss">
.button-component {
  // Your custom styles here
}
</style>
