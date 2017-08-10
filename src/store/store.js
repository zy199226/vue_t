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

        }
    },
    mutations: {
        axiosHome(state, a) {
            state.home.all = a.data;
        }
    },
    actions: {
        axiosHome({ commit }, { tab, limit = 40, pages = 1 }) {
            iaxios.get(`topics?tab=${tab}&pages=${pages}&limit=${limit}`).then((response) => {
                commit('axiosHome', response.data);
            }).catch(err => console.log(err));
        },
        axios() {

        }
    },
    modules: {

    },
    plugins: [createLogger()]
});
