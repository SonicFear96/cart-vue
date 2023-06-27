<template>
  <div class="menu-filter-component">
    <form>
      <div class="menu-filter-wrapper">
        <div class="menu-filter__item">
          <span class="menu-filter__title">Search</span>
          <CommonInput v-model="form.search" />
        </div>
        <div class="menu-filter__item">
          <span class="menu-filter__title">Product category</span>
          <CommonSelect
            v-model="form.category"
            :data="category"
            placeholder="choose sneakers"
          />
        </div>
        <div class="menu-filter__item">
          <span class="menu-filter__title">Sale</span>
          <CommonSelect
            v-model="form.sale"
            :data="sale"
            placeholder="choose sale"
          />
        </div>
        <div class="menu-filter__item">
          <span class="menu-filter__title">Sorting</span>
          <CommonSelect
            v-model="form.sorting"
            :data="sorting"
            placeholder="choose sorting"
          />
        </div>
        <div class="menu-filter__item">
          <CommonButton @click="sendFilters()"> Apply </CommonButton>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import CommonInput from "@/components/common/input";
import CommonButton from "@/components/common/button";
import CommonSelect from "@/components/common/select";
export default {
  name: "menu-filter-component",
  components: {
    CommonInput,
    CommonButton,
    CommonSelect,
  },
  data() {
    return {
      category: [
        {
          id: 1,
          title: "Sneakers",
        },
        {
          id: 2,
          title: "Boots",
        },
      ],
      sale: [
        {
          id: 1,
          title: "Full Price",
        },
        {
          id: 2,
          title: "Sale",
        },
      ],
      sorting: [
        {
          id: 1,
          title: "Price high to low",
          value: "asc",
        },
        {
          id: 2,
          title: "Price low to hihg",
          value: "desc",
        },
      ],
      form: {
        search: "",
        category: "",
        sale: "",
        sorting: "",
      },
    };
  },
  methods: {
    sendFilters() {
      this.$emit("sendFilters", this.form);
    },
  },
};
</script>

<style lang="scss">
.menu-filter-component {
  .menu-filter {
    &-wrapper {
      display: flex;
      justify-content: space-between;
      gap: 20px;
    }
    &__title {
      font-size: $font-size-default;
      font-weight: $font-weight-medium;
    }
    &__item {
      width: 20%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      gap: 20px;
    }
  }
}
</style>
