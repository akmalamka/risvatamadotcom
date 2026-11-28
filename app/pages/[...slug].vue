<script setup lang="ts">
import { assertCmsPageFound, useCmsPageMeta } from '~/composables/use-cms-page'
import { useSanityPage } from '~/sanity/sanity.fetcher'

definePageMeta({ layout: 'default' })

const { data } = await useSanityPage()

useCmsPageMeta(data)
assertCmsPageFound(data)
</script>

<template>
  <CmsPageContent v-if="data" :page="data" />
</template>