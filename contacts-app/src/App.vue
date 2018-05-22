<template>
    <div id="app">
        <login></login>
        <br/>
        <nav-bar></nav-bar>
        <!--<router-view/>-->
    </div>
</template>
<script>
  import NavBar from '@/components/NavBar.vue'
  import Login from '@/components/Login.vue'

  export default {
    components: {
      NavBar,
      Login
    }
  }
</script>
<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
