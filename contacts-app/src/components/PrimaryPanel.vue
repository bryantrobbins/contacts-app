<template>
    <div>
        <members-table v-if="isLoggedIn"></members-table>
    </div>
</template>
<script>
  import MembersTable from '@/components/MembersTable'

  export default {
    components: {
      MembersTable
    },
    computed: {
      isLoggedIn() {
        return this.$store.state.isLoggedIn
      },
    }
  }
</script>
<style>
</style>
