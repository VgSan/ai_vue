import axios from './../../axios-auth'
import globalAxios from 'axios'

import router from './../../router'

const auth = {
    namespaced: true,
    state: {
        idToken: null,
        userId: null,
        user: null
    },
    mutations: {
        authUser(state, userData) {
            state.idToken = userData.token
            state.userId = userData.userId
        },
        storeUser(state, user) {
            state.user = user
        },
        clearAuthData(state) {
            state.idToken = null
            state.userId = null
        }
    },
    actions: {
        setLogoutTimer({ commit }, expirationTime) {
            setTimeout(() => {
                commit('auth/clearAuthData')
            }, expirationTime * 1000)
        },
        login({ commit, dispatch }, authData) {
            var formData = new FormData();
            formData.append('username', authData.email);
            formData.append('password', authData.password);

            axios.post('/api/token', formData)
                .then(res => {
                    console.log(res)
                    const now = new Date()
                    const expirationDate = new Date(now.getTime() + res.data.expires_in * 1000)
                    localStorage.setItem('token', res.data.access_token)
                    localStorage.setItem('userId', res.data.userId)
                    localStorage.setItem('expirationDate', expirationDate)
                    commit('authUser', {
                        token: res.data.access_token,
                        userId: res.data.userId
                    })
                    dispatch('setLogoutTimer', res.data.expires_in)
                    router.replace('/')
                })
                .catch(error => console.log(error))
        },
        tryAutoLogin({ commit }) {
            const token = localStorage.getItem('token')
            if (!token) {
                return
            }
            const expirationDate = localStorage.getItem('expirationDate')
            const now = new Date()
            if (now >= expirationDate) {
                return
            }
            const userId = localStorage.getItem('userId')
            commit('authUser', {
                token: token,
                userId: userId
            })
        },
        logout({ commit }) {
            commit('clearAuthData')
            localStorage.removeItem('expirationDate')
            localStorage.removeItem('token')
            localStorage.removeItem('userId')
            router.replace('/signin')
        }
    },
    getters: {
        isAuthenticated(state) {
            return state.idToken !== null
        }
    }
};

export default auth;