<template>
    <div>
        <button class="button field is-light is-left" @click="activateMemberDialog">
            <b-icon icon="account-plus" ></b-icon>
            <span>Add Member</span>
        </button>
        <member-dialog></member-dialog>
        <b-table :data="members">
            <template slot-scope="props">
                <b-table-column field="name" label="Name">{{props.row.name}}</b-table-column>
                <b-table-column field="email" label="Email">{{props.row.email}}</b-table-column>
                <b-table-column field="phone" label="Phone">{{props.row.phone}}</b-table-column>
                <b-table-column field="dna" label="DNA">{{props.row.dna}}</b-table-column>
                <b-table-column label="Edit">
                    <b-icon icon="account-edit">
                    </b-icon>
                </b-table-column>
            </template>
        </b-table>
    </div>
</template>
<script>
  import MemberDialog from '@/components/MemberDialog'
  export default {
    components: {
        MemberDialog
    },
    data() {
      return {}
    },
    computed: {
      members() {
        return this.$store.state.members
      },
    },
    methods: {
      activateMemberDialog() {
        this.$store.dispatch('activateMemberDialog')
      }
    }
  }
</script>

