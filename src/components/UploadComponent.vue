
<script setup lang="ts">

import { ref } from 'vue';

const inputField = ref<HTMLInputElement>();

const hasFile = ref(false);

</script>

<template>
  <input @change="hasFile = true;" ref="inputField" type="file" class="hidden" />
  <div v-if="!hasFile" @click="inputField?.click()" class="w-80 h-40 rounded bg-gradient-to-br from-cyan-500 to-indigo-500 flex flex-col place-items-center justify-center gap-1 hover:from-cyan-600 hover:to-indigo-600">
    <p class="text-3xl">Upload a File</p>
    <p class="text-sm">drop here or click to select</p>
  </div>
  <div v-else class="w-80 h-40 rounded bg-gradient-to-br from-cyan-500 to-indigo-500 flex flex-col place-items-center justify-center gap-1">
    <p>Upload {{ inputField.files[0].name }}?</p>
  </div>
</template>
