
<script setup lang="ts">

import { ref } from "vue";
import api from "@/services/api";

// refs to the id digit inputs
const d1 = ref<HTMLInputElement>();
const d2 = ref<HTMLInputElement>();
const d3 = ref<HTMLInputElement>();
const d4 = ref<HTMLInputElement>();
const d5 = ref<HTMLInputElement>();
const d6 = ref<HTMLInputElement>();

// stores if input id is a valid file
const accessible = ref(false);

// stores the id
var id = "";

// selects next digit input field and updates id
async function cahngeCodeDigit(i: number) {
  switch (i) {
    case 1:
      if(d1.value) d1.value.value = d1.value.value.toUpperCase();
      d2.value?.focus();
      break;
    case 2:
      if(d2.value) d2.value.value = d2.value.value.toUpperCase();
      d3.value?.focus();
      break;
    case 3:
      if(d3.value) d3.value.value = d3.value.value.toUpperCase();
      d4.value?.focus();
      break;
    case 4:
      if(d4.value) d4.value.value = d4.value.value.toUpperCase();
      d5.value?.focus();
      break;
    case 5:
      if(d5.value) d5.value.value = d5.value.value.toUpperCase();
      d6.value?.focus();
      break;
    case 6:
      if(d6.value) d6.value.value = d6.value.value.toUpperCase();
      break;
    default:
      break;
  }

  // update id
  id = "";
  id += d1.value?.value;
  id += d2.value?.value;
  id += d3.value?.value;
  id += d4.value?.value;
  id += d5.value?.value;
  id += d6.value?.value;

  // check if id is valid#
  if(id.length != 6) accessible.value = false;
  else accessible.value = await api.doesIdExist(id);
}

// clears input digit
function clearCodeDigit(i: number) {
  switch (i) {
    case 1:
      if(d1.value) d1.value.value = "";
      break;
    case 2:
      if(d2.value) d2.value.value = "";
      break;
    case 3:
      if(d3.value) d3.value.value = "";
      break;
    case 4:
      if(d4.value) d4.value.value = "";
      break;
    case 5:
      if(d5.value) d5.value.value = "";
      break;
    case 6:
      if(d6.value) d6.value.value = "";
      break;
    default:
      break;
  }
}

</script>

<template>
  <div class="w-80 h-40 rounded text-white bg-gradient-to-br from-blue-500 to-violet-600 flex flex-col place-items-center justify-center gap-1">
    <p class="w-64">Enter a Code</p>
    <div class="h-16 flex flex-row justify-center place-items-center gap-1">
      <input ref="d1" @click="clearCodeDigit(1);" @input="cahngeCodeDigit(1);" placeholder="_" class="h-full w-10 border-white border-2 rounded bg-transparent text-3xl text-center placeholder:text-white" />
      <input ref="d2" @click="clearCodeDigit(2);" @input="cahngeCodeDigit(2);" placeholder="_" class="h-full w-10 border-white border-2 rounded bg-transparent text-3xl text-center placeholder:text-white" />
      <input ref="d3" @click="clearCodeDigit(3);" @input="cahngeCodeDigit(3);" placeholder="_" class="h-full w-10 border-white border-2 rounded bg-transparent text-3xl text-center placeholder:text-white" />
      <input ref="d4" @click="clearCodeDigit(4);" @input="cahngeCodeDigit(4);" placeholder="_" class="h-full w-10 border-white border-2 rounded bg-transparent text-3xl text-center placeholder:text-white" />
      <input ref="d5" @click="clearCodeDigit(5);" @input="cahngeCodeDigit(5);" placeholder="_" class="h-full w-10 border-white border-2 rounded bg-transparent text-3xl text-center placeholder:text-white" />
      <input ref="d6" @click="clearCodeDigit(6);" @input="cahngeCodeDigit(6);" placeholder="_" class="h-full w-10 border-white border-2 rounded bg-transparent text-3xl text-center placeholder:text-white" />
    </div>

    <router-link :to="'/download/' + id" v-if="accessible" class="bg-green-500 w-[260px] hover:bg-green-600 flex place-items-center justify-center rounded p-1">
      <img alt="Access Icon" src="@/assets/accessIcon.svg" class="w-10 h-10" />
    </router-link>
    <div v-else class="bg-indigo-600 w-[260px] flex place-items-center justify-center rounded p-1">
      <img alt="No Access Icon" src="@/assets/noAccessIcon.svg" class="w-10 h-10" />
    </div>
    
  </div>
</template>
