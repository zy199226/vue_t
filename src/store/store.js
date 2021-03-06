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
        },
        topic: {
            author: {
                loginname: ''
            }
        },
        userDetail: {},
        loginDetail: {},
        token: '',
        message: {
            count: 0,
            has_read_messages: [],
            hasnot_read_messages: []
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
            state.login = a.data;
            state.token = a.accesstoken;
        },
        loginOut(state) {
            state.login = {
                success: false
            };
            state.loginDetail = {};
            state.token = '';
        },
        axiosTopic(state, a) {
            state.topic = a;
        },
        axiosUserDetail(state, a) {
            state.userDetail = a;
        },
        axiosLoginDetail(state, a) {
            state.loginDetail = a;
        },
        axiosMessage(state, a) {
            state.message = Object.assign(state.message, a);
        },
        axiosMessageCount(state, a) {
            state.message = Object.assign(state.message, a);
        }
    },
    actions: {
        axiosHome({ commit }, { tab, limit = 26, page = 1 }) {
            axios.get(`https://www.vue-js.com/api/v1/topics?tab=${tab}&page=${page}&limit=${limit}`).then((response) => {
                const data = response.data.data;
                commit('axiosHome', { data, tab, page });
            }).catch(/* err => console.err(err) */);
        },
        axiosLogin({ commit, dispatch }, accesstoken) {
            axios({
                method: 'post',
                url: 'https://www.vue-js.com/api/v1/accesstoken',
                data: `accesstoken=${accesstoken}`,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then((response) => {
                const data = response.data;
                commit('axiosLogin', { data, accesstoken });
                dispatch('axiosLoginDetail', response.data.loginname);
                window.localStorage.setItem('accesstoken', accesstoken);
            }).catch(() => alert('AccessToken 不正确'));
        },
        axiosLoginDetail({ commit }, loginname) {
            axios.get(`https://www.vue-js.com/api/v1/user/${loginname}`).then((response) => {
                commit('axiosLoginDetail', response.data.data);
            }).catch();
        },
        axiosTopic({ commit, dispatch }, id) {
            axios.get(`https://www.vue-js.com/api/v1/topic/${id}`).then((response) => {
                commit('axiosTopic', response.data.data);
                dispatch('axiosUserDetail', response.data.data.author.loginname);
            }).catch();
        },
        axiosUserDetail({ commit, state }, loginname) {
            if (state.userDetail.loginname !== loginname) {
                axios.get(`https://www.vue-js.com/api/v1/user/${loginname}`).then((response) => {
                    commit('axiosUserDetail', response.data.data);
                }).catch();
            }
        },
        axiosUp({ dispatch, state }, replyId) {
            axios({
                method: 'post',
                url: `https://www.vue-js.com/api/v1/reply/${replyId}/ups`,
                data: `accesstoken=${state.token}`,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then((response) => {
                if (response.data.success) {
                    dispatch('axiosTopic', state.topic.id);
                } else {
                    alert('呵呵，你不能为自己点赞！！！');
                }
            });
        },
        axiosReply({ dispatch, state }, { replyId, content }) {
            const data = replyId ? `accesstoken=${state.token}&content=${content}&reply_id=${replyId}` : `accesstoken=${state.token}&content=${content}`;
            axios({
                method: 'post',
                url: `https://www.vue-js.com/api/v1/topic/${state.topic.id}/replies`,
                data,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then((response) => {
                if (response.data.success) {
                    dispatch('axiosTopic', state.topic.id);
                } else {
                    alert('不知道为什么出错了！！！');
                }
            });
        },
        axiosCollect({ dispatch, state }, a) {
            const url = a === 'de' ? 'https://www.vue-js.com/api/v1/topic/de_collect' : 'https://www.vue-js.com/api/v1/topic/collect';
            axios({
                method: 'post',
                url,
                data: `accesstoken=${state.token}&topic_id=${state.topic.id}`,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then((response) => {
                if (response.data.success) {
                    dispatch('axiosLoginDetail', state.login.loginname);
                } else {
                    alert('不知道为什么出错了！！！');
                }
            });
        },
        axiosNewTopic({ state }, a) {
            axios({
                method: 'post',
                url: 'https://www.vue-js.com/api/v1/topics',
                data: `accesstoken=${state.token}&title=${a.title}&tab=${a.tab}&content=${a.content}`,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then((response) => {
                if (response.data.success) {
                    window.location.href = `./#/topic/${response.data.topic_id}`;
                } else {
                    alert('不知道为什么出错了！！！');
                }
            });
        },
        axiosMessage({ commit, state }) {
            if (state.token) {
                axios.get(`https://www.vue-js.com/api/v1/messages?accesstoken=${state.token}`).then(res => res.data.data).then((data) => {
                    commit('axiosMessage', data);
                });
            }
        },
        axiosMarkAll({ state }) {
            if (state.token) {
                axios({
                    method: 'post',
                    url: 'https://www.vue-js.com/api/v1/message/mark_all',
                    data: `accesstoken=${state.token}`,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });
            }
        },
        axiosMessageCount({ state, commit }) {
            if (state.token) {
                axios.get(`https://www.vue-js.com/api/v1/message/count?accesstoken=${state.token}`)
                    .then(res => res.data.data)
                    .then(count => commit('axiosMessageCount', count));
            }
        }
    },
    modules: {

    },
    plugins: [createLogger()]
});
