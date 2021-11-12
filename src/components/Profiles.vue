<template>
    <div class="container">
        <table class="table table-striped">
            <thead>
                <th>Employee ID</th>
                <th>name</th>
            </thead>
            <tbody>
                <tr v-for="user in users" v-bind:key="user.id">
                    <td> {{ user.id }} </td>
                    <td> {{ user.email }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import UserService from '../services/UserService'

export default {
    name: 'Profiles',
    data(){
        return {
            users: []
        }
    },
    methods: {
        getAllUsers(){
            UserService.getAllUsers().then((response) => {
                this.users = response.data
            })
        }
    },
    created() {
        this.getAllUsers()
        
    }
}
</script>

<style scoped>

</style>