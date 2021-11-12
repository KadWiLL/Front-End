<template>
    <form @submit="onSubmit">
        <div class="form-control">
            <label for="">Make Post</label>
            <input type="text" name="text" v-model="id" placeholder="Enter User ID">
        </div>
        <div class="form-control">
            <label for="">Write Post here</label>
            <input type="textarea" name="day" v-model="post" placeholder="Write Post">
        </div>
        <div class="form-control">
            <button class="btn btn-block">Save Post</button>
        </div>
    </form>
</template>

<script>
    

    export default {
        name: 'MakePost',
        components:{},
        data(){
            return {
                post: '',
                id: ''
            }
        },
        methods: {
            onSubmit(e){
                e.preventDefault()

                const newPost = {
                    post: this.post,
                    id: this.id
                }

                this.$emit('add-post', newPost)

                this.id = ''
                this.post = ''
            }
        }
    }
</script>