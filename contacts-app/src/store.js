import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    loggedInUser: undefined,
    isAdmin: false,
    members: [],
    isMemberDialogActive: false
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
    setMemberDialogActive(state) {
      state.isMemberDialogActive = true;
    },
    setMemberDialogInactive(state) {
      state.isMemberDialogActive = false;
    },
    setMembers(state, data) {
      state.members = data.members;
    }
  },
  actions: {
    logIn(context, address) {
      var admin = (address === 'bryan');
      context.commit('setLoggedIn', {loggedInUser: address, isAdmin: admin});
      context.dispatch('updateMembers');
    },
    logOut(context) {
      context.commit('setLoggedOut');
    },
    activateMemberDialog(context) {
      if (context.state.isLoggedIn) {
        context.commit('setMemberDialogActive');
      }
    },
    deactivateMemberDialog(context) {
      if (context.state.isLoggedIn) {
        context.commit('setMemberDialogInactive');
      }
    },
    saveMember(context) {
      if (context.state.isLoggedIn) {
        context.commit('setMemberDialogInactive');
      }
    },
    updateMembers(context) {
      var members = [];
      members.push(
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
        },
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
        });
      context.commit('setMembers', {members: members});
    }
  }
})
