(function(e){function t(t){for(var o,c,u=t[0],l=t[1],i=t[2],s=0,d=[];s<u.length;s++)c=u[s],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);b&&b(t);while(d.length)d.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},c={app:0},r={app:0},a=[];function u(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-0ef76775":"ea96e705","chunk-30cd8357":"53787ef6","chunk-5caa9e92":"10b72522","chunk-7889f384":"8e781927","chunk-2d2258b1":"8c8da143","chunk-f8ca72be":"af5cb907","chunk-2d0ac238":"9cda3756","chunk-2d21e979":"0b2f19b7","chunk-3e454ddc":"8ede56b4"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-0ef76775":1,"chunk-f8ca72be":1,"chunk-3e454ddc":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-0ef76775":"e69af229","chunk-30cd8357":"31d6cfe0","chunk-5caa9e92":"31d6cfe0","chunk-7889f384":"31d6cfe0","chunk-2d2258b1":"31d6cfe0","chunk-f8ca72be":"90b499d7","chunk-2d0ac238":"31d6cfe0","chunk-2d21e979":"31d6cfe0","chunk-3e454ddc":"7db46ba7"}[e]+".css",r=l.p+o,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var i=a[u],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===o||s===r))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){i=d[u],s=i.getAttribute("data-href");if(s===o||s===r)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var o=t&&t.target&&t.target.src||r,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete c[e],b.parentNode.removeChild(b),n(a)},b.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(b)})).then((function(){c[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=a);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=u(e);var d=new Error;i=function(t){s.onerror=s.onload=null,clearTimeout(b);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",d.name="ChunkLoadError",d.type=o,d.request=c,n[1](d)}r[e]=void 0}};var b=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var b=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0c7d":function(e,t,n){"use strict";n("d305")},"1a31":function(e,t,n){"use strict";n("769e")},4754:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return a}));n("e9c4"),n("7db0"),n("d3b7"),n("4de4");function o(e){try{if(c(e.BusStopCode))return!1;var t=r();return t.push(e),localStorage.setItem("busStopBookmarks",JSON.stringify(t)),!0}catch(n){return console.log(n),!1}}function c(e){try{var t=r();return t.find((function(t){return t.BusStopCode===e}))}catch(n){return}}function r(){try{var e=localStorage.getItem("busStopBookmarks"),t=[];return e&&(t=JSON.parse(e)),t}catch(n){return[]}}function a(e){try{var t=r();return t=t.filter((function(t){return t.BusStopCode!==e})),localStorage.setItem("busStopBookmarks",JSON.stringify(t)),!0}catch(n){return!1}}},"551c":function(e,t,n){"use strict";n("a336")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("be92"),c=n("7a23"),r=function(e){return Object(c["pushScopeId"])("data-v-389bfe40"),e=e(),Object(c["popScopeId"])(),e},a={id:"audioarea",style:{position:"fixed",bottom:"3rem",right:"1rem"},class:"w-100 d-none"},u={class:"container-fluid"},l={class:"row no-gutters justify-content-end"},i=r((function(){return Object(c["createElementVNode"])("audio",{id:"audioplayer",controls:"",class:"col-9 col-sm-auto p-0 m-0"},null,-1)})),s={name:"AudioPlayer",setup:function(e){function t(){try{var e=document.getElementById("audioarea");e.setAttribute("class","d-none");var t=document.getElementById("audioplayer");t.pause()}catch(n){console.log("failure",n)}}return function(e,n){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",a,[Object(c["createElementVNode"])("div",u,[Object(c["createElementVNode"])("div",l,[i,Object(c["createElementVNode"])("button",{onClick:n[0]||(n[0]=function(e){return t()}),class:"col-auto btn rounded-0 m-0 text-white"}," X ")])])])}}},d=(n("551c"),n("6b0d")),b=n.n(d);const p=b()(s,[["__scopeId","data-v-389bfe40"]]);var f=p,m=function(e){return Object(c["pushScopeId"])("data-v-6eda6b56"),e=e(),Object(c["popScopeId"])(),e},O={class:"text-center fixed-bottom bg-mygray small py-1"},h=Object(c["createTextVNode"])(" We "),j=m((function(){return Object(c["createElementVNode"])("span",{style:{"font-size":"150%",color:"red"}},"❤",-1)})),k=Object(c["createTextVNode"])(" SG "),N=[h,j,k],v={name:"AppFooter",setup:function(e){function t(){try{document.body.scrollTop=0,document.documentElement.scrollTop=0}catch(e){console.log(e)}}return function(e,n){return Object(c["openBlock"])(),Object(c["createElementBlock"])("footer",O,[Object(c["createElementVNode"])("span",{onClick:n[0]||(n[0]=function(e){return t()}),"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Scroll to top"},N)])}}};n("0c7d");const y=b()(v,[["__scopeId","data-v-6eda6b56"]]);var g=y,B={name:"App",setup:function(e){return function(e,t){var n=Object(c["resolveComponent"])("router-view");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",null,[Object(c["createVNode"])(n),Object(c["createVNode"])(g),Object(c["createVNode"])(f)])}}};n("b325");const S=B;var E=S,V=n("a18c");Object(c["createApp"])(E).use(Object(o["a"])()).use(V["a"]).mount("#app")},"769e":function(e,t,n){},a18c:function(e,t,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0");var o=n("6c02"),c=(n("498a"),n("7a23")),r=n("bc3a"),a=n.n(r),u=n("d178"),l=n("4754"),i={class:"container py-3"},s={class:"text-center"},d=Object(c["createElementVNode"])("h2",null,"Bus Arrival Time",-1),b=Object(c["createElementVNode"])("h6",null,"Get bus arrival time by bus stop code.",-1),p={class:"row justify-content-center mx-0 mt-4"},f={class:"col-12 col-md-6 col-lg-4"},m={class:"input-group"},O={class:"input-group-append"},h={key:0},j={key:0,class:"mt-4"},k=Object(c["createElementVNode"])("h3",null,"Bus Stop Bookmark",-1),N={class:"table table-sm mt-2"},v=Object(c["createElementVNode"])("thead",{class:"thead-dark"},[Object(c["createElementVNode"])("tr",null,[Object(c["createElementVNode"])("th",{scope:"col"},"BusStop"),Object(c["createElementVNode"])("th",{scope:"col"},"Name"),Object(c["createElementVNode"])("th",{scope:"col"},"Remove")])],-1),y=["onClick"],g=["onClick"],B=["onClick"],S={class:"mt-4"},E=Object(c["createTextVNode"])(" Toggle Nearby Bus Stops "),V={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},C={key:1,class:"table table-sm mt-2"},w=Object(c["createElementVNode"])("thead",{class:"thead-dark"},[Object(c["createElementVNode"])("tr",null,[Object(c["createElementVNode"])("th",{scope:"col"},"BusStop"),Object(c["createElementVNode"])("th",{scope:"col"},"Name")])],-1),T=["onClick"],x=["onClick"],A={name:"BusArrival",setup:function(e){document.title="Bus Arrival";var t=Object(c["reactive"])({inputCode:null,inputNote:null,lodingNearbyBusStops:!1,showNearbyBusStops:!1,nearbyBusStops:null,getNearbyNote:null,watchId:null,bookmarkBusStops:null});function n(e){e&&(t.inputCode=e),t.inputCode&&t.inputCode.trim()?(t.inputNote=null,L.push({name:"BusArrivalTime",params:{inputCode:t.inputCode.trim()}})):t.inputNote="Please input bus stop code."}function o(){t.bookmarkBusStops=Object(l["c"])()}function r(e){Object(l["d"])(e)&&t.refreshBookmarks()}function A(){if(t.showNearbyBusStops)return t.showNearbyBusStops=!1,void(t.watchId&&(navigator.geolocation.clearWatch(t.watchId),t.watchId=null));t.lodingNearbyBusStops=!0,navigator&&navigator.geolocation&&(t.watchId=navigator.geolocation.watchPosition((function(e){e&&e.coords&&a.a.get("/api/lta/bus/nearbyBusStops",{params:{latitude:e.coords.latitude,longitude:e.coords.longitude}}).then((function(e){t.nearbyBusStops=e.data,t.showNearbyBusStops=!0})).catch((function(e){console.log(e)})).then(t.lodingNearbyBusStops=!1)}),(function(e){switch(t.lodingNearbyBusStops=!1,t.showNearbyBusStops=!1,e.code){case e.PERMISSION_DENIED:t.getNearbyNote="Request for Geolocation is denied.";break;case e.POSITION_UNAVAILABLE:t.getNearbyNote="Location information is unavailable.";break;case e.TIMEOUT:t.getNearbyNote="Request to get location timed out.";break;default:t.getNearbyNote="An unknown error occurred.";break}})))}return Object(c["onBeforeMount"])((function(){o()})),function(e,o){return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createVNode"])(u["a"]),Object(c["createElementVNode"])("div",i,[Object(c["createElementVNode"])("div",s,[d,b,Object(c["createElementVNode"])("div",p,[Object(c["createElementVNode"])("div",f,[Object(c["createElementVNode"])("div",m,[Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{"onUpdate:modelValue":o[0]||(o[0]=function(e){return Object(c["unref"])(t).inputCode=e}),placeholder:"Bus stop code",class:"form-control",onKeyup:o[1]||(o[1]=Object(c["withKeys"])((function(e){return n()}),["enter"]))},null,544),[[c["vModelText"],Object(c["unref"])(t).inputCode,void 0,{trim:!0}]]),Object(c["createElementVNode"])("div",O,[Object(c["createElementVNode"])("button",{class:"btn btn-primary",onClick:o[2]||(o[2]=function(e){return n()})}," Get ")])]),Object(c["unref"])(t).inputNote?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",h,Object(c["toDisplayString"])(Object(c["unref"])(t).inputNote),1)):Object(c["createCommentVNode"])("",!0)])]),Object(c["unref"])(t).bookmarkBusStops&&Object(c["unref"])(t).bookmarkBusStops.length?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",j,[k,Object(c["createElementVNode"])("table",N,[v,Object(c["createElementVNode"])("tbody",null,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(Object(c["unref"])(t).bookmarkBusStops,(function(e){return Object(c["openBlock"])(),Object(c["createElementBlock"])("tr",{key:e.BusStopCode},[Object(c["createElementVNode"])("td",null,[Object(c["createElementVNode"])("a",{onClick:function(t){return n(e.BusStopCode)},class:"btn"},Object(c["toDisplayString"])(e.BusStopCode),9,y)]),Object(c["createElementVNode"])("td",null,[Object(c["createElementVNode"])("a",{onClick:function(t){return n(e.BusStopCode)},class:"btn"},Object(c["toDisplayString"])(e.Description)+"@"+Object(c["toDisplayString"])(e.RoadName),9,g)]),Object(c["createElementVNode"])("td",null,[Object(c["createElementVNode"])("a",{onClick:function(t){return r(e.BusStopCode)},class:"btn"},"X",8,B)])])})),128))])])])):Object(c["createCommentVNode"])("",!0),Object(c["createElementVNode"])("div",S,[Object(c["createElementVNode"])("button",{onClick:A,class:"btn btn-primary"},[E,Object(c["unref"])(t).lodingNearbyBusStops?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",V)):Object(c["createCommentVNode"])("",!0)]),Object(c["createElementVNode"])("div",null,Object(c["toDisplayString"])(Object(c["unref"])(t).getNearbyNote),1)]),Object(c["unref"])(t).showNearbyBusStops?(Object(c["openBlock"])(),Object(c["createElementBlock"])("table",C,[w,Object(c["createElementVNode"])("tbody",null,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(Object(c["unref"])(t).nearbyBusStops,(function(e){return Object(c["openBlock"])(),Object(c["createElementBlock"])("tr",{key:e.busStop.BusStopCode},[Object(c["createElementVNode"])("td",null,[Object(c["createElementVNode"])("a",{onClick:function(t){return n(e.busStop.BusStopCode)},class:"btn"},Object(c["toDisplayString"])(e.busStop.BusStopCode),9,T)]),Object(c["createElementVNode"])("td",null,[Object(c["createElementVNode"])("a",{onClick:function(t){return n(e.busStop.BusStopCode)},class:"btn"},Object(c["toDisplayString"])(e.busStop.Description)+"@"+Object(c["toDisplayString"])(e.busStop.RoadName),9,x)])])})),128))])])):Object(c["createCommentVNode"])("",!0)])])],64)}}};const I=A;var P=I,_=[{path:"/",name:"Root",component:P},{path:"/busArrivalTime/:inputCode",name:"BusArrivalTime",component:function(){return n.e("chunk-30cd8357").then(n.bind(null,"78db"))}},{path:"/podcast",name:"Podcast",component:function(){return Promise.all([n.e("chunk-7889f384"),n.e("chunk-2d2258b1")]).then(n.bind(null,"e59d"))}},{path:"/learn/:user?",name:"Learn",component:function(){return n.e("chunk-5caa9e92").then(n.bind(null,"41ce"))}},{path:"/activities",name:"Activities",component:function(){return Promise.all([n.e("chunk-7889f384"),n.e("chunk-f8ca72be"),n.e("chunk-2d0ac238")]).then(n.bind(null,"17ea"))}},{path:"/act-table",name:"ActivitiesTable",component:function(){return Promise.all([n.e("chunk-7889f384"),n.e("chunk-f8ca72be"),n.e("chunk-2d21e979")]).then(n.bind(null,"d5e7"))}},{path:"/act-cal",name:"ActivitieCalendar",component:function(){return Promise.all([n.e("chunk-7889f384"),n.e("chunk-f8ca72be"),n.e("chunk-3e454ddc")]).then(n.bind(null,"ad6e"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-0ef76775").then(n.bind(null,"a55b"))}}],D=Object(o["a"])({history:Object(o["b"])("/"),routes:_}),L=t["a"]=D},a336:function(e,t,n){},b325:function(e,t,n){"use strict";n("bc2a")},bc2a:function(e,t,n){},d178:function(e,t,n){"use strict";var o=n("7a23"),c={id:"nav",class:"p-3"},r=Object(o["createTextVNode"])("BusArrival"),a=Object(o["createTextVNode"])("☯ "),u=Object(o["createTextVNode"])("Podcast"),l=Object(o["createTextVNode"])("☯ "),i=Object(o["createTextVNode"])("LearnWords");function s(e,t){var n=Object(o["resolveComponent"])("router-link");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",c,[Object(o["createVNode"])(n,{to:"/"},{default:Object(o["withCtx"])((function(){return[r]})),_:1}),a,Object(o["createVNode"])(n,{to:"/podcast"},{default:Object(o["withCtx"])((function(){return[u]})),_:1}),l,Object(o["createVNode"])(n,{to:"/learn"},{default:Object(o["withCtx"])((function(){return[i]})),_:1})])}n("1a31");var d=n("6b0d"),b=n.n(d);const p={},f=b()(p,[["render",s],["__scopeId","data-v-2b3e2247"]]);t["a"]=f},d305:function(e,t,n){}});
//# sourceMappingURL=app.3df9e07e.js.map