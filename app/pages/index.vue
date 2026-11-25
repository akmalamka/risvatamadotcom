<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => t('meta.title'),
  description: () => t('meta.description'),
})
</script>

<template>
  <HomeHero />
  <HomeImageMarquee />
  <HomeAbout />
  <HomeProducts />
  <HomeCtaBanner />
  <HomeWhoWeAre />
  <HomeTrust />
  <HomeSolutions />
  <HomeDifferentiators />
  <HomeTestimonials />
</template>