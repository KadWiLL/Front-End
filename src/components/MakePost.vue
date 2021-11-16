<template>
    <div class="make-post">
            <div class="make-post-header">
                <div class="post-img">
                    <img class="img" src="https://cdn.pixabay.com/photo/2020/10/05/08/04/boys-5628502_960_720.jpg" 
                    alt="profile image"
                    >
                </div>
            </div>
            <div class="make-post-body">
                <form @submit="onSubmit">
                    <div class="form-control">
                        <input type="text" name="text" v-model="text" placeholder="Make a Post">
                        <button class="btn">Post</button>
                    </div>
                </form>
            </div>
        </div>
</template>

<script>
    

    export default {
        name: 'MakePost',
        components:{},
        data(){
            return {
                text: '',
            }
        },
        methods: {
            onSubmit(e){
                e.preventDefault()

                const newPost = {
                    text: this.text
                }

                this.$emit('add-post', newPost)

                this.text = ''
            }
        }
    }
</script>

<style scoped>
    .img{
        width: 60%;
        border-radius: 50%;
        
    }

    .make-post{
        display: flex;
    }

    .make-post-header{
        width: 20%;
    }

    .make-post-body{
        width: 80%;
    }

    form{
        border: none;
    }

    input{
        width: 80%;
        height: 100px;
        margin-bottom: 15px;
    }

    input ::placeholder{
        padding: 15px;
    }

    .btn{
        background-color: black;
        color: white;
        font-weight: bold;
        font-family: 'Courier New', Courier, monospace;
        width: 50%;
        padding: 10px;
    }
</style>