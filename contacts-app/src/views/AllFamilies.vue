<template>
    <div class="about">
        <h2>This is the All Families Page</h2>
        {{families}}
    </div>
</template>
<script>
  export default {
    computed: {
      families() {
        return this.$store.state.families
      }
    },
    created() {
      this.$store.dispatch('updateFamilies')
    },
  }
</script>

