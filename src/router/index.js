import { createRouter, createWebHistory } from 'vue-router'
import ProfileUser from '../views/ProfileUser.vue'
import Home from '../views/Home.vue'
import Posts from '../views/Posts.vue'


const routes = [
    {
        path: '/profile/:user',
        name: 'ProfileUser',
        component: ProfileUser
    },
     {
         path: `/`,
         name: 'Home',
         component: Home
     },
     {
        path: `/posts`,
        name: 'Posts',
        component: Posts
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router