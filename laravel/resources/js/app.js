import './bootstrap';
import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router';
import App from '/Users/alexdoerfer/code/barbershop-1/laravel/resources/js/components/App.vue'
import Dashboard from './components/Dashboard.vue'


// let routes = [{path:'/', component: Dashboard}]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
       {
        path:'/', component: Dashboard
       }
   ]
  })


createApp(App).mount("#app")

App.use(router)