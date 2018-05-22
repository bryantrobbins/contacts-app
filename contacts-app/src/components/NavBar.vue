<template>
    <div>
        <div v-if="isLoggedIn">
            <router-link to="/myfamily">My Family</router-link>
            |
            <router-link to="/allfamilies">All Families</router-link>
            |
            <router-link to="/managefamilies" v-if="isAdmin">Manage Families</router-link>
            <router-view/>
        </div>

    </div>
</template>

<script>
  export default {
    name: 'nav-bar',
    computed: {
      isLoggedIn() {
        return this.$store.state.isLoggedIn
      },
      isAdmin() {
        return this.$store.state.isAdmin
      },
      loggedInUser() {
        return this.$store.state.loggedInUser
      }
    }
  }
</script>
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
