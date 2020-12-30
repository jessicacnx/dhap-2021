import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import FAQ from '../views/FAQ.vue'
import Resources from '../views/Resources.vue'
import Schedule from '../views/Schedule.vue'
import Academics from '../views/Academics.vue'
import Contact from '../views/Contact.vue'
import AIA from '../views/AIA.vue'
import AMMTC from '../views/AMMTC.vue'
import HCC from '../views/HCC.vue'
import MATM from '../views/M-ATM.vue'
import UNSC from '../views/UNSC.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/admin',
  name: 'Admin',
  component: Admin
},
{
  path: '/academics',
  name: 'Academics',
  component: Academics
},
{
  path: '/faq',
  name: 'FAQ',
  component: FAQ
},
{
  path: '/resources',
  name: 'Resources',
  component: Resources
},
{
  path: '/schedule',
  name: 'Schedule',
  component: Schedule
},
{
  path: '/contact',
  name: 'Contact',
  component: Contact
},
{
  path: '/aia',
  name: 'AIA',
  component: AIA
},
{
  path: '/ammtc',
  name: 'AMMTC',
  component: AMMTC
},
{
  path: '/hcc',
  name: 'HCC',
  component: HCC
},
{
  path: '/matm',
  name: 'MATM',
  component: MATM
},
{
  path: '/unsc',
  name: 'UNSC',
  component: UNSC
}
]

export default router
