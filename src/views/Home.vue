<template>
    <div class="container">
        <form @submit="onSubmit">
            <input type="text" placeholder="Enter email address" name="email" v-model="email">
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
            user: Object,
            check: '',
            route: useRouter()
        }
    },
    methods: {
        onSubmit(e){
            e.preventDefault()
            const comp = this.email
            UserService.findUserByEmail(comp).then((response) => {
                this.user = response.data
                if(response.data === null){
                    alert("User not found in database")
                } else {
                    
                    console.log(this.user.id, this.user.firstName);
                    this.route.push({
                        path: `/profile/${this.user.id}`
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