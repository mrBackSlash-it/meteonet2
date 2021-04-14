//BASIC IMPORTS
import Vue from 'vue'
import App from './App'
import './registerServiceWorker'
//SIDEBAR AND PAGE ROUTING
import VueRouter from "vue-router";
import VueSidebarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
//COMPONENTS
import MapActivity from './components/MapActivity/MapActivity'
import StationDetailsActivity from './components/StationDetailsActivity/StationDetailsActivity'
import ArchiveActivity from './components/ArchiveActivity/ArchiveActivity'
import WebcamsActivity from './components/WebcamsActivity/WebcamsActivity'
import CreditsActivity from './components/CreditsActivity/CreditsActivity'

Vue.use(VueRouter);
Vue.use(VueSidebarMenu);
Vue.config.productionTip = false

const router = new VueRouter({
  routes:[
    {
      path: "/",
      name: "MapActivity",
      component: MapActivity
    },
    {
      path: "/details",
      name: "StationDetailsActivity",
      component: StationDetailsActivity
    },
    {
      path: "/archive",
      name: "ArchiveActivity",
      component: ArchiveActivity
    },
    {
      path: "/webcams",
      name: "WebcamsActivity",
      component: WebcamsActivity
    },
    {
      path: "/credits",
      name: "CreditsActivity",
      component: CreditsActivity
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
