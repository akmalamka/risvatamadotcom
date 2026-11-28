<script setup lang="ts">
import type { BlockComponentsKeys } from '~/block/block.components'
import { cmsBlockComponents } from '~/composables/use-cms-page'
import type { PageQueryResult } from '~/sanity/sanity.types'

const props = defineProps<{
  page: PageQueryResult | null | undefined
}>()

const blocks = computed(() => props.page?.components ?? [])
</script>

<template>
  <section
    v-if="!page"
    class="flex min-h-[50vh] flex-col items-center justify-center px-4 py-16 text-center"
    aria-labelledby="cms-page-not-found"
  >
    <h1
      id="cms-page-not-found"
      class="m-0 text-h4-sm text-white"
    >
      404
    </h1>
    <p class="mt-4 text-body-large-sm text-white/80">
      Page Not Found
    </p>
  </section>
  <template v-else>
    <component
      :is="cmsBlockComponents[component._type as BlockComponentsKeys]"
      v-for="component in blocks"
      :key="component._key"
      :data="component"
    />
  </template>
</template>