<template>
  <div class="modal-component" v-if="isOpenModal" @click.self="$emit('close')">
    <div class="modal-component-wrapper">
      <div class="modal-component-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { disableScroll, enableScroll } from "@/utils";

export default {
  name: "modal-component",
  props: {
    isOpenModal: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    isOpenModal(val) {
      if (val) {
        disableScroll();
      } else {
        enableScroll();
      }
    },
  },
};
</script>
<style lang="scss">
.modal-component {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 40px;
  background: rgba($color-black, 0.3);
  transition: opacity 0.4s ease;

  &-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: $color-white;
    border-radius: 6px;
    overflow-x: hidden;
  }

  &-content {
    height: 100%;
    padding: 40px;
    overflow: auto;
  }
  &.modal-basket-component {
    padding: 0;
    .modal-component {
      &-wrapper {
        position: absolute;
        top: 0;
        right: 0px;
        width: 455px;
        height: 784px;
      }
      &-content {
        padding: 0;
      }
    }
  }
}
</style>
