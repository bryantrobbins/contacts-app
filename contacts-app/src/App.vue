<template>
    <div id="app">
        <login></login>
        <primary-panel></primary-panel>
    </div>
</template>
<script>
  import Login from '@/components/Login.vue'
  import PrimaryPanel from '@/components/PrimaryPanel.vue'

  export default {
    components: {
      Login,
      PrimaryPanel,
    }
  }
</script>
<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>
