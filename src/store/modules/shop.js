import shop from '../../api/shop'
// initial state
const state = {
  shops: []
}

// getters
const getters = {}

// actions
const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      commit('setProducts', products)
    })
  }
}

// mutations
const mutations = {
  setProducts (state, products) {
    state.shops = products
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
