(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c15de0e"],{"853a":function(t,e,a){"use strict";a("ff75")},c84b:function(t,e,a){"use strict";a.r(e);a("a4d3"),a("e01a");var c=a("7a23"),o=Object(c["withScopeId"])("data-v-e1793972");Object(c["pushScopeId"])("data-v-e1793972");var s={class:"container"},i={class:"row align-items-center mt-md-4 mt-3 pt-3"},d={class:"col-md-7"},n={class:"col-md-5"},r=Object(c["createStaticVNode"])('<nav aria-label="breadcrumb" data-v-e1793972><ol class="breadcrumb bg-white px-0 mb-0 py-3" data-v-e1793972><li class="breadcrumb-item" data-v-e1793972><a class="text-muted" href="#" data-v-e1793972>首頁</a></li><li class="breadcrumb-item" data-v-e1793972><a class="text-muted" href="#/products" data-v-e1793972>產品列表</a></li><li class="breadcrumb-item active" aria-current="page" data-v-e1793972>詳細資料</li></ol></nav>',1),l={class:"fw-bold h1 mb-1"},u={class:"row m-4"},p={class:"col-12"},b={class:"h5"},h={class:"col-12"},m={class:"text-muted"},v={class:"mb-0 text-muted text-end"},f={class:"h4 fw-bold text-end"},g={class:"row align-items-center"},j={class:"col-6"},O={class:"input-group my-3 bg-light rounded  border border-chocolight"},N={class:"input-group-prepend"},y={class:"input-group-append"},V={class:"col-6"},k=Object(c["createTextVNode"])("加入購物車 "),w={key:0,class:"text-danger"},x=Object(c["createStaticVNode"])('<div class="product-info mt-md-5 mt-3 bg-mail" data-v-e1793972><div class="container row mx-auto p-3 pe-md-0 py-md-0" data-v-e1793972><div class="col-md-6 p-3 px-md-0 py-md-5 lh-lg" data-v-e1793972><h2 class="fs-4" data-v-e1793972>注意事項：</h2><p class="mb-4" data-v-e1793972> 巧克屋 所有商品皆為天然食材，絕不添加任何防腐劑，商品請放置於低溫處(建議於18℃以下)，並於7日內食用完畢為最佳。 </p><ul class="list-unstyled fa-ul m-0 mt-3 ps-4" data-v-e1793972><li data-v-e1793972><span class="fa-li" data-v-e1793972><i class="fas fa fa-cookie cookie" data-v-e1793972></i></span> 請將產品置於陰涼處並請勿置放超過2-3小時 </li><li data-v-e1793972><span class="fa-li" data-v-e1793972><i class="fas fa fa-cookie-bite cookie" data-v-e1793972></i></span> 巧克力：保存溫度約在攝氏12～18度，濕度則不能超過65% </li><li data-v-e1793972><span class="fa-li" data-v-e1793972><i class="fas fa fa-cookie-bite cookie" data-v-e1793972></i></span> 蛋糕類：冷藏保存2日、冷凍保存5日。 </li><li data-v-e1793972><span class="fa-li" data-v-e1793972><i class="fas fa fa-cookie-bite cookie" data-v-e1793972></i></span> 餅乾類：常溫保存1週、冷藏保存2週、冷凍保存1個月。 </li></ul></div><div class="col-6 d-none d-md-block info-img" data-v-e1793972><img class="img-fluid" src="https://img.ltn.com.tw/Upload/food/page/2017/08/27/170827-6684-2-G0FVm.jpg" style="height:100%;object-fit:cover;" data-v-e1793972></div></div></div>',1),S={class:"container"},q=Object(c["createVNode"])("h3",{class:"fw-bold mt-5"},"您可能也會有興趣 :",-1);Object(c["popScopeId"])();var $=o((function(t,e,a,o,$,C){var T=Object(c["resolveComponent"])("loading"),D=Object(c["resolveComponent"])("font-awesome-icon"),L=Object(c["resolveComponent"])("Swiper-Products");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])(T,{active:$.isLoading},null,8,["active"]),Object(c["createVNode"])("div",s,[Object(c["createVNode"])("div",i,[Object(c["createVNode"])("div",d,[Object(c["createVNode"])("img",{src:$.product.imageUrl,class:"d-block w-100 img-size",alt:"..."},null,8,["src"])]),Object(c["createVNode"])("div",n,[r,Object(c["createVNode"])("h2",l,Object(c["toDisplayString"])($.product.title),1),Object(c["createVNode"])("div",u,[Object(c["createVNode"])("div",p,[Object(c["createVNode"])("p",b,Object(c["toDisplayString"])($.product.content),1)]),Object(c["createVNode"])("div",h,[Object(c["createVNode"])("p",m,Object(c["toDisplayString"])($.product.description),1)])]),Object(c["createVNode"])("p",v,[Object(c["createVNode"])("del",null,"NT$"+Object(c["toDisplayString"])(t.$filter.currency($.product.origin_price)),1)]),Object(c["createVNode"])("p",f,"NT$"+Object(c["toDisplayString"])(t.$filter.currency($.product.price)),1),Object(c["createVNode"])("div",g,[Object(c["createVNode"])("div",j,[Object(c["createVNode"])("div",O,[Object(c["createVNode"])("div",N,[Object(c["createVNode"])("button",{class:"btn btn-outline-chocolight border-0 py-2",type:"button",id:"button-addon1",disabled:$.qty<=1,onClick:e[1]||(e[1]=function(t){return $.qty-=1})},[Object(c["createVNode"])(D,{icon:"minus",class:"fas fa-minus"})],8,["disabled"])]),Object(c["withDirectives"])(Object(c["createVNode"])("input",{type:"number",class:"form-control border-0 text-center my-auto shadow-none",ref:"qty","aria-label":"Example text with button addon","aria-describedby":"button-addon1",disabled:""!=$.loadingStatus,"onUpdate:modelValue":e[2]||(e[2]=function(t){return $.qty=t})},null,8,["disabled"]),[[c["vModelText"],$.qty,void 0,{number:!0}]]),Object(c["createVNode"])("div",y,[Object(c["createVNode"])("button",{class:"btn btn-outline-chocolight border-0 py-2",type:"button",id:"button-addon2",disabled:""!=$.loadingStatus,onClick:e[3]||(e[3]=function(t){return $.qty+=1})},[Object(c["createVNode"])(D,{icon:"plus",class:"fas fa-plus"})],8,["disabled"])])])]),Object(c["createVNode"])("div",V,[Object(c["createVNode"])("button",{href:"#",class:"text-nowrap btn btn-chocolight w-100 py-2",onClick:e[4]||(e[4]=Object(c["withModifiers"])((function(){return C.addCart&&C.addCart.apply(C,arguments)}),["prevent"])),disabled:"add"==$.loadingStatus},["add"==$.loadingStatus?(Object(c["openBlock"])(),Object(c["createBlock"])(D,{key:0,icon:"spinner",pulse:"",class:"fas fa-spinner fa-pulse"})):Object(c["createCommentVNode"])("",!0),k],8,["disabled"])])]),$.checkNum.bool?(Object(c["openBlock"])(),Object(c["createBlock"])("span",w,Object(c["toDisplayString"])($.checkNum.msg),1)):Object(c["createCommentVNode"])("",!0)])])]),x,Object(c["createVNode"])("div",S,[q,Object(c["createVNode"])(L,{products:$.products,column:4},null,8,["products"])])],64)})),C=(a("99af"),a("262f")),T=a("3a5e"),D=a("e0d5"),L={components:{SwiperProducts:C["a"],Loading:T["a"]},data:function(){return{apiUrl:"https://vue3-course-api.hexschool.io",apiPath:"chocolate",product:{},products:{},qty:1,loadingStatus:"",isLoading:!1,checkNum:{bool:!1,msg:""}}},methods:{getProduct:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("chocolate","/product/").concat(this.$route.params.id);this.isLoading=!0,this.axios.get(e).then((function(e){e.data.success?t.product=e.data.product:t.$httpToastMessage(e,"取得商品"),t.isLoading=!1})).catch((function(e){t.isLoading=!1,t.$httpToastMessage(!1,e)}))},addCart:function(){var t=this;this.loadingStatus="add";var e={product_id:this.$route.params.id,qty:this.qty},a="".concat(this.apiUrl,"/api/").concat(this.apiPath,"/cart");this.axios.post(a,{data:e}).then((function(e){e.data.success?(t.emitter.emit("navGetCart"),t.$httpToastMessage(e,"加入購物車")):t.$httpToastMessage(e,e.data.message),t.loadingStatus=""})).catch((function(e){t.loadingStatus="",t.$httpToastMessage(!1,e)}))},getData:function(){var t=this;this.isLoading=!0,this.axios.get("".concat(this.apiUrl,"/api/").concat(this.apiPath,"/products/all")).then((function(e){e.data.success?t.products=D(e.data.products):t.$httpToastMessage(e,e.data.message),t.isLoading=!1})).catch((function(e){t.isLoading=!1,t.$httpToastMessage(!1,e)}))}},created:function(){var t=this;this.emitter.on("cartBus",(function(e){e&&(t.carts=e)}))},unmounted:function(){var t=this;this.emitter.off("cartBus",(function(e){e&&(t.carts=e)}))},watch:{qty:function(){this.qty<1&&(this.qty=1,this.checkNum.bool=!0,this.checkNum.msg="數量不能小於0唷"),this.qty>99&&(this.qty=99,this.checkNum.bool=!0,this.checkNum.msg="數量不能大於99唷")},$route:function(t){this.product.id!==t.params.id&&void 0!==t.params.id&&this.getProduct()}},mounted:function(){this.getProduct(),this.getData()}};a("853a");L.render=$,L.__scopeId="data-v-e1793972";e["default"]=L},ff75:function(t,e,a){}}]);
//# sourceMappingURL=chunk-4c15de0e.3c928d8c.js.map