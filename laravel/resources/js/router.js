import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "./components/Dashboard.vue";
import Appointment from "./components/Appointment.vue";
import About from "./components/About.vue";
import Barbershops from "./components/Barbershops.vue";

let routes = [
    { path: "/", name: "Dashboard", component: Dashboard },
    { path: "/Appointment", name: "Appointment", component: Appointment },
    { path: "/About", name: "About", component: About },
    { path: "/Barbershops", name: "Barbershops", component: Barbershops },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
