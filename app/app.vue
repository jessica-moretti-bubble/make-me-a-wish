<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const colorMode = useColorMode()

onMounted(() => {
  colorMode.preference = 'light'
  colorMode.value = 'light'
})
</script>
