<script setup lang="ts">
</script>

<template>
  <main class="text-purple-800 flex flex-col place-items-center gap-5 p-5">
    <div class="flex flex-col gap-1 w-5/6 max-w-2xl">
      <h1 class="text-2xl font-medium">About the Service:</h1>
      <p>
        Quickshare aims to provide a clutter-free way to quickly and easily send files to another device.
      </p>
    </div>

    <div class="flex flex-wrap gap-1 justify-around text-white">
      <div class="w-80 h-40 rounded bg-gradient-to-br from-cyan-500 to-indigo-500">test</div>
      <div class="w-80 h-40 rounded bg-gradient-to-br from-blue-500 to-violet-600">test</div>
    </div>

    <div class="flex flex-col gap-1 w-5/6 max-w-2xl">
      <h1 class="text-2xl font-medium">How it works:</h1>
      <p>
        Just upload your file and share it either by typing in the 5-digit code on the receiving device; scanning the QR-Code or sharing the link. When the sender closes their connection, the file will be deleted from the server.
      </p>
    </div>

    <div class="flex gap-1 w-5/6 portrait:flex-col max-w-2xl">
      <div class="flex flex-col gap-1">
        <h1 class="text-2xl font-medium">Statistics:</h1>
        <p>
          Total data uploaded: 5,34GB<br />
          Number of files transferred: 358
        </p>
      </div>
      <div class="bg-red-200 grow h-20 rounded-lg p-3">
        Stats
      </div>
    </div>
  </main>
</template>
