<template>
     <div class="w-full flex h-14 justify-end bg-blue-400 mt-0 rounded-md">
        <div class="space-x-5 text-white mr-4 text-center inline-flex items-center font-semibold text-sm">
            <!-- <div class=" inline-flex w-24 text-white">
                <router-link to="/"><button class="hover:bg-black w-14 h-14">Home</button></router-link>
            </div> -->
            <div class=" inline-flex">
                <button class="hover:bg-black w-14 h-14" @click="sign">Signup</button>
            </div>
              <div class=" inline-flex">
                <button class="hover:bg-black w-14 h-14" @click="log">Signin</button>
            </div>

        </div>
    </div>
    <div>
    </div>
    <div>{{hello}}</div>
</template>
<script setup>
import { defineProps,defineEmits,toRefs } from 'vue';
const props = defineProps({
  hello: String
})
const emit = defineEmits(['login','signup','delete'])
const log = (event)=>{
    emit("login")
}
const sign = (event)=>{
    emit("signup")
}
</script>
<style>
</style>