import { createStore } from "vuex"

export default createStore({
  state: {
    favorites: [],
  },
  getters: {},
  mutations: {
    addFavorites(state, data) {
      state.favorites.push(data)
    },
    removeFavorites(state, id) {
      const index = state.favorites.findIndex((obj) => obj.id === id)
      state.favorites.splice(index, 1)
    },
  },
  actions: {},
})
