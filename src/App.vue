<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import Menu from '@/components/Menu.vue'
  import { useRoute, useRouter } from 'vue-router'

  const route = useRoute()
  const router = useRouter()

  const menuOpen = ref(true)

  const scroll = ref(0)

  const scrollThreshold = 5

  const currTime = ref(new Date().getTime())

  onMounted(() => {
    window.addEventListener('wheel', handleScrollPageChange)
  })

  onUnmounted(() => {
    window.removeEventListener('wheel', handleScrollPageChange)
  })

  function handleScrollPageChange(event) {
    scroll.value += event.deltaY / 300

    const now = new Date().getTime()

    if (now - currTime.value > 5000) {
      scroll.value = 0
      currTime.value = now
    }

    if (scroll.value > scrollThreshold || scroll.value < -scrollThreshold) {
      const direction = scroll.value > 0 ? 1 : -1
      const currRoute = route.path
      const currRouteOrder = router.options.routes.find(
        (route) => route.path === currRoute
      ).meta.order

      let nextRoute

      if (currRouteOrder === 0 && direction === -1) {
        nextRoute = router.options.routes[router.options.routes.length - 1].path
      } else if (
        currRouteOrder ===
          router.options.routes[router.options.routes.length - 1].meta.order &&
        direction === 1
      ) {
        nextRoute = router.options.routes[0].path
      } else {
        nextRoute = router.options.routes.find(
          (route) => route.meta.order === currRouteOrder + direction
        ).path
      }

      scroll.value = 0
      window.removeEventListener('wheel', handleScrollPageChange)
      setTimeout(() => {
        window.addEventListener('wheel', handleScrollPageChange)
      }, 2000)
      router.push(nextRoute)
    }
  }
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
