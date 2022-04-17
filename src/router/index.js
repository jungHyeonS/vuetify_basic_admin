import Vue from 'vue'
import VueRouter from 'vue-router'
import reuter from "@/pages/reuter.vue"
import forms from "@/pages/forms.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'forms',
    component: forms
  },
  {
    path: '/reuter',
    name: 'reuter',
    component:reuter
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
