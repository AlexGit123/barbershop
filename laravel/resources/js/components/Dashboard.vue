//TODO Fix type of map - location search needed
//TODO Add footer icons
<template>
    <body>
        <div class="background">
            <!-- Cards Container -->
            <div class="flex items-center justify-center min-h-screen bg-blue py-12 md:py-24">
                <div class="flex flex-col">
                    <div class="container">
                        <!-- Header -->
                        <!-- Cards -->
                        <div class="flex flex-wrap mt-2 md:mt-0 -mx-4">
                            <!-- Card #1 -->
                            <div class="w-full md:w-full lg:w-4/12 px-4 mb-4 flex">
                                <div class="border border-gray-300 rounded p-4">
                                    <div class="flex flex-col">
                                        <!-- Map -->
                                        <Map />
                                        <!-- Details -->
                                        <div class="text-center mt-6">
                                            <!-- Caption -->
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Card #2 -->
                            <div class="w-full md:w-full lg:w-4/12 px-4 mb-4 flex">
                                <div class="border border-gray-300 rounded p-4">
                                    <div class="flex flex-col">
                                        <div class="text-center">
                                            <!-- Caption -->
                                            <h1 class="text-gray-900 text-xl font-bold mb-1">
                                                Want to make an appointment?
                                            </h1>
                                        </div>
                                        <!-- Image //TODO - change imgsize -->
                                        <a href="#" class="mx-auto">
                                            <img class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                src="images/haircut.jpg">
                                        </a>
                                        <!-- Details -->
                                        <div class="text-center mt-6">
                                            <!-- Title -->
                                            <div class=" text-center text-gray-700 font-light mb-2">
                                                Click here
                                            </div>
                                            <!-- Button-->
                                            <div class="flex justify-center pt-10">
                                                <RouterLink :to="{ path: '/Appointment' }">
                                                    <button class="dash-button">Appointment</button>
                                                </RouterLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Card #3 -->
                            <div class="w-full md:w-full lg:w-4/12 px-4 mb-4 flex">
                                <div class="border border-gray-300 rounded p-4">
                                    <div class="flex flex-col">
                                        <!-- Details -->
                                        <div class="text-center">
                                            <!-- Caption -->
                                            <h1 class="text-gray-900 text-xl font-bold mb-1">
                                                Want to list your barbershop?
                                            </h1>
                                            <!-- Image 1980 x 1192-->
                                            <a href="#" class="mx-auto">
                                                <img class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                    src="images/shop.jpg">
                                            </a>
                                            <!-- Button -->
                                            <div class="text-center mt-6">
                                                <div class="text-gray-700 font-light mb-2">
                                                    Click here
                                                </div>
                                                <div class="flex justify-center pt-10">
                                                    <RouterLink :to="{ path: '/Barbershops' }">
                                                        <button class="dash-button">Make Listing</button>
                                                    </RouterLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--footer-->
            <!-- <div>
                <div class="flex justify-left">
                    <div class="mb-6">
                        <div class="flex justify-left"></div>
                        <h1 class="left-5 absolute bottom-20">Contact Us</h1>
                        <div class="absolute bottom-0">
                            <h3>Phone number: +31 6 00000</h3>
                            <h3>Instagram: </h3>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
    </body>
</template>
<script>
import Map from '/resources/js/components/Map.vue';

export default {
    components: {
        Map,
    },
}
</script>
<style></style>
