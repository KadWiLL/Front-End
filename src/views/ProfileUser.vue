<template>
    <div>
        <Profiled 
            :name="users.firstName" 
            :email="users.email" 
            :post="users.posts[0].text"
        />   
    </div>
    
</template>

<script>
import { useRoute } from 'vue-router';
import Profiled from '../components/Profiled'
import UserService from '../services/UserService'

export default {
    name: 'ProfileUser',
    props: {
    },
    data(){
        return {
            users: Object
        }
    },
    components: {
        Profiled,
    },
    methods: {
        getProfileId(){
            const route = useRoute()
            const id = route.params.user
            UserService.getProfile(id).then((response) => {
                this.users = response.data
            })
        }
    },
    created(){
        this.getProfileId()
    },
    mounted(){
    
    }
}
</script>

<style scoped>

</style>