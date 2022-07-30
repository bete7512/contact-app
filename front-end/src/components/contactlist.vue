<template>
  <div class="mx-20">
    <div>
      <button @click="addcontact" class=""><img src="../assets/add.png" alt=""></button>
      <div>add new contact</div>
    </div>
    <div class="space-y-4 flex flex-wrap">
      <div v-if="error">error</div>
      <div v-else-if="loading">loading....</div>
      <div v-else class="w-64 m-3 bg-slate-400 rounded-md overflow-hidden h-20 hover:shadow-md flex space-x-5 p-3 mt-3"
        v-for="contact of result.contactlist" :key="contact.id">
        <img class=" w-10 h-10  rounded-full shadow"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
          alt="Person" />
        <div>
          <div class="text-lg font-bold">{{ contact.name }}</div>
          <div class="text-sm text-gray-800">{{ contact.phone }}</div>
        </div>
        <div class="w-auto">
        </div>
        <div class=" justify-end ml-10 flex">
          <button @click="deletecontact(contact.id)"
            class="relative content-end  justify-end items-end text-3xl text-left"><img src="../assets/delete.png" alt="" class="h-10 rounded-md w-20"></button>
          <button @click="Editcontact(contact.id,contact.phone,contact.name)"
            class="relative content-end  justify-end items-end text-3xl text-left"><img src="../assets/edit.png" alt="" class="h-10 w-20"></button>
        </div>
      </div>
    </div>
  </div>
  <contactVue v-on:addnotify="addsuccessmodal = true" v-on:addcontact="isadd = false" v-if="isadd"></contactVue>
  <Delete :id="selectedid" v-on:deletenotify="deletesuccessmodal = true" v-on:canceldelete="isdelete = false"
    v-if="isdelete"></Delete>
  <Bottomright :notify=notify v-if="check()" v-on:success="disapear()"></Bottomright>
  <updatecontactVue  v-on:updatecontact="isedit = false" v-on:updatenotify="updatesuccefullmodal = true" :id="idcontact" :name="namephone" :phone="phoneedit" v-if="isedit"></updatecontactVue>
</template>
<script setup>
import emailverificationVue from './emailverification.vue';
import updatecontactVue from './updatecontact.vue';
import contactVue from './addcontact.vue';
import { ref, computed, onMounted } from 'vue';
import Bottomright from './bottomright.vue'
import Delete from './delete.vue';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
const isadd = ref(false)
const isdelete = ref(false)
const { error, loading, result } = useQuery(gql`
query MyQuery {
  contactlist {
    id
    name
    phone
  }
}
`, null, {
  pollInterval: 100,
})
const addcontact = () => {
  isadd.value = true
}
const updatesuccefullmodal = ref(false)
const deletesuccessmodal = ref(false)
const addsuccessmodal = ref(false)
const selectedid = ref(0)
const notify = ref('')
const deletecontact = (param) => {
  selectedid.value = param
  isdelete.value = true
}
const idcontact = ref('')
const namephone = ref('')
const phoneedit = ref('')
const isedit = ref(false)
const Editcontact = (id,phone,name)=>{
  idcontact.value = id,
  phoneedit.value = phone,
  namephone.value = name
  isedit.value = true
}
const check = () => {
  if (deletesuccessmodal.value) {
    notify.value = "contact deleted successfully"
    return true
  }
  else if (addsuccessmodal.value) {
    notify.value = "contact added successfully"
    return true
  }
  else if(updatesuccefullmodal.value){
    notify.value = "contact updated succefully"
    return true
  }
  else {
    return false
  }
}
const disapear = () => {
  if (deletesuccessmodal.value) {
    deletesuccessmodal.value = false
  }
  else if (addsuccessmodal.value) {
    addsuccessmodal.value = false
  }
  else if(updatesuccefullmodal.value){
    updatesuccefullmodal.value = false
  }
}
</script>
<style>
</style>