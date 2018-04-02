import Vue from 'vue';
import Vuex from 'vuex';

import auth from './modules/auth';
import user from './modules/user';
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
        user,
        employee
    }
});

export default store;
