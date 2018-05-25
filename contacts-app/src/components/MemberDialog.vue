<template>
    <div>
        <b-modal :active="isMemberDialogActive" :onCancel="cancel" has-modal-card>
            <!--<modal-form v-bind="formProps"></modal-form>-->
            <button class="button field is-dark" @click="save">
                <b-icon icon="content-save"></b-icon>
                <span>Save Member</span>
            </button>
            <br />
            <button class="button field is-danger">
                <b-icon icon="account-remove"></b-icon>
                <span>Delete Member</span>
            </button>
        </b-modal>
    </div>
</template>
<script>
  export default {
    data() {
      return {
      }
    },
    computed: {
      members() {
        return this.$store.getters.members
      },
      isLoggedIn() {
        return this.$store.state.isLoggedIn
      },
      isMemberDialogActive() {
        return this.$store.state.isMemberDialogActive
      },
    },
    methods: {
      save() {
        this.$store.dispatch('saveMember')
      },
      cancel() {
        this.$store.dispatch('deactivateMemberDialog')
      }
    }
  }
</script>

