//TODO install axios
//TODO Rename component to AddBarbershop
<template>
    <div class="p-8 rounded border border-gray-200">
        <h1 class="font-medium text-3xl">Add Your Barbershop</h1>
        <p class="text-gray-600 mt-6">Please enter the following information carefully.</p>

        <!-- Form -->
        <form>
            <div class="mt-8 grid lg:grid-cols-2 gap-4">
                <!-- Name -->
                <div>
                    <label for="name" class="text-sm text-gray-700 block mb-1 font-medium">Name</label>
                    <input type="text" name="name" id="name" v-model="shopName" class="barbershop-input"
                        placeholder="Enter the name of your barbershop" />
                </div>
                <!-- Email -->
                <div>
                    <label for="email" class="text-sm text-gray-700 block mb-1 font-medium">Email Address</label>
                    <input type="text" name="email" id="email" v-model="email" class="barbershop-input"
                        placeholder="yourmail@provider.com" />
                </div>
                <!-- Title -->
                <div>
                    <label for="location" class="text-sm text-gray-700 block mb-1 font-medium">Location</label>
                    <input type="text" name="location" id="location" v-model="location" class="barbershop-input"
                        placeholder="(ex. Stuttgart Sued, building 5, 70182 )" />
                </div>
                <!-- Barbers -->
                <div>
                    <label for="barbers" class="text-sm text-gray-700 block mb-1 font-medium">Number of Barbers</label>
                    <input type="text" name="barbers" id="barbers" v-model="numberOfBarbers" class="barbershop-input"
                        placeholder="(1,2,3)" />
                </div>
            </div>
            <!-- Button -->
            <div class="space-x-4 mt-8">
                <button type="submit" :on-click="handleSave()"
                    class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50">Save</button>
                <!-- Secondary -->
                <RouterLink :to="{ path: '/' }">
                    <button
                        class="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">Cancel</button>
                </RouterLink>
            </div>
        </form>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            shopName: '',
            email: '',
            location: '',
            numberOfBarbers: null,
        };
    },
    methods: {
        async handleSave() {
            try {
                const response = await axios.post('/api/save-barbershop', { // TODO prepare actual endpoint
                    name: this.shopName,
                    email: this.email,
                    location: this.location,
                    numberOfBarbers: this.numberOfBarbers,
                });

                if (response.status === 200) {
                    console.log('success!')
                }
            } catch (error) {
                // Handle errors here
                console.error('Error saving data:', error);
            }
        },
    },
};
</script>
<style></style>