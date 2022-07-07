<template>
  <logoutnavVue v-on:sidebarshaow="sidebarshow = true" v-on:username="ygdsiugo"></logoutnavVue>
  <div class="flex mt-2 space-x-2 mx-3 h-auto">
    <div class="w-60 ml-0">
      <sidebarVue v-if="sidebarshow" v-on:sidebardisapear="sidebarshow = false"></sidebarVue>
    </div>
    <div class="w-full  h-screen  text-black rounded-md">
      <router-view></router-view>
    </div>
    <contactVue v-on:addcontact="isadd = false" v-if="isadd"></contactVue>
    <Delete v-on:canceldelete="isdelete = false" v-if="isdelete"></Delete>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import logoutnavVue from './logoutnav.vue';
import contactVue from './addcontact.vue';
import { ref } from 'vue';
import Delete from './delete.vue';
import sidebarVue from './sidebar.vue';
const route = useRoute()
const isadd = ref(false)
const isdelete = ref(false)
const sidebarshow = ref(true)

const addcontact = () => {
  isadd.value = true
  console.log(username);
}
const selectedid = ref(0)
const deletecontact = (param) => {
  isdelete.value = true
  console.log(param)
}
</script>
<style>
</style>