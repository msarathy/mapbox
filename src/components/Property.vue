<template>
    <div>
        <div v-for="(item) in data" v-bind:key="item.id">
            <pre>
                {{ item }}
            </pre>
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
    .title { }
    .address { }
</style>
