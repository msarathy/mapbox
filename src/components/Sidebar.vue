<template>
    <div>
        <h2>Sidebar</h2>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Search by city, address..." aria-label="Search city, address" aria-describedby="search-input">
            <div class="input-group-append">
                <span class="input-group-text"><i class="fas fa-search-location"></i></span>
            </div>
        </div>
        <div>
            <property :data="data"></property>
        </div>
        <!--<pre>All Count={{ $options.jsonData.features.length }}</pre>
        <pre>Count={{ data.length }}</pre>
        <pre>{{ data }}</pre>-->
    </div>
</template>

<script>
    import jsonData from '../data/data.json'
    import Property from '../components/Property.vue'

    export default {
        name: 'Sidebar',
        jsonData: jsonData,
        components: { Property },
        props: { },
        data: function() {
            return {
                data: []
            }
        },
        created: function() {
            this.parseJSON();
        },
        methods: {
            parseJSON: function() {
                let property = { };
                for(let data in this.$options.jsonData.features) {
                    property.id = this.$options.jsonData.features[data].properties.project.id;
                    property.title = this.$options.jsonData.features[data].properties.project.Title;
                    property.address = this.$options.jsonData.features[data].properties.project.Address;
                    property.suburb = this.$options.jsonData.features[data].properties.project.Suburb;
                    property.coordinates = [ this.$options.jsonData.features[data].properties.project.Long, this.$options.jsonData.features[data].properties.project.Lat];
                    property.long = this.$options.jsonData.features[data].properties.project.Long;
                    property.lat = this.$options.jsonData.features[data].properties.project.Lat;

                    this.data.push(property);
                    //console.log(property);
                }
            }
        }
    }
</script>
<style scoped>
    h3 { margin:40px 0 0; }
    ul { list-style-type:none;padding:0; }
    li { display:inline-block;margin:0 10px; }
    a { color:#42b983; }
</style>
