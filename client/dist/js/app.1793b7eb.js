(function(t){function e(e){for(var o,r,u=e[0],s=e[1],i=e[2],l=0,d=[];l<u.length;l++)r=u[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);b&&b(e);while(d.length)d.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,r=1;r<n.length;r++){var u=n[r];0!==c[u]&&(o=!1)}o&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={app:0},c={app:0},a=[];function u(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2d0dd9a6":"8f64d591","chunk-30cd8357":"7f10beb3","chunk-760aa237":"54e23cf7","chunk-b1de9ada":"cae4d631"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-760aa237":1,"chunk-b1de9ada":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-2d0dd9a6":"31d6cfe0","chunk-30cd8357":"31d6cfe0","chunk-760aa237":"8bbfb67f","chunk-b1de9ada":"72e93b5d"}[t]+".css",c=s.p+o,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var i=a[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===o||l===c))return e()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){i=d[u],l=i.getAttribute("data-href");if(l===o||l===c)return e()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=e,b.onerror=function(e){var o=e&&e.target&&e.target.src||c,a=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[t],b.parentNode.removeChild(b),n(a)},b.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(b)})).then((function(){r[t]=0})));var o=c[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise((function(e,n){o=c[t]=[e,n]}));e.push(o[2]=a);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(t);var d=new Error;i=function(e){l.onerror=l.onload=null,clearTimeout(b);var n=c[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}c[t]=void 0}};var b=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var b=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"157a":function(t,e,n){"use strict";n("daa9")},"33b9":function(t,e,n){"use strict";n("e3a9")},4754:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return a}));n("7db0"),n("4de4");function o(t){try{if(r(t.BusStopCode))return!1;var e=c();return e.push(t),localStorage.setItem("busStopBookmarks",JSON.stringify(e)),console.log("add true"),!0}catch(n){return console.log("add false"),console.log(n),!1}}function r(t){try{var e=c();return e.find((function(e){return e.BusStopCode===t}))}catch(n){return}}function c(){try{var t=localStorage.getItem("busStopBookmarks"),e=[];return t&&(e=JSON.parse(t)),e}catch(n){return[]}}function a(t){try{var e=c();return e=e.filter((function(e){return e.BusStopCode!==t})),localStorage.setItem("busStopBookmarks",JSON.stringify(e)),!0}catch(n){return!1}}},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={id:"nav"},c=Object(o["g"])("BusArrival"),a=Object(o["g"])(" ☯ "),u=Object(o["g"])("Dictionary"),s=Object(o["g"])(" ☯ "),i=Object(o["g"])("Podcast");function l(t,e,n,l,d,b){var p=Object(o["y"])("router-link"),f=Object(o["y"])("router-view"),h=Object(o["y"])("AppFooter"),O=Object(o["y"])("AudioPlayer");return Object(o["r"])(),Object(o["e"])("div",null,[Object(o["f"])("div",r,[Object(o["h"])(p,{to:"/"},{default:Object(o["E"])((function(){return[c]})),_:1}),a,Object(o["h"])(p,{to:"/dictionary"},{default:Object(o["E"])((function(){return[u]})),_:1}),s,Object(o["h"])(p,{to:"/podcast"},{default:Object(o["E"])((function(){return[i]})),_:1})]),Object(o["h"])(f),Object(o["h"])(h),Object(o["h"])(O)])}Object(o["u"])("data-v-63b76d67");var d={id:"audioarea",style:{position:"fixed",bottom:"0px",right:"10px"},class:"w-100 d-none"},b={class:"container-fluid"},p={class:"row justify-content-end"},f=Object(o["f"])("audio",{id:"audioplayer",controls:"",class:"col-auto p-0 m-0"},null,-1),h=Object(o["f"])("span",null,"X",-1),O=[h];function j(t,e,n,r,c,a){return Object(o["r"])(),Object(o["e"])("div",d,[Object(o["f"])("div",b,[Object(o["f"])("div",p,[f,Object(o["f"])("button",{onClick:e[0]||(e[0]=function(t){return a.close()}),class:"col-auto btn rounded-0 m-0 text-white"},O)])])])}Object(o["s"])();var m={name:"AudioPlayer",methods:{close:function(){try{var t=document.getElementById("audioarea");t.setAttribute("class","d-none");var e=document.getElementById("audioplayer");e.pause()}catch(n){console.log("failure",n)}}}};n("33b9");m.render=j,m.__scopeId="data-v-63b76d67";var g=m,y={class:"container-fluid text-center py-4"},v=Object(o["f"])("h6",null,[Object(o["g"])(" We "),Object(o["f"])("span",{style:{"font-size":"150%",color:"red"}}," ❤ "),Object(o["g"])(" SG ")],-1),k=[v];function B(t,e,n,r,c,a){return Object(o["r"])(),Object(o["e"])("footer",y,k)}var S={name:"AppFooter"};S.render=B;var N=S,C={components:{AudioPlayer:g,AppFooter:N}};n("157a");C.render=l;var A=C,w=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),E={class:"container py-3"},I={class:"text-center"},P=Object(o["f"])("h2",null,"Bus Arrival Time",-1),x=Object(o["f"])("h6",null,"Get bus arrival time by bus stop code.",-1),_={class:"row justify-content-center mx-0 mt-4"},T={class:"col-12 col-md-6 col-lg-4"},D={class:"input-group"},L={class:"input-group-append"},M={key:0},R={key:0,class:"mt-4"},F=Object(o["f"])("h3",null,"Bus Stop Bookmark",-1),G={class:"table table-sm mt-2"},J=Object(o["f"])("thead",{class:"thead-dark"},[Object(o["f"])("tr",null,[Object(o["f"])("th",{scope:"col"},"BusStop"),Object(o["f"])("th",{scope:"col"},"Name"),Object(o["f"])("th",{scope:"col"},"Remove")])],-1),q=["onClick"],U=["onClick"],V=["onClick"],K={class:"mt-4"},W=Object(o["g"])(" Toggle Nearby Bus Stops "),X={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},z={key:1,class:"table table-sm mt-2"},H=Object(o["f"])("thead",{class:"thead-dark"},[Object(o["f"])("tr",null,[Object(o["f"])("th",{scope:"col"},"BusStop"),Object(o["f"])("th",{scope:"col"},"Name")])],-1),Q=["onClick"],Y=["onClick"];function Z(t,e,n,r,c,a){return Object(o["r"])(),Object(o["e"])("div",E,[Object(o["f"])("div",I,[P,x,Object(o["f"])("div",_,[Object(o["f"])("div",T,[Object(o["f"])("div",D,[Object(o["F"])(Object(o["f"])("input",{"onUpdate:modelValue":e[0]||(e[0]=function(t){return c.inputCode=t}),placeholder:"Bus stop code",class:"form-control",onKeyup:e[1]||(e[1]=Object(o["G"])((function(t){return a.getBusArrival()}),["enter"]))},null,544),[[o["C"],c.inputCode]]),Object(o["f"])("div",L,[Object(o["f"])("button",{class:"btn btn-primary",onClick:e[2]||(e[2]=function(t){return a.getBusArrival()})}," Get ")])]),c.inputNote?(Object(o["r"])(),Object(o["e"])("div",M,Object(o["A"])(c.inputNote),1)):Object(o["d"])("",!0)])]),c.bookmarkBusStops&&c.bookmarkBusStops.length?(Object(o["r"])(),Object(o["e"])("div",R,[F,Object(o["f"])("table",G,[J,Object(o["f"])("tbody",null,[(Object(o["r"])(!0),Object(o["e"])(o["a"],null,Object(o["x"])(c.bookmarkBusStops,(function(t){return Object(o["r"])(),Object(o["e"])("tr",{key:t.BusStopCode},[Object(o["f"])("td",null,[Object(o["f"])("a",{onClick:function(e){return a.getBusArrival(t.BusStopCode)},class:"btn"},Object(o["A"])(t.BusStopCode),9,q)]),Object(o["f"])("td",null,[Object(o["f"])("a",{onClick:function(e){return a.getBusArrival(t.BusStopCode)},class:"btn"},Object(o["A"])(t.Description)+"@"+Object(o["A"])(t.RoadName),9,U)]),Object(o["f"])("td",null,[Object(o["f"])("a",{onClick:function(e){return a.removeBookmark(t.BusStopCode)},class:"btn"}," X ",8,V)])])})),128))])])])):Object(o["d"])("",!0),Object(o["f"])("div",K,[Object(o["f"])("button",{onClick:e[3]||(e[3]=function(){return a.toggleNearbyBusStops&&a.toggleNearbyBusStops.apply(a,arguments)}),class:"btn btn-primary"},[W,c.lodingNearbyBusStops?(Object(o["r"])(),Object(o["e"])("span",X)):Object(o["d"])("",!0)]),Object(o["f"])("div",null,Object(o["A"])(c.getNearbyNote),1)]),c.showNearbyBusStops?(Object(o["r"])(),Object(o["e"])("table",z,[H,Object(o["f"])("tbody",null,[(Object(o["r"])(!0),Object(o["e"])(o["a"],null,Object(o["x"])(c.nearbyBusStops,(function(t){return Object(o["r"])(),Object(o["e"])("tr",{key:t.busStop.BusStopCode},[Object(o["f"])("td",null,[Object(o["f"])("a",{onClick:function(e){return a.getBusArrival(t.busStop.BusStopCode)},class:"btn"},Object(o["A"])(t.busStop.BusStopCode),9,Q)]),Object(o["f"])("td",null,[Object(o["f"])("a",{onClick:function(e){return a.getBusArrival(t.busStop.BusStopCode)},class:"btn"},Object(o["A"])(t.busStop.Description)+"@"+Object(o["A"])(t.busStop.RoadName),9,Y)])])})),128))])])):Object(o["d"])("",!0)])])}n("498a");var $=n("bc3a"),tt=n.n($),et=n("4754"),nt={name:"BusArrival",data:function(){return{inputCode:null,inputNote:null,lodingNearbyBusStops:!1,showNearbyBusStops:!1,nearbyBusStops:null,getNearbyNote:null,watchId:null,bookmarkBusStops:null}},created:function(){this.refreshBookmarks()},methods:{getBusArrival:function(t){t&&(this.inputCode=t),console.log("inputCode:",this.inputCode),this.inputCode&&this.inputCode.trim()?(this.inputNote=null,at.push({name:"BusArrivalTime",params:{inputCode:this.inputCode.trim()}})):this.inputNote="Please input bus stop code."},refreshBookmarks:function(){this.bookmarkBusStops=Object(et["c"])()},removeBookmark:function(t){Object(et["d"])(t)&&this.refreshBookmarks()},toggleNearbyBusStops:function(){var t=this;if(this.showNearbyBusStops)return this.showNearbyBusStops=!1,void(this.watchId&&(navigator.geolocation.clearWatch(this.watchId),this.watchId=null));this.lodingNearbyBusStops=!0,navigator&&navigator.geolocation&&(this.watchId=navigator.geolocation.watchPosition((function(e){e&&e.coords&&(console.log(e.coords),tt.a.get("/api/lta/bus/nearbyBusStops",{params:{latitude:e.coords.latitude,longitude:e.coords.longitude}}).then((function(e){console.log("resp.data",e.data),t.nearbyBusStops=e.data,t.showNearbyBusStops=!0})).catch((function(t){console.log(t)})).then(t.lodingNearbyBusStops=!1))}),(function(e){switch(t.lodingNearbyBusStops=!1,t.showNearbyBusStops=!1,e.code){case e.PERMISSION_DENIED:t.getNearbyNote="Request for Geolocation is denied.";break;case e.POSITION_UNAVAILABLE:t.getNearbyNote="Location information is unavailable.";break;case e.TIMEOUT:t.getNearbyNote="Request to get location timed out.";break;default:t.getNearbyNote="An unknown error occurred.";break}})))}}};nt.render=Z;var ot=nt,rt=[{path:"/",name:"BusArrival",component:ot},{path:"/busArrivalTime/:inputCode",name:"BusArrivalTime",component:function(){return n.e("chunk-30cd8357").then(n.bind(null,"78db"))}},{path:"/dictionary",name:"Dictionary",component:function(){return n.e("chunk-760aa237").then(n.bind(null,"3349"))}},{path:"/podcast",name:"Podcast",component:function(){return n.e("chunk-b1de9ada").then(n.bind(null,"e59d"))}},{path:"/video",name:"VideoVue",component:function(){return n.e("chunk-2d0dd9a6").then(n.bind(null,"81a8"))}}],ct=Object(w["a"])({history:Object(w["b"])("/"),routes:rt}),at=ct;Object(o["c"])(A).use(at).mount("#app")},daa9:function(t,e,n){},e3a9:function(t,e,n){}});
//# sourceMappingURL=app.1793b7eb.js.map