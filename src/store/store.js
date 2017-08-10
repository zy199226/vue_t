import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import axios from 'axios';

Vue.use(Vuex);

const iaxios = axios.create({
    baseURL: 'https://www.vue-js.com/api/v1/',
    // timeout: 1000,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
});

export default new Vuex.Store({
    state: {
        home: {
            all: []
        },
        count: 0
    },
    mutations: {
        axiosHome(state, a) {
            state.home.all = a.data;
        },
        include(state, c) {
            state.count += c;
        },
        decrease(state, c) {
            state.count -= c;
        }
    },
    actions: {
        axiosHome({ commit }, { tab, limit = 40, pages = 1 }) {
            iaxios.get(`topics?tab=${tab}&pages=${pages}&limit=${limit}`).then((response) => {
                commit('axiosHome', response.data);
            }).catch(/*err => console.err(err)*/);
        },
        axios() {

        },
        include({ commit }, c) {
            commit('include', c);
        },
        decrease({ commit }, c) {
            commit('decrease', c);
        }
    },
    modules: {

    },
    plugins: [createLogger()]
});
