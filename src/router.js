import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Integrations from './pages/Integrations.vue'
import IntegrationsSingle from './pages/IntegrationsSingle.vue'
import Pricing from './pages/Pricing.vue'
import Customers from './pages/Customers.vue'
import Customer from './pages/Customer.vue'
import Changelog from './pages/Changelog.vue'
import SignIn from './pages/SignIn.vue'
import SignUp from './pages/SignUp.vue'
import ResetPassword from './pages/ResetPassword.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      window.scroll({ top: 0 })
    } else {
      document.querySelector('html').style.scrollBehavior = 'auto'
      window.scroll({ top: 0 })
      document.querySelector('html').style.scrollBehavior = ''
    }
  },  
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/integrations',
      component: Integrations
    },
    {
      path: '/integrations-single',
      component: IntegrationsSingle
    },    
    {
      path: '/pricing',
      component: Pricing
    },
    {
      path: '/customers',
      component: Customers
    },
    {
      path: '/customer',
      component: Customer
    },
    {
      path: '/changelog',
      component: Changelog
    },
    {
      path: '/signin',
      component: SignIn
    },
    {
      path: '/signup',
      component: SignUp
    },    
    {
      path: '/reset-password',
      component: ResetPassword
    }
  ]
})

export default router
