import { createRouter,createWebHistory } from "vue-router";
import Home from '../components/home.vue'
import Login from '../components/login.vue'
import Contactlist from '../components/contactlist.vue'
import dashboard from '../components/dashbaord.vue'
import signup from '../components/signup.vue'
import { useStore } from '../store/store.js';
import adminlogin from '../components/adminlogin.vue'
import admindashboard from '../components/admindashboard.vue'
const routes  = [
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/dashboard',
        name:'admindashboard',
        component:admindashboard
    },
    {
        path:'/login',
        name:'Login',
        component:Login
    },
    {
        path:'/signup',
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
    {
        path:'/adminlogin',
        name:'adminlogin',
        component:adminlogin
    }
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});
router.beforeEach(async (to) =>{
    const publicPages = ['/','/login','/signup','/adminlogin'];
    const authRequired = !publicPages.includes(to.path);
    const auth = useStore();
    if (authRequired && !auth.user) {
        auth.returnUrl = to.fullPath;
        return '/login';
    }
});
export {router};