<template>

    <body>
        <!--Navbar-->
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">The Shop</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <span>
                                <a class="nav-link" href="About">About</a>
                                <router-link to="/appointment">Appointment</router-link>
                            </span>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" tabindex="-1">Appointment</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!--Components-->
        <router-view></router-view>
        <Dashboard></Dashboard>
        <div v-if="type === 'appointment'">
            <Appointment></Appointment>
        </div>
    </body>
</template>
<script>
import Dashboard from '/resources/js/components/Dashboard.vue'
import Appointment from '/resources/js/components/Appointment.vue'
export default {
    name: 'App',
    components: {
        Dashboard,
        Appointment
    }
}
</script>
<style scoped>

</style>


