(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30cd8357"],{1148:function(e,t,n){"use strict";var r=n("da84"),a=n("5926"),c=n("577e"),o=n("1d80"),i=r.RangeError;e.exports=function(e){var t=c(o(this)),n="",r=a(e);if(r<0||r==1/0)throw i("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(t+=t))1&r&&(n+=t);return n}},"408a":function(e,t,n){var r=n("e330");e.exports=r(1..valueOf)},"78db":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a={class:"container text-center py-3"},c={key:0},o={key:1,class:"my-3"},i=Object(r["f"])("div",{class:"spinner-border",style:{width:"10rem",height:"10rem"},role:"status"},[Object(r["f"])("span",{class:"sr-only"},"Loading...")],-1),l=[i],s={key:2},u={key:0,class:"table mt-3"},b=Object(r["f"])("thead",{class:"thead-dark"},[Object(r["f"])("tr",null,[Object(r["f"])("th",{scope:"col"},"#"),Object(r["f"])("th",{scope:"col"},"1st Bus"),Object(r["f"])("th",{scope:"col"},"2nd Bus"),Object(r["f"])("th",{scope:"col"},"3rd Bus")])],-1),d={key:0},f={scope:"row"},O={key:1},j=Object(r["f"])("caption",null,[Object(r["f"])("ul",{class:"small"},[Object(r["f"])("li",null,[Object(r["f"])("label",null,"Seats Available")]),Object(r["f"])("li",null,[Object(r["f"])("label",{class:"bg-info"},"Standing Available")]),Object(r["f"])("li",null,[Object(r["f"])("label",{class:"bg-warning"},"Limited Standing")])])],-1),v={class:"btn-group mt-3"};function h(e,t,n,i,h,p){var g=this;return Object(r["s"])(),Object(r["e"])("div",a,[Object(r["f"])("div",null,[h.busStop?(Object(r["s"])(),Object(r["e"])("h3",c,Object(r["B"])(h.busStop.Description),1)):Object(r["d"])("",!0),Object(r["f"])("h5",null,"Bus Stop: "+Object(r["B"])(h.inputCode),1),h.loading?(Object(r["s"])(),Object(r["e"])("div",o,l)):h.loadingNote?(Object(r["s"])(),Object(r["e"])("div",s,Object(r["B"])(h.loadingNote),1)):Object(r["d"])("",!0)]),h.busArrival?(Object(r["s"])(),Object(r["e"])("table",u,[b,h.busArrival.Services.length?(Object(r["s"])(),Object(r["e"])("tbody",d,[(Object(r["s"])(!0),Object(r["e"])(r["a"],null,Object(r["y"])(h.busArrival.Services,(function(e){return Object(r["s"])(),Object(r["e"])("tr",{key:e.ServiceNo},[Object(r["f"])("th",f,Object(r["B"])(e.ServiceNo),1),Object(r["f"])("td",{class:Object(r["o"])(p.getLoadColour(e.NextBus))},Object(r["B"])(p.calculateArrivalTime(e.NextBus)),3),Object(r["f"])("td",{class:Object(r["o"])(p.getLoadColour(e.NextBus2))},Object(r["B"])(p.calculateArrivalTime(e.NextBus2)),3),Object(r["f"])("td",{class:Object(r["o"])(p.getLoadColour(e.NextBus2))},Object(r["B"])(p.calculateArrivalTime(e.NextBus3)),3)])})),128))])):(Object(r["s"])(),Object(r["e"])("tbody",O,[Object(r["f"])("tr",null,[(Object(r["s"])(),Object(r["e"])(r["a"],null,Object(r["y"])(4,(function(e){return Object(r["f"])("td",{key:e},"NA")})),64))])])),j])):Object(r["d"])("",!0),Object(r["f"])("div",v,[h.loadingNote?Object(r["d"])("",!0):(Object(r["s"])(),Object(r["e"])("button",{key:0,onClick:t[0]||(t[0]=function(){return p.refresh&&p.refresh.apply(p,arguments)}),class:"btn btn-primary"}," Refresh ")),h.loadingNote||h.bookmark?Object(r["d"])("",!0):(Object(r["s"])(),Object(r["e"])("button",{key:1,onClick:t[1]||(t[1]=function(){return p.addBookmark&&p.addBookmark.apply(p,arguments)}),class:"btn btn-primary"}," BookmarkBusStop ")),Object(r["f"])("button",{class:"btn btn-primary",onClick:t[2]||(t[2]=function(e){return g.$router.go(-1)})},"Back")])])}n("b680");var p=n("bc3a"),g=n.n(p),m=n("6c02"),k=n("4754"),B={name:"BusArrivalTime",data:function(){return{inputCode:null,busArrival:null,busStop:null,loading:null,loadingNote:null,bookmark:null}},created:function(){var e=Object(m["c"])();this.inputCode=e.params.inputCode,this.refresh()},mounted:function(){document.title="Bus Arrival"},methods:{refresh:function(){var e=this;this.loading=!0,this.loadingNote="",g.a.get("/api/lta/bus/busArrival/"+this.inputCode).then((function(t){e.busStop=t.data.busStop,e.busArrival=t.data.busArrival,e.bookmark=Object(k["b"])(e.inputCode)})).catch((function(t){t.response&&t.response.data&&t.response.data.message?e.loadingNote=t.response.data.message:e.loadingNote=t})).then((function(){e.loading=!1}))},getLoadColour:function(e){if(e&&"SEA"!=e.Load)return"SDA"==e.Load?"bg-info":"LSD"==e.Load?"bg-warning":void 0},calculateArrivalTime:function(e){if(!e||!e.EstimatedArrival)return"NA";var t=new Date(e.EstimatedArrival);if(t.valueOf()-Date.now()<0)return"Arrived";var n=(t.valueOf()-Date.now())/1e3/60;return n<1?"1 min":n.toFixed(0)+" mins"},addBookmark:function(){Object(k["a"])(this.busStop)&&(this.bookmark=Object(k["b"])(this.inputCode))}}};B.render=h;t["default"]=B},b680:function(e,t,n){"use strict";var r=n("23e7"),a=n("da84"),c=n("e330"),o=n("5926"),i=n("408a"),l=n("1148"),s=n("d039"),u=a.RangeError,b=a.String,d=Math.floor,f=c(l),O=c("".slice),j=c(1..toFixed),v=function(e,t,n){return 0===t?n:t%2===1?v(e,t-1,n*e):v(e*e,t/2,n)},h=function(e){var t=0,n=e;while(n>=4096)t+=12,n/=4096;while(n>=2)t+=1,n/=2;return t},p=function(e,t,n){var r=-1,a=n;while(++r<6)a+=t*e[r],e[r]=a%1e7,a=d(a/1e7)},g=function(e,t){var n=6,r=0;while(--n>=0)r+=e[n],e[n]=d(r/t),r=r%t*1e7},m=function(e){var t=6,n="";while(--t>=0)if(""!==n||0===t||0!==e[t]){var r=b(e[t]);n=""===n?r:n+f("0",7-r.length)+r}return n},k=s((function(){return"0.000"!==j(8e-5,3)||"1"!==j(.9,0)||"1.25"!==j(1.255,2)||"1000000000000000128"!==j(0xde0b6b3a7640080,0)}))||!s((function(){j({})}));r({target:"Number",proto:!0,forced:k},{toFixed:function(e){var t,n,r,a,c=i(this),l=o(e),s=[0,0,0,0,0,0],d="",j="0";if(l<0||l>20)throw u("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return b(c);if(c<0&&(d="-",c=-c),c>1e-21)if(t=h(c*v(2,69,1))-69,n=t<0?c*v(2,-t,1):c/v(2,t,1),n*=4503599627370496,t=52-t,t>0){p(s,0,n),r=l;while(r>=7)p(s,1e7,0),r-=7;p(s,v(10,r,1),0),r=t-1;while(r>=23)g(s,1<<23),r-=23;g(s,1<<r),p(s,1,1),g(s,2),j=m(s)}else p(s,0,n),p(s,1<<-t,0),j=m(s)+f("0",l);return l>0?(a=j.length,j=d+(a<=l?"0."+f("0",l-a)+j:O(j,0,a-l)+"."+O(j,a-l))):j=d+j,j}})}}]);