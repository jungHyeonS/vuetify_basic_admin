import Vue from 'vue'
import VueRouter from 'vue-router'
import reuter from "@/pages/reuter.vue"
import DashBoard from "@/pages/dashboard.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'DashBoard',
    component: DashBoard
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
