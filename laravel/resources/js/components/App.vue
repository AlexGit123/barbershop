<template>
    <body>
        <!--Navbar-->
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
                <!-- <a class="navbar-brand" href="#">The Shop</a> -->
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="About">About</a>
                        </li>
                        <a class="nav-link" href="About">About</a>
                        <p>
                            <router-link to="/appointment">Appointment</router-link>
                        </p>
                        <!-- <li class="nav-item">
                            <a class="nav-link" href="/appointment" tabindex="-1">Appointment</a>
                        </li> -->
                    </ul>
                </div>
            </div>
        </nav>
        <!--Components-->
        <router-view></router-view>
        <Dashboard></Dashboard>
        <!-- <div v-if="type === 'appointment'">
            <Appointment></Appointment>
        </div> -->
        <!-- <Appointment></Appointment> -->
    </body>
</template>
<script>
import Dashboard from '/resources/js/components/Dashboard.vue'
import Appointment from '/resources/js/components/Appointment.vue'
// import RouterLink from 'vue-router'
export default {
    name: 'App',
    components: {
        Dashboard,
        Appointment
    }
}
</script>
<style scoped></style>


