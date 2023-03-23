
<script setup lang="ts">

import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();  
const id = ref(route.params.id);

</script>

<template>
  <h1>This is an download page for {{ id }}</h1>
</template>
