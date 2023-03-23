
<script setup lang="ts">

import { useRoute } from 'vue-router';
import { ref } from 'vue';
import api from '@/services/api'

const route = useRoute();  
const id: string = route.params.id.toString();

function download() {
  const link = api.getFileLink(id);
  if(link == null) return;

  fetch(link)
    .then(response => response.blob())
    .then(blob => {
      var url = window.URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = "";
      document.body.appendChild(a);
      a.click();    
      a.remove();
    });
}

const accessible = api.doesIdExist(id);
download();

</script>

<template>
  <div v-if="accessible">
    <h1>This is an download page for {{ id }}</h1>
    <button @click="download();">if the download desn't start automatically click here</button>
  </div>
  <div v-else>
    <h1>Can't find file</h1>
  </div>
</template>
