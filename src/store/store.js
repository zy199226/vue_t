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
            all: [],
            good: [],
            weex: [],
            share: [],
            ask: [],
            job: []
        }
    },
    mutations: {
        axiosHome(state, a) {
            state.home[a.tab] = {
                topics: a.data,
                page: a.page
            };
        }
    },
    actions: {
        axiosHome({ commit }, { tab, limit = 26, page = 1 }) {
            iaxios.get(`topics?tab=${tab}&page=${page}&limit=${limit}`).then((response) => {
                const data = response.data.data;
                commit('axiosHome', { data, tab, page });
            }).catch(/* err => console.err(err) */);
        },
        axios() {

        }
    },
    modules: {

    },
    plugins: [createLogger()]
});
