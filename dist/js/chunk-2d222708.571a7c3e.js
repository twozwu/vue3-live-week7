(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d222708"],{cf2a:function(e,t,c){"use strict";c.r(t);c("b0c0");var o=c("7a23"),r={class:"mt-3"},a={key:0,class:"my-5 my-md-6 text-center"},s={key:1,class:"my-5 my-md-6 text-center"},d={key:2,class:"row px-md-6"},l={class:"col-md-7"},i={class:"table table-hover"},n={class:"table-chocolate"},b={key:0,scope:"col",colspan:"2",class:"text-center fw-light"},u={key:1,scope:"col",colspan:"2",class:"text-center fw-light"},p=Object(o["createVNode"])("th",{class:"text-muted"},"訂購時間",-1),O=Object(o["createVNode"])("th",{class:"text-muted"},"訂購 ID",-1),j=Object(o["createVNode"])("th",{class:"text-muted"},"訂購人",-1),m=Object(o["createVNode"])("th",{class:"text-muted"},"聯絡信箱",-1),h=Object(o["createVNode"])("th",{class:"text-muted"},"聯絡電話",-1),N=Object(o["createVNode"])("th",{class:"text-muted"},"地址",-1),V=Object(o["createVNode"])("th",{class:"text-muted"},"您的備註",-1),f=Object(o["createVNode"])("th",{class:"text-muted"},"付款狀態",-1),g={class:"d-flex mt-4 justify-content-between align-items-end"},y={href:"#/products",class:"text-dark mt-md-0 mt-3 align-self-center"},k=Object(o["createTextVNode"])(" 繼續購物"),x={class:"col-md-5"},v={class:"border p-4 mb-4"},w=Object(o["createVNode"])("h4",{class:" mb-4"},"我的訂單",-1),B={class:"w-100"},D={class:"d-flex justify-content-between"},$={class:"mb-0 fw-bold"},S={class:"mb-0"},L={class:"mb-0 fw-normal"},T={class:"table text-muted border-top border-bottom mt-4"},C=Object(o["createVNode"])("th",{scope:"row",class:"border-0 px-0 pt-4 font-weight-normal"},"原價",-1),M={class:"text-end border-0 px-0 pt-4"},I=Object(o["createVNode"])("tr",null,[Object(o["createVNode"])("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"付款方式"),Object(o["createVNode"])("td",{class:"text-end border-0 px-0 pt-0 pb-4"},"ApplePay")],-1),_={class:"d-flex justify-content-between mt-4"},P=Object(o["createVNode"])("p",{class:"mb-0 h4 fw-bold"},"總計",-1),J={class:"mb-0 h4 fw-bold"},U={key:1,class:"btn btn-chocolight w-100 mt-4",disabled:""};function q(e,t,c,q,A,F){var z=Object(o["resolveComponent"])("font-awesome-icon"),E=Object(o["resolveComponent"])("router-link");return Object(o["openBlock"])(),Object(o["createBlock"])("div",r,[A.order.id?(Object(o["openBlock"])(),Object(o["createBlock"])("h3",a," 感謝您的訂購，歡迎再度光臨！ ")):(Object(o["openBlock"])(),Object(o["createBlock"])("h3",s," 您好，查無您的訂單，請確認後重新輸入。 ")),A.order.id?(Object(o["openBlock"])(),Object(o["createBlock"])("div",d,[Object(o["createVNode"])("div",l,[Object(o["createVNode"])("table",i,[Object(o["createVNode"])("thead",n,[Object(o["createVNode"])("tr",null,[A.order.is_paid?(Object(o["openBlock"])(),Object(o["createBlock"])("th",b," 以下是您的訂購資訊， 請確認後進行付款。 ")):(Object(o["openBlock"])(),Object(o["createBlock"])("th",u," 以下是您的訂購資訊， 感謝您的訂購。 "))])]),Object(o["createVNode"])("tbody",null,[Object(o["createVNode"])("tr",null,[p,Object(o["createVNode"])("td",null,Object(o["toDisplayString"])((new Date).toLocaleString(A.order.create_at)),1)]),Object(o["createVNode"])("tr",null,[O,Object(o["createVNode"])("td",null,[Object(o["createVNode"])("input",{ref:"orderID",type:"text",value:A.order.id,class:"form-control mb-2"},null,8,["value"]),Object(o["createVNode"])("input",{type:"button",value:"點我複製以便查詢",onClick:t[1]||(t[1]=Object(o["withModifiers"])((function(){return F.copyOrderID&&F.copyOrderID.apply(F,arguments)}),["prevent"])),class:"btn btn-outline-chocolight"})])]),Object(o["createVNode"])("tr",null,[j,Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(A.order.user.name),1)]),Object(o["createVNode"])("tr",null,[m,Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(A.order.user.email),1)]),Object(o["createVNode"])("tr",null,[h,Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(A.order.user.tel),1)]),Object(o["createVNode"])("tr",null,[N,Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(A.order.user.address),1)]),Object(o["createVNode"])("tr",null,[V,Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(A.order.message),1)]),Object(o["createVNode"])("tr",null,[f,Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(A.order.is_paid?"已付款":"尚未付款"),1)])])]),Object(o["createVNode"])("div",g,[Object(o["createVNode"])("a",y,[Object(o["createVNode"])(z,{icon:"chevron-left",class:"fas fa-chevron-left me-2"}),k])])]),Object(o["createVNode"])("div",x,[Object(o["createVNode"])("div",v,[w,(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(A.order.products,(function(t){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{class:"d-flex mb-2",key:t.product.id},[Object(o["createVNode"])("img",{src:t.product.imageUrl,alt:t.product.title,class:"me-2",style:{width:"48px",height:"48px","object-fit":"cover"}},null,8,["src","alt"]),Object(o["createVNode"])("div",B,[Object(o["createVNode"])("div",D,[Object(o["createVNode"])(E,{to:"/detail/".concat(t.product.id)},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])("p",$,Object(o["toDisplayString"])(t.product.title),1)]})),_:2},1032,["to"]),Object(o["createVNode"])("p",S,"NT$"+Object(o["toDisplayString"])(e.$filter.currency(t.product.price)),1)]),Object(o["createVNode"])("p",L,"x"+Object(o["toDisplayString"])(t.qty+t.product.unit),1)])])})),128)),Object(o["createVNode"])("table",T,[Object(o["createVNode"])("tbody",null,[Object(o["createVNode"])("tr",null,[C,Object(o["createVNode"])("td",M,"NT$"+Object(o["toDisplayString"])(e.$filter.currency(A.order.total)),1)]),I])]),Object(o["createVNode"])("div",_,[P,Object(o["createVNode"])("p",J,"NT$"+Object(o["toDisplayString"])(e.$filter.currency(A.order.total)),1)]),A.order.is_paid?(Object(o["openBlock"])(),Object(o["createBlock"])("button",U,"訂單已完成")):(Object(o["openBlock"])(),Object(o["createBlock"])("a",{key:0,href:"#/products",class:"btn btn-chocolight w-100 mt-4",onClick:t[2]||(t[2]=Object(o["withModifiers"])((function(){return F.checkout&&F.checkout.apply(F,arguments)}),["prevent"]))},"由此付款"))])])])):Object(o["createCommentVNode"])("",!0)])}c("99af");var A={data:function(){return{apiUrl:"https://vue3-course-api.hexschool.io",apiPath:"chocolate",order:{id:"",user:{},is_paid:!1},loadingStatus:"",isLoading:!1,form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getOrder:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("chocolate","/order/").concat(this.$route.params.id);this.emitter.emit("isLoading",!0),this.axios.get(t).then((function(t){t.data.success&&t.data.order?e.order=t.data.order:e.$httpToastMessage(!1,"查無此訂單"),e.emitter.emit("isLoading",!1)})).catch((function(t){e.emitter.emit("isLoading",!1),e.$httpToastMessage(!1,t)}))},checkout:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("chocolate","/pay/").concat(this.$route.params.id);this.emitter.emit("isLoading",!0),this.axios.post(t).then((function(t){t.data.success?(e.$httpToastMessage(t,t.data.message),e.$router.push("/success")):e.$httpToastMessage(t,t.data.message),e.emitter.emit("isLoading",!1)})).catch((function(t){e.emitter.emit("isLoading",!1),e.$httpToastMessage(!1,t)}))},copyOrderID:function(){document.execCommand("Copy",!1,this.$refs.orderID.select())}},watch:{$route:function(e){this.order.id!==e.params.id&&void 0!==e.params.id&&this.getOrder()}},mounted:function(){this.getOrder(),this.emitter.emit("toProgress",100)}};A.render=q;t["default"]=A}}]);
//# sourceMappingURL=chunk-2d222708.571a7c3e.js.map