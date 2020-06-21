<template>
    <div>
        <h2>Archistar</h2>
        <div>
            <property :data="data"></property>
        </div>
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
                    property = { };
                    property.id = this.$options.jsonData.features[data].properties.project.id;
                    property.title = this.$options.jsonData.features[data].properties.project.Title;
                    property.address = this.$options.jsonData.features[data].properties.project.Address;
                    property.suburb = this.$options.jsonData.features[data].properties.project.Suburb;
                    property.coordinates = [ this.$options.jsonData.features[data].properties.project.Long, this.$options.jsonData.features[data].properties.project.Lat];
                    property.long = this.$options.jsonData.features[data].properties.project.Long;
                    property.lat = this.$options.jsonData.features[data].properties.project.Lat;

                    this.data.push(property);
                    //console.log(property.address);
                }
            }
        }
    }
</script>
<style scoped>
    h2 { background-color:#33CC99;color:#fff;padding:10px 15px;;margin:0; }
    h3 { margin:40px 0 0; }
    ul { list-style-type:none;padding:0; }
    li { display:inline-block;margin:0 10px; }
    a { color:#42b983; }
</style>
