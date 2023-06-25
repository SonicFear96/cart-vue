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
            <button class="header-component__menu-item-button">
              Basket (2)
            </button>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import IconLogo from "@/components/icons/logo-icon";
export default {
  name: "header-component",
  components: {
    IconLogo,
  },
};
</script>

<style lang="scss">
.header-component {
  color: $color-black;

  &__wrapper {
    padding: 35px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid $color-light-gray;
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
    }
  }
}
</style>
