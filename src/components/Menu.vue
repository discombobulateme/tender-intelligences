<script setup>
  import { useRoute, useRouter } from 'vue-router'
  import { useAppStateStore } from '@/stores/appState'

  const appState = useAppStateStore()

  const route = useRoute()
  const router = useRouter()

  function isCurrentRoute(linkRoute) {
    return linkRoute === route.path
  }
</script>

<template>
  <div class="sidebar">
    <div class="logotype">
      <router-link to="/">tender</router-link>
      <br />
      <router-link to="/">intelligences</router-link>
    </div>
    <ul id="menu">
      <li>
        <router-link
          to="/about"
          :class="{ selected: isCurrentRoute('/about') }"
        >
          about
        </router-link>
      </li>
      <li>
        <router-link
          to="/local-partners"
          :class="{ selected: isCurrentRoute('/local-partners') }"
        >
          local partners
        </router-link>
      </li>
      <li>
        <router-link
          to="/selected-works"
          :class="{ selected: isCurrentRoute('/selected-works') }"
        >
          selected works
        </router-link>
      </li>
      <li>
        <router-link
          to="/events"
          :class="{ selected: isCurrentRoute('/events') }"
        >
          events
        </router-link>
      </li>
      <li>
        <router-link
          to="/contact"
          :class="{ selected: isCurrentRoute('/contact') }"
        >
          contact
        </router-link>
      </li>
      <li>
        <router-link
          to="/media-kit"
          :class="{ selected: isCurrentRoute('/media-kit') }"
        >
          media kit
        </router-link>
      </li>
    </ul>
    <br />
    <p>this exhibition is proudly part of</p>
    <a
      href="https://www.b-la-connect.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        style="height: 100px"
        src="/src/assets/bla-logo.png"
        alt="BLA logo"
      />
    </a>
    <p>& possible through the support of</p>
    <a
      href="https://foundation.mozilla.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        style="width: 200px"
        src="/src/assets/mozilla-logo.png"
        alt="Mozilla logo"
      />
    </a>
  </div>
</template>

<style scoped>
  .sidebar {
    padding: 40px;
    background-color: var(--color-sidebar);
  }

  #menu {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .logotype {
    margin-bottom: 40px;
    font-family: Cormorant, serif;
    font-size: 28px;
    font-weight: 400;
  }

  .logotype a:first-of-type {
    font-style: italic;
  }

  #menu li {
    position: relative;
    display: block;
    padding: 0 0 21px;
    color: var(--color-text);
  }

  #menu a {
    font-family: 'Space Mono', monospace;
    font-size: 18px;
    font-weight: 400;
    color: var(--color-text);
    text-decoration: none;
  }

  #menu a.selected {
    font-weight: 700;
    text-decoration: none;
  }

  #menu a:hover {
    font-weight: 700;
    text-decoration: none;
  }

  #menu a:focus {
    font-weight: 700;
    text-decoration: none;
  }

  .bm-menu {
    padding-top: 15px;
    background-color: var(--color-sidebar);
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
  }

  .bm-item-list {
    margin: 0;
    font-size: 18px;
    color: var(--color-text);
  }

  .bm-item-list > * {
    display: contents;
    flex-wrap: wrap;
    text-decoration: none;
  }

  .bm-overlay {
    background: var(--color-sidebar);
  }

  #main {
    padding: 16px;
    transition: margin-left 0.5s;
  }

  @media (max-width: 1024px) {
    .sidebar {
      padding: 100px;
    }

    #menu a {
      font-size: max(4vw, 24px);
    }

    .logotype {
      font-size: max(6vw, 28px);
      font-weight: 400;
      line-height: max(6vw, 28px);
    }
  }

  @media (max-width: 480px) {
    .sidebar {
      padding: 80px;
    }
  }
</style>
