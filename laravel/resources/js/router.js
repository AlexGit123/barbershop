import { createRouter, createWebHistory } from "vue-router";
import App from "./components/App.vue";
import Dashboard from "./components/Dashboard.vue";
import Appointment from "./components/Appointment.vue";
import About from "./components/About.vue";

let routes = [
    { path: "/Dashboard", name: "Dashboard", component: Dashboard },
    { path: "/Appointment", name: "Appointment", component: Appointment },
    { path: "/About", name: "About", component: About },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
