import Vue from 'vue'
import VueRouter from 'vue-router'
import Datatable from 'vue2-datatable-component'

import store from './store'

import SigninPage from './components/auth/signin.vue'
import DashboardPage from './components/dashboard/dashboard.vue'
import ServicePage from './components/service/service.vue'
import SurveyPage from './components/survey/survey.vue'
import EmployeePage from './components/employee/employee.vue'
import AddEmployeePage from './components/employee/add-employee.vue'
import UserPage from './components/auth/user.vue'
import AddUserPage from './components/auth/add-user.vue'

Vue.use(VueRouter)
Vue.use(Datatable)

const routes = [
  { path: '/signin', component: SigninPage },
  {
    path: '/', component: EmployeePage,
    beforeEnter(to, from, next) {
      store.dispatch('auth/tryAutoLogin')
      if (store.state.auth.idToken) {
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
      store.dispatch('auth/tryAutoLogin')
      if (store.state.auth.idToken) {
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
      store.dispatch('auth/tryAutoLogin')
      if (store.state.auth.idToken) {
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
      store.dispatch('auth/tryAutoLogin')
      if (store.state.auth.idToken) {
        next()
      } else {
        next('/signin')
      }
    }
  },
  {
    path: '/user',
    component: UserPage,
    beforeEnter(to, from, next) {
      store.dispatch('auth/tryAutoLogin')
      if (store.state.auth.idToken) {
        next()
      } else {
        next('/signin')
      }
    }
  },
  {
    path: '/user/new',
    component: AddUserPage,
    beforeEnter(to, from, next) {
      store.dispatch('auth/tryAutoLogin')
      if (store.state.auth.idToken) {
        next()
      } else {
        next('/signin')
      }
    }
  },
  {
    path: '/employee',
    component: EmployeePage,
    beforeEnter(to, from, next) {
      store.dispatch('auth/tryAutoLogin')
      if (store.state.auth.idToken) {
        next()
      } else {
        next('/signin')
      }
    }
  },
  {
    path: '/employee/new',
    component: AddEmployeePage,
    beforeEnter(to, from, next) {
      store.dispatch('auth/tryAutoLogin')
      if (store.state.auth.idToken) {
        next()
      } else {
        next('/signin')
      }
    }
  },
  {
    path: '/employee/edit/:editId',
    component: AddEmployeePage,
    props: true,
    beforeEnter(to, from, next) {
      store.dispatch('auth/tryAutoLogin')
      if (store.state.auth.idToken) {
        next()
      } else {
        next('/signin')
      }
    }
  }
]

export default new VueRouter({ mode: 'history', routes })