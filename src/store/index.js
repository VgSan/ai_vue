import Vue from 'vue';
import Vuex from 'vuex';

import auth from './modules/auth';
import employee from './modules/employee';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        //
    },
    mutations: {
        //
    },
    actions: {

    },
    getters: {

    },
    modules: {
        auth,
        employee
    }
});

export default store;
