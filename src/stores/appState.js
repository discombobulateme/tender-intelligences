import { defineStore } from 'pinia'

export const useAppStateStore = defineStore('appState', {
  state: () => ({
    transitioning: false,
    pageHeight: 0,
    menuOpen: false,
  }),
  getters: {},
  actions: {
    setTransitioning(transitioning) {
      this.transitioning = transitioning
    },
    setPageHeight(height) {
      this.pageHeight = height
    },
    toggleMenu(height) {
      this.menuOpen = !this.menuOpen
    },
  },
})
