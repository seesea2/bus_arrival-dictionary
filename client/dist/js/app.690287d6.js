(function(t){function e(e){for(var o,c,u=e[0],i=e[1],s=e[2],l=0,b=[];l<u.length;l++)c=u[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&b.push(r[c][0]),r[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);d&&d(e);while(b.length)b.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},c={app:0},r={app:0},a=[];function u(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-25026bc1":"6d5f0e67","chunk-27aec4d1":"ab573b11","chunk-30cd8357":"7f00ab84","chunk-56c9301a":"7836a081","chunk-5caa9e92":"f32039bf","chunk-6b7deecc":"f22f85e5","chunk-190e4a20":"ca05bbda","chunk-2b09332c":"c5fc28cc","chunk-e66b4d48":"466b215d"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-25026bc1":1,"chunk-27aec4d1":1,"chunk-56c9301a":1,"chunk-e66b4d48":1};c[t]?e.push(c[t]):0!==c[t]&&n[t]&&e.push(c[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-25026bc1":"13b9c7b4","chunk-27aec4d1":"6779fb23","chunk-30cd8357":"31d6cfe0","chunk-56c9301a":"72e93b5d","chunk-5caa9e92":"31d6cfe0","chunk-6b7deecc":"31d6cfe0","chunk-190e4a20":"31d6cfe0","chunk-2b09332c":"31d6cfe0","chunk-e66b4d48":"7db46ba7"}[t]+".css",r=i.p+o,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var s=a[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===r))return e()}var b=document.getElementsByTagName("style");for(u=0;u<b.length;u++){s=b[u],l=s.getAttribute("data-href");if(l===o||l===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var o=e&&e.target&&e.target.src||r,a=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete c[t],d.parentNode.removeChild(d),n(a)},d.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){c[t]=0})));var o=r[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise((function(e,n){o=r[t]=[e,n]}));e.push(o[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(t);var b=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;b.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",b.name="ChunkLoadError",b.type=o,b.request=c,n[1](b)}r[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var b=0;b<s.length;b++)e(s[b]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"09ee":function(t,e,n){"use strict";n("5dc5")},"16bb":function(t,e,n){"use strict";n("4a87")},"462f":function(t,e,n){},4754:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return a}));n("e9c4"),n("7db0"),n("d3b7"),n("4de4");function o(t){try{if(c(t.BusStopCode))return!1;var e=r();return e.push(t),localStorage.setItem("busStopBookmarks",JSON.stringify(e)),!0}catch(n){return console.log(n),!1}}function c(t){try{var e=r();return e.find((function(e){return e.BusStopCode===t}))}catch(n){return}}function r(){try{var t=localStorage.getItem("busStopBookmarks"),e=[];return t&&(e=JSON.parse(t)),e}catch(n){return[]}}function a(t){try{var e=r();return e=e.filter((function(e){return e.BusStopCode!==t})),localStorage.setItem("busStopBookmarks",JSON.stringify(e)),!0}catch(n){return!1}}},"4a87":function(t,e,n){},"527e":function(t,e,n){"use strict";n("462f")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function c(t,e,n,c,r,a){var u=Object(o["y"])("router-view"),i=Object(o["y"])("AppFooter"),s=Object(o["y"])("AudioPlayer");return Object(o["r"])(),Object(o["e"])("div",null,[Object(o["h"])(u),Object(o["h"])(i),Object(o["h"])(s)])}var r=function(t){return Object(o["u"])("data-v-8355a0a6"),t=t(),Object(o["s"])(),t},a={id:"audioarea",style:{position:"fixed",bottom:"0px",right:"10px"},class:"w-100 d-none"},u={class:"container-fluid"},i={class:"row no-gutters justify-content-end"},s=r((function(){return Object(o["f"])("audio",{id:"audioplayer",controls:"",class:"col-9 col-sm-auto p-0 m-0"},null,-1)}));function l(t,e,n,c,r,l){return Object(o["r"])(),Object(o["e"])("div",a,[Object(o["f"])("div",u,[Object(o["f"])("div",i,[s,Object(o["f"])("button",{onClick:e[0]||(e[0]=function(t){return l.close()}),class:"col-auto btn rounded-0 m-0 text-white"},"X")])])])}var b={name:"AudioPlayer",methods:{close:function(){try{var t=document.getElementById("audioarea");t.setAttribute("class","d-none");var e=document.getElementById("audioplayer");e.pause()}catch(n){console.log("failure",n)}}}};n("16bb");b.render=l,b.__scopeId="data-v-8355a0a6";var d=b,f=function(t){return Object(o["u"])("data-v-0a7face6"),t=t(),Object(o["s"])(),t},p={class:"text-center fixed-bottom bg-gray small"},h=Object(o["g"])(" We "),O=f((function(){return Object(o["f"])("span",{style:{"font-size":"150%",color:"red"}}," ❤ ",-1)})),j=Object(o["g"])(" SG "),m=[h,O,j];function v(t,e,n,c,r,a){return Object(o["r"])(),Object(o["e"])("footer",p,[Object(o["f"])("span",{onClick:e[0]||(e[0]=function(t){return a.toTop()})},m)])}var g={name:"AppFooter",methods:{toTop:function(){try{document.body.scrollTop=0,document.documentElement.scrollTop=0}catch(t){console.log(t)}}}};n("09ee");g.render=v,g.__scopeId="data-v-0a7face6";var y=g,k={components:{AudioPlayer:d,AppFooter:y}};n("527e");k.render=c;var B=k,S=n("a18c");Object(o["c"])(B).use(S["a"]).mount("#app")},"5dc5":function(t,e,n){},a18c:function(t,e,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0");var o=n("6c02"),c=n("7a23"),r={class:"container py-3"},a={class:"text-center"},u=Object(c["f"])("h2",null,"Bus Arrival Time",-1),i=Object(c["f"])("h6",null,"Get bus arrival time by bus stop code.",-1),s={class:"row justify-content-center mx-0 mt-4"},l={class:"col-12 col-md-6 col-lg-4"},b={class:"input-group"},d={class:"input-group-append"},f={key:0},p={key:0,class:"mt-4"},h=Object(c["f"])("h3",null,"Bus Stop Bookmark",-1),O={class:"table table-sm mt-2"},j=Object(c["f"])("thead",{class:"thead-dark"},[Object(c["f"])("tr",null,[Object(c["f"])("th",{scope:"col"},"BusStop"),Object(c["f"])("th",{scope:"col"},"Name"),Object(c["f"])("th",{scope:"col"},"Remove")])],-1),m=["onClick"],v=["onClick"],g=["onClick"],y={class:"mt-4"},k=Object(c["g"])(" Toggle Nearby Bus Stops "),B={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},S={key:1,class:"table table-sm mt-2"},N=Object(c["f"])("thead",{class:"thead-dark"},[Object(c["f"])("tr",null,[Object(c["f"])("th",{scope:"col"},"BusStop"),Object(c["f"])("th",{scope:"col"},"Name")])],-1),C=["onClick"],A=["onClick"];function w(t,e,n,o,w,P){var I=Object(c["y"])("NavbarVue");return Object(c["r"])(),Object(c["e"])("div",null,[Object(c["h"])(I),Object(c["f"])("div",r,[Object(c["f"])("div",a,[u,i,Object(c["f"])("div",s,[Object(c["f"])("div",l,[Object(c["f"])("div",b,[Object(c["G"])(Object(c["f"])("input",{"onUpdate:modelValue":e[0]||(e[0]=function(t){return w.inputCode=t}),placeholder:"Bus stop code",class:"form-control",onKeyup:e[1]||(e[1]=Object(c["H"])((function(t){return P.getBusArrival()}),["enter"]))},null,544),[[c["D"],w.inputCode]]),Object(c["f"])("div",d,[Object(c["f"])("button",{class:"btn btn-primary",onClick:e[2]||(e[2]=function(t){return P.getBusArrival()})}," Get ")])]),w.inputNote?(Object(c["r"])(),Object(c["e"])("div",f,Object(c["A"])(w.inputNote),1)):Object(c["d"])("",!0)])]),w.bookmarkBusStops&&w.bookmarkBusStops.length?(Object(c["r"])(),Object(c["e"])("div",p,[h,Object(c["f"])("table",O,[j,Object(c["f"])("tbody",null,[(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(w.bookmarkBusStops,(function(t){return Object(c["r"])(),Object(c["e"])("tr",{key:t.BusStopCode},[Object(c["f"])("td",null,[Object(c["f"])("a",{onClick:function(e){return P.getBusArrival(t.BusStopCode)},class:"btn"},Object(c["A"])(t.BusStopCode),9,m)]),Object(c["f"])("td",null,[Object(c["f"])("a",{onClick:function(e){return P.getBusArrival(t.BusStopCode)},class:"btn"},Object(c["A"])(t.Description)+"@"+Object(c["A"])(t.RoadName),9,v)]),Object(c["f"])("td",null,[Object(c["f"])("a",{onClick:function(e){return P.removeBookmark(t.BusStopCode)},class:"btn"}," X ",8,g)])])})),128))])])])):Object(c["d"])("",!0),Object(c["f"])("div",y,[Object(c["f"])("button",{onClick:e[3]||(e[3]=function(){return P.toggleNearbyBusStops&&P.toggleNearbyBusStops.apply(P,arguments)}),class:"btn btn-primary"},[k,w.lodingNearbyBusStops?(Object(c["r"])(),Object(c["e"])("span",B)):Object(c["d"])("",!0)]),Object(c["f"])("div",null,Object(c["A"])(w.getNearbyNote),1)]),w.showNearbyBusStops?(Object(c["r"])(),Object(c["e"])("table",S,[N,Object(c["f"])("tbody",null,[(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(w.nearbyBusStops,(function(t){return Object(c["r"])(),Object(c["e"])("tr",{key:t.busStop.BusStopCode},[Object(c["f"])("td",null,[Object(c["f"])("a",{onClick:function(e){return P.getBusArrival(t.busStop.BusStopCode)},class:"btn"},Object(c["A"])(t.busStop.BusStopCode),9,C)]),Object(c["f"])("td",null,[Object(c["f"])("a",{onClick:function(e){return P.getBusArrival(t.busStop.BusStopCode)},class:"btn"},Object(c["A"])(t.busStop.Description)+"@"+Object(c["A"])(t.busStop.RoadName),9,A)])])})),128))])])):Object(c["d"])("",!0)])])])}n("498a");var P=n("bc3a"),I=n.n(P),T=n("4754"),_=n("d178"),x={name:"BusArrival",components:{NavbarVue:_["a"]},data:function(){return{inputCode:null,inputNote:null,lodingNearbyBusStops:!1,showNearbyBusStops:!1,nearbyBusStops:null,getNearbyNote:null,watchId:null,bookmarkBusStops:null}},created:function(){this.refreshBookmarks()},mounted:function(){document.title="Bus Arrival"},methods:{getBusArrival:function(t){t&&(this.inputCode=t),this.inputCode&&this.inputCode.trim()?(this.inputNote=null,F.push({name:"BusArrivalTime",params:{inputCode:this.inputCode.trim()}})):this.inputNote="Please input bus stop code."},refreshBookmarks:function(){this.bookmarkBusStops=Object(T["c"])()},removeBookmark:function(t){Object(T["d"])(t)&&this.refreshBookmarks()},toggleNearbyBusStops:function(){var t=this;if(this.showNearbyBusStops)return this.showNearbyBusStops=!1,void(this.watchId&&(navigator.geolocation.clearWatch(this.watchId),this.watchId=null));this.lodingNearbyBusStops=!0,navigator&&navigator.geolocation&&(this.watchId=navigator.geolocation.watchPosition((function(e){e&&e.coords&&I.a.get("/api/lta/bus/nearbyBusStops",{params:{latitude:e.coords.latitude,longitude:e.coords.longitude}}).then((function(e){t.nearbyBusStops=e.data,t.showNearbyBusStops=!0})).catch((function(t){console.log(t)})).then(t.lodingNearbyBusStops=!1)}),(function(e){switch(t.lodingNearbyBusStops=!1,t.showNearbyBusStops=!1,e.code){case e.PERMISSION_DENIED:t.getNearbyNote="Request for Geolocation is denied.";break;case e.POSITION_UNAVAILABLE:t.getNearbyNote="Location information is unavailable.";break;case e.TIMEOUT:t.getNearbyNote="Request to get location timed out.";break;default:t.getNearbyNote="An unknown error occurred.";break}})))}}};x.render=w;var E=x,L=[{path:"/",name:"Root",component:E},{path:"/busArrivalTime/:inputCode",name:"BusArrivalTime",component:function(){return n.e("chunk-30cd8357").then(n.bind(null,"78db"))}},{path:"/dictionary/:word?",name:"Dictionary",component:function(){return n.e("chunk-25026bc1").then(n.bind(null,"3349"))}},{path:"/podcast",name:"Podcast",component:function(){return n.e("chunk-56c9301a").then(n.bind(null,"e59d"))}},{path:"/learn/:user?",name:"Learn",component:function(){return n.e("chunk-5caa9e92").then(n.bind(null,"41ce"))}},{path:"/activities",name:"Activities",component:function(){return Promise.all([n.e("chunk-6b7deecc"),n.e("chunk-190e4a20")]).then(n.bind(null,"b9ce"))}},{path:"/act-table",name:"ActivitiesTable",component:function(){return Promise.all([n.e("chunk-6b7deecc"),n.e("chunk-2b09332c")]).then(n.bind(null,"d5e7"))}},{path:"/act-cal",name:"ActivitieCalendar",component:function(){return Promise.all([n.e("chunk-6b7deecc"),n.e("chunk-e66b4d48")]).then(n.bind(null,"ad6e"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-27aec4d1").then(n.bind(null,"a55b"))}}],D=Object(o["a"])({history:Object(o["b"])("/"),routes:L}),F=e["a"]=D},d178:function(t,e,n){"use strict";var o=n("7a23"),c={id:"nav"},r=Object(o["g"])("BusArrival"),a=Object(o["g"])(" ☯ "),u=Object(o["g"])("Dictionary"),i=Object(o["g"])(" ☯ "),s=Object(o["g"])("Podcast"),l=Object(o["g"])(" ☯ "),b=Object(o["g"])("LearnWords");function d(t,e,n,d,f,p){var h=Object(o["y"])("router-link");return Object(o["r"])(),Object(o["e"])("div",c,[Object(o["h"])(h,{to:"/"},{default:Object(o["F"])((function(){return[r]})),_:1}),a,Object(o["h"])(h,{to:"/dictionary"},{default:Object(o["F"])((function(){return[u]})),_:1}),i,Object(o["h"])(h,{to:"/podcast"},{default:Object(o["F"])((function(){return[s]})),_:1}),l,Object(o["h"])(h,{to:"/learn"},{default:Object(o["F"])((function(){return[b]})),_:1})])}var f={name:"NavbarVue"};f.render=d;e["a"]=f}});
//# sourceMappingURL=app.690287d6.js.map