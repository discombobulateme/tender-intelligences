<script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useAppStateStore } from '@/stores/appState'

  const appState = useAppStateStore()

  const route = useRoute()
  const router = useRouter()

  onMounted(() => {
    window.scrollTo(0, 0)
    appState.setPageHeight(document.getElementById('media-kit').scrollHeight)
  })
</script>

<template>
  <div id="media-kit" class="view-container">
    <h3>media kit</h3>
    <p>
      you can download the exhibition's media kit
      <a href="http://" target="_blank" rel="noopener noreferrer">here</a>.
    </p>
  </div>
</template>

<style scoped>
  .view-container {
    background-color: var(--color-blue);
  }
</style>
