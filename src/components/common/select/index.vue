<template>
  <div
    class="select-component"
    @click="showList = true"
    v-click-outside="clickOutside"
  >
    <div class="select">
      <div class="select__active-select">
        {{ activeSelect || placeholder }}
      </div>
      <div class="select__icon">
        <IconTriangle />
      </div>
    </div>
    <div class="select-list-wrapper" v-if="showList">
      <ul class="select-list">
        <li
          class="select-item"
          v-for="item in data"
          :key="item.id"
          @click="setActiveSelect(item)"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import IconTriangle from "@/components/icons/triangle-icon";
import vClickOutside from "v-click-outside";

export default {
  name: "select-component",
  components: {
    IconTriangle,
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  props: {
    value: [String, Number, Object],
    data: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: "choose",
    },
  },
  data() {
    return {
      activeSelect: null,
      showList: false,
    };
  },
  methods: {
    clickOutside() {
      this.showList = false;
      this.$forceUpdate();
    },
    setActiveSelect(data) {
      this.activeSelect = data.title;
      this.showList = false;
      this.$forceUpdate();
      this.$emit("input", data);
    },
  },
};
</script>

<style lang="scss" scoped>
.select-component {
  position: relative;
  font-size: 18px;
  font-weight: $font-weight-medium;
  cursor: pointer;
  .select {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background: $color-grey;
    &-list-wrapper {
      position: absolute;
      padding: 10px 20px;
      background: $color-grey;
      width: 100%;
      border-top: 1px solid $color-light-black;
    }
    &-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    &-item {
      cursor: pointer;
    }
  }
}
</style>
