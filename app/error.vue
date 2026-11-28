<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

const { t } = useI18n()

const isNotFound = computed(() => props.error.statusCode === 404)

const heading = computed(() =>
  isNotFound.value ? t('error.code404') : String(props.error.statusCode),
)

const message = computed(() =>
  isNotFound.value ? t('error.notFound') : t('error.generic'),
)

const showDevMessage = computed(() => !isNotFound.value && import.meta.dev && props.error.message)
</script>

<template>
  <div class="flex min-h-100dvh flex-col items-center justify-center bg-primary-dark px-4 font-sans text-white">
    <h1 class="m-0 text-center text-h4-sm md:text-h4">
      {{ heading }}
    </h1>
    <p class="m-0 mt-8 max-w-md text-center text-sh1-sm">
      {{ message }}
    </p>
    <p
      v-if="showDevMessage"
      class="m-0 mt-6 max-w-lg text-center text-body-small-sm text-white/70"
    >
      {{ error.message }}
    </p>
  </div>
</template>