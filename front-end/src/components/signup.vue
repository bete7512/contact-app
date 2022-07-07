<template>
    <div class="overlay top-0 left-0 bottom-0 right-0 flex items-center justify-center">

        <div class=" bg-white rounded-md ">
            <div class="inline-flex w-auto  h-auto border-zinc-900 justify-center">
                <div class="space-y-5 p-5">
                    <div class="flex justify-end"><button @click="signupclose"
                            class="font-bold text-4xl hover:bg-red-700 h-10 w-10 rounded-md">x</button></div>
                  
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
                        <input type="password" id="name" v-model="passwordi" name="name"
                            class="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out">
                    </div>
                    <div class="relative mb-4">
                        <label for="full-name" class="leading-7 text-sm text-gray-600">confirm password</label>
                        <input type="password" id="name" v-model="passwordii" name="name"
                            class="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out">
                    </div>
                    <div>
                        <div v-if="failure" class="text-red-600"> {{error}}</div>

                        <button @click="registersuccessfully" class="text-white bg-indigo-500 rounded-md border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 text-lg"> register</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useRoute,useRouter } from 'vue-router';
import gql from 'graphql-tag';
import { ref } from 'vue';
import { useMutation, useQuery } from '@vue/apollo-composable';
import { defineEmits, defineProps } from 'vue';
const router = useRouter()
const route = useRoute()
const email = ref('')
const username = ref('')
const passwordi = ref('')
const passwordii = ref('')
const success = ref('')
const failure = ref(false)
const error = ref('')
const emit = defineEmits(['signupclose'])
const signupclose = (event) => {
    emit("signupclose")
}
const { mutate: Register,onDone} = useMutation(
    gql`
mutation Register($email: String!, $username: String!, $password: String!, $confirmpassword: String!) {
  register(objects: { email:$email, username: $username, password: $password,confirmpassword: $confirmpassword}) {
    success
  }
}

`, () => ({
    variables: {
        email: email.value,
        username: username.value,
        password: passwordi.value,
        confirmpassword: passwordii.value
    }
})
)
onDone((result)=>{
success.value = result.data.register.success
})
const registersuccessfully = ()=>{
     Register()
    onDone();
    if (!success.value){
        failure.value = true
        error.value = "you are not registered successfully"
    }
    else{
         router.push({
                name: 'Login',
                query: {
                    ...route.query
                }
            })
    }
}
</script>

<style scoped>
.overlay {
    position: fixed;

    background-color: rgb(0, 0, 0, 0.3);
    z-index: 100;
}
</style>