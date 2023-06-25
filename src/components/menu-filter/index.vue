<template>
  <div class="menu-filter-component">
    <div class="menu-filter__item">
      <span class="menu-filter__title">Search</span>
      <CommonInput />
    </div>
    <div class="menu-filter__item">
      <span class="menu-filter__title">Product category</span>
      <CommonButton type="light"> Sneakers </CommonButton>
    </div>
    <div class="menu-filter__item">
      <span class="menu-filter__title">Sale</span>
      <CommonButton type="light"> Bestsellers </CommonButton>
    </div>
    <div class="menu-filter__item">
      <CommonButton> Apply </CommonButton>
    </div>
  </div>
</template>

<script>
import CommonInput from "@/components/common/input";
import CommonButton from "@/components/common/button";
export default {
  name: "menu-filter-component",
  components: {
    CommonInput,
    CommonButton,
  },
};
</script>

<style lang="scss">
.menu-filter-component {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  .menu-filter {
    &__title {
      font-size: $font-size-default;
      font-weight: $font-weight-medium;
    }
    &__item {
      width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      gap: 20px;
    }
  }
}
</style>
