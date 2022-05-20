(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5caa9e92"],{"41ce":function(e,t,n){"use strict";n.r(t);n("99af"),n("4de4"),n("d3b7");var c=n("7a23"),r=n("6c02"),o=n("bc3a"),a=n.n(o),l=n("a18c"),i=n("d178");n("e9c4");function s(e){try{var t=localStorage.getItem(e);return t?JSON.parse(t):[]}catch(n){return[]}}function u(e,t){try{var n=s(e);return n.length>0?n[0][t]:void 0}catch(c){return}}function b(e,t,n){try{var c=s(e);return c.length<=0&&(c[0]={}),c[0][t]=n,localStorage.setItem(e,JSON.stringify(c)),!0}catch(r){return console.log(r),!1}}var d={class:"container py-2"},m=Object(c["createElementVNode"])("div",{class:"text-center"},[Object(c["createElementVNode"])("h2",null,"Learn Words")],-1),f={class:"row justify-content-end"},O={class:"col-auto"},j={key:0,class:"input-group"},p=["onKeyup"],g={key:1},h={class:"small"},v={class:"text-center"},k={key:0,class:"spinner-border text-primary",role:"status",style:{width:"5rem",height:"5rem"},"aria-hidden":"true",center:""},E={center:""},N={key:0,class:"small"},y=Object(c["createElementVNode"])("div",null,"Note:",-1),V=Object(c["createElementVNode"])("ul",null,[Object(c["createElementVNode"])("li",null,"click dictionary to see definitions;"),Object(c["createElementVNode"])("li",null,"click x to hide the word for your account.")],-1),w=[y,V],L={class:"col-auto"},C={class:"col-auto align-self-end ml-auto"},B=Object(c["createElementVNode"])("span",{class:"ms-2"},"[",-1),x=["href"],S=["href"],D=["href"],J=["href"],M=Object(c["createElementVNode"])("span",null,"]",-1),_=["onClick"],K={name:"Learn",setup:function(e){document.title="Learn Words";var t="LearnEn",n=Object(c["reactive"])({bLogin:!1,learntCount:0,user:"",words:[],loading:!0});function o(){n.bLogin=!1,b(t,"bLogin",!1),l["a"].push({name:"Learn"})}function s(){n.user&&(n.user=n.user.toLowerCase(),n.bLogin=!0,b(t,"user",n.user),b(t,"bLogin",!0),a.a.get("/api/user/"+n.user),l["a"].push({name:"Learn",params:{user:n.user}}),a.a.get("/api/learn/"+n.user+"/count").then((function(e){n.learntCount=e.data.count})))}function y(){var e="/api/learn/";n.user&&(e+=n.user),n.loading=!0,a.a.get(e).then((function(e){n.words=e.data,n.loading=!1})).catch((function(e){console.log(e),n.words.length=0,n.loading=!1})),n.bLogin&&a.a.get(e+"/count").then((function(e){n.learntCount=e.data.count}))}function V(e){n.user&&a.a.get("/api/learn/".concat(n.user,"?word=").concat(e)).then((function(){n.words=n.words.filter((function(t){return t!=e})),n.learntCount+=1})).catch((function(e){console.log(e)}))}return Object(c["onBeforeMount"])((function(){if(n.bLogin=u(t,"bLogin"),n.bLogin){var e=Object(r["c"])();n.user=e.params.user,n.user&&(n.user=n.user.toLowerCase());var c=u(t,"user");return n.user||c?n.user?c!=n.user?(b(t,"user",n.user),void l["a"].push({name:"Learn",params:{user:n.user}})):void 0:(n.user=c,void l["a"].push({name:"Learn",params:{user:c}})):(n.bLogin=!1,void b(t,"bLogin",!1))}})),Object(c["onBeforeMount"])((function(){y()})),function(e,t){return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createVNode"])(i["a"]),Object(c["createElementVNode"])("div",d,[m,Object(c["createElementVNode"])("div",f,[Object(c["createElementVNode"])("div",O,[Object(c["unref"])(n).bLogin?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",j,[Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return Object(c["unref"])(n).user=e}),placeholder:"user",class:"form-control",onKeyup:Object(c["withKeys"])(s,["enter"])},null,40,p),[[c["vModelText"],Object(c["unref"])(n).user,void 0,{trim:!0}]]),Object(c["createElementVNode"])("div",{class:"input-group-append"},[Object(c["createElementVNode"])("button",{onClick:s,class:"col-auto btn btn-primary"}," Sign in ")])])),Object(c["unref"])(n).bLogin?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",g,[Object(c["createElementVNode"])("span",h,"Learnt:"+Object(c["toDisplayString"])(Object(c["unref"])(n).learntCount),1),Object(c["createElementVNode"])("button",{onClick:o,class:"col-auto p-1 ms-2 btn btn-outline-primary btn-sm"}," Sign out ")])):Object(c["createCommentVNode"])("",!0)])]),Object(c["createElementVNode"])("div",v,[Object(c["unref"])(n).loading?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",k)):Object(c["createCommentVNode"])("",!0)]),Object(c["createElementVNode"])("div",E,[Object(c["unref"])(n).bLogin?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",N,w)):Object(c["createCommentVNode"])("",!0),(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(Object(c["unref"])(n).words,(function(e,t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:"row",key:e},[Object(c["createElementVNode"])("div",L,Object(c["toDisplayString"])(t+1)+": "+Object(c["toDisplayString"])(e),1),Object(c["createElementVNode"])("div",C,[B,Object(c["createElementVNode"])("a",{class:"btn p-0 btn-sm",target:"_blank",href:"https://dictionary.cambridge.org/dictionary/english/"+e},"Cambridge",8,x),Object(c["createElementVNode"])("a",{class:"btn p-0 ms-1 btn-sm",target:"_blank",href:"https://www.collinsdictionary.com/dictionary/english/"+e},"Collins",8,S),Object(c["createElementVNode"])("a",{class:"btn p-0 ms-1 btn-sm",target:"_blank",href:"https://www.lexico.com/en/definition/"+e},"Oxford",8,D),Object(c["createElementVNode"])("a",{class:"btn p-0 ms-1 btn-sm",target:"_blank",href:"https://dict.cn/"+e},"Dict",8,J),M,Object(c["unref"])(n).bLogin?(Object(c["openBlock"])(),Object(c["createElementBlock"])("button",{key:0,class:"btn btn-outline-info border-0 ms-2",onClick:function(t){return V(e)}}," x ",8,_)):Object(c["createCommentVNode"])("",!0)])])})),128)),Object(c["createElementVNode"])("div",{class:"text-center"},[Object(c["createElementVNode"])("button",{class:"btn btn-primary my-2",onClick:y},"Refresh")])])])],64)}}};const F=K;t["default"]=F},8418:function(e,t,n){"use strict";var c=n("a04b"),r=n("9bf2"),o=n("5c6c");e.exports=function(e,t,n){var a=c(t);a in e?r.f(e,a,o(0,n)):e[a]=n}},"99af":function(e,t,n){"use strict";var c=n("23e7"),r=n("da84"),o=n("d039"),a=n("e8b5"),l=n("861d"),i=n("7b0b"),s=n("07fa"),u=n("8418"),b=n("65f0"),d=n("1dde"),m=n("b622"),f=n("2d00"),O=m("isConcatSpreadable"),j=9007199254740991,p="Maximum allowed index exceeded",g=r.TypeError,h=f>=51||!o((function(){var e=[];return e[O]=!1,e.concat()[0]!==e})),v=d("concat"),k=function(e){if(!l(e))return!1;var t=e[O];return void 0!==t?!!t:a(e)},E=!h||!v;c({target:"Array",proto:!0,arity:1,forced:E},{concat:function(e){var t,n,c,r,o,a=i(this),l=b(a,0),d=0;for(t=-1,c=arguments.length;t<c;t++)if(o=-1===t?a:arguments[t],k(o)){if(r=s(o),d+r>j)throw g(p);for(n=0;n<r;n++,d++)n in o&&u(l,d,o[n])}else{if(d>=j)throw g(p);u(l,d++,o)}return l.length=d,l}})}}]);
//# sourceMappingURL=chunk-5caa9e92.10b72522.js.map