<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <footer class="border-t border-grey-medium bg-grey-light px-4 py-8">
    <p class="m-0 text-body-small text-black">
      {{ t('brand') }}
    </p>
  </footer>
</template>
