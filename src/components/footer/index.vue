<template>
  <footer class="footer-component wrapper">
    <div class="footer-component__wrapper">
      <div class="footer-component__logo">
        <IconLogo />
      </div>
      <div class="footer-component__nav-wrapper">
        <a class="footer-component__nav-link" href="#">Copyright</a>
        <a class="footer-component__nav-link" href="#">Contacts</a>
      </div>
    </div>
  </footer>
</template>

<script>
import IconLogo from "@/components/icons/logo-icon";
export default {
  name: "footer-component",
  components: {
    IconLogo,
  },
};
</script>

<style lang="scss">
.footer-component {
  background: $color-black-second;
  color: $color-white;
  &__wrapper {
    padding-top: 43px;
    padding-bottom: 45px;
    display: flex;
    justify-content: space-between;
  }
  &__nav {
    &-wrapper {
      display: flex;
      gap: 40px;
    }
    &-link {
      font-size: $font-size-default;
      font-weight: $font-weight-medium;
      color: $color-white;
      text-decoration: none;
    }
  }
}
</style>
