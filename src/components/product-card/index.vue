<template>
  <div class="product-card-component" :class="[getType]">
    <div class="product-card__image-wrapper">
      <img :src="getImage" alt="product image" />
    </div>
    <div class="product-card__content-wrapper">
      <span class="product-card__title">{{ data.title }}</span>
      <div class="product-card__price-wrapper">
        <span class="product-card__price">${{ data.price }}</span>
        <span class="product-card__old-price" v-if="data.sale"
          >${{ data.oldPrice }}</span
        >
      </div>

      <div class="product-card__button-wrapper">
        <CommonButton v-if="!productInCart" @click="addProductToCart(data)">
          <span>Add to basket </span>
          <template v-slot:icon-default>
            <IconPlus />
          </template>
        </CommonButton>
        <CommonButton v-else type="light">
          <span>Added</span>
          <template v-slot:icon-default>
            <IconCheck />
          </template>
        </CommonButton>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CommonButton from "@/components/common/button";
import IconCheck from "@/components/icons/check-icon";
import IconPlus from "@/components/icons/plus-icon";
export default {
  name: "produc-card-component",
  components: {
    IconCheck,
    IconPlus,
    CommonButton,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    type: {
      type: String,
      default: "default",
    },
  },
  computed: {
    ...mapGetters({
      productsCart: "getCartPositions",
    }),
    getType() {
      return `product-card-${this.type}`;
    },
    getImage() {
      return require(`@/assets/img/${this.data.image}.png`);
    },
    productInCart() {
      return this.productsCart.find((item) => item.id === this.data.id);
    },
  },
  methods: {
    ...mapActions({
      setProductsToCart: "setProductsToCart",
    }),
    addProductToCart(product) {
      const products = [...this.productsCart];
      products.push(product);
      this.setProductsToCart(products);
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
    &__title {
      font-size: 16px;
    }
    &__content-wrapper {
      max-width: 335px;
      display: flex;
      flex-direction: column;
      margin-top: 15px;
    }
    &__price-wrapper {
      margin-top: 5px;
      display: flex;
      gap: 10px;
    }
    &__price {
      font-size: 16px;
      font-weight: $font-weight-semi-bold;
    }
    &__old-price {
      font-size: 16px;
      font-weight: $font-weight-semi-bold;
      text-decoration: line-through;
      color: $color-light-grey-second;
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
