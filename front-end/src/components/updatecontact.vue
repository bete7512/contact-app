<template>

  <div class="overlay top-0 left-0 bottom-0 right-0 flex items-center justify-center">
    <div class="space-y-80 h-80 w-80 bg-white rounded-md">
      <div class="inline-flex w-auto  border-zinc-900 h-auto justify-center">
        <div class="space-y-3 p-5">
            <div>update contact</div>
         <div class="flex justify-end"><button @click="discard"
              class="font-bold text-4xl hover:bg-red-700 h-10 w-10 rounded-md">x</button></div>
            <div class="justify-start items-start text-sm text-gray-600 text-left">name
              <input type="text"   v-model="name"
                class="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out">
            </div>
         
          <div class="mb-4 text-left">
            <div  class="leading-7 text-sm text-gray-600">phone</div>
            <input type="text" v-model="phone"
              class="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out">
          </div>
          <div class="flex space-x-3">
            <button @click="updatecontact" class="w-24 h-10 bg-sky-600 rounded-md text-white hover:bg-sky-800">save</button>

            <button @click="discard"
              class="w-24 h-10 bg-sky-600 rounded-md text-white hover:bg-sky-800">cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useMutation, useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag';
import { defineEmits,defineProps } from 'vue';
// const name = ref('')
// const phone = ref('')

const props = defineProps({
  id: Number,
  phone:String,
  name:String
})
const { mutate: updatecontactbyid } = useMutation(gql`
mutation MyMutation($id: Int!, $phone: String="", $name: String="") {
  update_contactlist_by_pk(pk_columns: {id: $id}, _set: {name: $name, phone: $phone}) {
    id
  }
}

`, () => ({
  variables: {
    id:props.id,
    name: props.name,
    phone: props.phone
  },
  }))


const emit = defineEmits(['updatecontact','updatenotify'])
const isupdate = (event)=>{
  emit("updatecontact")
  emit('updatenotify')
}
const updatecontact =()=>{
  updatecontactbyid();
  isupdate();
}
const discard = () => {
    // phone.value = ''
    emit('updatecontact');
}
</script>
<style scoped>
.overlay {
  position: fixed;

  background-color: rgb(0, 0, 0, 0.3);
  z-index: 100;
}
</style>