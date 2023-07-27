<template>
    <body>
        <nav>
            <RouterLink class="nav-item" :to="{ path: '/' }">Dashboard</RouterLink>
            <RouterLink class="nav-item" :to="{ path: '/Appointment' }">Appointment</RouterLink>
            <RouterLink class="nav-item" :to="{ path: '/About' }">About</RouterLink>
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


