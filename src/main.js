import { createApp, markRaw } from 'vue'
import router from './router'
import { createPinia } from 'pinia'

import App from './App.vue'

import '@/styles/base.css'

// Allow Pinia stores to access Vue Router instance:
const pinia = createPinia()
pinia.use(({ store }) => {
  store.router = markRaw(router)
})

createApp(App).use(pinia).use(router).mount('#app')
