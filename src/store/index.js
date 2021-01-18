import 'es6-promise/auto'

import { createStore } from 'vuex'

const store = createStore ({
  state() {
    return {
      history: [
      ]
    }
  },
  mutations: {
    addItem(state, arg) {
      state.history = [...state.history, arg]
    }
  }
})

export default store