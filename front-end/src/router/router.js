import { createRouter,createWebHistory } from "vue-router";
import Home from '../components/home.vue'
import Login from '../components/login.vue'
import Contactlist from '../components/contactlist.vue'
import dashboard from '../components/dashbaord.vue'
import signup from '../components/signup.vue'
import { useStore } from '../store/store.js';
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
        path:'/login',
        name:'signup',
        component:signup
    },
    {
        path:'/dashboard',
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
});
router.beforeEach(async (to) =>{
    const publicPages = ['/','/login','/signup',];
    const authRequired = !publicPages.includes(to.path);
    const auth = useStore();
    if (authRequired && !auth.user) {
        auth.returnUrl = to.fullPath;
        return '/login';
    }
});
export {router};