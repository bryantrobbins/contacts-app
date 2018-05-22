import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    loggedInUser: undefined,
    isAdmin: false,
    families: []
  },
  mutations: {
    setLoggedIn(state, data) {
      state.isLoggedIn = true;
      state.isAdmin = data.isAdmin;
      state.loggedInUser = data.loggedInUser;
    },
    setLoggedOut(state) {
      state.isLoggedIn = false;
      state.isAdmin = false;
      state.loggedInUser = undefined;
    },
    setFamilies(state, data) {
      state.families = data.families
    }
  },
  actions: {
    logIn(context, address) {
      var admin = (address === 'bryan');
      context.commit('setLoggedIn', {loggedInUser: address, isAdmin: admin});
    },
    logOut(context) {
      context.commit('setLoggedOut');
    },
    updateFamilies(context) {
      var families = [];
      families.push({
        id: 'family-1',
        name: 'Robbins',
        members: [
          {
            name: "Bryan Robbins",
            email: "bryan1@XXXX",
            phone: "8888888888",
            dna: 'mens-1'
          },
          {
            name: "Mrs Robbins",
            email: "cmy@XXXX",
            phone: "9999999999",
            dna: 'none'
          }
        ]
      });

      families.push({
        id: 'family-2',
        name: 'Smith',
        members: [
          {
            name: "John Smith",
            email: "john1@XXXX",
            phone: "7777777777",
            dna: 'mens-1'
          },
          {
            name: "Jane Smith",
            email: "jane1@XXXX",
            phone: "7777777777",
            dna: 'womens-1'
          }
        ]
      });

      context.commit('setFamilies', {families: families});
    }
  }
})
