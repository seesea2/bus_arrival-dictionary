(function(t){function e(e){for(var o,c,u=e[0],i=e[1],s=e[2],l=0,b=[];l<u.length;l++)c=u[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&b.push(r[c][0]),r[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);d&&d(e);while(b.length)b.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},c={app:0},r={app:0},a=[];function u(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-25026bc1":"1b321973","chunk-30cd8357":"7ca83bf3","chunk-3906e254":"ade6392b","chunk-190e4a20":"99b04990","chunk-2b09332c":"6ef427ec","chunk-e66b4d48":"da9b6edb","chunk-5caa9e92":"9b854b18","chunk-73ca70b2":"ccc897aa","chunk-84b21cdc":"31c9e358"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-25026bc1":1,"chunk-3906e254":1,"chunk-e66b4d48":1,"chunk-84b21cdc":1};c[t]?e.push(c[t]):0!==c[t]&&n[t]&&e.push(c[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-25026bc1":"13b9c7b4","chunk-30cd8357":"31d6cfe0","chunk-3906e254":"0099459d","chunk-190e4a20":"31d6cfe0","chunk-2b09332c":"31d6cfe0","chunk-e66b4d48":"7db46ba7","chunk-5caa9e92":"31d6cfe0","chunk-73ca70b2":"31d6cfe0","chunk-84b21cdc":"0957bdf0"}[t]+".css",r=i.p+o,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var s=a[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===r))return e()}var b=document.getElementsByTagName("style");for(u=0;u<b.length;u++){s=b[u],l=s.getAttribute("data-href");if(l===o||l===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var o=e&&e.target&&e.target.src||r,a=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete c[t],d.parentNode.removeChild(d),n(a)},d.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){c[t]=0})));var o=r[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise((function(e,n){o=r[t]=[e,n]}));e.push(o[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(t);var b=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;b.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",b.name="ChunkLoadError",b.type=o,b.request=c,n[1](b)}r[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var b=0;b<s.length;b++)e(s[b]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1af9":function(t,e,n){},"1cf2":function(t,e,n){"use strict";n("d1bb")},4754:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return a}));n("e9c4"),n("7db0"),n("d3b7"),n("4de4");function o(t){try{if(c(t.BusStopCode))return!1;var e=r();return e.push(t),localStorage.setItem("busStopBookmarks",JSON.stringify(e)),!0}catch(n){return console.log(n),!1}}function c(t){try{var e=r();return e.find((function(e){return e.BusStopCode===t}))}catch(n){return}}function r(){try{var t=localStorage.getItem("busStopBookmarks"),e=[];return t&&(e=JSON.parse(t)),e}catch(n){return[]}}function a(t){try{var e=r();return e=e.filter((function(e){return e.BusStopCode!==t})),localStorage.setItem("busStopBookmarks",JSON.stringify(e)),!0}catch(n){return!1}}},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function c(t,e,n,c,r,a){var u=Object(o["z"])("router-view"),i=Object(o["z"])("AppFooter"),s=Object(o["z"])("AudioPlayer");return Object(o["s"])(),Object(o["e"])("div",null,[Object(o["i"])(u),Object(o["i"])(i),Object(o["i"])(s)])}var r=function(t){return Object(o["v"])("data-v-998f764a"),t=t(),Object(o["t"])(),t},a={id:"audioarea",style:{position:"fixed",bottom:"3rem",right:"1rem"},class:"w-100 d-none"},u={class:"container-fluid"},i={class:"row no-gutters justify-content-end"},s=r((function(){return Object(o["f"])("audio",{id:"audioplayer",controls:"",class:"col-9 col-sm-auto p-0 m-0"},null,-1)}));function l(t,e,n,c,r,l){return Object(o["s"])(),Object(o["e"])("div",a,[Object(o["f"])("div",u,[Object(o["f"])("div",i,[s,Object(o["f"])("button",{onClick:e[0]||(e[0]=function(t){return l.close()}),class:"col-auto btn rounded-0 m-0 text-white"}," X ")])])])}var b={name:"AudioPlayer",methods:{close:function(){try{var t=document.getElementById("audioarea");t.setAttribute("class","d-none");var e=document.getElementById("audioplayer");e.pause()}catch(n){console.log("failure",n)}}}};n("75e8");b.render=l,b.__scopeId="data-v-998f764a";var d=b,f=function(t){return Object(o["v"])("data-v-74fd9102"),t=t(),Object(o["t"])(),t},p={class:"text-center fixed-bottom bg-mygray small py-1"},h=Object(o["h"])(" We "),O=f((function(){return Object(o["f"])("span",{style:{"font-size":"150%",color:"red"}}," ❤ ",-1)})),j=Object(o["h"])(" SG "),m=[h,O,j];function v(t,e,n,c,r,a){return Object(o["s"])(),Object(o["e"])("footer",p,[Object(o["f"])("span",{onClick:e[0]||(e[0]=function(t){return a.toTop()}),"data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Scroll to top"},m)])}var k={name:"AppFooter",methods:{toTop:function(){try{document.body.scrollTop=0,document.documentElement.scrollTop=0}catch(t){console.log(t)}}}};n("8432");k.render=v,k.__scopeId="data-v-74fd9102";var y=k,g={components:{AudioPlayer:d,AppFooter:y}};n("1cf2");g.render=c;var B=g,S=n("a18c");Object(o["c"])(B).use(S["a"]).mount("#app")},"5e2f":function(t,e,n){"use strict";n("e679")},"75e8":function(t,e,n){"use strict";n("1af9")},"801e":function(t,e,n){},8432:function(t,e,n){"use strict";n("801e")},a18c:function(t,e,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0");var o=n("6c02"),c=n("7a23"),r={class:"container py-3"},a={class:"text-center"},u=Object(c["f"])("h2",null,"Bus Arrival Time",-1),i=Object(c["f"])("h6",null,"Get bus arrival time by bus stop code.",-1),s={class:"row justify-content-center mx-0 mt-4"},l={class:"col-12 col-md-6 col-lg-4"},b={class:"input-group"},d={class:"input-group-append"},f={key:0},p={key:0,class:"mt-4"},h=Object(c["f"])("h3",null,"Bus Stop Bookmark",-1),O={class:"table table-sm mt-2"},j=Object(c["f"])("thead",{class:"thead-dark"},[Object(c["f"])("tr",null,[Object(c["f"])("th",{scope:"col"},"BusStop"),Object(c["f"])("th",{scope:"col"},"Name"),Object(c["f"])("th",{scope:"col"},"Remove")])],-1),m=["onClick"],v=["onClick"],k=["onClick"],y={class:"mt-4"},g=Object(c["h"])(" Toggle Nearby Bus Stops "),B={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},S={key:1,class:"table table-sm mt-2"},N=Object(c["f"])("thead",{class:"thead-dark"},[Object(c["f"])("tr",null,[Object(c["f"])("th",{scope:"col"},"BusStop"),Object(c["f"])("th",{scope:"col"},"Name")])],-1),C=["onClick"],w=["onClick"];function A(t,e,n,o,A,I){var P=Object(c["z"])("NavbarVue");return Object(c["s"])(),Object(c["e"])("div",null,[Object(c["i"])(P),Object(c["f"])("div",r,[Object(c["f"])("div",a,[u,i,Object(c["f"])("div",s,[Object(c["f"])("div",l,[Object(c["f"])("div",b,[Object(c["H"])(Object(c["f"])("input",{"onUpdate:modelValue":e[0]||(e[0]=function(t){return A.inputCode=t}),placeholder:"Bus stop code",class:"form-control",onKeyup:e[1]||(e[1]=Object(c["I"])((function(t){return I.getBusArrival()}),["enter"]))},null,544),[[c["E"],A.inputCode]]),Object(c["f"])("div",d,[Object(c["f"])("button",{class:"btn btn-primary",onClick:e[2]||(e[2]=function(t){return I.getBusArrival()})}," Get ")])]),A.inputNote?(Object(c["s"])(),Object(c["e"])("div",f,Object(c["B"])(A.inputNote),1)):Object(c["d"])("",!0)])]),A.bookmarkBusStops&&A.bookmarkBusStops.length?(Object(c["s"])(),Object(c["e"])("div",p,[h,Object(c["f"])("table",O,[j,Object(c["f"])("tbody",null,[(Object(c["s"])(!0),Object(c["e"])(c["a"],null,Object(c["y"])(A.bookmarkBusStops,(function(t){return Object(c["s"])(),Object(c["e"])("tr",{key:t.BusStopCode},[Object(c["f"])("td",null,[Object(c["f"])("a",{onClick:function(e){return I.getBusArrival(t.BusStopCode)},class:"btn"},Object(c["B"])(t.BusStopCode),9,m)]),Object(c["f"])("td",null,[Object(c["f"])("a",{onClick:function(e){return I.getBusArrival(t.BusStopCode)},class:"btn"},Object(c["B"])(t.Description)+"@"+Object(c["B"])(t.RoadName),9,v)]),Object(c["f"])("td",null,[Object(c["f"])("a",{onClick:function(e){return I.removeBookmark(t.BusStopCode)},class:"btn"}," X ",8,k)])])})),128))])])])):Object(c["d"])("",!0),Object(c["f"])("div",y,[Object(c["f"])("button",{onClick:e[3]||(e[3]=function(){return I.toggleNearbyBusStops&&I.toggleNearbyBusStops.apply(I,arguments)}),class:"btn btn-primary"},[g,A.lodingNearbyBusStops?(Object(c["s"])(),Object(c["e"])("span",B)):Object(c["d"])("",!0)]),Object(c["f"])("div",null,Object(c["B"])(A.getNearbyNote),1)]),A.showNearbyBusStops?(Object(c["s"])(),Object(c["e"])("table",S,[N,Object(c["f"])("tbody",null,[(Object(c["s"])(!0),Object(c["e"])(c["a"],null,Object(c["y"])(A.nearbyBusStops,(function(t){return Object(c["s"])(),Object(c["e"])("tr",{key:t.busStop.BusStopCode},[Object(c["f"])("td",null,[Object(c["f"])("a",{onClick:function(e){return I.getBusArrival(t.busStop.BusStopCode)},class:"btn"},Object(c["B"])(t.busStop.BusStopCode),9,C)]),Object(c["f"])("td",null,[Object(c["f"])("a",{onClick:function(e){return I.getBusArrival(t.busStop.BusStopCode)},class:"btn"},Object(c["B"])(t.busStop.Description)+"@"+Object(c["B"])(t.busStop.RoadName),9,w)])])})),128))])])):Object(c["d"])("",!0)])])])}n("498a");var I=n("bc3a"),P=n.n(I),_=n("4754"),T=n("d178"),E={name:"BusArrival",components:{NavbarVue:T["a"]},data:function(){return{inputCode:null,inputNote:null,lodingNearbyBusStops:!1,showNearbyBusStops:!1,nearbyBusStops:null,getNearbyNote:null,watchId:null,bookmarkBusStops:null}},created:function(){this.refreshBookmarks()},mounted:function(){document.title="Bus Arrival"},methods:{getBusArrival:function(t){t&&(this.inputCode=t),this.inputCode&&this.inputCode.trim()?(this.inputNote=null,G.push({name:"BusArrivalTime",params:{inputCode:this.inputCode.trim()}})):this.inputNote="Please input bus stop code."},refreshBookmarks:function(){this.bookmarkBusStops=Object(_["c"])()},removeBookmark:function(t){Object(_["d"])(t)&&this.refreshBookmarks()},toggleNearbyBusStops:function(){var t=this;if(this.showNearbyBusStops)return this.showNearbyBusStops=!1,void(this.watchId&&(navigator.geolocation.clearWatch(this.watchId),this.watchId=null));this.lodingNearbyBusStops=!0,navigator&&navigator.geolocation&&(this.watchId=navigator.geolocation.watchPosition((function(e){e&&e.coords&&P.a.get("/api/lta/bus/nearbyBusStops",{params:{latitude:e.coords.latitude,longitude:e.coords.longitude}}).then((function(e){t.nearbyBusStops=e.data,t.showNearbyBusStops=!0})).catch((function(t){console.log(t)})).then(t.lodingNearbyBusStops=!1)}),(function(e){switch(t.lodingNearbyBusStops=!1,t.showNearbyBusStops=!1,e.code){case e.PERMISSION_DENIED:t.getNearbyNote="Request for Geolocation is denied.";break;case e.POSITION_UNAVAILABLE:t.getNearbyNote="Location information is unavailable.";break;case e.TIMEOUT:t.getNearbyNote="Request to get location timed out.";break;default:t.getNearbyNote="An unknown error occurred.";break}})))}}};E.render=A;var x=E,L=[{path:"/",name:"Root",component:x},{path:"/busArrivalTime/:inputCode",name:"BusArrivalTime",component:function(){return n.e("chunk-30cd8357").then(n.bind(null,"78db"))}},{path:"/dictionary/:word?",name:"Dictionary",component:function(){return n.e("chunk-25026bc1").then(n.bind(null,"3349"))}},{path:"/podcast",name:"Podcast",component:function(){return n.e("chunk-73ca70b2").then(n.bind(null,"e59d"))}},{path:"/learn/:user?",name:"Learn",component:function(){return n.e("chunk-5caa9e92").then(n.bind(null,"41ce"))}},{path:"/activities",name:"Activities",component:function(){return Promise.all([n.e("chunk-3906e254"),n.e("chunk-190e4a20")]).then(n.bind(null,"b9ce"))}},{path:"/act-table",name:"ActivitiesTable",component:function(){return Promise.all([n.e("chunk-3906e254"),n.e("chunk-2b09332c")]).then(n.bind(null,"d5e7"))}},{path:"/act-cal",name:"ActivitieCalendar",component:function(){return Promise.all([n.e("chunk-3906e254"),n.e("chunk-e66b4d48")]).then(n.bind(null,"ad6e"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-84b21cdc").then(n.bind(null,"a55b"))}}],D=Object(o["a"])({history:Object(o["b"])("/"),routes:L}),G=e["a"]=D},d178:function(t,e,n){"use strict";var o=n("7a23"),c={id:"nav",class:"p-3"},r=Object(o["h"])("BusArrival"),a=Object(o["h"])(" ☯ "),u=Object(o["h"])("Dictionary"),i=Object(o["h"])(" ☯ "),s=Object(o["h"])("Podcast"),l=Object(o["h"])(" ☯ "),b=Object(o["h"])("LearnWords");function d(t,e,n,d,f,p){var h=Object(o["z"])("router-link");return Object(o["s"])(),Object(o["e"])("div",c,[Object(o["i"])(h,{to:"/"},{default:Object(o["G"])((function(){return[r]})),_:1}),a,Object(o["i"])(h,{to:"/dictionary"},{default:Object(o["G"])((function(){return[u]})),_:1}),i,Object(o["i"])(h,{to:"/podcast"},{default:Object(o["G"])((function(){return[s]})),_:1}),l,Object(o["i"])(h,{to:"/learn"},{default:Object(o["G"])((function(){return[b]})),_:1})])}var f={name:"NavbarVue"};n("5e2f");f.render=d,f.__scopeId="data-v-49b33fc8";e["a"]=f},d1bb:function(t,e,n){},e679:function(t,e,n){}});
//# sourceMappingURL=app.654df30d.js.map