<template>
  <button
    class="button-component"
    :class="[classList, { 'button-icon': $slots['icon-default'] }]"
    role="button"
    :type="native"
    @click="click"
    @focus="$emit('focus')"
    @blur="$emit('blur')"
  >
    <slot></slot>
    <span v-if="$slots['icon-default']" class="btn__icon">
      <slot name="icon-default"></slot>
    </span>
  </button>
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
  border: 1px solid transparent;
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  &.button-type-default {
    background: $color-black-second;
    color: $color-white;
    svg {
      color: $color-white;
    }
  }
  &.button-type-light {
    background: $color-white;
    color: $color-black;
    border: 1px solid $color-black;
    svg {
      color: $color-black;
    }
  }
  &.button-icon {
    justify-content: space-between;
  }
}
</style>
