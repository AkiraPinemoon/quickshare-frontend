
<script setup lang="ts">

import { ref } from "vue"

const d1 = ref<HTMLInputElement>();
const d2 = ref<HTMLInputElement>();
const d3 = ref<HTMLInputElement>();
const d4 = ref<HTMLInputElement>();
const d5 = ref<HTMLInputElement>();
const d6 = ref<HTMLInputElement>();

function cahngeCodeDigit(i: number) {
  switch (i) {
    case 1:
      if(d1.value) d1.value.value = d1.value.value.toUpperCase();
      if(d2.value) d2.value.value = "";
      d2.value?.focus();
      break;
    case 2:
      if(d2.value) d2.value.value = d2.value.value.toUpperCase();
      if(d3.value) d3.value.value = "";
      d3.value?.focus();
      break;
    case 3:
      if(d3.value) d3.value.value = d3.value.value.toUpperCase();
      if(d4.value) d4.value.value = "";
      d4.value?.focus();
      break;
    case 4:
      if(d4.value) d4.value.value = d4.value.value.toUpperCase();
      if(d5.value) d5.value.value = "";
      d5.value?.focus();
      break;
    case 5:
      if(d5.value) d5.value.value = d5.value.value.toUpperCase();
      if(d6.value) d6.value.value = "";
      d6.value?.focus();
      break;
    case 6:
      if(d6.value) d6.value.value = d6.value.value.toUpperCase();
      // TODO: open file
      break;
    default:
      break;
  }
}

</script>

<template>
  <div class="w-80 h-40 rounded bg-gradient-to-br from-blue-500 to-violet-600 flex flex-col place-items-center justify-center gap-1">
    <p class="w-64">Enter a Code</p>
    <div class="h-16 flex flex-row justify-center place-items-center gap-1">
      <input ref="d1" @input="cahngeCodeDigit(1);" placeholder="_" class="h-full w-10 border-white border-2 rounded bg-transparent text-3xl text-center placeholder:text-white" />
      <input ref="d2" @input="cahngeCodeDigit(2);" placeholder="_" class="h-full w-10 border-white border-2 rounded bg-transparent text-3xl text-center placeholder:text-white" />
      <input ref="d3" @input="cahngeCodeDigit(3);" placeholder="_" class="h-full w-10 border-white border-2 rounded bg-transparent text-3xl text-center placeholder:text-white" />
      <input ref="d4" @input="cahngeCodeDigit(4);" placeholder="_" class="h-full w-10 border-white border-2 rounded bg-transparent text-3xl text-center placeholder:text-white" />
      <input ref="d5" @input="cahngeCodeDigit(5);" placeholder="_" class="h-full w-10 border-white border-2 rounded bg-transparent text-3xl text-center placeholder:text-white" />
      <input ref="d6" @input="cahngeCodeDigit(6);" placeholder="_" class="h-full w-10 border-white border-2 rounded bg-transparent text-3xl text-center placeholder:text-white" />
    </div>
  </div>
</template>
