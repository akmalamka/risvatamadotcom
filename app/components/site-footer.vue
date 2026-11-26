<script setup lang="ts">
import { pickLocaleString } from '~/sanity/pick-locale-string'
import type { LayoutFooter } from '~/sanity/sanity.types'

const DEFAULT_MAP_URL = 'https://www.google.com/maps'
const AKMAL_URL = 'https://www.thisisakmal.xyz/'

const props = defineProps<{
  data?: {
    footer: LayoutFooter | null
  }
}>()

const footer = computed(() => props.data?.footer ?? null)

const { t, locale } = useI18n()

const tagline1 = computed(() =>
  pickLocaleString(footer.value?.tagline1, locale.value, t('footer.tagline1')),
)

const tagline2 = computed(() =>
  pickLocaleString(footer.value?.tagline2, locale.value, t('footer.tagline2')),
)

const footerImages = computed(() =>
  (footer.value?.images ?? []).filter(image => image.url),
)

const addressText = computed(
  () => footer.value?.address?.text || t('footer.address'),
)

const addressMapUrl = computed(
  () => footer.value?.address?.mapUrl || DEFAULT_MAP_URL,
)

const phone1 = computed(() => footer.value?.phone1 || t('footer.phone1'))
const phone2 = computed(() => footer.value?.phone2 || t('footer.phone2'))
const email = computed(() => footer.value?.email || t('footer.email'))
const emailMailto = computed(() => `mailto:${email.value}`)
const backToTop = computed(() => footer.value?.backToTop || t('footer.backToTop'))

const copyrightText = computed(() => footer.value?.copyright)

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="layout-block bg-primary-dark py-[var(--footer-pad-block)] text-white">
    <SiteContainer class="flex-vertical gap-[var(--footer-gap-y)]">
      <div class="flex-vertical gap-8 md:grid md:grid-cols-2">
        <p class="m-0 text-h5-sm leading-[1.2] tracking-[-0.02em] md:text-h4-sm">
          {{ tagline1 }}
        </p>
        <p class="m-0 text-h5-sm leading-[1.2] tracking-[-0.02em] md:text-h4-sm md:text-right">
          {{ tagline2 }}
        </p>
      </div>

      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <template v-if="footerImages.length">
          <img
            v-for="image in footerImages"
            :key="image._key"
            :src="image.url"
            :alt="image.alt || ''"
            :width="image.width"
            :height="image.height"
            class="aspect-[226/130] w-full max-w-full object-cover"
          >
        </template>
        <template v-else>
          <div
            class="aspect-[226/130] w-full max-w-full bg-grey-medium"
            role="img"
            :aria-label="t('footer.certImageAlt') || undefined"
          />
          <div
            class="aspect-[226/130] w-full max-w-full bg-grey-medium"
            role="img"
            aria-hidden="true"
          />
          <div
            class="col-span-2 aspect-[226/130] w-full max-w-full bg-grey-medium sm:col-span-1"
            role="img"
            aria-hidden="true"
          />
        </template>
      </div>

      <div class="flex-vertical gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 lg:items-start">
        <a
          :href="addressMapUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-text-link m-0 text-body-large font-medium leading-[1.15] whitespace-pre-wrap"
        >
          {{ addressText }}
        </a>

        <div class="flex-vertical gap-4 text-body-large font-medium leading-[1.15]">
          <div class="flex gap-4">
            <span class="shrink-0">{{ t('footer.telLabel') }}</span>
            <div class="flex-vertical gap-4 uppercase">
              <span>{{ phone1 }}</span>
              <span>{{ phone2 }}</span>
            </div>
          </div>
          <a
            :href="emailMailto"
            class="footer-text-link lowercase"
          >
            {{ email }}
          </a>
        </div>

        <button
          type="button"
          class="footer-text-link m-0 block w-full border-0 bg-transparent p-0 text-left text-body-large font-medium leading-[1.15] font-inherit lg:text-right"
          @click="scrollToTop"
        >
          {{ backToTop }}
        </button>
      </div>

      <div class="flex-vertical gap-2.5 border-t border-white pt-2.5">
        <div class="flex-vertical gap-2 text-body-small font-medium uppercase md:flex-row md:items-center md:justify-between">
          <p class="m-0">
            <template v-if="copyrightText">
              {{ copyrightText }}
            </template>
            <template v-else>
              <span>{{ t('footer.copyrightPrefix') }}</span>
              <span class="font-bold">{{ t('footer.copyrightRights') }}</span>
            </template>
          </p>
          <p class="m-0 md:text-right">
            design and development by
            <a
              :href="AKMAL_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="footer-text-link"
            >
              Akmal
            </a>
          </p>
        </div>
      </div>
    </SiteContainer>
  </footer>
</template>