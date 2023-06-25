<template>
  <div class="basket-card-component">
    <div class="basket-card__image">
      <img src="@/assets/img/product-1.png" alt="product image" />
    </div>
    <div class="basket-card__content">
      <span class="basket-card__title">Converse Chuck 70 Renew High Top</span>
      <span class="basket-card__price">$50.99</span>
      <button class="basket-card__button">Remove</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "basket-card-component",
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
      margin-top: 5px;
      font-size: 16px;
      font-weight: $font-weight-medium;
    }
    &__button {
      display: flex;
      margin-top: auto;
      font-size: 16px;
      font-weight: $font-weight-medium;
      text-decoration-line: underline;
      background: none;
    }
  }
}
</style>
