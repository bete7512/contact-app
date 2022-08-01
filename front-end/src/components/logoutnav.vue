<template>
    <div class="w-screen bg-gray-50 flex space-x-0 h-20 border-gray-200">
        <div class="justify-start flex w-1/2 p-4 bg-gray-50 "><button @click="sidebarshow">|||</button></div>
        <div class="flex justify-end items-end w-1/2  rounded-md bg-gray-50 ">
            <div class="inline-flex mr-3">
                <router-link to='/'>
                    <div>
                        <div >
                            <button class="hover:bg-gray-300 rounded-md text-sm  h-14 p-4"
                                @click="user.logout">Logout
                            </button>
                        </div>
                        <div>{{ user.username }}</div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script setup>
import apolloclient from '../apollo';
import { defineProps, defineEmits } from 'vue';
import { useStore } from '../store/store';
const removetoken = () => {
    window.localStorage.removeItem("Apollotoken");
    apolloclient.cache.restore();

}
const user = useStore()
console.log("hey am here")
const props = defineProps({
    username: String
})
const emit = defineEmits(['sidebarshaow'])
const sidebarshow = (event) => {
    emit('sidebarshaow')
}
</script>
<style>
</style>