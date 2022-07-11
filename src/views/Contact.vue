<script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useAppStateStore } from '@/stores/appState'

  const appState = useAppStateStore()

  const route = useRoute()
  const router = useRouter()

  onMounted(() => {
    window.scrollTo(0, 0)
    appState.setPageHeight(document.getElementById('contact').scrollHeight)
  })
</script>

<template>
  <div id="contact" class="view-container">
    <h3>contact</h3>
    <p>
      for questions or more information on the exhibition please reach out
      <a href="mailto:paloma@netzkunst.berlin">paloma oliveira</a> or
      <a href="mailto:renata.gaui@gmail.com">renata gaui</a>
    </p>
  </div>
</template>

<style scoped>
  .view-container {
    background-color: var(--color-yellow);
  }

  h4 {
    margin-bottom: 20px;
  }
</style>
