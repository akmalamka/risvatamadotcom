<script setup lang="ts">
import type { BlockComponentsKeys } from '~/block/block.components'
import { cmsBlockComponents } from '~/composables/use-cms-page'
import type { PageQueryResult } from '~/sanity/sanity.types'

defineProps<{
  page: PageQueryResult
}>()
</script>

<template>
  <div>
    <component
      :is="cmsBlockComponents[component._type as BlockComponentsKeys]"
      v-for="component in page.components"
      :key="component._key"
      :data="component"
    />
  </div>
</template>