import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        propertyData: [],
    },
    mutations: {
        updated(state, payload) {
            state.propertyData = payload;
        },
    },
    getters: {
        propertyData: state => state.propertyData
    }
})
