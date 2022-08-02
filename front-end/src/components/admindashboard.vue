<template>
    <div class="flex">
        <div class="sidebar w-72 rounded-sm pt-8 justify-start h-screen bg-gray-200">
            <div class="flex items-center px-2 space-x-3 ">
                <img src="https://img.freepik.com/free-photo/photo-lovely-young-lady-has-curly-afro-hair-smiles-gently-wears-earrings-white-jumper-being-satisfied-with-getting-new-job-position-has-pleasant-talk-with-colleague-stands-pink-wall_273609-27916.jpg?size=626&ext=jpg&ga=GA1.2.1143210034.1657986480"
                    alt="back" class="rounded-full  w-16 h-16">
                <div class="items-center align-middle">
                    <div><strong>Bete Goshme</strong></div>
                    <div class="">kibebe@gmail.com</div>
                </div>
            </div>
            <ul class="space-y-4 border-t-2 mt-10 ">
                <li
                    class="flex items-center p-3 font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 20H11V13H22V20ZM9 20H2V13H9V20ZM22 11H2V4H22V11Z" fill="black" />
                    </svg>

                    <span class="ml-3 text-xl">
                        <button>
                            <router-link :to="{ name: 'Home' }">dashboard</router-link>
                        </button>
                    </span>
                </li>
                <li
                    class="flex items-center p-3 font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-chat-left-dots-fill" viewBox="0 0 16 16">
                        <path
                            d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>

                    <span class="ml-3 text-xl">
                        <button>
                            <router-link :to="{ name: 'Home' }">contact</router-link>
                        </button></span>
                </li>
            </ul>
            <ul class="mt-60 border-t-2">
                <li
                    class="flex items-center p-3 font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-settings">
                        <circle cx="12" cy="12" r="3"></circle>
                        <path
                            d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                        </path>
                    </svg>

                    <span class="ml-3 text-xl">
                        <button>
                            <router-link :to="{ name: 'dashboard' }">setting</router-link>
                        </button>
                    </span>
                </li>
                <li
                    class="flex items-center p-3 font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                    <span class="ml-3 text-xl">
                        <button>
                            <router-link :to="{ name: 'dashboard' }">Notification</router-link>
                        </button>
                    </span>
                </li>
            </ul>
            <ul class="border-t-2 flex space-x-3 pt-2 px-10 bottom-4 absolute ">
                <div class="  flex justify-center items-center ">
                    <button class="flex items-center">
                        <span >logout</span>
                        <div class="h-10 w-10 ">
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24">
                                <path
                                    d="M17,2H7C5.3,2,4,3.3,4,5v6h8.6l-2.3-2.3c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l4,4c0.4,0.4,0.4,1,0,1.4c0,0,0,0,0,0l-4,4c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4l2.3-2.3H4v6c0,1.7,1.3,3,3,3h10c1.7,0,3-1.3,3-3V5C20,3.3,18.7,2,17,2z" />
                            </svg>
                        </div>
                    </button>
                </div>
            </ul>
        </div>
        <div class="ml-4 pt-8 bg-slate-400 w-full h-screen px-3">
            <div class="h-16 w-full pl-5 bg-red-100 flex space-x-6 justify-start rounded items-center">
                <div class=""> Bete Kibebe </div>
                <div> / </div>
                <strong> my projects </strong>
            </div>
            <div class="pt-3">
                <strong>My porsonal projects</strong>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>
<style>
</style>