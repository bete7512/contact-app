<template>
    <div class="overlay top-0 left-0 bottom-0 right-0 flex items-center justify-center">
        <section class="">
            <div class=" items-center px-5 py-12 lg:px-20">
                <div
                    class="flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0">
                    <div class="mt-8">
                        <div class="mt-6">
                            <form action="#" method="POST" class="space-y-6">
                                <div>
                                    <label for="email"
                                        class="block text-sm font-medium text-neutral-600">username</label>
                                    <div class="mt-1">
                                        <input id="email" name="email" type="email" autocomplete="email" required=""
                                            placeholder="username"
                                            class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300">
                                    </div>
                                </div>

                                <div class="space-y-1">
                                    <label for="password" class="block text-sm font-medium text-neutral-600"> Password
                                    </label>
                                    <div class="mt-1">
                                        <input id="password" name="password" type="password"
                                            autocomplete="current-password" required="" placeholder="Your Password"
                                            class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300">
                                    </div>
                                </div>

                                <div class="flex items-center justify-between">
                                    <div class="flex items-center">
                                        <input id="remember-me" name="remember-me" type="checkbox"
                                            placeholder="Your password"
                                            class="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500">
                                        <label for="remember-me" class="block ml-2 text-sm text-neutral-600"> Remember
                                            me </label>
                                    </div>

                                    <div class="text-sm">
                                        <a href="#" class="font-medium text-blue-600 hover:text-blue-500 px-2"> Forgot
                                            your password? </a>
                                    </div>
                                    <div class="text-sm">
                                        <router-link to="/adminlogin" class="font-medium text-blue-600 hover:text-blue-500 px-2">admin
                                        </router-link>
                                    </div>
                                </div>

                                <div>
                                    <button type="submit"
                                        class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Sign
                                        in</button>
                                </div>
                            </form>
                            <div class="relative my-4">
                                <div class="absolute inset-0 flex items-center">
                                    <div class="w-full border-t border-gray-300"></div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <!-- <section class="">
    <div class=" items-center px-5 py-12 lg:px-20">
        <div class="flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0">
            <div class="mt-8">
                <div class="mt-6">
                    <form action="#" method="POST" class="space-y-6">
                        <div>
                            <label for="email" class="block text-sm font-medium text-neutral-600"> Email address </label>
                            <div class="mt-1">
                                <input id="email" name="email" type="email" autocomplete="email" required="" placeholder="Your Email" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300">
                            </div>
                        </div>

                        <div class="space-y-1">
                            <label for="password" class="block text-sm font-medium text-neutral-600"> Password </label>
                            <div class="mt-1">
                                <input id="password" name="password" type="password" autocomplete="current-password" required="" placeholder="Your Password" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300">
                            </div>
                        </div>

                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" placeholder="Your password" class="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500">
                                <label for="remember-me" class="block ml-2 text-sm text-neutral-600"> Remember me </label>
                            </div>

                            <div class="text-sm">
                                <a href="#" class="font-medium text-blue-600 hover:text-blue-500"> Forgot your password? </a>
                            </div>
                        </div>

                        <div>
                            <button type="submit" class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Sign in</button>
                        </div>
                    </form>
                    <div class="relative my-4">
                        <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-t border-gray-300"></div>
                        </div>

                    </div>
                  
                </div>
            </div>
        </div>
    </div>
</section> -->
    <!-- <div class="overlay top-0 left-0 bottom-0 right-0 flex items-center justify-center">
        <div class="space-y-80 bg-white rounded-md">
            <div class="inline-flex w-auto  border-zinc-900 h-auto justify-center">
                <div class="space-y-3 p-5">
                    <div class="flex justify-end">
                        <router-link to="/"><button class="font-bold text-4xl hover:bg-red-700 h-10 w-10 rounded-md">x</button>
                        </router-link>
                    </div>
             

                    <div class="relative mb-4">
                        <label for="full-name" class="leading-7 text-sm text-gray-600">username</label>
                        <Field id="name" type="text" name="name" v-model="username"
                            class="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out" />
                    </div>
                    <div class="relative mb-4">
                        <label for="full-name" class="leading-7 text-sm text-gray-600">password</label>
                        <Field type="password" id="name" name="name" v-model="password"
                            class="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out" />
                    </div>
                    <div class="space-x-3"><input type="checkbox"><label for="">remember me</label></div>
                    <div v-if="failure" class="text-red-600"> {{ error }}</div>
                    <div class="flex space-x-3"><button class="w-auto p-1 h-10 rounded-md text-sky-600">forgot your
                            password</button>
                        <button @click="">middl{{ user.counter }}</button>
                        <button @click="onsubmit" class="w-24 h-10 bg-sky-600 rounded-md hover:bg-sky-800">
                            login
                        </button>
                    </div>
          
                </div>
            </div>
        </div>
    </div> -->
</template>
<script setup>
import { Form, Field } from 'vee-validate'
import { storeToRefs } from 'pinia'
import { useStore } from '../store/store.js';

import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const router = useRouter()
const route = useRoute()
const emit = defineEmits(['loginclose'])
const loginclose = (event) => {
    emit("loginclose")
}
const verify = ref(true)
const failure = ref(false)
const error = ref('')
const user = useStore()
const username = ref('')
const password = ref('')
// const { user: { username, password } } = storeToRefs(user)
const onsubmit = () => {
    console.log("something");
    // console.log(user.login(username.value,password.value))
    user.login(username.value, password.value)
    console.log("after login");
}
const token = window.localStorage.getItem("Apollotoken");
const validate = () => {
    if (!username.value || !password.value) {
        failure.value = true
        error.value = "username passwords shouldnot be empty"
    }
    else {
        // Login();
        if (!window.localStorage.getItem("Apollotoken")) {
            failure.value = true
            error.value = "server error"
        }
        else {
            // user.username = username.value
            // user.isauthenticated = true
            // user.token = window.localStorage.getItem("Apollotoken")
            router.push({
                name: 'dashboard',
                params: {
                    id: "dashboard",
                    name: username.value,
                    params: {
                        refetch: true
                    }
                },
                query: {
                    ...route.query
                }
            })
        }
    }
}
</script>
<style scoped>
.overlay {
    position: fixed;
    background-color: rgb(0, 0, 0, 0.3);
}
</style>