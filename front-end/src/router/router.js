import { createRouter,createWebHistory } from "vue-router";
import Home from '../components/home.vue'
import Login from '../components/login.vue'
import Contactlist from '../components/contactlist.vue'
import dashboard from '../components/dashbaord.vue'
const routes  = [
    {
        path:'/',
        name:'Home',
        component:Home
    },
   
    {
        path:'/login',
        name:'Login',
        component:Login
    },
   
    {
        path:'/:id',
        name:'dashboard',
        component:dashboard,
        children:[
            {
                path:'contact-list',
                name:'Contactlist',
                component:Contactlist,
            },
        ]
    },
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})
export {router};