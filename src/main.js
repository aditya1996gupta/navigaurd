import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import Login from './components/Login.vue'
import Secure from './components/Secure.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)

const store = new Vuex.Store(
  {
    state: {
      authenticated: false
    },
    mutations: {
      setAuthentication (state, status) {
        state.authenticated = status
      }
    }
  }
)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'login'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/secure',
      name: 'secure',
      component: Secure,
      beforeEnter: (to, from, next) => {
        if (store.state.authenticated === false) {
          next(false)
        } else {
          next()
        }
      }
    }
  ]
})

new Vue({
  render: h => h(App),
  router: router,
  store: store
}).$mount('#app')
