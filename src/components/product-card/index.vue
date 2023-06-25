<template>
  <div class="product-card-component" :class="[getType]">
    <div class="product-card__image-wrapper">
      <img src="@/assets/img/product-1.png" alt="product image" />
    </div>
    <div class="product-card__content-wrapper">
      <span class="product-card__title">Converse Kids 70</span>
      <span class="product-card__price">$49.99</span>
      <div class="product-card__button-wrapper">
        <CommonButton>
          <span>Add to basket </span>
          <template v-slot:icon-default>
            <IconPlus />
          </template>
        </CommonButton>
        <!-- <CommonButton type="light">
          <span>Added</span>
          <template v-slot:icon-default>
            <IconCheck />
          </template>
        </CommonButton> -->
      </div>
    </div>
  </div>
</template>

<script>
import CommonButton from "@/components/common/button";
// import IconCheck from "@/components/icons/check-icon";
import IconPlus from "@/components/icons/plus-icon";
export default {
  name: "produc-card-component",
  components: {
    // IconCheck,
    IconPlus,
    CommonButton,
  },
  props: {
    // type: default, wide
    type: {
      type: String,
      default: "default",
    },
  },
  computed: {
    getType() {
      return `product-card-${this.type}`;
    },
  },
};
</script>
<style lang="scss">
.product-card-component {
  display: flex;
  flex-direction: column;
  width: 100%;
  .product-card {
    &__image-wrapper {
      img {
        width: 100%;
        height: 100%;
      }
    }
    &__content-wrapper {
      max-width: 335px;
      display: flex;
      flex-direction: column;
      margin-top: 15px;
    }
    &__price {
      margin-top: 5px;
      font-size: 16px;
      font-weight: $font-weight-semi-bold;
    }
    &__button-wrapper {
      margin-top: 15px;
    }
  }
  &.product-card-wide {
    .product-card {
      &__image-wrapper {
        width: 690px;
        height: 781px;
      }
    }
  }
}
</style>
