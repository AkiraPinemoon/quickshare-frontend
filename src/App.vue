<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="flex justify-between place-items-center bg-gradient-to-r from-cyan-500 to-violet-600 p-1 pr-3 text-white">
    <RouterLink to="/" class="flex place-items-center">
      <img alt="Vue logo" src="@/assets/logo.svg" class="w-16 h-16" />

      <div class="">
        <h1 class="text-3xl">Quickshare</h1>
        <p class="text-xs">The easy way to share files</p>
      </div>
    </RouterLink>
    
    <RouterLink to="/about" class="text-right">  
      <p class="text-xs">developed and hosted by</p>
      <h1 class="text-lg">Akira Pinemoon</h1>
    </RouterLink>
  </header>

  <RouterView />
</template>
