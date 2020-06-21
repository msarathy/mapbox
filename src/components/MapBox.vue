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
                accessToken: 'pk.eyJ1IjoicmVuZGV2IiwiYSI6ImNrYmtydGNmazEyMXcyb214azl2NXVqa3YifQ.ZgPlPO3yHX3or-Kltjaicg',
                mapStyle: 'mapbox://styles/mapbox/streets-v11',
                minZoom: 17,
            }
        },
        created() {
            this.mapbox = Mapbox;
        },
        computed: {
            locations() {
                console.log("Map data updated..." + this.$store.getters.propertyData.length);
                return this.$store.getters.propertyData
            },
            center() {
                return this.locations[0].coordinates;
            }
        },
        watch: {
        },
        mounted: function() { }
    };
</script>
<style scoped>
    h3 { margin:40px 0 0; }
    ul { list-style-type:none;padding:0; }
    li { display:inline-block;margin:0 10px; }
    a { color:#42b983; }
    #mapbox { position:absolute;top:0;bottom:0;width:100%; }
</style>
