<template>
    <div class="sidebar w-60 rounded-sm ml-0 justify-start h-screen bg-gray-50">
        <div class="flex items-end justify-end mr-5"> <button class="p-5" @click="disapear"><img
                    src="../assets/back.png" alt="back" class="w-10 h-10"></button></div>
        <ul class="space-y-10 ">
            <li
                class="flex items-center p-2 font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                <span class="ml-3 text-xl"><button>
                        <router-link :to="{ name: 'dashboard', params: { id: 'dashboard' } }">dashboard</router-link>
                    </button></span>
            </li>
            <li
                class="flex items-center p-2 font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                <span class="ml-3 text-xl"><button>
                        <router-link :to="{ name: 'Contactlist' }">contact</router-link>
                    </button></span>
            </li>
            <li
                class="flex items-center p-2 font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                <span class="ml-3 text-xl"><button>tags</button></span>
            </li>
            <li
                class="flex items-center p-2 text-xl font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                <span class="ml-3"><button>setting</button></span>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { defineEmits, defineProps } from 'vue';
const emit = defineEmits(['sidebardisapear'])
const disapear = (event) => {
    emit('sidebardisapear')
}
</script>
<style>
.sidebar {
    top: 0;
}
</style>