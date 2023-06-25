<template>
  <div id="app">
    <Header />
    <div class="main-content wrapper">
      <section class="menu-filter-wrapper">
        <MenuFilter />
      </section>
      <section class="catalog-wrapper">
        <ul class="catalog-list">
          <li class="catalog-item">
            <ProductCard />
          </li>
        </ul>
      </section>
    </div>
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
}
</style>
