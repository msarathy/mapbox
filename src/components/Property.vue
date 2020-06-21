<template>
    <div>
        <div v-for="(item) in data" v-bind:key="item.id" class="property">
            <div class="wrap">
                <h4 class="title">{{ item.title }}</h4>
                <address>{{ item.address }} - {{ item.suburb }}</address>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            data: Array
        },
    };
</script>
<style scoped>
    .property { margin-bottom:0;border-bottom:1px solid #ccc; }
    .property .wrap { padding:10px 15px;margin:0 }
    .property .title { color:#33CC99;font-weight:700;font-size:1rem }
    .property .address { color:#33CC99;margin:0;font-size:0.9rem; }
</style>
