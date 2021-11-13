<template>
<div>
    <h1>{{email}}</h1>
    <h1>{{name}}</h1>
    <h1>{{post}}</h1>
    
</div>
    
</template>

<script>



export default {
    name: 'Profiled',
    props: {
        email: String,
        name: String,
        post: String
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

</style>