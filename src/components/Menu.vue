<script setup>
  import { ref } from 'vue'
  defineProps({})
</script>

<template>
  <div class="menu-container">
    <ul id="menu">
      <li>
        <router-link to="/">tender intelligences</router-link>
      </li>
      <li>
        <router-link to="/about">about</router-link>
      </li>
      <li>
        <router-link to="/local-partners">local partners</router-link>
      </li>
      <li>
        <router-link to="/selected-works">selected works</router-link>
      </li>
      <li>
        <router-link to="/events">events</router-link>
      </li>
      <li>
        <router-link to="/contact">contact</router-link>
      </li>
      <li>
        <router-link to="/media-kit">media kit</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .menu-container {
    padding: 40px;
  }
</style>
