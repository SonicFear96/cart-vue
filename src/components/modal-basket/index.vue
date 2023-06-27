<template>
  <CommonModal
    :isOpenModal="openModal"
    @close="$emit('close')"
    class="modal-basket-component"
  >
    <div class="modal-basket-wrapper">
      <div class="modal-basket__header">
        <ul class="modal-basket__menu-list">
          <li class="modal-basket__menu-item">
            <a href="#" class="modal-basket__menu-link">Profile</a>
          </li>
          <li class="modal-basket__menu-item">
            <button
              class="modal-basket__menu-item-button"
              @click="$emit('close')"
              :class="{ active: openModal }"
            >
              <span>Basket</span>
              <span v-if="productsCart.length">
                ({{ productsCart.length }})</span
              >
            </button>
          </li>
        </ul>
      </div>
      <div class="modal-basket__body">
        <span class="modal-basket__title"> Total</span>
        <div class="modal-basket__info">
          <div class="modal-basket__info-price">
            <span class="modal-basket__info-name">Subtotal:</span>
            <span class="modal-basket__info-value">${{ getAllPrice }}</span>
          </div>
          <div class="modal-basket__info-sale">
            <span class="modal-basket__info-name">Sale:</span>
            <span class="modal-basket__info-value">${{ getSalePrice }}</span>
          </div>
          <div class="modal-basket__info-content">
            <span class="modal-basket__info-name">Content:</span>
            <button class="modal-basket__info-button" @click="removeProducts">
              Remove all
            </button>
          </div>
        </div>
        <div class="modal-basket__total-price">
          <span class="total-price__title">Order Total:</span>
          <span class="total-price__value">${{ getFinalPrice }}</span>
        </div>
        <div class="modal-basket__product-list-wrapper" v-if="productsCart">
          <ul class="modal-basket__product-list">
            <li
              class="modal-basket__product-item"
              v-for="item in productsCart"
              :key="item.id"
            >
              <BasketCard :data="item" />
            </li>
          </ul>
        </div>
      </div>
      <div class="modal-basket__footer">
        <CommonButton type="order" @click="$emit('close')">
          <span>Checkout</span>
          <template v-slot:icon-default>
            <IconArrow />
          </template>
        </CommonButton>
      </div>
    </div>
  </CommonModal>
</template>

<script>
import { mapGetters } from "vuex";
import CommonModal from "@/components/common/modal";
import CommonButton from "@/components/common/button";
import BasketCard from "@/components/product-card/basket";
import IconArrow from "@/components/icons/arrow-icon";
export default {
  name: "modal-basket-component",
  components: {
    CommonModal,
    CommonButton,
    BasketCard,
    IconArrow,
  },
  props: {
    openModal: Boolean,
  },
  computed: {
    ...mapGetters({
      productsCart: "getCartPositions",
    }),
    getAllPrice() {
      let price = 0;
      this.productsCart.map((item) => {
        if (item.sale) {
          price += item.oldPrice;
        } else {
          price += item.price;
        }
      });
      return price;
    },
    getSalePrice() {
      let price = 0;
      this.productsCart.map((item) => {
        if (item.sale) {
          price += item.oldPrice - item.price;
        }
      });
      return Math.ceil(price);
    },
    getFinalPrice() {
      let price = 0;
      this.productsCart.map((item) => {
        price += item.price;
      });
      return price;
    },
  },
  methods: {
    removeProducts() {
      this.$store.dispatch("removeAllProductsFromCart");
    },
  },
};
</script>

<style lang="scss">
.modal-basket-component {
  overflow: scroll;
  .modal-basket {
    &-wrapper {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    &__header {
      height: 100px;
      border-bottom: 1px solid $color-light-grey;
      padding-top: 38px;
      padding-right: 100px;
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }
    &__menu-list {
      list-style: none;
      display: flex;
      gap: 44px;
    }
    &__menu-link {
      text-decoration: none;
      color: $color-black;
    }
    &__menu-item {
      &-button {
        background: none;
        cursor: pointer;
        &.active {
          color: $color-orange;
        }
      }
    }
    &__title {
      display: block;
      padding-left: 40px;
      padding-top: 20px;
      font-size: 24px;
      font-weight: $font-weight-bold;
      line-height: 29px;
      text-transform: uppercase;
    }
    &__info {
      padding: 0 100px 0 40px;
      display: flex;
      flex-direction: column;
      margin-top: 30px;
      gap: 20px;
      &-price,
      &-sale,
      &-content {
        display: flex;
        justify-content: space-between;
      }
      &-value {
        font-size: 16px;
        font-weight: $font-weight-medium;
      }
      &-button {
        font-size: 16px;
        font-weight: $font-weight-medium;
        text-decoration-line: underline;
        background: none;
        cursor: pointer;
      }
    }
    &__total-price {
      margin-top: 40px;
      padding: 20px 100px 20px 40px;
      border-top: 1px solid $color-light-grey;
      border-bottom: 1px solid $color-light-grey;
      display: flex;
      justify-content: space-between;
      .total-price {
        &__title,
        &__value {
          font-size: 20px;
          font-weight: $font-weight-medium;
        }
      }
    }
    &__product-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 40px;
      padding-left: 40px;
      max-height: 250px;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        width: 3px;
        height: 3px;
      }

      &::-webkit-scrollbar-track {
        background-color: lightgray;
      }
      &::-webkit-scrollbar-thumb {
        background-color: gray;
      }
      &-wrapper {
        margin-top: 40px;
      }
    }
    &__footer {
      margin-top: auto;
    }
  }
}
</style>
