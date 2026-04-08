<!-- .vitepress/theme/components/Giscus.vue -->
<template>
  <div class="giscus">
    <component :is="'script'" v-bind="giscusProps" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const giscusProps = ref({})

onMounted(() => {
  giscusProps.value = {
    src: 'https://giscus.app/client.js',
    'data-repo': 'SuppeRovo/Yrz-feedback',
    'data-repo-id': 'R_kgDOR8uDAw',
    'data-category': 'Announcements',
    'data-category-id': 'DIC_kwDOR8uDA84C6WWT',
    'data-mapping': 'pathname',
    'data-strict': '0',
    'data-reactions-enabled': '1',
    'data-emit-metadata': '0',
    'data-input-position': 'bottom',
    'data-theme': 'preferred_color_scheme',
    'data-lang': 'zh-CN',
    crossorigin: 'anonymous',
    async: true
  }
})
</script>