(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a9722e0"],{3454:function(e,t,c){"use strict";c("5b23")},"58f1":function(e,t,c){},"5b23":function(e,t,c){},"5da8":function(e,t,c){"use strict";c("58f1")},e6dc:function(e,t,c){"use strict";c.r(t);c("4de4");var a=c("7a23"),o={class:"category container text-center"},r={class:"nav justify-content-around\n      fs-5 fs-sm-6 mb-3 border border-chocolate border-center\n      rounded-3 bg-chocolate text-white"},i={class:"nav-item col nav-link p-0"},n={class:"nav-item col p-0"},l={class:"nav-item col p-0"},s={class:"nav-item col p-0"},d={class:"nav-item col p-0"},u={class:"container-xl"},p={class:"row"},b={class:"card border-0 mb-4 position-relative"},j={class:"position-relative"},O=Object(a["createVNode"])("a",{href:"#",class:"text-dark"},[Object(a["createVNode"])("i",{class:"far fa-heart position-absolute",style:{right:"16px",top:"16px"}})],-1),m={class:"card-body p-0"},h={class:"mb-0 mt-3 fw-bold"},f={class:"card-text mb-0"},v={class:"text-muted "},g=Object(a["createVNode"])("p",{class:"text-muted mt-3"},null,-1),N={class:"row g-1 justify-content-around"},V=Object(a["createTextVNode"])("詳細資料"),k=Object(a["createTextVNode"])("加入購物車 ");function y(e,t,c,y,C,w){var x=Object(a["resolveComponent"])("loading"),S=Object(a["resolveComponent"])("swiper-header"),B=Object(a["resolveComponent"])("router-link"),T=Object(a["resolveComponent"])("font-awesome-icon"),D=Object(a["resolveComponent"])("detailComponent");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])(x,{active:C.isLoading},null,8,["active"]),Object(a["createVNode"])(S,{class:"mb-5"}),Object(a["createVNode"])("div",o,[Object(a["createVNode"])("ul",r,[Object(a["createVNode"])("li",i,[Object(a["createVNode"])("a",{class:["nav-link flex-sm-fill",{active:"all"===C.isActive}],"aria-current":"page h-100",href:"#",onClick:t[1]||(t[1]=Object(a["withModifiers"])((function(e){return w.filter("all")}),["prevent"]))},"全部產品",2)]),Object(a["createVNode"])("li",n,[Object(a["createVNode"])("a",{class:["nav-link h-100",{active:"dark"===C.isActive}],"aria-current":"page",href:"#",onClick:t[2]||(t[2]=Object(a["withModifiers"])((function(e){return w.filter("dark")}),["prevent"]))},"黑巧克力",2)]),Object(a["createVNode"])("li",l,[Object(a["createVNode"])("a",{class:["nav-link h-100",{active:"cookie"===C.isActive}],href:"#",onClick:t[3]||(t[3]=Object(a["withModifiers"])((function(e){return w.filter("cookie")}),["prevent"]))},"餅乾",2)]),Object(a["createVNode"])("li",s,[Object(a["createVNode"])("a",{class:["nav-link h-100",{active:"cake"===C.isActive}],href:"#",onClick:t[4]||(t[4]=Object(a["withModifiers"])((function(e){return w.filter("cake")}),["prevent"]))},"蛋糕",2)]),Object(a["createVNode"])("li",d,[Object(a["createVNode"])("a",{class:["nav-link h-100",{active:"drink"===C.isActive}],href:"#",onClick:t[5]||(t[5]=Object(a["withModifiers"])((function(e){return w.filter("drink")}),["prevent"]))},"飲料",2)])])]),Object(a["createVNode"])("div",u,[Object(a["createVNode"])("div",p,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(C.tempProducts,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])("div",{class:"col-md-4 cardBorder pt-2",key:t.id},[Object(a["createVNode"])("div",b,[Object(a["createVNode"])("div",j,[Object(a["createVNode"])("a",{href:"#/detail/".concat(t.id),class:"imgTop"},[Object(a["createVNode"])("img",{src:t.imageUrl,class:"card-img-top rounded-0 max-height ",alt:t.title},null,8,["src","alt"])],8,["href"])]),O,Object(a["createVNode"])("div",m,[Object(a["createVNode"])("h5",h,[Object(a["createVNode"])("a",{href:"#/detail/".concat(t.id)},Object(a["toDisplayString"])(t.title),9,["href"])]),Object(a["createVNode"])("p",f,[Object(a["createTextVNode"])(" NT$"+Object(a["toDisplayString"])(e.$filter.currency(t.price))+" ",1),Object(a["createVNode"])("span",v,[Object(a["createVNode"])("del",null,"NT$"+Object(a["toDisplayString"])(e.$filter.currency(t.origin_price)),1)])]),g,Object(a["createVNode"])("div",N,[Object(a["createVNode"])(B,{class:"col-5 btn btn-outline-chocolate",to:"/detail/".concat(t.id)},{default:Object(a["withCtx"])((function(){return[V]})),_:2},1032,["to"]),Object(a["createVNode"])("button",{class:"col-5 btn btn-chocolight",onClick:function(e){return w.addToCart(t.id)}},[C.loadingStatus==t.id?(Object(a["openBlock"])(),Object(a["createBlock"])(T,{key:0,icon:"spinner",pulse:"",class:"fas fa-spinner fa-pulse"})):Object(a["createCommentVNode"])("",!0),k],8,["onClick"])])])])])})),128)),Object(a["createVNode"])(D,{ref:"detail",product:C.tempProducts},null,8,["product"])])])],64)}c("99af"),c("a4d3"),c("e01a");var C={class:"modal fade",id:"detailComponent",tabindex:"-1",role:"dialog","aria-labelledby":"detailComponentLabel","aria-hidden":"true",ref:"modal"},w={class:"modal-dialog modal-xl",role:"document"},x={class:"modal-content border-0"},S={class:"modal-header bg-dark text-white"},B={class:"modal-title",id:"exampleModalLabel"},T=Object(a["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),D={class:"modal-body"},M={class:"row"},_={class:"col-sm-6"},q={class:"col-sm-6"},P={class:"badge bg-primary rounded-pill"},L={key:0,class:"h5"},$={key:1,class:"h6"},A={key:2,class:"h5"},U={class:"input-group d-flex align-items-center"},Q=Object(a["createVNode"])("label",{for:"qty",class:""},"數量：",-1),I=Object(a["createTextVNode"])("加入購物車 "),F={key:0,class:"ms-5 text-danger"};function G(e,t,c,o,r,i){var n=Object(a["resolveComponent"])("font-awesome-icon");return Object(a["openBlock"])(),Object(a["createBlock"])("div",C,[Object(a["createVNode"])("div",w,[Object(a["createVNode"])("div",x,[Object(a["createVNode"])("div",S,[Object(a["createVNode"])("h5",B,[Object(a["createVNode"])("span",null,Object(a["toDisplayString"])(c.product.title),1)]),T]),Object(a["createVNode"])("div",D,[Object(a["createVNode"])("div",M,[Object(a["createVNode"])("div",_,[Object(a["createVNode"])("img",{class:"img-fluid",src:c.product.imageUrl,alt:""},null,8,["src"])]),Object(a["createVNode"])("div",q,[Object(a["createVNode"])("span",P,Object(a["toDisplayString"])(c.product.category),1),Object(a["createVNode"])("p",null,"商品描述："+Object(a["toDisplayString"])(c.product.description),1),Object(a["createVNode"])("p",null,"商品內容："+Object(a["toDisplayString"])(c.product.content),1),c.product.price?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createBlock"])("div",L,Object(a["toDisplayString"])(c.product.origin_price)+" 元",1)),c.product.price?(Object(a["openBlock"])(),Object(a["createBlock"])("del",$,"原價 "+Object(a["toDisplayString"])(c.product.origin_price)+" 元",1)):Object(a["createCommentVNode"])("",!0),c.product.price?(Object(a["openBlock"])(),Object(a["createBlock"])("div",A,"現在只要 "+Object(a["toDisplayString"])(c.product.price)+" 元",1)):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])("div",null,[Object(a["createVNode"])("div",U,[Q,Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"number",class:"form-control",id:"qty","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.qty=e}),min:"1",placeholder:"數量",onChange:t[2]||(t[2]=function(){return i.checkQty&&i.checkQty.apply(i,arguments)})},null,544),[[a["vModelText"],r.qty,void 0,{number:!0}]]),Object(a["createVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[3]||(t[3]=function(e){return i.addToCart(c.product.id,r.qty)})},[r.loadingStatus==c.product.id?(Object(a["openBlock"])(),Object(a["createBlock"])(n,{key:0,icon:"spinner",pulse:"",class:"fas fa-spinner fa-pulse"})):Object(a["createCommentVNode"])("",!0),I])]),r.failQty?(Object(a["openBlock"])(),Object(a["createBlock"])("span",F,"商品數量最少為一件!")):Object(a["createCommentVNode"])("",!0)])])])])])])],512)}var J=c("7c2b"),z=c.n(J),H={props:["product"],data:function(){return{apiUrl:"https://vue3-course-api.hexschool.io",apiPath:"chocolate",qty:1,loadingStatus:"",modal:"",failQty:!1}},methods:{addToCart:function(e){var t=this,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.loadingStatus=e;var a={product_id:e,qty:c},o="".concat(this.apiUrl,"/api/").concat(this.apiPath,"/cart");this.axios.post(o,{data:a}).then((function(e){e.data.success?(alert(e.data.message),t.loadingStatus="",t.emitter.emit("navGetCart")):(alert(e.data.message),t.loadingStatus="")})).catch((function(e){return console.log(e)}))},openModal:function(){this.qty=1,this.modal.show()},hideModal:function(){this.modal.hide()},checkQty:function(){this.qty<=1&&(this.failQty=!0,this.qty=1)}},mounted:function(){this.modal=new z.a(this.$refs.modal,{keyboard:!0,backdrop:!0})}};H.render=G;var K=H,E=Object(a["withScopeId"])("data-v-35faf671");Object(a["pushScopeId"])("data-v-35faf671");var R=Object(a["createVNode"])("img",{src:"https://bi.im-g.pl/im/a5/71/17/z24584101AMP,Kakao.jpg",class:"card-img-top rounded-0 mh-500",alt:"..."},null,-1),W=Object(a["createVNode"])("img",{src:"https://nutrativa.com.br/wp-content/uploads/2020/03/0319202001-polifen%C3%B3is-banner.jpg",class:"card-img-top rounded-0 mh-500",alt:"..."},null,-1),X=Object(a["createVNode"])("img",{src:"https://cdn1.matadornetwork.com/blogs/2/2020/01/Chocolate-mexicano-historia-1200x853.jpg",class:"card-img-top rounded-0 mh-500",alt:"..."},null,-1),Y=Object(a["createVNode"])("img",{src:"https://i.pinimg.com/originals/ce/16/75/ce16757f71272ee9a7bab2434a99350c.jpg",class:"card-img-top rounded-0 mh-500",style:{"object-position":"center 35%"},alt:"..."},null,-1);Object(a["popScopeId"])();var Z=E((function(e,t,c,o,r,i){var n=Object(a["resolveComponent"])("swiper-slide"),l=Object(a["resolveComponent"])("swiper");return Object(a["openBlock"])(),Object(a["createBlock"])(l,{slidesPerView:1,spaceBetween:30,centeredSlides:!1,autoplay:{delay:5e3,disableOnInteraction:!1},class:"mySwiper"},{default:E((function(){return[Object(a["createVNode"])(n,null,{default:E((function(){return[R]})),_:1}),Object(a["createVNode"])(n,null,{default:E((function(){return[W]})),_:1}),Object(a["createVNode"])(n,null,{default:E((function(){return[X]})),_:1}),Object(a["createVNode"])(n,null,{default:E((function(){return[Y]})),_:1})]})),_:1})})),ee=c("90ea"),te=c("a16a"),ce=(c("5f67"),c("6d3b")),ae=c("d17a");ce["a"].use([ae["a"]]);var oe={components:{Swiper:ee["a"],SwiperSlide:te["a"]}};c("5da8");oe.render=Z,oe.__scopeId="data-v-35faf671";var re=oe,ie=c("3a5e"),ne={components:{detailComponent:K,SwiperHeader:re,Loading:ie["a"]},data:function(){return{apiUrl:"https://vue3-course-api.hexschool.io",apiPath:"chocolate",products:{},tempProducts:{},loadingStatus:"",isActive:"all",isLoading:!1}},methods:{getData:function(){var e=this;this.isLoading=!0,this.axios.get("".concat(this.apiUrl,"/api/").concat(this.apiPath,"/products/all")).then((function(t){t.data.success?(e.products=t.data.products,e.tempProducts=t.data.products,e.filter(e.$route.query.category)):e.$httpToastMessage(t,t.data.message),e.isLoading=!1})).catch((function(e){return console.log(e)}))},addToCart:function(e){var t=this,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.loadingStatus=e;var a={product_id:e,qty:c},o="".concat(this.apiUrl,"/api/").concat(this.apiPath,"/cart");this.axios.post(o,{data:a}).then((function(e){e.data.success?(t.$httpToastMessage(e,"加入購物車"),t.emitter.emit("navGetCart")):t.$httpToastMessage(e,e.data.message),t.loadingStatus=""})).catch((function(e){return console.log(e)}))},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all";this.isLoading=!0,this.isActive=e,this.tempProducts="all"===e?this.products:this.products.filter((function(t){return t.category===e})),this.isLoading=!1}},mounted:function(){this.getData()}};c("3454");ne.render=y;t["default"]=ne}}]);
//# sourceMappingURL=chunk-1a9722e0.97e2317c.js.map