<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'
import { animate } from 'motion'
import { onMounted, onUnmounted, ref, watch } from 'vue'

const { t } = useI18n()
const sanity = useSanity()
const homePageQuery = defineQuery(`*[_id == "homePage"][0]{ title }`)
const { data: homePage } = await useAsyncData('home-page', async () => {
  try {
    return await sanity.client.fetch<{ title?: string } | null>(homePageQuery)
  }
  catch (error) {
    console.error('Homepage title could not be loaded from Sanity. Showing the fallback title.', error)
    return null
  }
})
const title = computed(() => homePage.value?.title || t('brand'))

const elementRef = ref<HTMLElement | null>(null)
const isOnView = ref(false)

useIntersectionObserver(elementRef, ([entry]) => {
  if (entry) {
    isOnView.value = entry.isIntersecting
  }
})

function animateElement() {
  if (!elementRef.value) {
    return
  }

  animate(elementRef.value, { opacity: [0, 1], y: [40, 0] }, { duration: 1, ease: 'easeOut' })
}

function resetElement() {
  if (!elementRef.value) {
    return
  }

  animate(elementRef.value, { opacity: 0, y: 40 })
}

watch(isOnView, (visible) => {
  if (visible) {
    animateElement()
  }
  else {
    resetElement()
  }
})

onMounted(() => {
  animateElement()
})

onUnmounted(() => {
  resetElement()
})
</script>

<template>
  <section class="flex min-h-[calc(100dvh-var(--navbar-height))] items-center justify-center bg-white px-4">
    <h1
      ref="elementRef"
      class="m-0 text-center text-h1-sm text-black md:text-h4"
    >
      {{ title }}
    </h1>
  </section>
</template>
