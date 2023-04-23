
<script setup lang="ts">

import { useRoute } from 'vue-router';
import api from '@/services/api'

import { ref, onBeforeMount } from 'vue';

// get id from route
const route = useRoute();  
const id: string = route.params.id.toString();

// downloads the file
async function download() {
  const link = api.getFileLink(id);
  if(link == null) return;

  const filename = await api.getFilename(id);

  fetch(link)
    .then(response => response.blob())
    .then(blob => {
      var url = window.URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();    
      a.remove();
    });
}

// stores if the file exists
const accessible = ref(false);
onBeforeMount(async () => {
  accessible.value = await api.doesIdExist(id);
  if(accessible.value) download();
})

// automatically start download on load

</script>

<template>
  <div v-if="accessible" class="flex flex-col gap-1 justify-around place-items-center p-10">
    <h1>This is a download page for {{ id }}</h1>
    <button @click="download();">if the download desn't start automatically click here</button>
  </div>
  <div v-else class="flex flex-col gap-1 justify-around place-items-center p-10">
    <h1>Can't find file</h1>
  </div>
</template>
