<script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useAppStateStore } from '@/stores/appState'

  const appState = useAppStateStore()

  const route = useRoute()
  const router = useRouter()

  onMounted(() => {
    window.scrollTo(0, 0)
    appState.setPageHeight(document.getElementById('events').scrollHeight)
  })
</script>

<template>
  <div id="events" class="view-container">
    <h3>events</h3>
    <div>
      <h4>Opening Reception 1</h4>
      <p>Opening Reception I July 7th, 5pm PST (in person)</p>
      <p>
        <a
          href="https://goo.gl/maps/oqwARXBRgtCe2s5q7"
          target="_blank"
          rel="noopener noreferrer"
          >Mutable Studio @ 1206 Maple Ave, Suite 1032 Los Angeles</a
        >
      </p>
      <p>No RSVP required</p>
    </div>
    <div>
      <h4>Dreaming Beyond AI Launch</h4>
      <p>Dreaming Beyond AI Launch July 7th, 5pm CEST (online)</p>
      <a
        href="https://us06web.zoom.us/webinar/register/4516564939805/WN_QDUzK9bdT6OUy6DcFm2OVg"
        >RSVP</a
      >
    </div>
  </div>
</template>

<style scoped>
  .view-container {
    background-color: var(--color-orange);
  }

  div {
    margin-bottom: 5rem;
  }

  h4 {
    margin-bottom: 20px;
  }
</style>
