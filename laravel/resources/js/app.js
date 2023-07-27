import "./bootstrap";
import { createApp } from "vue";
import router from "./router";
import App from "./components/App.vue";
import About from "./components/About.vue";

createApp(App).component("About", About).use(router).mount("#app");
