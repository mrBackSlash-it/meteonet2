(this.webpackJsonpweatherlab360=this.webpackJsonpweatherlab360||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},44:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),a=c(16),s=c.n(a),o=(c(31),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,65)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))}),r=c(24),j=c(4),h=c(56),l=c(64),b=c(57),d=c(58),x=(c(32),c(10)),O=c.n(x),m=c.p+"static/media/stat-icon.d4a22b41.svg",u=new O.a.Icon({iconUrl:m,iconRetinaUrl:m,iconAnchor:null,popupAnchor:[0,-20],shadowUrl:null,shadowSize:null,shadowAnchor:null,iconSize:new O.a.Point(30,30),className:"leaflet-div-icon"}),v=c(1);var g=function(){return Object(v.jsx)("div",{className:"MapActivity",children:Object(v.jsx)("div",{className:"leaflet-container",children:Object(v.jsxs)(h.a,{center:[41.7892,15.7416],zoom:11,children:[Object(v.jsx)(l.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors | <a href="/info">WeatherLab360</a> visualizer',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(v.jsx)(b.a,{position:[41.7892,15.7416],icon:u,children:Object(v.jsx)(d.a,{children:"MARKER DI ESEMPIO"})})]})})})};c(34);var p=function(){return Object(v.jsx)("div",{className:"WebcamsActivity",children:Object(v.jsx)("h1",{children:"Webcams"})})};c(35);var f=function(){return Object(v.jsx)("div",{className:"StationDetails",children:Object(v.jsx)("h1",{children:"Dettaglio stazione"})})};c(36);var N=function(){return Object(v.jsx)("div",{className:"ArchiveActivity",children:Object(v.jsx)("h1",{children:"Consulta archivio meteo"})})},w=(c(37),c.p+"static/media/m1.d7397f05.png");var I=function(){return Object(v.jsx)("div",{className:"InfoActivity",children:Object(v.jsx)("div",{class:"row w-100 justify-content-center align-items-center",style:{height:"100vh"},children:Object(v.jsx)("div",{class:"col-auto",children:Object(v.jsx)("div",{class:"row",children:Object(v.jsxs)("div",{class:"col s-col",children:[Object(v.jsx)("img",{src:w,alt:"Logo Meteogargano",className:"logo-inf"}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("h1",{children:"WeatherLab360"}),Object(v.jsx)("h5",{children:"Un progetto dell' associazione MeteoGargano."}),Object(v.jsxs)("p",{children:["Realizzato da ",Object(v.jsx)("a",{href:"https://vitto.dev",children:"Vittorio Lo Mele"})," e ",Object(v.jsx)("a",{href:"mailto:ziofil@gmail.com",children:"Filippo Gurgoglione"}),Object(v.jsx)("br",{}),"Il codice sorgente dell'app \xe8 mantenuto su ",Object(v.jsx)("a",{href:"https://github.com/meteogargano/WeatherLab360",children:"GitHub"})]}),Object(v.jsx)("img",{src:"https://github.com/meteogargano/WeatherLab360/workflows/NodeJS%20CI/CD/badge.svg",alt:"NodeJS CI/CD"}),Object(v.jsx)("span",{children:" "}),Object(v.jsx)("img",{src:"https://github.com/meteogargano/WeatherLab360/workflows/CodeQL%20Analisys/badge.svg",alt:"CodeQL"}),Object(v.jsx)("span",{children:" "}),Object(v.jsx)("img",{src:"https://img.shields.io/github/license/meteogargano/WeatherLab360?label=License",alt:"License"})]})})})})})},y=c(59),L=c(60),z=c(61),S=c(62),A=c(63),C=c(5),M=c.n(C);c(44);var W=function(){return Object(v.jsx)(r.a,{children:Object(v.jsx)(j.a,{render:function(e){var t=e.location,c=e.history;return Object(v.jsxs)(i.a.Fragment,{children:[Object(v.jsxs)(M.a,{onSelect:function(e){var n="/"+e;t.pathname!==n&&("home"===e?c.push("/"):c.push(n))},children:[Object(v.jsx)(M.a.Toggle,{}),Object(v.jsxs)(M.a.Nav,{defaultSelected:"home",children:[Object(v.jsxs)(C.NavItem,{eventKey:"home",children:[Object(v.jsx)(C.NavIcon,{children:Object(v.jsx)(y.a,{width:"1.75em",height:"1.75em"})}),Object(v.jsx)(C.NavText,{children:"Mappa"})]}),Object(v.jsxs)(C.NavItem,{eventKey:"details",children:[Object(v.jsx)(C.NavIcon,{children:Object(v.jsx)(L.a,{width:"1.75em",height:"1.75em"})}),Object(v.jsx)(C.NavText,{children:"Dettaglio Stazioni"})]}),Object(v.jsxs)(C.NavItem,{eventKey:"archive",children:[Object(v.jsx)(C.NavIcon,{children:Object(v.jsx)(z.a,{width:"1.75em",height:"1.75em"})}),Object(v.jsx)(C.NavText,{children:"Archivio Meteo"})]}),Object(v.jsxs)(C.NavItem,{eventKey:"webcams",children:[Object(v.jsx)(C.NavIcon,{children:Object(v.jsx)(S.a,{width:"1.75em",height:"1.75em"})}),Object(v.jsx)(C.NavText,{children:"Webcams"})]}),Object(v.jsxs)(C.NavItem,{eventKey:"info",children:[Object(v.jsx)(C.NavIcon,{children:Object(v.jsx)(A.a,{width:"1.75em",height:"1.75em"})}),Object(v.jsx)(C.NavText,{children:"Informazioni"})]})]})]}),Object(v.jsxs)("main",{className:"main",children:[Object(v.jsx)(j.a,{path:"/",exact:!0,component:function(e){return Object(v.jsx)(g,{})}}),Object(v.jsx)(j.a,{path:"/details",component:function(e){return Object(v.jsx)(f,{})}}),Object(v.jsx)(j.a,{path:"/archive",component:function(e){return Object(v.jsx)(N,{})}}),Object(v.jsx)(j.a,{path:"/webcams",component:function(e){return Object(v.jsx)(p,{})}}),Object(v.jsx)(j.a,{path:"/info",component:function(e){return Object(v.jsx)(I,{})}})]})]})}})})};c(48),c(49),c(50),c(51);s.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(W,{})}),document.getElementById("root")),o()}},[[52,1,2]]]);
//# sourceMappingURL=main.0288a2ce.chunk.js.map