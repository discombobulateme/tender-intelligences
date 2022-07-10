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

  // const currTime = ref(new Date().getTime())

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
    // Checking if we have a up swipe:
    if (Math.abs(deltaY) > swipeThreshold && deltaY > 0) {
      // If we have a up swipe and the view is at the bottom of the page,
      // we change the page to the next view:
      if (
        viewContainer.scrollTop ===
        viewContainer.scrollHeight - viewContainer.offsetHeight
      ) {
        changePage(1)
      }
      // Checking if we have a down swipe:
    } else if (Math.abs(deltaY) > swipeThreshold && deltaY < 0) {
      // If we have a down swipe and the view is at the top of the page,
      // we change the page to the previous view:
      if (window.scrollY === 0) {
        changePage(-1)
      }
    }
  }

  // This function calculates the next page to transition to, based on a
  // direction (1 or -1) and the current page. It looks for the "order" meta
  // property in the current page and returns the next page based on that:
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

    const prevView = document.getElementById(currRoute.split('/')[1])
    console.log(prevView)

    prevView.scrollTop = prevView.scrollHeight

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
    // If the device has a touch screen, we track the touch events:
    if (isTouchDevice.value) {
      document.addEventListener('touchstart', handleTouchStart, false)
      document.addEventListener('touchmove', handleTouchMove, false)
    }
    // Otherwise we track the mouse wheel events:
    else {
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
    <Menu class="menu" :class="{ open: appState.menuOpen }" />
    <div class="hamburger-icon" @click="appState.toggleMenu">
      <span class="bar1" :class="{ open: appState.menuOpen }"></span>
      <span class="bar2" :class="{ open: appState.menuOpen }"></span>
      <span class="bar3" :class="{ open: appState.menuOpen }"></span>
    </div>
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
  :root {
    --menu-size: 35px;
  }

  .menu {
    position: fixed;
    width: 25%;
    height: 100vh;
  }

  .main-view-container {
    width: 75%;
    height: 100vh;
    margin-left: 20%;
  }

  .hamburger-icon {
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 2;
    display: none;
    width: var(--menu-size);
    height: var(--menu-size);
    cursor: pointer;
  }

  .bar1,
  .bar2,
  .bar3 {
    display: block;
    width: var(--menu-size);
    height: 5px;
    margin: 6px 0;
    background-color: rgb(51 51 51);
    opacity: 1;
    transition: all 0.4s ease;
  }

  /* Rotate first bar */
  .bar1.open {
    transform: rotate(-45deg) translate(-8px, 8px);
  }

  /* Fade out the second bar */
  .bar2.open {
    opacity: 0;
  }

  /* Rotate last bar */
  .bar3.open {
    transform: rotate(45deg) translate(-8px, -8px);
  }

  @media (max-width: 1024px) {
    .menu {
      z-index: 2;
      width: 100vw;
      height: 100vh;
      visibility: hidden;
      opacity: 0;
      transition: transform 1s ease, visibility 1s linear 1s,
        opacity 1s linear 1s;
      transform: translateX(-100vw);
    }

    .menu.open {
      visibility: visible;
      opacity: 1;
      transition: transform 1s ease;
      transform: translateX(0);
    }

    .main-view-container {
      width: 100%;
      margin-left: 0;
    }

    .hamburger-icon {
      display: block;
    }
  }
</style>
