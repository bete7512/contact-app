import { defineStore } from 'pinia'
import { loginqueries,signupqueries } from '../tools/queries'
import { provideApolloClient } from '@vue/apollo-composable';
import apolloClient from './apolloclient'
import { router } from '../router/router'

provideApolloClient(apolloClient);
export const useStore = defineStore("user", {
    state: () => ({
        emailconfirm:false,
        isauthenticated: false,
        counter: 200,
        returnUrl: null,
        user: {}
    }),
    actions: {
        async signup(name,username,email,password){
            const response = await apolloClient.mutate({
                mutation:signupqueries,
                variables:{
                    username:username,
                    email:email,
                    name:name,
                    password:password
                }
            })
            if(response.data.register.success){
                
            }
            
        },
        async login(username, password){
            const result = await apolloClient.mutate({
                mutation: loginqueries,
                variables: {
                    username: username,
                    password: password,
                }
            })
            window.localStorage.setItem("Apollotoken", result.data.signin.token);
            // console.log(window.localStorage.getItem("Apollotoken"))
            if (window.localStorage.getItem("Apollotoken")) {
                this.user = {
                    username: username,
                    token: window.localStorage.getItem("Apollotoken")
                }
                this.isauthenticated = true,
                    router.push(this.returnUrl || '/dashboard');
            }
        },
        logout() {
            window.localStorage.removeItem('Apollotoken');
            this.user = null;
            localStorage.removeItem('user');
            router.push('/login');
        }
    },
    getters: {
        doublecount: (state) => state.counter * 2
    }
})

