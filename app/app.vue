<script setup lang="ts">
const error = useError()
</script>

<template>
  <NuxtLayout v-if="!error">
    <NuxtPage />
  </NuxtLayout>
  <NuxtPage v-else />
</template>