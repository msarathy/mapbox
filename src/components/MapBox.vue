<template>
    <MglMap
        container="mapbox"
        :center.sync="center"
        :accessToken="accessToken"
        :mapStyle="mapStyle"
        :minZoom="minZoom">
        <MglMarker v-for="(location, key) in locations" :coordinates="location.coordinates" :key="key" />
    </MglMap>
</template>

<script>
    import Mapbox from "mapbox-gl";
    import { MglMap } from "vue-mapbox";
    import { MglMarker } from 'vue-mapbox';

    export default {
        components: {
            MglMap,
            MglMarker,
        },
        data() {
            return {
                accessToken:"",
                mapStyle: 'mapbox://styles/mapbox/streets-v11',
                center: [ 151.209152, -33.875305 ],
                locations: [
                    { coordinates: [ 151.209152, -33.875305 ] },
                    { coordinates: [ 151.208666, -33.875113 ] },
                ],
                minZoom: 17,
            }
        },
        created() {
            this.mapbox = Mapbox;
        }
    };
</script>
<style scoped>
    h3 { margin:40px 0 0; }
    ul { list-style-type:none;padding:0; }
    li { display:inline-block;margin:0 10px; }
    a { color:#42b983; }
    #mapbox { position:absolute;top:0;bottom:0;width:100%; }
</style>
