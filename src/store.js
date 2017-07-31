import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// const getData = () => {
//     console.log(123);
// };

export default new Vuex.Store({
    state: {
        count: 0,
        cou: 0
    },
    mutations: {
        increment(state) {
            state.count += 1;
        },
        reduction(state) {
            state.count -= 1;
        },
        inc(state) {
            state.cou += 1;
        },
        red(state) {
            state.cou -= 1;
        }
    },
    actions: {
        increment(context) {
            // console.log(context);
            // context.commit('increment');
            return new Promise((resolve) => {
                context.commit('increment');
                resolve();
            });
        },
        reduction({ dispatch, commit }) {
            return dispatch('reduction2').then(() => {
                commit('reduction');
            });
        },
        reduction2({ commit }) {
            commit('reduction');
        },

        // async / await 在vue中无法使用

        // async inc({ commit }) {
        //     commit('inc', await getData());
        // },
        inc({ commit }) {
            commit('inc');
        },
        // async red({ dispatch, commit }) {
        //     await dispatch('reduction2');
        //     commit('reduction2');
        // },
        red({ commit }) {
            commit('red');
        }
    },
    modules: {

    }
});
