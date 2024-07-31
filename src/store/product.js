import axios from 'axios';

export default {
  namespaced: true,
  state() {
    return {
      products: [],
      productDetail: {}
    }
  },
  getters: {},
  mutations: {
    setProductData(state, payload) {
      state.products = payload;
    },
    setProductDetail(state, payload) {
      state.productDetail = payload;
    },
    setNewProduct(state, payload) {
      state.products.push.payload;
    }
  },
  actions: {
    async getProductData({commit}) {
      const databaseUrl = 'https://final-pro-64b73-default-rtdb.firebaseio.com/';

      try {
        const { data } = await axios.get(`${databaseUrl}products.json`);
        const arr = [];
        for (let key in data) {
          arr.push({id: key, ...data[key]});
        }
        commit("setProductData", arr);
      } catch (err) {
        console.log(err);
      }
    },
    async getProductDetail({commit}, payload) {
      const databaseUrl = 'https://final-pro-64b73-default-rtdb.firebaseio.com/';

      try {
        const { data } = await axios.get(`${databaseUrl}products/${payload}.json`);
          commit("setProductDetail" , data)
      } catch (err) {

      }
    },
    async addNewProduct({ commit, rootState }, payload) {
      const newData = {
        ...payload,
        username: rootState.auth.userLogin.username,
        createdAt: Date.now(),
        likes: ["null"],
        userId: rootState.auth.userLogin.userId,
      };

      const databaseUrl = 'https://final-pro-64b73-default-rtdb.firebaseio.com/';

      try {
        const { data } = await axios.post(`${databaseUrl}products.json?auth=${rootState.auth.token}`, newData);

        commit("setNewProduct", { id: data.name, ...newData });
      } catch(err) {
        console.log(err);
      }
    },
    async deleteProduct({ dispatch, rootState }, payload) {
      const databaseUrl = 'https://final-pro-64b73-default-rtdb.firebaseio.com/';

      try {
        const { data } = await axios.delete(`${databaseUrl}products/${payload}.json?auth=${rootState.auth.token}`);
        await dispatch("getProductData");
      } catch(err) {
        console.log(err);
      }
    },
    async updateProduct({ dispatch, rootState }, { id, newProduct }) {
      const databaseUrl = 'https://final-pro-64b73-default-rtdb.firebaseio.com/';

      const newData = {
        ...newProduct,
        username: rootState.auth.userLogin.username,
        createdAt: Date.now(),
        likes: ["null"],
        userId: rootState.auth.userLogin.userId,
      };

      try {
        const { data } = await axios.put(`${databaseUrl}products/${id}.json?auth=${rootState.auth.token}`, newData);
        await dispatch("getProductData");
      } catch(err) {
        console.log(err);
      }
    }
  }
}
