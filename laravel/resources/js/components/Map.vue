<template>
    <div>
        <input type="text" v-model="searchQuery" @input="handleSearch" placeholder="Search for a location">
        <div ref="map" class="map-container"></div>
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
            mapboxgl.accessToken = 'pk.eyJ1Ijoib25saW5ldXNlciIsImEiOiJjbGt2OTk1dW8wN2tkM2VwZDBuZXNrcmJ5In0.KpJWXSgDC8uEAmfBGzmnHQ'; // Replace this with your Mapbox API token
            this.map = new mapboxgl.Map({
                container: this.$refs.map,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [0, 0], // Initial map center coordinates (longitude, latitude)
                zoom: 2, // Initial map zoom level
            });
        },
        handleSearch() {
            const query = this.searchQuery;
            // Call the Mapbox Geocoding API to convert the search query to coordinates
            // Replace 'YOUR_MAPBOX_API_TOKEN' with your actual Mapbox API token
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
/* Apply custom styles for the map container */
.map-container {
    height: 400px;
}
</style>