<template>
  <div id="app">
    <Header />
    <main>
      <div class="main-content wrapper">
        <section class="menu-filter-wrapper">
          <MenuFilter />
        </section>
        <section class="catalog-wrapper">
          <ul class="catalog-list">
            <li
              v-for="index in 7"
              :key="index"
              :class="['catalog-item', { wide: index === 3 }]"
            >
              <ProductCard :type="index === 3 ? 'wide' : ''" />
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
export default {
  name: "App",
  components: {
    Header,
    Footer,
    MenuFilter,
    ProductCard,
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
    &-list {
      margin-top: 120px;
      margin-bottom: 120px;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
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
