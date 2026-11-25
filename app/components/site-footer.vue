<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <footer class="layout-block bg-primary-dark py-[var(--footer-pad-block)] text-white">
    <SiteContainer class="flex-vertical gap-[var(--footer-gap-y)]">
      <div class="flex-vertical gap-8 md:grid md:grid-cols-2">
        <p class="m-0 text-h5-sm leading-[1.2] tracking-[-0.02em] md:text-h4-sm">
          {{ t('footer.tagline1') }}
        </p>
        <p class="m-0 text-h5-sm leading-[1.2] tracking-[-0.02em] md:text-h4-sm md:text-right">
          {{ t('footer.tagline2') }}
        </p>
      </div>

      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <div
          class="aspect-[226/130] w-full max-w-full bg-grey-medium"
          role="img"
          :aria-label="t('footer.certImageAlt')"
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
      </div>

      <div class="flex-vertical gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 lg:items-start">
        <p class="m-0 text-body-large font-medium leading-[1.15] whitespace-pre-wrap">
          {{ t('footer.address') }}
        </p>

        <div class="flex-vertical gap-4 text-body-large font-medium leading-[1.15]">
          <div class="flex gap-4">
            <span class="shrink-0">{{ t('footer.telLabel') }}</span>
            <div class="flex-vertical gap-4 uppercase">
              <span>{{ t('footer.phone1') }}</span>
              <span>{{ t('footer.phone2') }}</span>
            </div>
          </div>
          <span class="lowercase">{{ t('footer.email') }}</span>
        </div>

        <p class="m-0 text-body-large font-medium leading-[1.15] lg:text-right">
          {{ t('footer.backToTop') }}
        </p>
      </div>

      <div class="flex-vertical gap-2.5 border-t border-white pt-2.5">
        <div class="flex-vertical gap-2 text-body-small font-medium uppercase md:flex-row md:items-center md:justify-between">
          <p class="m-0">
            <span>{{ t('footer.copyrightPrefix') }}</span>
            <span class="font-bold">{{ t('footer.copyrightRights') }}</span>
          </p>
          <p class="m-0 md:text-right">
            {{ t('footer.credit') }}
          </p>
        </div>
      </div>
    </SiteContainer>
  </footer>
</template>