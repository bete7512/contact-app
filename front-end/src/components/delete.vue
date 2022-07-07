<template>
  <div class="overlay top-0 left-0 bottom-0 right-0 flex items-center justify-center">
    <div class="space-y-80 h-40 w-80 bg-white rounded-md">
      <div class="inline-flex w-auto  border-zinc-900 h-auto justify-center">
        <div class="space-y-2 p-2 h-60">
          <div class="flex justify-end"><button @click="discard"
              class="font-bold text-4xl hover:bg-red-700 h-10 w-10 rounded-md">x</button></div>
          <div>are you sure you want to delete? </div>
          <div class="flex space-x-2">
            <button @click="deletemust"
              class="w-24 h-10 bg-red-500 rounded-md text-white hover:bg-red-800">delete</button>
            <button @click="discard"
              class="w-24 h-10 bg-sky-600 rounded-md text-white hover:bg-emerald-400">cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useMutation } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { onMounted } from 'vue';
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
  id: Number,
})
const emit = defineEmits(['canceldelete','deletenotify'])

const deletemust = (event) => {
  deletecontact();
  emit('deletenotify')
  emit('canceldelete')
}
const discard = (event) => {
  emit('canceldelete')

}
const { mutate: deletecontact } = useMutation(gql`
mutation deletecontact($id:Int!) {
  delete_contactlist_by_pk(id: $id) {
    id
  }
}
 `, () => ({
  variables: {
    id: props.id
  }
}))




</script>
<style scoped>
.overlay {
  position: fixed;

  background-color: rgb(0, 0, 0, 0.3);
  z-index: 100;
}
</style>