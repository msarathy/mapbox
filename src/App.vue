<template>
    <div id="app">
        <h1>Vue MapBox</h1>
        <div class="container-fluid">
            <div class="row">
                <div class="col-2 sidebar">
                    <Sidebar />
                </div>
                <div class="col-10 mapbox">
                    <MapBox />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from './store'
import Sidebar from './components/Sidebar.vue'
import MapBox from './components/MapBox.vue'

export default {
    name: 'App',
    store,
    components: { Sidebar, MapBox }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top:10px;
}
#app .sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    background:#f4f4f4;
    text-align:left;
    overflow-y:scroll;
    padding:0;
}
#app .mapbox {
    padding:0;
    position:fixed;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
    background:#fff;
    text-align:left;
}
</style>
