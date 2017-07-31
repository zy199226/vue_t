import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count += 1;
        },
        reduction(state) {
            state.count -= 1;
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
        reduction({ commit }) {
            commit('reduction');
        }
    }
});
