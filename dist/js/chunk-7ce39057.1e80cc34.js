(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ce39057"],{4970:function(e,t,c){},"4de4":function(e,t,c){"use strict";var a=c("23e7"),o=c("b727").filter,r=c("1dde"),i=r("filter");a({target:"Array",proto:!0,forced:!i},{filter:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));c("b64b"),c("a4d3"),c("4de4"),c("e439"),c("159b"),c("dbb4");function a(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}function o(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,a)}return c}function r(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?o(Object(c),!0).forEach((function(t){a(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):o(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}},"58f1":function(e,t,c){},"5da8":function(e,t,c){"use strict";c("58f1")},b905:function(e,t,c){"use strict";c("4970")},dbb4:function(e,t,c){var a=c("23e7"),o=c("83ab"),r=c("56ef"),i=c("fc6a"),n=c("06cf"),l=c("8418");a({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(e){var t,c,a=i(e),o=n.f,s=r(a),d={},u=0;while(s.length>u)c=o(a,t=s[u++]),void 0!==c&&l(d,t,c);return d}})},e01a:function(e,t,c){"use strict";var a=c("23e7"),o=c("83ab"),r=c("da84"),i=c("5135"),n=c("861d"),l=c("9bf2").f,s=c("e893"),d=r.Symbol;if(o&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var u={},p=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof p?new d(e):void 0===e?d():d(e);return""===e&&(u[t]=!0),t};s(p,d);var b=p.prototype=d.prototype;b.constructor=p;var f=b.toString,O="Symbol(test)"==String(d("test")),j=/^Symbol\((.*)\)[^)]+$/;l(b,"description",{configurable:!0,get:function(){var e=n(this)?this.valueOf():this,t=f.call(e);if(i(u,e))return"";var c=O?t.slice(7,-1):t.replace(j,"$1");return""===c?void 0:c}}),a({global:!0,forced:!0},{Symbol:p})}},e439:function(e,t,c){var a=c("23e7"),o=c("d039"),r=c("fc6a"),i=c("06cf").f,n=c("83ab"),l=o((function(){i(1)})),s=!n||l;a({target:"Object",stat:!0,forced:s,sham:!n},{getOwnPropertyDescriptor:function(e,t){return i(r(e),t)}})},e6dc:function(e,t,c){"use strict";c.r(t);c("4de4");var a=c("7a23"),o={class:"category container text-center"},r={class:"nav justify-content-around fs-5 mb-3 border border-chocolate border-center\n      rounded-3 bg-chocolate text-white row"},i={class:"nav-item col p-0"},n={class:"nav-item col p-0"},l={class:"nav-item col p-0"},s={class:"nav-item col p-0"},d={class:"nav-item col p-0"},u={class:"container-xl"},p={class:"row"},b={class:"card border-0 mb-4 position-relative position-relative"},f=Object(a["createVNode"])("a",{href:"#",class:"text-dark"},[Object(a["createVNode"])("i",{class:"far fa-heart position-absolute",style:{right:"16px",top:"16px"}})],-1),O={class:"card-body p-0"},j={class:"mb-0 mt-3"},m={href:"./detail.html"},h={class:"card-text mb-0"},v={class:"text-muted "},g=Object(a["createVNode"])("p",{class:"text-muted mt-3"},null,-1),y={class:"row g-1 justify-content-around"},N=Object(a["createVNode"])("button",{class:"col-5 btn btn-outline-chocolate"},"詳細資料",-1),V=Object(a["createTextVNode"])("加入購物車 ");function k(e,t,c,k,w,S){var C=Object(a["resolveComponent"])("loading"),x=Object(a["resolveComponent"])("swiper-header"),B=Object(a["resolveComponent"])("font-awesome-icon"),P=Object(a["resolveComponent"])("detailComponent");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])(C,{active:w.isLoading},null,8,["active"]),Object(a["createVNode"])(x,{class:"mb-5"}),Object(a["createVNode"])("div",o,[Object(a["createVNode"])("ul",r,[Object(a["createVNode"])("li",i,[Object(a["createVNode"])("a",{class:["nav-link",{active:"all"===w.isActive}],"aria-current":"page",href:"#",onClick:t[1]||(t[1]=Object(a["withModifiers"])((function(e){return S.filter("all")}),["prevent"]))},"全部產品",2)]),Object(a["createVNode"])("li",n,[Object(a["createVNode"])("a",{class:["nav-link",{active:"dark"===w.isActive}],"aria-current":"page",href:"#",onClick:t[2]||(t[2]=Object(a["withModifiers"])((function(e){return S.filter("dark")}),["prevent"]))},"黑巧克力",2)]),Object(a["createVNode"])("li",l,[Object(a["createVNode"])("a",{class:["nav-link",{active:"cookie"===w.isActive}],href:"#",onClick:t[3]||(t[3]=Object(a["withModifiers"])((function(e){return S.filter("cookie")}),["prevent"]))},"餅乾",2)]),Object(a["createVNode"])("li",s,[Object(a["createVNode"])("a",{class:["nav-link",{active:"cake"===w.isActive}],href:"#",onClick:t[4]||(t[4]=Object(a["withModifiers"])((function(e){return S.filter("cake")}),["prevent"]))},"蛋糕",2)]),Object(a["createVNode"])("li",d,[Object(a["createVNode"])("a",{class:["nav-link",{active:"drink"===w.isActive}],href:"#",onClick:t[5]||(t[5]=Object(a["withModifiers"])((function(e){return S.filter("drink")}),["prevent"]))},"飲料",2)])])]),Object(a["createVNode"])("div",u,[Object(a["createVNode"])("div",p,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(w.tempProducts,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])("div",{class:"col-md-4",key:t.id},[Object(a["createVNode"])("div",b,[Object(a["createVNode"])("img",{src:t.imageUrl,class:"card-img-top rounded-0 max-height",alt:"..."},null,8,["src"]),f,Object(a["createVNode"])("div",O,[Object(a["createVNode"])("h5",j,[Object(a["createVNode"])("a",m,Object(a["toDisplayString"])(t.title),1)]),Object(a["createVNode"])("p",h,[Object(a["createTextVNode"])(" NT$"+Object(a["toDisplayString"])(e.$filter.currency(t.price))+" ",1),Object(a["createVNode"])("span",v,[Object(a["createVNode"])("del",null,"NT$"+Object(a["toDisplayString"])(e.$filter.currency(t.origin_price)),1)])]),g,Object(a["createVNode"])("div",y,[N,Object(a["createVNode"])("button",{class:"col-5 btn btn-chocolight",onClick:function(e){return S.addToCart(t.id)}},[w.loadingStatus==t.id?(Object(a["openBlock"])(),Object(a["createBlock"])(B,{key:0,icon:"spinner",pulse:"",class:"fas fa-spinner fa-pulse"})):Object(a["createCommentVNode"])("",!0),V],8,["onClick"])])])])])})),128)),Object(a["createVNode"])(P,{ref:"detail",product:w.tempProducts},null,8,["product"])])])],64)}var w=c("5530"),S=(c("99af"),c("a4d3"),c("e01a"),{class:"modal fade",id:"detailComponent",tabindex:"-1",role:"dialog","aria-labelledby":"detailComponentLabel","aria-hidden":"true",ref:"modal"}),C={class:"modal-dialog modal-xl",role:"document"},x={class:"modal-content border-0"},B={class:"modal-header bg-dark text-white"},P={class:"modal-title",id:"exampleModalLabel"},D=Object(a["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),M={class:"modal-body"},_={class:"row"},q={class:"col-sm-6"},T={class:"col-sm-6"},A={class:"badge bg-primary rounded-pill"},L={key:0,class:"h5"},U={key:1,class:"h6"},$={key:2,class:"h5"},Q={class:"input-group d-flex align-items-center"},I=Object(a["createVNode"])("label",{for:"qty",class:""},"數量：",-1),E=Object(a["createTextVNode"])("加入購物車 "),F={key:0,class:"ms-5 text-danger"};function G(e,t,c,o,r,i){var n=Object(a["resolveComponent"])("font-awesome-icon");return Object(a["openBlock"])(),Object(a["createBlock"])("div",S,[Object(a["createVNode"])("div",C,[Object(a["createVNode"])("div",x,[Object(a["createVNode"])("div",B,[Object(a["createVNode"])("h5",P,[Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(c.product.title),1)]),D]),Object(a["createVNode"])("div",M,[Object(a["createVNode"])("div",_,[Object(a["createVNode"])("div",q,[Object(a["createVNode"])("img",{class:"img-fluid",src:c.product.imageUrl,alt:""},null,8,["src"])]),Object(a["createVNode"])("div",T,[Object(a["createVNode"])("span",A,Object(a["toDisplayString"])(c.product.category),1),Object(a["createVNode"])("p",null,"商品描述："+Object(a["toDisplayString"])(c.product.description),1),Object(a["createVNode"])("p",null,"商品內容："+Object(a["toDisplayString"])(c.product.content),1),c.product.price?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createBlock"])("div",L,Object(a["toDisplayString"])(c.product.origin_price)+" 元",1)),c.product.price?(Object(a["openBlock"])(),Object(a["createBlock"])("del",U,"原價 "+Object(a["toDisplayString"])(c.product.origin_price)+" 元",1)):Object(a["createCommentVNode"])("",!0),c.product.price?(Object(a["openBlock"])(),Object(a["createBlock"])("div",$,"現在只要 "+Object(a["toDisplayString"])(c.product.price)+" 元",1)):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])("div",null,[Object(a["createVNode"])("div",Q,[I,Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"number",class:"form-control",id:"qty","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.qty=e}),min:"1",placeholder:"數量",onChange:t[2]||(t[2]=function(){return i.checkQty&&i.checkQty.apply(i,arguments)})},null,544),[[a["vModelText"],r.qty,void 0,{number:!0}]]),Object(a["createVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[3]||(t[3]=function(e){return i.addToCart(c.product.id,r.qty)})},[r.loadingStatus==c.product.id?(Object(a["openBlock"])(),Object(a["createBlock"])(n,{key:0,icon:"spinner",pulse:"",class:"fas fa-spinner fa-pulse"})):Object(a["createCommentVNode"])("",!0),E])]),r.failQty?(Object(a["openBlock"])(),Object(a["createBlock"])("span",F,"商品數量最少為一件!")):Object(a["createCommentVNode"])("",!0)])])])])])])],512)}var J=c("7c2b"),z=c.n(J),H={props:["product"],data:function(){return{apiUrl:"https://vue3-course-api.hexschool.io",apiPath:"chocolate",qty:1,loadingStatus:"",modal:"",failQty:!1}},methods:{addToCart:function(e){var t=this,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.loadingStatus=e;var a={product_id:e,qty:c},o="".concat(this.apiUrl,"/api/").concat(this.apiPath,"/cart");this.axios.post(o,{data:a}).then((function(e){e.data.success?(alert(e.data.message),t.loadingStatus="",t.emitter.emit("navGetCart")):(alert(e.data.message),t.loadingStatus="")})).catch((function(e){return console.log(e)}))},openModal:function(){this.qty=1,this.modal.show()},hideModal:function(){this.modal.hide()},checkQty:function(){this.qty<=1&&(this.failQty=!0,this.qty=1)}},mounted:function(){this.modal=new z.a(this.$refs.modal,{keyboard:!0,backdrop:!0})}};H.render=G;var K=H,R=Object(a["withScopeId"])("data-v-35faf671");Object(a["pushScopeId"])("data-v-35faf671");var W=Object(a["createVNode"])("img",{src:"https://bi.im-g.pl/im/a5/71/17/z24584101AMP,Kakao.jpg",class:"card-img-top rounded-0 mh-500",alt:"..."},null,-1),X=Object(a["createVNode"])("img",{src:"https://nutrativa.com.br/wp-content/uploads/2020/03/0319202001-polifen%C3%B3is-banner.jpg",class:"card-img-top rounded-0 mh-500",alt:"..."},null,-1),Y=Object(a["createVNode"])("img",{src:"https://cdn1.matadornetwork.com/blogs/2/2020/01/Chocolate-mexicano-historia-1200x853.jpg",class:"card-img-top rounded-0 mh-500",alt:"..."},null,-1),Z=Object(a["createVNode"])("img",{src:"https://i.pinimg.com/originals/ce/16/75/ce16757f71272ee9a7bab2434a99350c.jpg",class:"card-img-top rounded-0 mh-500",style:{"object-position":"center 35%"},alt:"..."},null,-1);Object(a["popScopeId"])();var ee=R((function(e,t,c,o,r,i){var n=Object(a["resolveComponent"])("swiper-slide"),l=Object(a["resolveComponent"])("swiper");return Object(a["openBlock"])(),Object(a["createBlock"])(l,{slidesPerView:1,spaceBetween:30,centeredSlides:!1,autoplay:{delay:5e3,disableOnInteraction:!1},class:"mySwiper"},{default:R((function(){return[Object(a["createVNode"])(n,null,{default:R((function(){return[W]})),_:1}),Object(a["createVNode"])(n,null,{default:R((function(){return[X]})),_:1}),Object(a["createVNode"])(n,null,{default:R((function(){return[Y]})),_:1}),Object(a["createVNode"])(n,null,{default:R((function(){return[Z]})),_:1})]})),_:1})})),te=c("90ea"),ce=c("a16a"),ae=(c("5f67"),c("6d3b")),oe=c("d17a");ae["a"].use([oe["a"]]);var re={components:{Swiper:te["a"],SwiperSlide:ce["a"]}};c("5da8");re.render=ee,re.__scopeId="data-v-35faf671";var ie=re,ne={data:function(){return{apiUrl:"https://vue3-course-api.hexschool.io",apiPath:"chocolate",products:{},tempProducts:{},loadingStatus:"",isActive:"all",isLoading:!1}},methods:{getData:function(){var e=this;this.isLoading=!0,this.axios.get("".concat(this.apiUrl,"/api/").concat(this.apiPath,"/products/all")).then((function(t){t.data.success?(e.products=t.data.products,e.tempProducts=t.data.products):alert(t.data.message),e.isLoading=!1})).catch((function(e){return console.log(e)}))},addToCart:function(e){var t=this,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.loadingStatus=e;var a={product_id:e,qty:c},o="".concat(this.apiUrl,"/api/").concat(this.apiPath,"/cart");this.axios.post(o,{data:a}).then((function(e){e.data.success?(alert(e.data.message),t.loadingStatus="",t.emitter.emit("navGetCart")):(alert(e.data.message),t.loadingStatus="")})).catch((function(e){return console.log(e)}))},openModal:function(e,t){"detail"===e&&(this.tempProducts=Object(w["a"])({},t),this.$refs.detail.openModal())},filter:function(e){this.isLoading=!0,this.isActive=e,this.tempProducts="all"===e?this.products:this.products.filter((function(t){return t.category===e})),this.isLoading=!1}},mounted:function(){this.getData()},components:{detailComponent:K,SwiperHeader:ie}};c("b905");ne.render=k;t["default"]=ne}}]);
//# sourceMappingURL=chunk-7ce39057.1e80cc34.js.map