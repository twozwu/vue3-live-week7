(function(e){function t(t){for(var c,n,i=t[0],s=t[1],l=t[2],d=0,u=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&u.push(o[n][0]),o[n]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);b&&b(t);while(u.length)u.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],c=!0,n=1;n<a.length;n++){var i=a[n];0!==o[i]&&(c=!1)}c&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var c={},n={app:0},o={app:0},r=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-098518de":"8edbf3cf","chunk-19fab5ca":"7968f7fa","chunk-26c1accc":"df52174d","chunk-2d0d0262":"c40eb485","chunk-2d0e22a4":"5a1ea4e5","chunk-2d2102cc":"d202bcd9","chunk-2d217357":"c86fce15","chunk-2d222708":"48b630b1","chunk-6c6e53a6":"2e383380","chunk-73360d92":"94763a83","chunk-a1109460":"8c5550c4","chunk-4b7809a0":"8157ff2c","chunk-6626520e":"dae5e827","chunk-20222321":"95bd88ab","chunk-2c8474e7":"57a3de66","chunk-328eb12f":"d02f4dd7","chunk-6be45f22":"3110537f","chunk-fb2af8de":"845ca310"}[e]+".js"}function s(t){if(c[t])return c[t].exports;var a=c[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a={"chunk-19fab5ca":1,"chunk-26c1accc":1,"chunk-a1109460":1,"chunk-4b7809a0":1,"chunk-6626520e":1,"chunk-20222321":1,"chunk-2c8474e7":1,"chunk-328eb12f":1,"chunk-6be45f22":1,"chunk-fb2af8de":1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var c="css/"+({}[e]||e)+"."+{"chunk-098518de":"31d6cfe0","chunk-19fab5ca":"9cd5b9c5","chunk-26c1accc":"5de5c1f3","chunk-2d0d0262":"31d6cfe0","chunk-2d0e22a4":"31d6cfe0","chunk-2d2102cc":"31d6cfe0","chunk-2d217357":"31d6cfe0","chunk-2d222708":"31d6cfe0","chunk-6c6e53a6":"31d6cfe0","chunk-73360d92":"31d6cfe0","chunk-a1109460":"6680f48e","chunk-4b7809a0":"e969e16a","chunk-6626520e":"7464fde1","chunk-20222321":"40b8a4b6","chunk-2c8474e7":"5c8a2b68","chunk-328eb12f":"53f19d31","chunk-6be45f22":"ef43c1df","chunk-fb2af8de":"60d2e0c5"}[e]+".css",o=s.p+c,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var l=r[i],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===c||d===o))return t()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){l=u[i],d=l.getAttribute("data-href");if(d===c||d===o)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var c=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=c,delete n[e],b.parentNode.removeChild(b),a(r)},b.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(b)})).then((function(){n[e]=0})));var c=o[e];if(0!==c)if(c)t.push(c[2]);else{var r=new Promise((function(t,a){c=o[e]=[t,a]}));t.push(c[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=i(e);var u=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(b);var a=o[e];if(0!==a){if(a){var c=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+c+": "+n+")",u.name="ChunkLoadError",u.type=c,u.request=n,a[1](u)}o[e]=void 0}};var b=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=c,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)s.d(a,c,function(t){return e[t]}.bind(null,c));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue3-live-week7/dist/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var b=d;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},2956:function(e,t,a){"use strict";a("c5f1")},"394b":function(e,t,a){},"3a5e":function(e,t,a){"use strict";var c=a("7a23"),n=Object(c["createVNode"])("div",{class:"loadingio-spinner-ripple-wu44vrvts1"},[Object(c["createVNode"])("div",{class:"ldio-2gn8nvj94zp"},[Object(c["createVNode"])("div"),Object(c["createVNode"])("div")])],-1);function o(e,t){var a=Object(c["resolveComponent"])("Loading",!0);return Object(c["openBlock"])(),Object(c["createBlock"])(a,null,{default:Object(c["withCtx"])((function(){return[n]})),_:1})}a("af0a");const r={};r.render=o;t["a"]=r},5227:function(e,t){e.exports="data:image/png;base64,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"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("159b"),a("b64b");var c=a("7a23"),n=a("5089"),o=(a("7b17"),a("bc3a")),r=a.n(o),i=a("2106"),s=a.n(i),l=a("7bb1"),d=a("3aa8"),u=a("cbdf"),b=a("9457"),h=a("ecee"),f=a("c074"),p=a("ad3d"),m=(a("a15b"),a("14b7")),v=Object(m["a"])(),O=v,g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"更新",a="number"===typeof e?e:e.data.success;switch(a){case 1:O.emit("push-message",{style:"success",title:"".concat(t)});break;case 0:O.emit("push-message",{style:"danger",title:"".concat(t)});break;case!0:O.emit("push-message",{style:"success",title:"".concat(t,"成功")});break;case!1:var c="string"===typeof e.data.message?[e.data.message]:e.data.message;O.emit("push-message",{style:"danger",title:"".concat(t,"失敗"),content:c.join("、")});break;default:O.emit("push-message",{style:"danger",title:"找不到選項"});break}},j=a("9062"),N=a.n(j),k=(a("e40d"),a("f9d5")),V=a.n(k);a("4413"),a("ac1f"),a("5319"),a("b680");function y(e){var t=new Date(1e3*e);return t.toLocaleDateString()}function w(e){var t=parseInt(e,10);return"".concat(t.toFixed(0).replace(/./g,(function(e,t,a){return t&&"."!==e&&(a.length-t)%3===0?", ".concat(e).replace(/\s/g,""):e})))}function C(e,t,a,n,o,r){var i=Object(c["resolveComponent"])("loading"),s=Object(c["resolveComponent"])("router-view"),l=Object(c["resolveComponent"])("ToastMessage");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])(i,{active:o.isLoading},null,8,["active"]),Object(c["createVNode"])(s),Object(c["createVNode"])(l)],64)}var x={class:"toast-container position-fixed pe-3 bottom-0 end-0",style:{"z-index":"1500"}},T={class:"toast-header"},I={class:"me-auto"},A={key:0,class:"toast-body"};function M(e,t,a,n,o,r){return Object(c["openBlock"])(),Object(c["createBlock"])("div",x,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(o.messages,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{key:t,class:["toast show mb-2","toast".concat(t)],role:"alert"},[Object(c["createVNode"])("div",T,[Object(c["createVNode"])("span",{class:["bg-".concat(e.style),"p-2 rounded me-2 d-inline-block"]},null,2),Object(c["createVNode"])("strong",I,Object(c["toDisplayString"])(e.title),1),Object(c["createVNode"])("button",{type:"button",class:"btn-close",onClick:function(e){return r.clearToast(t)},"aria-label":"Close"},null,8,["onClick"])]),e.content?(Object(c["openBlock"])(),Object(c["createBlock"])("div",A,Object(c["toDisplayString"])(e.content),1)):Object(c["createCommentVNode"])("",!0)],2)})),128))])}a("a434");var B={data:function(){return{messages:[]}},methods:{toastShow:function(){var e=this;setTimeout((function(){e.messages.shift()}),6e3)},clearToast:function(e){this.messages.splice(e,1)}},mounted:function(){var e=this;this.emitter.on("push-message",(function(t){var a=t.style,c=void 0===a?"success":a,n=t.title,o=t.content;e.messages.push({style:c,title:n,content:o}),e.toastShow()}))},unmounted:function(){this.emitter.off("push-message")}};B.render=M;var S=B,P=a("3a5e"),L={components:{ToastMessage:S,Loading:P["a"]},data:function(){return{isLoading:!1}},created:function(){var e=this;this.emitter.on("isLoading",(function(t){e.isLoading=t}))},unmounted:function(){var e=this;this.emitter.off("isLoading",(function(t){e.isLoading=t}))}};a("b2d8");L.render=C;var D=L,E=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),R=Object(c["createVNode"])("div",{style:{height:"72px"}},null,-1);function G(e,t,a,n,o,r){var i=Object(c["resolveComponent"])("NavComponent"),s=Object(c["resolveComponent"])("router-view"),l=Object(c["resolveComponent"])("Footer");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])(i),R,Object(c["createVNode"])(s),Object(c["createVNode"])(l)],64)}a("b0c0"),a("a4d3"),a("e01a");var H=a("5227"),q=a.n(H),z=Object(c["withScopeId"])("data-v-5586db7d");Object(c["pushScopeId"])("data-v-5586db7d");var Z={class:"navbar navbar-expand-lg navbar-dark bg-chocolate fs-5 fixed-top shadow-lg"},F={class:"container-fluid"},K=Object(c["createVNode"])("span",{class:"navbar-toggler-icon"},null,-1),U=Object(c["createVNode"])("img",{src:q.a,class:"navbar-brand"},null,-1),Q={class:"collapse navbar-collapse",id:"navbarNav",ref:"navbar"},X={class:"navbar-nav"},Y={class:"nav-item"},J={class:"nav-item"},W={class:"nav-item"},$={class:"nav-item"},_={class:"nav-item"},ee={key:0,class:"bg-danger position-absolute top-20 start-60\n            translate-middle fs-6 px-2 py-1 d-inline-block badge rounded-pill"},te={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offcanvasRight",ref:"offcanvasRight","aria-labelledby":"offcanvasRightLabel"},ae=Object(c["createVNode"])("div",{class:"offcanvas-header bg-chocolate text-light"},[Object(c["createVNode"])("span",{id:"offcanvasRightLabel h5"},"我的購物車"),Object(c["createVNode"])("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),ce={class:"offcanvas-body"},ne={class:"row justify-content-center"},oe={class:"col-md-12 bg-white",style:{"min-height":"calc(100vh - 56px - 76px)"}},re=Object(c["createVNode"])("div",{class:"d-flex justify-content-between"},[Object(c["createVNode"])("h2",{class:""},"購物清單")],-1),ie={key:0,class:"my-3 text-center fw-lighter"},se={class:"py-3"},le={class:"w-100 p-3 position-relative"},de={class:"mb-0 fw-bold"},ue={class:"mb-1 text-muted",style:{"font-size":"14px"}},be={class:"d-flex justify-content-between align-items-center w-100"},he={class:"input-group w-50 align-items-center"},fe={class:"input-group-prepend pe-1"},pe={class:"input-group-append ps-1"},me={class:"mb-0 ms-auto"},ve={class:"table mt-4 text-muted"},Oe={key:0,class:"text-success"},ge=Object(c["createVNode"])("th",{scope:"row",class:"border-0 px-0 pt-0 font-weight-normal"},"折扣價：",-1),je={class:"text-end border-0 px-0 pt-0 "},Ne={class:"d-flex justify-content-between mt-4"},ke=Object(c["createVNode"])("p",{class:"mb-0 h4 fw-bold"},"最終金額：",-1),Ve={class:"mb-0 h4 fw-bold"},ye=Object(c["createTextVNode"])("前往結帳");Object(c["popScopeId"])();var we=z((function(e,t,a,n,o,r){var i=Object(c["resolveComponent"])("router-link"),s=Object(c["resolveComponent"])("b-icon-cart2"),l=Object(c["resolveComponent"])("font-awesome-icon"),d=Object(c["resolveComponent"])("find-order-modal");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])("nav",Z,[Object(c["createVNode"])("div",F,[Object(c["createVNode"])("button",{class:"navbar-toggler",type:"button","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",onClick:t[1]||(t[1]=function(){return r.navbarToggle&&r.navbarToggle.apply(r,arguments)})},[K]),Object(c["createVNode"])("a",{href:"#",onClick:t[2]||(t[2]=Object(c["withModifiers"])((function(e){return r.routerPush("/#")}),["prevent"]))},[U]),Object(c["createVNode"])("div",Q,[Object(c["createVNode"])("ul",X,[Object(c["createVNode"])("li",Y,[Object(c["createVNode"])("a",{class:["nav-link",{active:"products"==e.$route.name}],href:"#",onClick:t[3]||(t[3]=Object(c["withModifiers"])((function(e){return r.routerPush("/products")}),["prevent"]))},"產品列表",2)]),Object(c["createVNode"])("li",J,[Object(c["createVNode"])("a",{class:["nav-link",{active:"cart"===e.$route.name}],href:"#",onClick:t[4]||(t[4]=Object(c["withModifiers"])((function(e){return r.routerPush("/cart")}),["prevent"]))},"購物車",2)]),Object(c["createVNode"])("li",W,[Object(c["createVNode"])("a",{class:"nav-link",href:"#",onClick:t[5]||(t[5]=Object(c["withModifiers"])((function(){return r.openFindOrder&&r.openFindOrder.apply(r,arguments)}),["prevent"]))},"查詢訂單")]),Object(c["createVNode"])("li",$,[Object(c["createVNode"])(i,{class:["nav-link",{active:"favorite"==e.$route.name}],to:"/favorite",onClick:t[6]||(t[6]=Object(c["withModifiers"])((function(e){return r.routerPush("/favorite")}),["prevent"]))},{default:z((function(){return[Object(c["createTextVNode"])("我的最愛("+Object(c["toDisplayString"])(o.myFavoriteLength)+")",1)]})),_:1},8,["class"])]),Object(c["createVNode"])("li",_,[Object(c["createVNode"])("a",{class:["nav-link",{active:"about"==e.$route.name}],href:"#",onClick:t[7]||(t[7]=Object(c["withModifiers"])((function(e){return r.routerPush("/about")}),["prevent"]))},"關於我們",2)])])],512),Object(c["createVNode"])("i",{class:" position-relative",style:{cursor:"pointer"},"data-bs-target":"#offcanvasRight","aria-controls":"offcanvasRight",onClick:t[8]||(t[8]=function(){return r.canvasToggle&&r.canvasToggle.apply(r,arguments)})},[Object(c["createVNode"])(s,{class:"cart-icon navbar-brand navbar-expand"}),""!=o.carts.cartsLength?(Object(c["openBlock"])(),Object(c["createBlock"])("span",ee,Object(c["toDisplayString"])(o.carts.cartsLength),1)):Object(c["createCommentVNode"])("",!0)])])]),Object(c["createVNode"])("div",te,[ae,Object(c["createVNode"])("div",ce,[Object(c["createVNode"])("div",ne,[Object(c["createVNode"])("div",oe,[re,o.carts.cartsLength?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createBlock"])("h5",ie," 購物車為空! ")),(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(o.carts.carts,(function(t,a){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{class:"d-flex mt-2 bg-light",key:t.id},[Object(c["createVNode"])("div",se,[Object(c["createVNode"])(i,{to:"/detail/".concat(t.product.id)},{default:z((function(){return[Object(c["createVNode"])("img",{src:t.product.imageUrl,alt:t.product.title,style:{width:"120px",height:"120px","object-fit":"cover"}},null,8,["src","alt"])]})),_:2},1032,["to"])]),Object(c["createVNode"])("div",le,[Object(c["createVNode"])("a",{href:"#",class:"position-absolute text-chocolate",style:{top:"16px",right:"16px"},onClick:Object(c["withModifiers"])((function(e){return r.delItem(t.id)}),["prevent"])},[Object(c["createVNode"])(l,{icon:"times",class:"fas fa-times"})],8,["onClick"]),Object(c["createVNode"])("p",de,Object(c["toDisplayString"])(t.product.title),1),Object(c["createVNode"])("p",ue,Object(c["toDisplayString"])(t.product.description),1),Object(c["createVNode"])("div",be,[Object(c["createVNode"])("div",he,[Object(c["createVNode"])("div",fe,[Object(c["createVNode"])("button",{class:"btn btn-outline-chocolight border-0 py-2",type:"button",id:"button-addon1",disabled:o.loadingStatus==t.id||t.qty<=1,onClick:function(e){return r.updateCart(t,t.qty-1)}},[Object(c["createVNode"])(l,{icon:"minus",class:"fas fa-minus"})],8,["disabled","onClick"])]),Object(c["withDirectives"])(Object(c["createVNode"])("input",{type:"number",class:"form-control border-0 text-center my-auto shadow-none bg-light px-0","aria-label":"Example text with button addon","aria-describedby":"button-addon1","onUpdate:modelValue":function(e){return t.qty=e},ref:"input".concat(a),disabled:o.loadingStatus==t.id,onChange:function(e){return r.updateCart(t)}},null,40,["onUpdate:modelValue","disabled","onChange"]),[[c["vModelText"],t.qty,void 0,{number:!0}]]),Object(c["createVNode"])("div",pe,[Object(c["createVNode"])("button",{class:"btn btn-outline-chocolight border-0 py-2",type:"button",id:"button-addon2",disabled:o.loadingStatus==t.id,onClick:function(e){return r.updateCart(t,t.qty+1)}},[Object(c["createVNode"])(l,{icon:"plus",class:"fas fa-plus"})],8,["disabled","onClick"])])]),Object(c["createVNode"])("p",me,"NT$"+Object(c["toDisplayString"])(e.$filter.currency(t.product.price)),1)])])])})),128)),Object(c["createVNode"])("table",ve,[Object(c["createVNode"])("tbody",null,[Object(c["createVNode"])("tr",null,[Object(c["createVNode"])("th",{scope:"row",class:["border-0 px-0 font-weight-normal",{"text-decoration-line-through":o.carts.total!=o.carts.final_total}]}," 總額： ",2),Object(c["createVNode"])("td",{class:["text-end border-0 px-0",{"text-decoration-line-through":o.carts.total!=o.carts.final_total}]}," NT$"+Object(c["toDisplayString"])(e.$filter.currency(o.carts.total)),3)]),o.carts.total!=o.carts.final_total?(Object(c["openBlock"])(),Object(c["createBlock"])("tr",Oe,[ge,Object(c["createVNode"])("td",je," NT$"+Object(c["toDisplayString"])(e.$filter.currency(o.carts.final_total)),1)])):Object(c["createCommentVNode"])("",!0)])]),Object(c["createVNode"])("div",Ne,[ke,Object(c["createVNode"])("p",Ve,"NT$"+Object(c["toDisplayString"])(e.$filter.currency(o.carts.final_total)),1)]),Object(c["createVNode"])(i,{to:"/cart",class:"btn btn-chocolight mt-4 text-end py-3",onClick:t[9]||(t[9]=function(e){return r.routerPush("/cart")})},{default:z((function(){return[ye]})),_:1})])])])],512),Object(c["createVNode"])(d,{ref:"findOrderModal"},null,512)],64)})),Ce=(a("99af"),a("810f")),xe=a.n(Ce),Te=a("1517"),Ie=a.n(Te),Ae={class:"modal fade",ref:"modal","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"modal","aria-hidden":"true"},Me={class:"modal-dialog"},Be={class:"modal-content border-0"},Se={class:"modal-header bg-chocolate text-light"},Pe=Object(c["createVNode"])("label",{class:"modal-title h5",for:"orderID"},"訂單查詢",-1),Le={class:"modal-body"},De={class:"input-group"},Ee={class:"modal-footer"};function Re(e,t,a,n,o,r){return Object(c["openBlock"])(),Object(c["createBlock"])("div",Ae,[Object(c["createVNode"])("div",Me,[Object(c["createVNode"])("div",Be,[Object(c["createVNode"])("div",Se,[Pe,Object(c["createVNode"])("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close",onClick:t[1]||(t[1]=function(){return e.resetData&&e.resetData.apply(e,arguments)})})]),Object(c["createVNode"])("div",Le,[Object(c["createVNode"])("div",De,[Object(c["withDirectives"])(Object(c["createVNode"])("input",{type:"text",class:"form-control border-chocolight",placeholder:"請輸入訂單序號",ref:"orderID",id:"orderID","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.orderID=e})},null,512),[[c["vModelText"],o.orderID,void 0,{trim:!0}]]),Object(c["createVNode"])("button",{class:"btn btn-chocolate",disabled:!o.orderID,type:"button",onClick:t[3]||(t[3]=function(){return r.searchOrder&&r.searchOrder.apply(r,arguments)})}," 查詢 ",8,["disabled"])])]),Object(c["createVNode"])("div",Ee,[Object(c["createVNode"])("button",{type:"button",class:"btn btn-outline-chocolight",disabled:!o.orderID,onClick:t[4]||(t[4]=function(){return e.resetData&&e.resetData.apply(e,arguments)})}," Reset ",8,["disabled"]),Object(c["createVNode"])("button",{type:"button",class:"btn btn-chocolight","data-bs-dismiss":"modal",onClick:t[5]||(t[5]=function(){return e.resetData&&e.resetData.apply(e,arguments)})}," Close ")])])])],512)}var Ge=a("91e3"),He={data:function(){return{orderID:""}},mixins:[Ge["a"]],methods:{searchOrder:function(){this.emitter.emit("navPush","/cart/order/".concat(this.orderID)),this.hideModal(),this.orderID=""}}};He.render=Re;var qe=He,ze={components:{FindOrderModal:qe},provide:function(){return{products:this.products}},data:function(){return{apiUrl:"https://vue3-course-api.hexschool.io",apiPath:"chocolate",carts:{cartsLength:0},myFavoriteLength:"",loadingStatus:"",isLoading:!1,navbar:null,canvas:null}},methods:{getCart:function(){var e=this;this.axios.get("".concat(this.apiUrl,"/api/").concat(this.apiPath,"/cart")).then((function(t){t.data.success?(e.carts=t.data.data,e.carts.cartsLength=e.carts.carts.length,e.sendData()):e.$httpToastMessage(t,t.data.message)})).catch((function(t){e.$httpToastMessage(0,t)}))},updateCart:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.qty;if(a<1)return this.$swal("商品數量最少為一件!"),void this.getCart();if(a>99)return this.$swal("商品數量最多為99！"),void this.getCart();this.emitter.emit("isLoading",!0);var c={product_id:e.product_id,qty:a},n="".concat(this.apiUrl,"/api/").concat(this.apiPath,"/cart/").concat(e.id);this.axios.put(n,{data:c}).then((function(e){e.data.success?(t.$httpToastMessage(e,e.data.message),t.getCart()):t.$httpToastMessage(e.data.message),t.emitter.emit("isLoading",!1)})).catch((function(e){t.emitter.emit("isLoading",!1),t.$httpToastMessage(0,e)}))},delItem:function(e){var t=this;this.emitter.emit("isLoading",!0);var a="".concat(this.apiUrl,"/api/").concat(this.apiPath,"/cart/").concat(e);this.axios.delete(a).then((function(e){e.data.success?(t.$httpToastMessage(e,e.data.message),t.getCart()):t.$httpToastMessage(e,e.data.message),t.emitter.emit("isLoading",!1)})).catch((function(e){t.emitter.emit("isLoading",!1),t.$httpToastMessage(0,e)}))},sendData:function(){this.emitter.emit("cartBus",this.carts)},openFindOrder:function(){this.$refs.findOrderModal.openModal()},favoriteGet:function(){var e=localStorage.getItem("favorite");this.myFavoriteLength=e?JSON.parse(e).length:0},routerPush:function(e){this.navbar.hide(),this.canvas.hide(),this.$router.push(e)},navbarToggle:function(){this.navbar.toggle()},canvasToggle:function(){this.canvas.toggle()}},created:function(){var e=this;this.emitter.on("navGetCart",(function(){return e.getCart()})),this.emitter.on("navSendData",(function(){return e.sendData()})),this.emitter.on("navFavoriteLength",(function(){return e.favoriteGet()})),this.emitter.on("navPush",(function(t){return e.routerPush(t)}))},mounted:function(){this.getCart(),this.favoriteGet(),this.navbar=new xe.a("#navbarNav",{toggle:!1}),this.canvas=new Ie.a("#offcanvasRight")},unmouned:function(){this.emitter.off("navGetCart"),this.emitter.off("navSendData"),this.emitter.off("navFavoriteLength"),this.emitter.off("navPush")}};a("9ceb");ze.render=we,ze.__scopeId="data-v-5586db7d";var Ze=ze,Fe={class:"bg-mail py-4 mt-lg-6 mt-5"},Ke={class:"container"},Ue={class:"d-flex flex-column flex-md-row justify-content-between\n        align-items-md-center align-items-start"},Qe=Object(c["createVNode"])("label",{for:"email-member",class:"mb-0 fw-light"},"請立即訂閱我們，以確保獲得最新優惠活動！",-1),Xe=Object(c["createVNode"])("div",{class:"input-group-append"},[Object(c["createVNode"])("button",{class:"btn btn-outline-chocolight rounded-0",type:"submit"}," 送出 ")],-1),Ye=Object(c["createVNode"])("div",{class:"bg-chocolate py-md-5 py-3"},[Object(c["createVNode"])("div",{class:"container"},[Object(c["createVNode"])("div",{class:"d-flex align-items-center justify-content-between text-white mb-md-2 mb-4"},[Object(c["createVNode"])("a",{class:"text-white h4",href:"#"},[Object(c["createVNode"])("img",{src:q.a,class:"navbar-brand"})]),Object(c["createVNode"])("ul",{class:"d-flex list-unstyled mb-0 h4"},[Object(c["createVNode"])("li",null,[Object(c["createVNode"])("a",{href:"#",class:"text-white mx-3"},[Object(c["createVNode"])("i",{class:"fab fa-facebook"})])]),Object(c["createVNode"])("li",null,[Object(c["createVNode"])("a",{href:"#",class:"text-white mx-3"},[Object(c["createVNode"])("i",{class:"fab fa-instagram"})])]),Object(c["createVNode"])("li",null,[Object(c["createVNode"])("a",{href:"#",class:"text-white ms-3"},[Object(c["createVNode"])("i",{class:"fab fa-line"})])])])]),Object(c["createVNode"])("div",{class:"d-flex align-items-center justify-content-between text-white mb-md-4 mb-4"},[Object(c["createVNode"])("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d911.5220305327193!2d120.97437302926683!3d23.957323824596582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468d9903ecdfebf%3A0x91484f4852917691!2zNTQ15Y2X5oqV57ij5Z-U6YeM6Y6u5Y2X5a6J6LevMjLomZ8!5e0!3m2!1szh-TW!2stw!4v1626628106013!5m2!1szh-TW!2stw",width:"600",height:"450",style:{border:"0"},allowfullscreen:"",loading:"lazy",class:"map"})]),Object(c["createVNode"])("div",{class:"d-flex flex-column flex-md-row justify-content-between\n         align-items-md-end align-items-start text-white position-relative"},[Object(c["createVNode"])("div",{class:"mb-md-0 mb-4"},[Object(c["createVNode"])("p",{class:"mb-0"},"服務專線：02-3456-7890"),Object(c["createVNode"])("p",{class:"mb-0"},"行動電話：0908-0898-0838"),Object(c["createVNode"])("p",{class:"mb-0"},"電子郵件：service@mail.com"),Object(c["createVNode"])("p",{class:"mb-0"},"通訊地址：南投埔里巧克力山神奇的小巷弄168號")]),Object(c["createVNode"])("div",{class:"position-md-absolute end-0 bottom-0"},[Object(c["createVNode"])("a",{href:"https://github.com/twozwu/vue3-live-week7",target:"_blank",class:"mb-2 h4 table align-middle"},[Object(c["createVNode"])("i",{class:"fab fa-github text-white"})]),Object(c["createVNode"])("p",{class:"mb-0"},"圖片僅為練習使用，無商業用途。"),Object(c["createVNode"])("p",{class:"mb-0"},"© 2021 LOGO All Rights Reserved.")])])])],-1);function Je(e,t,a,n,o,r){var i=Object(c["resolveComponent"])("Field"),s=Object(c["resolveComponent"])("ErrorMessage"),l=Object(c["resolveComponent"])("Form");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])("div",Fe,[Object(c["createVNode"])("div",Ke,[Object(c["createVNode"])("div",Ue,[Qe,Object(c["createVNode"])(l,{class:"input-group w-md-50 mt-md-0 mt-3",onSubmit:r.toastMessage},{default:Object(c["withCtx"])((function(e){var t=e.errors;return[Object(c["createVNode"])(i,{id:"email-member",type:"email",name:"email",rules:"email|required",class:["form-control rounded-0 border-chocolight",{"is-invalid":t["email"]}],placeholder:"請輸入電子信箱"},null,8,["class"]),Xe,Object(c["createVNode"])(s,{name:"email",class:"invalid-feedback"})]})),_:1},8,["onSubmit"])])])]),Ye],64)}var We={methods:{toastMessage:function(){this.$httpToastMessage(1,"感謝您的訂閱，未來將不定時寄送優惠通知")}}};a("2956");We.render=Je;var $e=We,_e={components:{NavComponent:Ze,Footer:$e}};_e.render=G;var et=_e,tt=[{path:"/",name:"Home",component:et,children:[{path:"",name:"index",component:function(){return Promise.all([a.e("chunk-a1109460"),a.e("chunk-6626520e"),a.e("chunk-20222321")]).then(a.bind(null,"d504"))}},{path:"products",name:"products",component:function(){return Promise.all([a.e("chunk-a1109460"),a.e("chunk-6be45f22")]).then(a.bind(null,"e6dc"))}},{path:"detail/:id",name:"detail",component:function(){return Promise.all([a.e("chunk-a1109460"),a.e("chunk-6626520e"),a.e("chunk-328eb12f")]).then(a.bind(null,"c84b"))}},{path:"favorite",name:"favorite",component:function(){return Promise.all([a.e("chunk-a1109460"),a.e("chunk-4b7809a0")]).then(a.bind(null,"a09f"))}},{path:"cart",component:function(){return a.e("chunk-2d2102cc").then(a.bind(null,"b789"))},children:[{path:"",name:"cart",component:function(){return Promise.all([a.e("chunk-a1109460"),a.e("chunk-6626520e"),a.e("chunk-2c8474e7")]).then(a.bind(null,"3b3f"))}},{path:"profile",component:function(){return a.e("chunk-2d217357").then(a.bind(null,"c66d"))}},{path:"order/:id",component:function(){return a.e("chunk-2d222708").then(a.bind(null,"cf2a"))}}]},{path:"success",component:function(){return a.e("chunk-19fab5ca").then(a.bind(null,"4625"))}},{path:"about",name:"about",component:function(){return a.e("chunk-fb2af8de").then(a.bind(null,"f820"))}}]},{path:"/login",component:function(){return a.e("chunk-2d0d0262").then(a.bind(null,"676a"))}},{path:"/admin",component:function(){return a.e("chunk-2d0e22a4").then(a.bind(null,"7e11"))},children:[{path:"products",component:function(){return a.e("chunk-098518de").then(a.bind(null,"d416"))}},{path:"orders",component:function(){return a.e("chunk-6c6e53a6").then(a.bind(null,"91af"))}},{path:"coupons",component:function(){return a.e("chunk-73360d92").then(a.bind(null,"d0a3"))}}]},{path:"/:pathMatch(.*)*",component:function(){return a.e("chunk-26c1accc").then(a.bind(null,"9703"))}}],at=Object(E["a"])({history:Object(E["b"])(),routes:tt,linkActiveClass:"active",scrollBehavior:function(){return{el:"#app",top:0}}}),ct=at,nt={icon:"error",title:"Oops..."};Object.keys(d["a"]).forEach((function(e){Object(l["e"])(e,d["a"][e])})),Object(l["d"])({generateMessage:Object(u["a"])({zh_TW:b}),validateOnInput:!0}),Object(u["b"])("zh_TW"),h["c"].add(f["e"],f["b"],f["d"],f["f"],f["c"],f["a"]);var ot=Object(c["createApp"])(D);ot.use(ct),ot.use(n["a"]),ot.use(s.a,r.a),ot.use(V.a,nt),ot.component("Form",l["c"]),ot.component("Field",l["b"]),ot.component("ErrorMessage",l["a"]),ot.config.globalProperties.emitter=O,ot.config.globalProperties.$filter={date:y,currency:w},ot.config.globalProperties.$httpToastMessage=g,ot.component("font-awesome-icon",p["a"]),ot.config.productionTip=!0,ot.component("Loading",N.a),ot.mount("#app")},"6bce":function(e,t,a){},"91e3":function(e,t,a){"use strict";var c=a("7c2b"),n=a.n(c);t["a"]={methods:{openModal:function(){this.modal.show()},hideModal:function(){this.modal.hide()}},mounted:function(){this.modal=new n.a(this.$refs.modal)}}},"9ceb":function(e,t,a){"use strict";a("ee0a")},af0a:function(e,t,a){"use strict";a("6bce")},b2d8:function(e,t,a){"use strict";a("394b")},c5f1:function(e,t,a){},ee0a:function(e,t,a){}});
//# sourceMappingURL=app.e0a0171d.js.map