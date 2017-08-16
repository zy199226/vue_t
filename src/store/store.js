import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        home: {
            all: [],
            good: [],
            weex: [],
            share: [],
            ask: [],
            job: []
        },
        login: {
            success: false
        }
    },
    mutations: {
        axiosHome(state, a) {
            state.home[a.tab] = {
                topics: a.data,
                page: a.page
            };
        },
        axiosLogin(state, a) {
            state.login = a;
        },
        loginOut(state) {
            state.login = {
                success: false
            };
        }
    },
    actions: {
        axiosHome({ commit }, { tab, limit = 26, page = 1 }) {
            axios.get(`https://www.vue-js.com/api/v1/topics?tab=${tab}&page=${page}&limit=${limit}`).then((response) => {
                const data = response.data.data;
                commit('axiosHome', { data, tab, page });
            }).catch(/* err => console.err(err) */);
        },
        axiosLogin({ commit }, accesstoken) {
            axios({
                method: 'post',
                url: 'https://www.vue-js.com/api/v1/accesstoken',
                data: `accesstoken=${accesstoken}`,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then((response) => {
                commit('axiosLogin', response.data);
                window.localStorage.setItem('accesstoken', accesstoken);
            }).catch(err => alert(`未知错误：${err}`));
        }
    },
    modules: {

    },
    plugins: [createLogger()]
});
