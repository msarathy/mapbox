<template>
    <div>
        <h2>Sidebar</h2>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Search by city, address..." aria-label="Search city, address" aria-describedby="search-input">
            <div class="input-group-append">
                <span class="input-group-text"><i class="fas fa-search-location"></i></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Sidebar',
        props: {
            msg: String
        }
    }
</script>
<style scoped>
    h3 { margin:40px 0 0; }
    ul { list-style-type:none;padding:0; }
    li { display:inline-block;margin:0 10px; }
    a { color:#42b983; }
</style>
