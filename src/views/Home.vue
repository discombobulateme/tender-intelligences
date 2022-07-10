<script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useAppStateStore } from '@/stores/appState'

  const appState = useAppStateStore()

  const route = useRoute()
  const router = useRouter()

  onMounted(() => {
    window.scrollTo(0, 0)
    appState.setPageHeight(document.getElementById('home').scrollHeight)
  })
</script>

<template>
  <div id="home" class="view-container">
    <div>
      <h1>tender intelligences</h1>
      <h2>use, design and care of community-driven AI</h2>
    </div>
    <div>
      <h3>Los Angeles July 7th - 12th 2022</h3>
      <h3>Berlin Summer 2023</h3>
    </div>
  </div>
</template>

<style scoped>
  .view-container {
    background-color: var(--color-orange);
  }
</style>
