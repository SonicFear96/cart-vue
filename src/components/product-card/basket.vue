<template>
  <div class="basket-card-component">
    <div class="basket-card__image">
      <img :src="getImage" alt="product image" />
    </div>
    <div class="basket-card__content">
      <span class="basket-card__title">{{ data.title }}</span>
      <div class="basket-card__price-wrapper">
        <span class="basket-card__old-price" v-if="data.sale"
          >${{ data.oldPrice }}</span
        >
        <span class="basket-card__price">${{ data.price }}</span>
      </div>
      <button class="basket-card__button" @click="deleteProductFromCart(data)">
        Remove
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "basket-card-component",
  computed: {
    ...mapGetters({
      productsCart: "getCartPositions",
    }),
    getImage() {
      return require(`@/assets/img/${this.data.image}.png`);
    },
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    ...mapActions({
      setProductsToCart: "setProductsToCart",
    }),
    deleteProductFromCart(product) {
      const products = this.productsCart.filter((el) => el.id !== product.id);
      this.setProductsToCart(products);
    },
  },
};
</script>

<style lang="scss">
.basket-card-component {
  display: flex;
  gap: 10px;
  width: 100%;
  max-width: 261px;
  .basket-card {
    &__image {
      img {
        width: 100px;
        height: 100px;
        object-fit: cover;
      }
    }
    &__content {
      display: flex;
      flex-direction: column;
      height: auto;
    }
    &__title {
      color: #818181;
      font-size: 16px;
    }
    &__price {
      &-wrapper {
        margin-top: 5px;
        display: flex;
        flex-direction: column;
      }
      font-size: 16px;
      font-weight: $font-weight-medium;
    }
    &__old-price {
      font-size: 16px;
      font-weight: $font-weight-semi-bold;
      text-decoration: line-through;
      color: $color-light-grey-second;
    }
    &__button {
      display: flex;
      margin-top: auto;
      font-size: 16px;
      font-weight: $font-weight-medium;
      text-decoration-line: underline;
      background: none;
      cursor: pointer;
    }
  }
}
</style>
