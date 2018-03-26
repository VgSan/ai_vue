import Vue from 'vue'
import VueRouter from 'vue-router'

import store from './store'

import SigninPage from './components/auth/signin.vue'
import DashboardPage from './components/dashboard/dashboard.vue'
import ServicePage from './components/service/service.vue'
import SurveyPage from './components/survey/survey.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/signin', component: SigninPage },
  {
    path: '/', component: DashboardPage,
    beforeEnter(to, from, next) {
      store.dispatch('tryAutoLogin')
      if (store.state.idToken) {
        next()
      } else {
        next('/signin')
      }
    }
  },
  {
    path: '/dashboard',
    component: DashboardPage,
    beforeEnter(to, from, next) {
      store.dispatch('tryAutoLogin')
      if (store.state.idToken) {
        next()
      } else {
        next('/signin')
      }
    }
  },
  {
    path: '/service',
    component: ServicePage,
    beforeEnter(to, from, next) {
      store.dispatch('tryAutoLogin')
      if (store.state.idToken) {
        next()
      } else {
        next('/signin')
      }
    }
  },
  {
    path: '/survey',
    component: SurveyPage,
    beforeEnter(to, from, next) {
      store.dispatch('tryAutoLogin')
      if (store.state.idToken) {
        next()
      } else {
        next('/signin')
      }
    }
  }
]

export default new VueRouter({ mode: 'history', routes })