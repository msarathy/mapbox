<template>
    <div>
        <h2>Archistar</h2>
        <div class="filter">
            <div class="dropdown show">
                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <template v-if="selectedFilter">{{ selectedFilter }}</template>
                    <template v-else>All Categories</template>
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" @click="selectedFilter=''">All Categories</a>
                    <a class="dropdown-item" href="#" v-for="(filter, key) in availableFilters" :key="key" @click="selectedFilter=filter">{{ filter }}</a>
                </div>
            </div>
            <p>Listing <strong><i>
                <template v-if="selectedFilter">"{{ selectedFilter }}"</template>
                <template v-else>"All Categories"</template></i></strong>
            </p>
        </div>
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
                data: [],
                selectedFilter: "",
                availableFilters: [ "Residential", "Commercial Premises", "Civil Engineering", "Social", "Retail", "Hospitality" ]
            }
        },
        created: function() {
            this.parseJSON();
            //this.selectedFilters = this.availableFilters;
        },
        watch: {
            'selectedFilter': function() {
                this.parseJSON();
            },
        },
        mounted() {

        },
        methods: {
            parseJSON: function() {
                let property = { };
                this.data = [];
                for(let data in this.$options.jsonData.features) {
                    property = { };

                    if(this.selectedFilter === "" || this.selectedFilter.toUpperCase() === this.$options.jsonData.features[data].properties.project.Category) {
                        property.id = this.$options.jsonData.features[data].properties.project.id;
                        property.title = this.$options.jsonData.features[data].properties.project.Title;
                        property.address = this.$options.jsonData.features[data].properties.project.Address;
                        property.suburb = this.$options.jsonData.features[data].properties.project.Suburb;
                        property.coordinates = [ this.$options.jsonData.features[data].properties.project.Long, this.$options.jsonData.features[data].properties.project.Lat]; //Long, Lat
                        property.long = this.$options.jsonData.features[data].properties.project.Long;
                        property.lat = this.$options.jsonData.features[data].properties.project.Lat;
                        property.category = this.$options.jsonData.features[data].properties.project.Category;

                        this.data.push(property);
                    }
                }

                this.$store.commit('updated', this.data);
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
    a:hover { color:#33CC99; }
    .filter { margin:10px; }
    .dropdown a { border-radius:0;width:100%;text-align:left; }
    .dropdown .dropdown-toggle { color:#fff }
</style>
