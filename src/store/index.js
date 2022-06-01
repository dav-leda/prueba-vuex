import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({

  strict: true,

  state: {
    counter: 0,
    loggedIn: false
  },

  getters: {
    counter: state => state.counter,
    loggedIn: state => state.loggedIn,
    doubleCounter: state => state.counter * 2
  },

  mutations: {  
    DECREMENT: state => {
      if (state.counter > 0) state.counter--
    },
    INCREMENT: state => {
      state.counter++
    },
    LOGIN: state => {
      state.loggedIn = !state.loggedIn
    }
  },

  // Las actions pueden ser asincronicas, las mutations no.
  actions: {
    decrement ({ commit }) {
      commit('DECREMENT')
    },

    increment ({ commit }) {
      commit('INCREMENT')
    },

    login ({ commit }) {
      setTimeout(() => {
        commit('LOGIN')
      }, 100)
    }
  }
})


export default store