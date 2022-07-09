<script setup>
  import { ref, onMounted } from 'vue'
  import Menu from '@/components/Menu.vue'

  const menuOpen = ref(true)

  onMounted(() => {})
</script>

<template>
  <div class="main-container">
    <Menu class="menu" />
    <router-view v-slot="{ Component, route }" class="main-view-container">
      <transition :name="route.meta.transitionName">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </div>
</template>

<style>
  .menu {
    position: fixed;
    width: 20%;
    height: 100vh;
  }

  .main-view-container {
    width: 80%;
    height: 100vh;
    margin-left: 20%;
  }
</style>
