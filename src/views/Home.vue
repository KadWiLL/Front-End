<template>
    <div class="container">
        <form @submit="onSubmit" action="/profile/{{user}}">
            <input type="text" placeholder="Enter Id number" name="user" v-model="user">
            <button class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
import UserService from '../services/UserService'
import {useRouter} from 'vue-router'

export default {
    name: 'Home',
    Components: {
        
    },
    data(){
        return {
            user: '',
            route: useRouter()
        }
    },
    methods: {
        onSubmit(e){
            e.preventDefault()

            const id = this.user
            UserService.getProfile(id).then((response) => {
                if(response.data === null){
                    alert("User does not exist")
                } else {
                    this.route.push({
                    path: `/profile/${id}`
                    })
                }
            })
        }
    }
}
</script>

<style scoped>
.container{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

form{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

</style>