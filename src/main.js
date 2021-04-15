/* 
MIT License

Copyright (c) 2021 Associazione MeteoGargano
Copyright (c) 2021 Vittorio Lo Mele  [AUTHOR OF THIS FILE]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

//BASIC IMPORTS
import Vue from 'vue';
import App from './App';
import './registerServiceWorker';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
//SIDEBAR AND PAGE ROUTING
import VueRouter from "vue-router";
import VueSidebarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//COMPONENTS
import MapActivity from './components/MapActivity/MapActivity';
import StationDetailsActivity from './components/StationDetailsActivity/StationDetailsActivity';
import ArchiveActivity from './components/ArchiveActivity/ArchiveActivity';
import WebcamsActivity from './components/WebcamsActivity/WebcamsActivity';
import CreditsActivity from './components/CreditsActivity/CreditsActivity';

Vue.use(VueRouter);
Vue.use(VueSidebarMenu);

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
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
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');