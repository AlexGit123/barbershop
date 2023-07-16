import { createRouter, createWebHistory } from "vue-router";
import Vue from "vue";
import Dashboard from "./components/Dashboard.vue";
import Appointment from "./components/Appointment.vue";

let routes = [
    { path: "/", component: Dashboard },
    { path: "/appointment", component: Appointment },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
