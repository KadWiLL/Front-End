<template>
<div class="hero">
        <div class="post" v-for="posts in post" v-bind:key="posts.id">
            <div class="post-header">
                <div class="post-img">
                    <img class="img" src="https://cdn.pixabay.com/photo/2020/10/05/08/04/boys-5628502_960_720.jpg" 
                    alt="profile image"
                    >
                </div>
            </div>
            <div class="post-body">
                <div class="post-body-header">
                    <h3>{{name}}</h3>
                    <h5>{{email}}</h5>
                    <h5> - 1h ago</h5>
                </div>
                <div class="post-body-text">
                    <h1>{{posts.text}}</h1>
                </div>
                <div class="post-body-footer">
                    <i class="far fa-heart"> {{ posts.likes}}</i>
                    <i class="far fa-thumbs-down"> {{ posts.dislikes}}</i>
                    <i @dblclick="$emit('delete-post', posts.id)" class="far fa-trash-alt"></i>
                </div>
            </div>
            
        </div>
</div>
    
</template>

<script>

export default {
    name: 'Profiled',
    components: {
        
    },
    props: {
        email: String,
        name: String,
        post: String,
        uid: String
    },
    data(){
        return {
            
            
        }
        
    },
    methods: {
        
    },
    created() {
       
       
    },
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
    width: 60%;
    border-radius: 50%;
    padding: 5px;
    border: 5px solid black;
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
    color: pink;
    font-size: 25px;
    margin-right: 30px;
}

.fa-thumbs-down{
    color: blue;
    font-size: 25px;
    margin-right: 30px;
}

.fa-trash-alt{
    color: red;
    font-size: 25px;
    margin-right: 30px;
}

.fa:hover{
    cursor: pointer;
}


</style>