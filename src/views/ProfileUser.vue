<template>
    <Profiled :proid="proid"/>
</template>

<script>
import { useRoute } from 'vue-router';
import Profile from '../components/Profiled'
export default {
    name: 'ProfileUser',
    props: {
        
    },
    data(){
        return {
            proid: '5'
        }
    },
    components: Profile,
    mounted(){
         const route = useRoute()
         this.proid = route.params.user
         console.log("params from profile user: " + route.params.user);
    }
}
</script>

<style scoped>

</style>