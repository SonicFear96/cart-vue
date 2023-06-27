<template>
  <div id="app">
    <Header />
    <main>
      <div class="main-content wrapper">
        <section class="menu-filter-wrapper">
          <MenuFilter />
        </section>
        <section class="catalog-wrapper">
          <div class="catalog-title-wrapper">
            <span class="catalog-title"> Bestsellers: </span>
            <span class="catalog-title title--number">34</span>
          </div>
          <ul class="catalog-list">
            <li
              v-for="(item, index) in products"
              :key="item.id"
              :class="['catalog-item', { wide: index === 2 }]"
            >
              <ProductCard :type="index === 2 ? 'wide' : ''" :data="item" />
            </li>
          </ul>
        </section>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header";
import Footer from "@/components/footer";
import MenuFilter from "@/components/menu-filter";
import ProductCard from "@/components/product-card";

import { mapActions } from "vuex";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    MenuFilter,
    ProductCard,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    ...mapActions({
      getProducts: "getProducts",
      getProductsFromCart: "getProductsFromCart",
    }),
  },
  async mounted() {
    this.products = await this.getProducts();
    this.$store.dispatch("getProductsFromCart");
  },
};
</script>

<style lang="scss">
#app {
  max-width: 1600px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  main {
    flex-grow: 1;
  }
  .menu-filter-wrapper {
    margin-top: 80px;
  }
  .catalog {
    &-wrapper {
      position: relative;
    }
    &-title {
      &-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
      }
      font-size: 40px;
      font-weight: $font-weight-bold;
      text-transform: uppercase;
    }
    &-list {
      margin-top: 120px;
      margin-bottom: 120px;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      align-items: flex-end;
      gap: 60px 20px;
    }
    &-item {
      width: calc(25% - 15px);
      &.wide {
        width: calc(50% - 15px);
      }
    }
  }
}
</style>
