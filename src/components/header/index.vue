<template>
  <header class="header-component wrapper">
    <div class="header-component__wrapper">
      <div class="header-component__left-menu">
        <div class="header-component__logo">
          <IconLogo />
        </div>
        <div class="header-component__nav-wrapper">
          <ul class="header-component__nav-list">
            <li class="header-component__nav-item">
              <a href="#" class="header-component__nav-link active">Catalog</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="header-component__right-menu">
        <ul class="header-component__menu-list">
          <li class="header-component__menu-item">
            <a href="#" class="header-component__menu-link">Profile</a>
          </li>
          <li class="header-component__menu-item">
            <button
              class="header-component__menu-item-button"
              @click="openModal = !openModal"
              :class="{ active: openModal }"
            >
              Basket
              <span v-if="productsCart.length">
                ({{ productsCart.length }})</span
              >
            </button>
          </li>
        </ul>
      </div>
    </div>
    <ModalBasket :openModal="openModal" @close="openModal = false" />
  </header>
</template>

<script>
import IconLogo from "@/components/icons/logo-icon";
import ModalBasket from "@/components/modal-basket";
import { mapGetters } from "vuex";

export default {
  name: "header-component",
  components: {
    IconLogo,
    ModalBasket,
  },
  data() {
    return {
      openModal: false,
    };
  },
  computed: {
    ...mapGetters({
      productsCart: "getCartPositions",
    }),
  },
};
</script>

<style lang="scss">
.header-component {
  color: $color-black;

  &__wrapper {
    padding: 38px 0;
    display: flex;
    height: 100px;
    justify-content: space-between;
    border-bottom: 1px solid $color-light-grey;
  }
  &__left-menu,
  &__right-menu {
    width: 50%;
  }
  &__left-menu {
    display: flex;
  }
  &__right-menu {
    display: flex;
    justify-content: flex-end;
  }
  &__logo {
    width: 50%;
  }
  &__nav {
    &-wrapper {
      width: 50%;
    }
    &-list {
      list-style: none;
    }
    &-link {
      &.active {
        color: $color-orange;
        text-decoration: none;
      }
    }
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
}
</style>
