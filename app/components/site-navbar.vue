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
  <header class="layout-block h-[var(--navbar-height)] bg-primary-dark text-white">
    <SiteContainer class="flex-y-center h-full justify-between">
      <NuxtLink
        :to="localePath('/')"
        class="text-sh2-sm text-white font-medium uppercase tracking-[0.04em] no-underline md:text-sh1-sm"
      >
        {{ t('brand') }}
      </NuxtLink>
      <div class="flex-y-center gap-4">
        <nav
          aria-label="Language"
          class="flex-y-center gap-4"
        >
          <NuxtLink
            v-for="item in locales"
            :key="item.code"
            :to="switchLocalePath(item.code)"
            class="text-body-small uppercase no-underline"
            :class="locale === item.code ? 'text-white' : 'text-white/50'"
            :aria-current="locale === item.code ? 'true' : undefined"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
        <svg
          aria-hidden="true"
          class="size-8 shrink-0"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.66667 22.6667H25.3333M6.66667 16H25.3333M6.66667 9.33333H25.3333"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </SiteContainer>
  </header>
</template>