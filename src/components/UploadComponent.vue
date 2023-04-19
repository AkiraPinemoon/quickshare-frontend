
<script setup lang="ts">

import { ref } from 'vue';
import api from '@/services/api';

// the hidden input element use to pick the file
const inputField = ref<HTMLInputElement>();

// stores the current status of the upload process
enum statusEnum {
  NoFile,
  HasFile,
  Uploading,
  Hosting,
}
const status = ref(statusEnum.NoFile);

// runs when a file is picked
function updateFile() {
  status.value = statusEnum.HasFile;
  if( inputField.value?.files ) filename.value = inputField.value.files[0].name;
}

// stores the picked files name
const filename = ref("");
// stores the upload progress as %
const progress = ref(0);
// stores the assigned file if when upload is done
const fileId = ref<string|null>(null);
// stores the token to remove the file or keep it online
const token = ref<string|null>(null);

// stores interval for keep online funtion
var keepOnlineInterval: any = null;

// uploads file and gets assigned id
async function upload() {
  if(!inputField.value?.files) return;
  status.value = statusEnum.Uploading;

  // uploads file and updates progress UI
  const data = await api.uploadFile(
    inputField.value.files[0],
    (progressEvent: any) => {
      if(!progressEvent.total) return;
      const { loaded, total } = progressEvent; 
      progress.value = Math.floor((loaded * 100) / total);
    },
  );

  if(!data) return;

  fileId.value = data.id;
  token.value = data.token;

  status.value = statusEnum.Hosting;
  keepOnlineInterval = setInterval(keepOnline, 10000);
}

// sends keep online message
function keepOnline() {
  if(!fileId.value) return;
  if(!token.value) return;
  api.keepOnline(fileId.value, token.value);
}

// sends unload message and stops sendung keep online messages
function unload() {
  if (!fileId.value) return;
  if (!token.value) return;
  clearInterval(keepOnlineInterval);
  api.unloadFile(fileId.value, token.value);
  status.value = statusEnum.NoFile;
}

</script>

<template>
  <input @change="updateFile()" ref="inputField" type="file" class="hidden" />
  <div class="text-white">
    <div v-if="status === statusEnum.NoFile" @click="inputField?.click()" class="w-80 h-40 rounded bg-gradient-to-br from-cyan-500 to-indigo-500 flex flex-col place-items-center justify-center gap-1 hover:from-cyan-600 hover:to-indigo-600">
      <p class="text-3xl">Upload a File</p>
      <p class="text-sm">drop here or click to select</p>
    </div>

    <div v-if="status === statusEnum.HasFile" class="w-80 h-40 rounded bg-gradient-to-br from-cyan-500 to-indigo-500 flex flex-col place-items-center justify-center gap-1">
      <p class="max-w-[260px]">Upload "{{ filename }}"?</p>
      <button @click="upload();" class="bg-green-500 w-[260px] hover:bg-green-600 flex place-items-center justify-center rounded p-1">
        <img alt="Access Icon" src="@/assets/uploadIcon.svg" class="w-10 h-10" />
      </button>
    </div>

    <div v-if="status === statusEnum.Uploading" class="w-80 h-40 rounded bg-gradient-to-br from-cyan-500 to-indigo-500 flex flex-col place-items-center justify-center gap-1">
      <p class="max-w-[260px]">Upload "{{ filename }}"?</p>
      <div class="bg-indigo-600 w-[260px] h-12 flex place-items-center justify-center rounded p-1">
        <p>{{ progress }}%</p>
      </div>
    </div>

    <div v-if="status === statusEnum.Hosting" class="w-80 h-40 rounded bg-gradient-to-br from-cyan-500 to-indigo-500 flex flex-col place-items-center justify-center gap-1">
      <p v-if="fileId" class="max-w-[260px]">
        Upload Complete!<br />
        Id: {{ fileId }}<br />
        <button @click="unload();">Click here to stop hosting file.</button>
      </p>
      <p v-else>Upload Failed!</p>
    </div>
  </div>
</template>
