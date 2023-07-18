<template>
    <body>
        <nav>
            <RouterLink :to="{ path: '/Appointment' }">Appointment</RouterLink>
            <RouterLink :to="{ path: '/Dashboard' }">Dashboard</RouterLink>
            <RouterLink :to="{ path: '/About' }">About</RouterLink>
        </nav>
        <!--Components-->
    </body>
    <RouterView />
</template>
<script>
import Dashboard from '/resources/js/components/Dashboard.vue'
import Appointment from '/resources/js/components/Appointment.vue'
import { RouterLink, RouterView } from 'vue-router'
export default {
    name: 'App',
    components: {
        Dashboard,
        Appointment,
    }
}
</script>
<style scoped></style>


