import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Magazine from '../views/Magazine.vue'
import Sports from '../views/Sports.vue'
import report from '../views/report.vue'
import flashnews from "../views/flashnews";
import covidnews from "../views/covidnews";
import article from "../views/article";
import results from "../views/results";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/magazine',
    name: 'Magazine',
    component:Magazine,
  },
  {
    path: '/sports',
    name: 'Sports',
    component:Sports,
  },
  {
    path: '/report',
    name: 'Report case',
    component:report,
  },
  {
    path: '/flashnews',
    name: 'Flash news',
    component:flashnews,
    children: [
      {
        path: 'profile',
        component: covidnews
      }
    ]
  },
  {
    path: '/:title',
    name: 'single_article',
    component: article,
  },
  {
    path: '/results',
    name: 'results',
    component: results,
  },
]
const router = new VueRouter({
  routes
})

export default router
