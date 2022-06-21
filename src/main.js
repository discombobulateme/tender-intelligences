import { createApp } from "vue";
import App from "./App.vue";

import "vue-fullpage.js/dist/style.css";
import VueFullPage from "vue-fullpage.js";

import "./assets/base.css";

const app = createApp(App);
app.use(VueFullPage);
app.mount("#app");
