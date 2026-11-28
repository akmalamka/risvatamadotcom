<script setup lang="ts">
import { pickLocaleString } from '~/sanity/pick-locale-string'
import type { HeroTitleBlock } from '~/sanity/sanity.types'

const props = defineProps<{
  data: HeroTitleBlock
}>()

const { locale } = useI18n()

const title = computed(() =>
  pickLocaleString(props.data.title, locale.value),
)

const subtitle = computed(() =>
  pickLocaleString(props.data.subtitle, locale.value),
)

const hasSubtitle = computed(() => subtitle.value.trim().length > 0)
</script>

<template>
  <section
    class="flex flex-col items-center px-4 pb-16 pt-12 text-center md:pb-24 md:pt-16"
    aria-labelledby="hero-title-heading"
  >
    <h1
      id="hero-title-heading"
      class="m-0 max-w-4xl text-h4-sm text-white tracking-[-0.02em] md:text-h4"
    >
      {{ title }}
    </h1>
    <p
      v-if="hasSubtitle"
      class="m-0 mt-8 max-w-sm text-sh1-sm text-white leading-[1.15] tracking-[0.04em] md:mt-12 md:max-w-md"
    >
      {{ subtitle }}
    </p>
  </section>
</template>