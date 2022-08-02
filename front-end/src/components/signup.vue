<template>

 <div class="overlay top-0 left-0 bottom-0 right-0 flex items-center justify-center">
        <section class="">
    <div class=" items-center px-5 py-12 lg:px-20">
        <div class="flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0">
            <div class="mt-8">
                <div class="mt-6">
                    <form action="#" method="POST" class="space-y-6">
                                                <div>
                            <label for="name" class="block text-sm font-medium text-neutral-600">Name</label>
                            <div class="mt-1">
                                <input id="name" name="email" type="text" autocomplete="name" required="" placeholder="your name" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300">
                            </div>
                        </div>
                                                <div>
                            <label for="email" class="block text-sm font-medium text-neutral-600">Email</label>
                            <div class="mt-1">
                                <input id="email" name="email" type="email" autocomplete="email" required="" placeholder="your email" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300">
                            </div>
                        </div>
                                                <div>
                            <label for="username" class="block text-sm font-medium text-neutral-600">Username</label>
                            <div class="mt-1">
                                <input id="username" name="username" type="text" autocomplete="username" required="" placeholder="username" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300">
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
                                <a href="#" class="font-medium text-blue-600 hover:text-blue-500 px-2"> Forgot your password? </a>
                            </div>
                        </div>

                        <div>
                            <button type="submit" class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Sign up</button>
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

    <!-- <div class="overlay top-0 left-0 bottom-0 right-0 flex items-center justify-center">
        <div class=" bg-white rounded-md ">
            <div class="inline-flex w-auto  h-auto border-zinc-900 justify-center">
                <div class="space-y-5 p-5">
                    <div class="flex justify-end">
                        <router-link to="/"><button class="font-bold text-4xl hover:bg-red-700 h-10 w-10 rounded-md">x</button>
                        </router-link>
                    </div>                    <div class="relative mb-4">
                        <label for="full-name" class="leading-7 text-sm text-gray-600">name</label>
                        <input type="text" id="name" v-model="name" name="name" class="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out">                </div>
                    <div class="relative mb-4">
                        <label for="full-name" class="leading-7 text-sm text-gray-600">Email</label>
                        <input type="text" id="name" v-model="email" name="name"
                            class="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out">
                    </div>
                    <div class="relative mb-4">
                        <label for="full-name" class="leading-7 text-sm text-gray-600">username</label>
                        <input type="text" id="name" v-model="username" name="name"
                            class="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out">
                    </div>
                    <div class="relative mb-4">
                        <label for="full-name" class="leading-7 text-sm text-gray-600">password</label>
                        <input type="password" id="name" v-model="password" name="name"
                            class="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out">
                    </div>
                    <div class="relative mb-4">
                        <label for="full-name" class="leading-7 text-sm text-gray-600">confirm password</label>
                        <input type="password" id="name" v-model="passwordii" name="name"
                            class="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out">
                    </div>
                    <div>
                        <div v-if="failure" class="text-red-600"> {{ error }}</div>
                        <button @click="registersuccessfully" class="text-white bg-indigo-500 rounded-md border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 text-lg">register</button>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import { useMutation,} from '@vue/apollo-composable';
import { useStore } from '../store/store.js';
const router = useRouter()
const route = useRoute()
const email = ref('')
const name = ref('')
const username = ref('')
const password = ref('')
const passwordii = ref('')
const success = ref('')
const failure = ref(false)
const error = ref('')
const signupemailmodal = ref(false)
const user = useStore()
const signupsuccessfull = ref(false)
const registersuccessfully = () => {
    user.signup(
        name.value,
       username.value,
       email.value,
       password.value
    )
    
    // Register()
    // if (!success.value) {
    //     failure.value = true
    //     error.value = "you are not registered successfully"
    // }
    // else {
    //     signupemailmodal.value = true
    //     emit("signupclose")
    //     // router.push({
    //     //     name: 'Login',
    //     //     query: {
    //     //         ...route.query
    //     //     }
    //     // })
    // }
}
</script>
<style scoped>
.overlay {
    position: fixed;
    background-color: rgb(0, 0, 0, 0.3);
    z-index: 100;
}
</style>