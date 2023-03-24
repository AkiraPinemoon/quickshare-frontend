<script setup lang="ts">
import UploadComponent from "@/components/UploadComponent.vue"
import AccessComponent from "@/components/AccessComponent.vue"
</script>

<template>
  <main class="text-purple-800 flex flex-col place-items-center gap-5 p-5">
    <div class="flex flex-col gap-1 w-5/6 max-w-2xl">
      <h1 class="text-2xl font-medium">About the Service:</h1>
      <p>
        Quickshare aims to provide a clutter-free way to quickly and easily send files to another device.
      </p>
    </div>

    <div class="flex flex-wrap gap-1 justify-around place-items-center text-purple-800">
      <UploadComponent />
      <p>or</p>
      <AccessComponent />
    </div>

    <div class="flex flex-col gap-1 w-5/6 max-w-2xl">
      <h1 class="text-2xl font-medium">How it works:</h1>
      <p>
        Just upload your file and share it either by typing in the 5-digit code on the receiving device; scanning the QR-Code or sharing the link. When the sender closes their connection, the file will be deleted from the server.
      </p>
    </div>
  </main>
</template>
