<template>
    <div class="login">
        <div v-if="isLoggedIn">
            <h2>Welcome, {{loggedInUser}}!</h2>
            <button @click="logout">Log Out</button>
        </div>
        <div v-else>
            <h2>Provide your email address</h2>
            <input v-model="addressProvided" @keyup.enter="login"/>
            <button @click="login">Log In</button>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'login',
    components: {},
    data() {
      return {
        addressProvided: ''
      }
    },
    computed: {
      isLoggedIn() {
        return this.$store.state.isLoggedIn
      },
      loggedInUser() {
        return this.$store.state.loggedInUser
      }
    },
    methods: {
      login() {
        this.$store.dispatch('logIn', this.addressProvided)
      },
      logout() {
        this.$store.dispatch('logOut')
      }
    }
  }
</script>
<style>
    .login {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        text-align: center;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>
