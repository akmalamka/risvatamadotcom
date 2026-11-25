<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const locales = [
  { code: 'en' as const, label: 'EN' },
  { code: 'id' as const, label: 'ID' },
]
</script>

<template>
  <header class="sticky top-0 z-header flex h-[var(--navbar-height)] items-center justify-between border-b border-grey-medium bg-white px-4">
    <NuxtLink
      :to="localePath('/')"
      class="text-sh2 text-black no-underline"
    >
      {{ t('brand') }}
    </NuxtLink>
    <nav
      aria-label="Language"
      class="flex items-center gap-4"
    >
      <NuxtLink
        v-for="item in locales"
        :key="item.code"
        :to="switchLocalePath(item.code)"
        class="text-body-small uppercase no-underline"
        :class="locale === item.code ? 'text-black' : 'text-grey-dark'"
        :aria-current="locale === item.code ? 'true' : undefined"
      >
        {{ item.label }}
      </NuxtLink>
    </nav>
  </header>
</template>
