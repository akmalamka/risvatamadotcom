<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'
import { animate } from 'motion'
import { onMounted, onUnmounted, ref, watch } from 'vue'

const { t } = useI18n()
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
      {{ t('brand') }}
    </h1>
  </section>
</template>
