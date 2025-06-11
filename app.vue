<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
useHead({
  title: 'Casa de Festas - Espaço para Eventos',
  meta: [
    { name: 'description', content: 'Reserve nossa casa de festas para seu evento especial. Espaços elegantes e versáteis para casamentos, aniversários e celebrações.' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>

<style>
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #1f2937;
}

* {
  box-sizing: border-box;
}
</style>

