(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2102cc"],{b789:function(t,e,o){"use strict";o.r(e);var r=o("7a23"),n={class:"container"};function a(t,e,o,a,c,s){var l=Object(r["resolveComponent"])("Progress"),i=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createBlock"])("div",n,[Object(r["createVNode"])(l),Object(r["createVNode"])(i)])}var c={class:"position-relative mx-5"},s={class:"progress my-6",style:{height:"1px"}},l=Object(r["createTextVNode"])(" 1 "),i=Object(r["createVNode"])("span",{class:"rounded-pill text-dark\n          position-absolute start-0 translate-middle",style:{bottom:"-60px"}},"確認商品",-1),d=Object(r["createTextVNode"])(" 2 "),b=Object(r["createVNode"])("span",{class:"rounded-pill text-dark\n          position-absolute start-50 translate-middle",style:{bottom:"-60px"}},"填寫資料",-1),p=Object(r["createTextVNode"])(" 3 "),u=Object(r["createVNode"])("span",{class:"rounded-pill text-dark\n          position-absolute start-100 translate-middle",style:{bottom:"-60px",width:"64px"}},"完成訂單",-1);function m(t,e,o,n,a,m){var h=Object(r["resolveComponent"])("router-link");return Object(r["openBlock"])(),Object(r["createBlock"])("div",c,[Object(r["createVNode"])("div",s,[Object(r["createVNode"])("div",{class:"progress-bar bg-chocolight",role:"progressbar",style:"width: ".concat(a.percent,"%;"),"aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"},null,4)]),Object(r["createVNode"])(h,{to:"/cart",type:"button",class:"position-absolute top-0 start-0 translate-middle\n        btn btn-sm btn-chocolate rounded-pill",style:{width:"2rem",height:"2rem"}},{default:Object(r["withCtx"])((function(){return[l]})),_:1}),i,Object(r["createVNode"])(h,{to:"/cart/profile",type:"button",class:["position-absolute top-0 start-50 translate-middle\n        btn btn-sm btn-secondary rounded-pill",{"btn-chocolate":a.percent>=50}],style:{width:"2rem",height:"2rem"}},{default:Object(r["withCtx"])((function(){return[d]})),_:1},8,["class"]),b,Object(r["createVNode"])(h,{to:"/cart/order",type:"button",class:["position-absolute top-0 start-100 translate-middle\n        btn btn-sm btn-secondary rounded-pill",{"btn-chocolate":100==a.percent}],style:{width:"2rem",height:"2rem"}},{default:Object(r["withCtx"])((function(){return[p]})),_:1},8,["class"]),u])}var h={data:function(){return{percent:0}},created:function(){var t=this;this.emitter.on("toProgress",(function(e){t.percent=e}))}};h.render=m;var j=h,O={components:{Progress:j}};O.render=a;e["default"]=O}}]);
//# sourceMappingURL=chunk-2d2102cc.4ac6f5ec.js.map