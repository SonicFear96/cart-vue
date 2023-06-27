import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const URL = "https://63060fc2697408f7edd1b405.mockapi.io/";

export default new Vuex.Store({
  state: () => ({
    isCartFilled: false,
    cartPositions: [],
  }),
  getters: {
    getCartPositions(state) {
      return state.cartPositions;
    },
  },
  mutations: {
    setCartFilled(state, value) {
      state.isCartFilled = value;
    },
    setCartPositions(state, data) {
      state.cartPositions = data;
    },
  },
  actions: {
    async getProducts() {
      const result = await fetch(`${URL}/products`);
      return result.json();
    },
    setProductsToCart({ commit }, data) {
      if (data.length) {
        commit("setCartFilled", true);
      } else {
        commit("setCartFilled", false);
      }
      localStorage.setItem("cart", JSON.stringify(data));
      commit("setCartPositions", data);
    },
    getProductsFromCart({ commit }) {
      const cartPositions = JSON.parse(localStorage.getItem("cart")) || [];
      commit("setCartPositions", cartPositions);
      commit("setCartFilled", !!cartPositions.length);
    },
    removeAllProductsFromCart({ commit }) {
      commit("setCartFilled", false);
      localStorage.removeItem("cart");
      commit("setCartPositions", []);
    },
  },
  modules: {},
});
