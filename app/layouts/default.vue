<template>
  <div class="min-h-100dvh bg-primary-dark font-sans text-white">
    <SiteNavbar />
    <main class="layout-block min-h-[var(--layout-main-min-height)] overflow-y-auto">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>