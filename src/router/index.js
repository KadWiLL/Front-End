import { createRouter, createWebHistory } from 'vue-router'
import ProfileUser from '../views/ProfileUser.vue'
//import Home from '../views/Home.vue'


const routes = [
    {
        path: '/profile/:user',
        name: 'ProfileUser',
        component: ProfileUser
    },
    // {
    //     path: `/`,
    //     name: 'Home',
    //     component: Home
    // },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router