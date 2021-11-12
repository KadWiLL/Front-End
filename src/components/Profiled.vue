<template>
    <h1>{{proid}}</h1>
</template>

<script>
import UserService from '../services/UserService'


export default {
    name: 'Profiled',
    props: {
        proid: String
    },
    data(){
        return {
            users: Object,
            profileId: '',
            
        }
        
    },
    methods: {
        getProfileId(){
            const id = this.proid
            UserService.getProfile(id).then((response) => {
                this.users = response.data
            })
        }
    },
    created() {
        console.log("passed data: " + this.proid);
    },
}
</script>

<style scoped>

</style>