<template>
    <div>
        <h1 class="text-gray-900 text-xl font-bold mb-1">
            Search for barbershops in your area
        </h1>
        <div ref="map" class="map-container"></div>
        <div class="text-center mt-20">
            <label for="large-input" class="text-gray-700 font-light mb-2">
                Search for a location near you
            </label>
        </div>
        <div class="flex justify-center">
            <input type="text" v-model="searchQuery" @input="handleSearch" class="search-bar">
        </div>
    </div>
</template>
<script>
import mapboxgl from 'mapbox-gl';

export default {
    data() {
        return {
            map: null,
            searchQuery: '',
        };
    },
    methods: {
        initializeMap() {
            mapboxgl.accessToken = 'pk.eyJ1Ijoib25saW5ldXNlciIsImEiOiJjbGt2OGtnM20wcGhxM2RwcDJiNHhrcXU4In0.wCT83AifY4m2O3J21VCYiA';
            this.map = new mapboxgl.Map({
                container: this.$refs.map,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [0, 0], // Initial map center coordinates (longitude, latitude)
                zoom: 1, // Initial map zoom level
            });
        },
        handleSearch() {
            const query = this.searchQuery;
            // Call the Mapbox Geocoding API to convert the search query to coordinates
            fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?access_token=pk.eyJ1Ijoib25saW5ldXNlciIsImEiOiJjbGt2OTk1dW8wN2tkM2VwZDBuZXNrcmJ5In0.KpJWXSgDC8uEAmfBGzmnHQ`)
                .then(response => response.json())
                .then(data => {
                    if (data.features && data.features.length > 0) {
                        const location = data.features[0].center;
                        const longitude = location[0];
                        const latitude = location[1];

                        // Update the map's center
                        this.map.setCenter([longitude, latitude]);

                        // Clear existing markers, if any
                        if (this.map.getSource('marker')) {
                            this.map.removeLayer('marker');
                            this.map.removeSource('marker');
                        }

                        // Add a marker at the location
                        this.map.addSource('marker', {
                            type: 'geojson',
                            data: {
                                type: 'Feature',
                                geometry: {
                                    type: 'Point',
                                    coordinates: [longitude, latitude]
                                }
                            }
                        });


                        this.map.addLayer({
                            id: 'marker',
                            type: 'circle',
                            source: 'marker',
                            paint: {
                                'circle-radius': 8,
                                'circle-color': '#007cbf'
                            }
                        });
                    }
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        },
    },
    mounted() {
        this.initializeMap();
    },
};
</script>
<style scoped>
/* custom styles for the map container */
.map-container {
    height: 400px;
}
</style>