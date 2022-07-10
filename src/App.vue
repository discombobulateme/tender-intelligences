<script setup>
  import { ref, onMounted, onUnmounted, computed } from 'vue'
  import Menu from '@/components/Menu.vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useAppStateStore } from '@/stores/appState'

  const appState = useAppStateStore()

  const route = useRoute()
  const router = useRouter()

  const scroll = ref(0)

  let yTouch = ref(null)

  const currTime = ref(new Date().getTime())

  const isTouchDevice = computed(() => {
    return (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    )
  })

  onMounted(() => {
    trackScroll()
  })

  onUnmounted(() => {
    untrackScroll()
  })

  function handleScrollPageChange(event) {
    const now = new Date().getTime()

    if (now % 2 === 0) {
      scroll.value += event.deltaY
    }

    // if (now - currTime.value > 3000) {
    //   scroll.value = 0
    //   currTime.value = now
    // }

    if (
      scroll.value > appState.pageHeight * 0.75 ||
      scroll.value < appState.pageHeight * -0.3
    ) {
      const direction = scroll.value > 0 ? 1 : -1
      changePage(direction)
    }
  }

  function getTouches(event) {
    return event.touches
  }

  function handleTouchStart(event) {
    const firstTouch = getTouches(event)[0]
    yTouch.value = firstTouch.clientY
  }

  function handleTouchMove(event) {
    if (!yTouch.value) return

    const yUp = event.touches[0].clientY

    const deltaY = yTouch.value - yUp

    const swipeThreshold = 200

    const viewContainer = document.querySelector('.view-container')
    if (Math.abs(deltaY) > swipeThreshold && deltaY > 0) {
      /* Up swipe */
      if (
        viewContainer.scrollTop ===
        viewContainer.scrollHeight - viewContainer.offsetHeight
      ) {
        changePage(1)
      }
    } else if (Math.abs(deltaY) > swipeThreshold && deltaY < 0) {
      // Down swipe
      if (window.scrollY === 0) {
        // Down swipe beyond page top, switch to previous page
        changePage(-1)
      }
    }
  }

  function changePage(direction) {
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

    // Block scroll/swipe updates until transition is finished:
    untrackScroll()

    // Here we set 'transitioning' state in store to true. This is used to block
    // scrolling on the next page (by applying the 'scroll-lock' class during
    // the transition) container until transition is finished:
    appState.setTransitioning(true)
    setTimeout(() => {
      trackScroll()
      appState.setTransitioning(false)
    }, 1500)

    router.push(nextRoute)
  }

  function trackScroll() {
    if (isTouchDevice.value) {
      document.addEventListener('touchstart', handleTouchStart, false)
      document.addEventListener('touchmove', handleTouchMove, false)
    } else {
      window.addEventListener('wheel', handleScrollPageChange)
    }
  }

  function untrackScroll() {
    if (isTouchDevice.value) {
      document.removeEventListener('touchstart', handleTouchStart, false)
      document.removeEventListener('touchmove', handleTouchMove, false)
    } else {
      window.removeEventListener('wheel', handleScrollPageChange)
    }
  }
</script>

<template>
  <div class="main-container">
    <Menu class="menu" />
    <router-view v-slot="{ Component, route }" class="main-view-container">
      <transition :name="route.meta.transitionName">
        <component
          :is="Component"
          :key="route.path"
          :class="{ 'scroll-lock': appState.transitioning }"
        />
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
