<template>
  <div class="fixed  place-items-center justify-center">
    <div class=" h-36 w-60 bg-green-600 rounded-md">
        <div class="text-white inline-flex p-4 py-2 mt-2"> {{notify}}
        </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, defineProps, defineEmits } from 'vue';
const props = defineProps({
  notify:String
})
const emit = defineEmits(['emailsentsuccess'])
onMounted(() => {
  setTimeout(() => {
    emit('emailsentsuccess')
  }, 1000);
})
</script>
<style>
</style>