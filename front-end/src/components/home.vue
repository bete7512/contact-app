<template>
  <Nav v-on:signup="issignup = true" v-on:login="islogin = true" class="main fixed"></Nav>
  <div
    class="relative bg-cyan-900 min-h-screen w-full text-white inline-flex mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
    <div class="max-w-xl  mx-auto lg:max-w-screen-xl">
      <div class="mb-16 lg:max-w-lg lg:mb-0">
        <div class="max-w-xl mb-6">
          <div>
            <p
              class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-teal-accent-400">
              contact
            </p>
          </div>
          <h2
            class="max-w-lg mb-6 font-sans text-3xl  tracking-tight text-white sm:text-4xl italic font-extrabold sm:leading-none">
            Simple web based contact application<br class="hidden md:block" />
            <h1 class="inline-block text-white italic">Well Come to my Miniproject </h1>
          </h2>
          <p class="text-base text-white md:text-lg">
            This project is done in frontend I used to vue js, csstailwind, vite, for backend I used nodejs,express
            js,hasura graphql engine,docker for containerization of postgress database and hasura graphql engine to run
            in port 8080
          </p>
        </div>
        <div class="flex items-center ">
          <button
            class="inline-flex items-center bg-blue-900 justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
            Get started




            <div>
              {{user.counter}}
              <button @click="increment()">increment</button>
            </div>
          </button>
        </div>
      </div>
    </div>

  </div>
  
  <!-- <loginVue v-if="islogin" v-on:loginclose="islogin = false"></loginVue> -->
  <!-- <Signup v-if="issignup" v-on:signupclose="issignup = false "></Signup> -->
  <emailverificationVue v-if="signupemailmodal" v-on:emailsentsuccess="signupemailmodal = true" :notify="success">
  </emailverificationVue>
</template>
<script setup>
import { storeToRefs } from 'pinia'

import { useStore } from '../store/store';
import emailverificationVue from './emailverification.vue';
import { ref } from 'vue';
import Nav from './nav.vue';
import loginVue from './login.vue';
import Signup from './signup.vue'
import { defineProps, defineEmits } from 'vue';
const islogin = ref(false)
const user = useStore()
const signupemailmodal = ref(false)
const issignup = ref(false)
const increment = ()=>{
  console.log(user.counter)
  user.increment();
}
const emit = defineEmits(['login', 'signup', 'delete'])
</script>
<style>
.main {
  position: fixed;
}
</style>