<template>
    <div class="hero">
        <div class="post" v-for="post in posts" v-bind:key="post.id">
            <div class="post-header">
                <div class="post-img">
                    <img class="img" src="https://cdn.pixabay.com/photo/2020/10/05/08/04/boys-5628502_960_720.jpg" 
                    alt="profile image"
                    >
                </div>
            </div>
            <div class="post-body">
                <div class="post-body-header">
                    <h3>{{post.user.firstName}}</h3>
                    <h5>{{post.user.email}}</h5>
                    <h5> - 1h ago</h5>
                </div>
                <div class="post-body-text">
                    <h1>{{post.text}}</h1>
                </div>
                <div class="post-body-footer">
                    <i class="far fa-heart"> {{ post.likes}}</i>
                    <i class="far fa-thumbs-down"> {{ post.dislikes}}</i>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import UserService from '../services/UserService.js'

export default {
    name: 'Posts',
    components: {

    },
    data(){
        return{
            posts: [],
            date: Math.abs((new Date().getTime() / 1000).toFixed(0))
        }
    },
    methods: {
        getPosts(){
            UserService.getAllPosts().then((response) => {
                this.posts = response.data
            })
        }
    },
    created(){
        this.getPosts()
    }
}
</script>

<style scoped>

.hero{
    width: 100%;
}

.post{
    display: flex;
    border-top: 0.5px solid grey;
    border-bottom: 0.5px solid grey;
}

.post-header{
    width: 20%;
}

.post-body{
    width: 80%;
}

.img{
    width: 80%;
    border-radius: 50px;
}

.post-body-header{
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.post-body-header h3{
    font-weight: bold;
    margin-right: 10px;
}

.post-body-header h5{
    opacity: 0.5;
    margin-right: 5px;
}

.post-body-text{
    padding-bottom: 10px;
}

.fa-heart{
    color: red;
    font-size: 25px;
    margin-right: 30px;
}

.fa-thumbs-down{
    color: blue;
    font-size: 25px;
    margin-right: 30px;
}

</style>