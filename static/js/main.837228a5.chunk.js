(this.webpackJsonpweatherlab360=this.webpackJsonpweatherlab360||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},44:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),a=c(17),s=c.n(a),o=(c(31),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,66)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))}),r=c(25),j=c(4),h=c(56),l=c(65),b=c(57),d=c(58),x=c(59),O=(c(32),c(7)),m=c.n(O),u=c.p+"static/media/stat-icon.d4a22b41.svg",v=new m.a.Icon({iconUrl:u,iconRetinaUrl:u,iconAnchor:null,popupAnchor:[0,-20],shadowUrl:null,shadowSize:null,shadowAnchor:null,iconSize:new m.a.Point(30,30),className:"leaflet-div-icon"}),g=c(1);var p=function(){return Object(g.jsx)("div",{className:"MapActivity",children:Object(g.jsx)("div",{className:"leaflet-container",children:Object(g.jsxs)(h.a,{center:[41.7892,15.7416],zoom:11,children:[Object(g.jsx)(l.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors | <a href="/info">WeatherLab360</a> visualizer',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(g.jsxs)(b.a,{position:[41.7892,15.7416],icon:v,children:[Object(g.jsx)(d.a,{children:"MARKER DI ESEMPIO"}),Object(g.jsx)(x.a,{direction:"left",offset:[-20,0],opacity:1,permanent:!0,children:Object(g.jsx)("b",{children:"10C\xb0"})})]})]})})})};c(34);var f=function(){return Object(g.jsx)("div",{className:"WebcamsActivity",children:Object(g.jsx)("h1",{children:"Webcams"})})};c(35);var N=function(){return Object(g.jsx)("div",{className:"StationDetails",children:Object(g.jsx)("h1",{children:"Dettaglio stazione"})})};c(36);var w=function(){return Object(g.jsx)("div",{className:"ArchiveActivity",children:Object(g.jsx)("h1",{children:"Consulta archivio meteo"})})},I=(c(37),c.p+"static/media/m1.d7397f05.png");var y=function(){return Object(g.jsx)("div",{className:"InfoActivity",children:Object(g.jsx)("div",{class:"row w-100 justify-content-center align-items-center",style:{height:"100vh"},children:Object(g.jsx)("div",{class:"col-auto",children:Object(g.jsx)("div",{class:"row",children:Object(g.jsxs)("div",{class:"col s-col",children:[Object(g.jsx)("img",{src:I,alt:"Logo Meteogargano",className:"logo-inf"}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("h1",{children:"WeatherLab360"}),Object(g.jsx)("h5",{children:"Un progetto dell' associazione MeteoGargano."}),Object(g.jsxs)("p",{children:["Realizzato da ",Object(g.jsx)("a",{href:"https://vitto.dev",children:"Vittorio Lo Mele"})," e ",Object(g.jsx)("a",{href:"mailto:ziofil@gmail.com",children:"Filippo Gurgoglione"}),Object(g.jsx)("br",{}),"Il codice sorgente dell'app \xe8 mantenuto su ",Object(g.jsx)("a",{href:"https://github.com/meteogargano/WeatherLab360",children:"GitHub"})]}),Object(g.jsx)("img",{src:"https://github.com/meteogargano/WeatherLab360/workflows/NodeJS%20CI/CD/badge.svg",alt:"NodeJS CI/CD"}),Object(g.jsx)("span",{children:" "}),Object(g.jsx)("img",{src:"https://github.com/meteogargano/WeatherLab360/workflows/CodeQL%20Analisys/badge.svg",alt:"CodeQL"}),Object(g.jsx)("span",{children:" "}),Object(g.jsx)("img",{src:"https://img.shields.io/github/license/meteogargano/WeatherLab360?label=License",alt:"License"})]})})})})})},L=c(60),z=c(61),S=c(62),A=c(63),C=c(64),M=c(5),W=c.n(M);c(44);var T=function(){return Object(g.jsx)(r.a,{children:Object(g.jsx)(j.a,{render:function(e){var t=e.location,c=e.history;return Object(g.jsxs)(i.a.Fragment,{children:[Object(g.jsxs)(W.a,{onSelect:function(e){var n="/"+e;t.pathname!==n&&("home"===e?c.push("/"):c.push(n))},children:[Object(g.jsx)(W.a.Toggle,{}),Object(g.jsxs)(W.a.Nav,{defaultSelected:"home",children:[Object(g.jsxs)(M.NavItem,{eventKey:"home",children:[Object(g.jsx)(M.NavIcon,{children:Object(g.jsx)(L.a,{width:"1.75em",height:"1.75em"})}),Object(g.jsx)(M.NavText,{children:"Mappa"})]}),Object(g.jsxs)(M.NavItem,{eventKey:"details",children:[Object(g.jsx)(M.NavIcon,{children:Object(g.jsx)(z.a,{width:"1.75em",height:"1.75em"})}),Object(g.jsx)(M.NavText,{children:"Dettaglio Stazioni"})]}),Object(g.jsxs)(M.NavItem,{eventKey:"archive",children:[Object(g.jsx)(M.NavIcon,{children:Object(g.jsx)(S.a,{width:"1.75em",height:"1.75em"})}),Object(g.jsx)(M.NavText,{children:"Archivio Meteo"})]}),Object(g.jsxs)(M.NavItem,{eventKey:"webcams",children:[Object(g.jsx)(M.NavIcon,{children:Object(g.jsx)(A.a,{width:"1.75em",height:"1.75em"})}),Object(g.jsx)(M.NavText,{children:"Webcams"})]}),Object(g.jsxs)(M.NavItem,{eventKey:"info",children:[Object(g.jsx)(M.NavIcon,{children:Object(g.jsx)(C.a,{width:"1.75em",height:"1.75em"})}),Object(g.jsx)(M.NavText,{children:"Informazioni"})]})]})]}),Object(g.jsxs)("main",{className:"main",children:[Object(g.jsx)(j.a,{path:"/",exact:!0,component:function(e){return Object(g.jsx)(p,{})}}),Object(g.jsx)(j.a,{path:"/details",component:function(e){return Object(g.jsx)(N,{})}}),Object(g.jsx)(j.a,{path:"/archive",component:function(e){return Object(g.jsx)(w,{})}}),Object(g.jsx)(j.a,{path:"/webcams",component:function(e){return Object(g.jsx)(f,{})}}),Object(g.jsx)(j.a,{path:"/info",component:function(e){return Object(g.jsx)(y,{})}})]})]})}})})};c(48),c(49),c(50),c(51);s.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(T,{})}),document.getElementById("root")),o()}},[[52,1,2]]]);
//# sourceMappingURL=main.837228a5.chunk.js.map