(function(t){function e(e){for(var n,r,u=e[0],s=e[1],i=e[2],l=0,b=[];l<u.length;l++)r=u[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&b.push(c[r][0]),c[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);d&&d(e);while(b.length)b.shift()();return a.push.apply(a,i||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,r=1;r<o.length;r++){var u=o[r];0!==c[u]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},r={app:0},c={app:0},a=[];function u(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-30cd8357":"7f10beb3","chunk-6ed7e3ee":"277dda89","chunk-78bee34a":"37d0993e"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(t){var e=[],o={"chunk-6ed7e3ee":1};r[t]?e.push(r[t]):0!==r[t]&&o[t]&&e.push(r[t]=new Promise((function(e,o){for(var n="css/"+({}[t]||t)+"."+{"chunk-30cd8357":"31d6cfe0","chunk-6ed7e3ee":"9519914f","chunk-78bee34a":"31d6cfe0"}[t]+".css",c=s.p+n,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var i=a[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===n||l===c))return e()}var b=document.getElementsByTagName("style");for(u=0;u<b.length;u++){i=b[u],l=i.getAttribute("data-href");if(l===n||l===c)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||c,a=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=n,delete r[t],d.parentNode.removeChild(d),o(a)},d.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[t]=0})));var n=c[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,o){n=c[t]=[e,o]}));e.push(n[2]=a);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(t);var b=new Error;i=function(e){l.onerror=l.onload=null,clearTimeout(d);var o=c[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;b.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",b.name="ChunkLoadError",b.type=n,b.request=r,o[1](b)}c[t]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var b=0;b<i.length;b++)e(i[b]);var d=l;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"110a":function(t,e,o){},4754:function(t,e,o){"use strict";o.d(e,"a",(function(){return n})),o.d(e,"b",(function(){return r})),o.d(e,"c",(function(){return c})),o.d(e,"d",(function(){return a}));o("7db0"),o("4de4");function n(t){try{if(r(t.BusStopCode))return!1;var e=c();return e.push(t),localStorage.setItem("busStopBookmarks",JSON.stringify(e)),console.log("add true"),!0}catch(o){return console.log("add false"),console.log(o),!1}}function r(t){try{var e=c();return e.find((function(e){return e.BusStopCode===t}))}catch(o){return}}function c(){try{var t=localStorage.getItem("busStopBookmarks"),e=[];return t&&(e=JSON.parse(t)),e}catch(o){return[]}}function a(t){try{var e=c();return e=e.filter((function(e){return e.BusStopCode!==t})),localStorage.setItem("busStopBookmarks",JSON.stringify(e)),!0}catch(o){return!1}}},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),r={id:"nav"},c=Object(n["g"])("BusArrival"),a=Object(n["g"])(" ☯ "),u=Object(n["g"])("Dictionary"),s=Object(n["g"])(" ☯ "),i=Object(n["g"])("Podcast"),l=Object(n["f"])("footer",{class:"container-fluid text-center pt-4"},[Object(n["f"])("br",{class:"w-100",style:{width:"100"}}),Object(n["f"])("h6",{class:"font-weight-bold"},[Object(n["g"])(" We "),Object(n["f"])("span",{style:{"font-size":"150%",color:"red"}}," ❤ "),Object(n["g"])(" SG ")])],-1);function b(t,e,o,b,d,p){var f=Object(n["y"])("router-link"),h=Object(n["y"])("router-view"),O=Object(n["y"])("audioplayer");return Object(n["r"])(),Object(n["e"])("div",null,[Object(n["f"])("div",r,[Object(n["h"])(f,{to:"/"},{default:Object(n["E"])((function(){return[c]})),_:1}),a,Object(n["h"])(f,{to:"/dictionary"},{default:Object(n["E"])((function(){return[u]})),_:1}),s,Object(n["h"])(f,{to:"/podcast"},{default:Object(n["E"])((function(){return[i]})),_:1})]),Object(n["h"])(h),l,Object(n["h"])(O)])}var d={id:"audioarea",style:{position:"fixed",bottom:"20px",right:"50px"},class:"d-none"},p={class:"row"},f=Object(n["f"])("audio",{id:"audioplayer",controls:"",class:"col-auto m-0 p-0 bg-dark"},null,-1),h={class:"col-auto m-0 p-0 bg-dark"};function O(t,e,o,r,c,a){return Object(n["r"])(),Object(n["e"])("div",d,[Object(n["f"])("div",p,[f,Object(n["f"])("span",h,[Object(n["f"])("button",{onClick:e[0]||(e[0]=function(t){return a.close()}),class:"btn btn-black m-0 rounded-0 text-light"}," X ")])])])}var j={name:"audioplayer",methods:{close:function(){try{var t=document.getElementById("audioarea");t.setAttribute("class","d-none");var e=document.getElementById("audioplayer");e.pause()}catch(o){console.log("failure",o)}}}};j.render=O;var m=j,g={components:{audioplayer:m}};o("d374");g.render=b;var y=g,v=(o("d3b7"),o("3ca3"),o("ddb0"),o("6c02")),k={class:"container py-3"},B={class:"text-center"},S=Object(n["f"])("h2",null,"Bus Arrival Time",-1),N=Object(n["f"])("h6",null,"Get bus arrival time by bus stop code.",-1),C={class:"row justify-content-center mt-4"},w={class:"col-12 col-md-6 col-lg-4"},A={class:"input-group"},E={class:"input-group-append"},I={key:0},P={key:0,class:"mt-4"},x=Object(n["f"])("h3",null,"Bus Stop Bookmark",-1),T={class:"table table-sm mt-2"},_=Object(n["f"])("thead",{class:"thead-dark"},[Object(n["f"])("tr",null,[Object(n["f"])("th",{scope:"col"},"BusStop"),Object(n["f"])("th",{scope:"col"},"Name"),Object(n["f"])("th",{scope:"col"},"Remove")])],-1),D=["onClick"],L=["onClick"],M=["onClick"],R={class:"mt-4"},G=Object(n["g"])(" Toggle Nearby Bus Stops "),J={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},q={key:1,class:"table table-sm mt-2"},U=Object(n["f"])("thead",{class:"thead-dark"},[Object(n["f"])("tr",null,[Object(n["f"])("th",{scope:"col"},"BusStop"),Object(n["f"])("th",{scope:"col"},"Name")])],-1),F=["onClick"],K=["onClick"];function V(t,e,o,r,c,a){return Object(n["r"])(),Object(n["e"])("div",k,[Object(n["f"])("div",B,[S,N,Object(n["f"])("div",C,[Object(n["f"])("div",w,[Object(n["f"])("div",A,[Object(n["F"])(Object(n["f"])("input",{"onUpdate:modelValue":e[0]||(e[0]=function(t){return c.inputCode=t}),placeholder:"Bus stop code",class:"form-control",onKeyup:e[1]||(e[1]=Object(n["G"])((function(t){return a.getBusArrival()}),["enter"]))},null,544),[[n["C"],c.inputCode]]),Object(n["f"])("div",E,[Object(n["f"])("button",{class:"btn btn-primary",onClick:e[2]||(e[2]=function(t){return a.getBusArrival()})}," Get ")])]),c.inputNote?(Object(n["r"])(),Object(n["e"])("div",I,Object(n["A"])(c.inputNote),1)):Object(n["d"])("",!0)])]),c.bookmarkBusStops&&c.bookmarkBusStops.length?(Object(n["r"])(),Object(n["e"])("div",P,[x,Object(n["f"])("table",T,[_,Object(n["f"])("tbody",null,[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(c.bookmarkBusStops,(function(t){return Object(n["r"])(),Object(n["e"])("tr",{key:t.BusStopCode},[Object(n["f"])("td",null,[Object(n["f"])("a",{onClick:function(e){return a.getBusArrival(t.BusStopCode)},class:"btn"},Object(n["A"])(t.BusStopCode),9,D)]),Object(n["f"])("td",null,[Object(n["f"])("a",{onClick:function(e){return a.getBusArrival(t.BusStopCode)},class:"btn"},Object(n["A"])(t.Description)+"@"+Object(n["A"])(t.RoadName),9,L)]),Object(n["f"])("td",null,[Object(n["f"])("a",{onClick:function(e){return a.removeBookmark(t.BusStopCode)},class:"btn"}," X ",8,M)])])})),128))])])])):Object(n["d"])("",!0),Object(n["f"])("div",R,[Object(n["f"])("button",{onClick:e[3]||(e[3]=function(){return a.toggleNearbyBusStops&&a.toggleNearbyBusStops.apply(a,arguments)}),class:"btn btn-primary"},[G,c.lodingNearbyBusStops?(Object(n["r"])(),Object(n["e"])("span",J)):Object(n["d"])("",!0)]),Object(n["f"])("div",null,Object(n["A"])(c.getNearbyNote),1)]),c.showNearbyBusStops?(Object(n["r"])(),Object(n["e"])("table",q,[U,Object(n["f"])("tbody",null,[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(c.nearbyBusStops,(function(t){return Object(n["r"])(),Object(n["e"])("tr",{key:t.busStop.BusStopCode},[Object(n["f"])("td",null,[Object(n["f"])("a",{onClick:function(e){return a.getBusArrival(t.busStop.BusStopCode)},class:"btn"},Object(n["A"])(t.busStop.BusStopCode),9,F)]),Object(n["f"])("td",null,[Object(n["f"])("a",{onClick:function(e){return a.getBusArrival(t.busStop.BusStopCode)},class:"btn"},Object(n["A"])(t.busStop.Description)+"@"+Object(n["A"])(t.busStop.RoadName),9,K)])])})),128))])])):Object(n["d"])("",!0)])])}o("498a");var W=o("bc3a"),X=o.n(W),z=o("4754"),H={name:"BusArrival",data:function(){return{inputCode:null,inputNote:null,lodingNearbyBusStops:!1,showNearbyBusStops:!1,nearbyBusStops:null,getNearbyNote:null,watchId:null,bookmarkBusStops:null}},created:function(){this.refreshBookmarks()},methods:{getBusArrival:function(t){t&&(this.inputCode=t),console.log("inputCode:",this.inputCode),this.inputCode&&this.inputCode.trim()?(this.inputNote=null,$.push({name:"BusArrivalTime",params:{inputCode:this.inputCode.trim()}})):this.inputNote="Please input bus stop code."},refreshBookmarks:function(){this.bookmarkBusStops=Object(z["c"])()},removeBookmark:function(t){Object(z["d"])(t)&&this.refreshBookmarks()},toggleNearbyBusStops:function(){var t=this;if(this.showNearbyBusStops)return this.showNearbyBusStops=!1,void(this.watchId&&(navigator.geolocation.clearWatch(this.watchId),this.watchId=null));this.lodingNearbyBusStops=!0,navigator&&navigator.geolocation&&(this.watchId=navigator.geolocation.watchPosition((function(e){e&&e.coords&&(console.log(e.coords),X.a.get("/api/lta/bus/nearbyBusStops",{params:{latitude:e.coords.latitude,longitude:e.coords.longitude}}).then((function(e){console.log("resp.data",e.data),t.nearbyBusStops=e.data,t.showNearbyBusStops=!0})).catch((function(t){console.log(t)})).then(t.lodingNearbyBusStops=!1))}),(function(e){switch(t.lodingNearbyBusStops=!1,t.showNearbyBusStops=!1,e.code){case e.PERMISSION_DENIED:t.getNearbyNote="Request for Geolocation is denied.";break;case e.POSITION_UNAVAILABLE:t.getNearbyNote="Location information is unavailable.";break;case e.TIMEOUT:t.getNearbyNote="Request to get location timed out.";break;default:t.getNearbyNote="An unknown error occurred.";break}})))}}};H.render=V;var Q=H,Y=[{path:"/",name:"BusArrival",component:Q},{path:"/busArrivalTime/:inputCode",name:"BusArrivalTime",component:function(){return o.e("chunk-30cd8357").then(o.bind(null,"78db"))}},{path:"/dictionary",name:"Dictionary",component:function(){return o.e("chunk-6ed7e3ee").then(o.bind(null,"3349"))}},{path:"/podcast",name:"Podcast",component:function(){return o.e("chunk-78bee34a").then(o.bind(null,"e59d"))}}],Z=Object(v["a"])({history:Object(v["b"])("/"),routes:Y}),$=Z;Object(n["c"])(y).use($).mount("#app")},d374:function(t,e,o){"use strict";o("110a")}});
//# sourceMappingURL=app.27daa40b.js.map