<template>
    <div>
        <MakePost @add-post="addPost"/>
        <Profiled
             
            :name="users.firstName" 
            :email="users.email" 
            :post="users.posts"
            :uid="users.id"
            @delete-post="deletePost"
            @update-likes="updateLikes"
        />   
    </div>
    
</template>

<script>
import { useRoute } from 'vue-router';
import Profiled from '../components/Profiled'
import UserService from '../services/UserService'
import MakePost from '../components/MakePost.vue'

export default {
    name: 'ProfileUser',
    props: {
    },
    data(){
        return {
            users: Object,
            route: useRoute()
        }
    },
    components: {
        Profiled,MakePost
    },
    methods: {
        getProfileId(){
            const id = this.route.params.user
            UserService.getProfile(id).then((response) => {
                this.users = response.data
            })
        },

        addPost(post){
            const id = this.route.params.user
            UserService.makePost2(id, post).then(response => {
                this.users.posts = [...this.users.posts, response.data]
            })
        },

        updateLikes(id){
            UserService.updateLikes(id).then(() => {
                this.users.posts = [...this.users.posts]
            })
        },

        deletePost(id){
            
            UserService.deletePost(id).then(() => {
                this.users.posts = this.users.posts.filter((deletedPost) => {
                    deletedPost.id !== id
                })
            })
        },
    },
    async created(){
        this.getProfileId()
        
    },
    mounted(){
    
    }
}
</script>

<style scoped>

</style>