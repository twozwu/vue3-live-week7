(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8e181ab8"],{"29e4":function(e,t,c){"use strict";var a=c("7a23"),o={"aria-label":"Page navigation example"},r={class:"pagination"},n=Object(a["createVNode"])("span",{"aria-hidden":"true"},"«",-1),l=Object(a["createVNode"])("span",{"aria-hidden":"true"},"»",-1);function d(e,t,c,d,i,s){return Object(a["openBlock"])(),Object(a["createBlock"])("nav",o,[Object(a["createVNode"])("ul",r,[Object(a["createVNode"])("li",{class:["page-item",{disabled:1==c.pages.current_page}]},[Object(a["createVNode"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[1]||(t[1]=Object(a["withModifiers"])((function(e){return s.emitPage(c.pages.current_page-1)}),["prevent"]))},[n])],2),(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(c.pages.total_pages,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("li",{class:["page-item",{active:e==c.pages.current_page}],key:t},[Object(a["createVNode"])("a",{class:"page-link",href:"#",onClick:Object(a["withModifiers"])((function(t){return s.emitPage(e)}),["prevent"])},Object(a["toDisplayString"])(e),9,["onClick"])],2)})),128)),Object(a["createVNode"])("li",{class:["page-item",{disabled:c.pages.current_page==c.pages.total_pages}]},[Object(a["createVNode"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[2]||(t[2]=Object(a["withModifiers"])((function(e){return s.emitPage(c.pages.current_page+1)}),["prevent"]))},[l])],2)])])}var i={props:["pages"],methods:{emitPage:function(e){this.$emit("emit-page",e)}}};i.render=d;t["a"]=i},"4de4":function(e,t,c){"use strict";var a=c("23e7"),o=c("b727").filter,r=c("1dde"),n=r("filter");a({target:"Array",proto:!0,forced:!n},{filter:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));c("b64b"),c("a4d3"),c("4de4"),c("e439"),c("159b"),c("dbb4");function a(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}function o(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,a)}return c}function r(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?o(Object(c),!0).forEach((function(t){a(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):o(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}},"6c87":function(e,t,c){"use strict";var a=c("7a23"),o={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},r={class:"modal-dialog modal-dialog-centered modal-dialog-scrollable"},n={class:"modal-content border-0"},l=Object(a["createVNode"])("div",{class:"modal-header bg-danger text-white"},[Object(a["createVNode"])("h5",{id:"delProductModalLabel",class:"modal-title"},[Object(a["createVNode"])("span",null,"刪除產品")]),Object(a["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),d={class:"modal-body"},i=Object(a["createTextVNode"])(" 是否刪除 "),s={key:0,class:"text-danger"},b={key:1,class:"text-danger"},u=Object(a["createTextVNode"])(" 商品(刪除後將無法恢復)。 "),O={class:"modal-footer"},p=Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function j(e,t,c,j,m,h){return Object(a["openBlock"])(),Object(a["createBlock"])("div",o,[Object(a["createVNode"])("div",r,[Object(a["createVNode"])("div",n,[l,Object(a["createVNode"])("div",d,[i,m.order?(Object(a["openBlock"])(),Object(a["createBlock"])("strong",b,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(m.product.products,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("span",{key:t},Object(a["toDisplayString"])(e.product.title)+"、 ",1)})),128))])):(Object(a["openBlock"])(),Object(a["createBlock"])("strong",s,Object(a["toDisplayString"])(m.product.title),1)),u]),Object(a["createVNode"])("div",O,[p,Object(a["createVNode"])("button",{type:"button",class:"btn btn-danger",onClick:t[1]||(t[1]=function(t){return e.$emit("delItem")})}," 確認刪除 ")])])])],512)}var m=c("7c2b"),h=c.n(m),g={data:function(){return{apiUrl:"https://vue3-course-api.hexschool.io",apiPath:"chocolate",modal:"",product:{},order:!1}},methods:{openModal:function(e,t){this.order=t,this.product=e,this.modal.show()},hideModal:function(){this.modal.hide()}},mounted:function(){this.modal=new h.a(this.$refs.delProductModal)}};g.render=j;t["a"]=g},"91af":function(e,t,c){"use strict";c.r(t);var a=c("7a23"),o={class:"container"},r={class:"table mt-4"},n=Object(a["createVNode"])("thead",null,[Object(a["createVNode"])("tr",null,[Object(a["createVNode"])("th",null,"購買時間"),Object(a["createVNode"])("th",null,"Email"),Object(a["createVNode"])("th",null,"購買款項"),Object(a["createVNode"])("th",null,"應付金額"),Object(a["createVNode"])("th",null,"是否付款"),Object(a["createVNode"])("th",null,"編輯")])],-1),l={class:"list-unstyled"},d={class:"text-right"},i={class:"form-check form-switch"},s={key:0},b={key:1},u={class:"btn-group"},O={key:0,class:"text-center"},p={key:0,class:"d-flex justify-content-center"};function j(e,t,c,j,m,h){var g=Object(a["resolveComponent"])("loading"),f=Object(a["resolveComponent"])("pagination"),V=Object(a["resolveComponent"])("order-modal"),N=Object(a["resolveComponent"])("del-item-modal");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])(g,{active:m.isLoading},null,8,["active"]),Object(a["createVNode"])("div",o,[Object(a["createVNode"])("table",r,[n,Object(a["createVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(m.orderList,(function(t,c){return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],{key:c},[m.orderList.length?(Object(a["openBlock"])(),Object(a["createBlock"])("tr",{key:0,class:{"text-secondary":!t.is_paid}},[Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(e.$filter.date(t.create_at)),1),Object(a["createVNode"])("td",null,[t.user?(Object(a["openBlock"])(),Object(a["createBlock"])("span",{key:0,textContent:Object(a["toDisplayString"])(t.user.email)},null,8,["textContent"])):Object(a["createCommentVNode"])("",!0)]),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("ul",l,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(t.products,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("li",{key:t},Object(a["toDisplayString"])(e.product.title)+" 數量："+Object(a["toDisplayString"])(e.qty)+" "+Object(a["toDisplayString"])(e.product.unit),1)})),128))])]),Object(a["createVNode"])("td",d,Object(a["toDisplayString"])(t.total),1),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("div",i,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{class:"form-check-input",type:"checkbox",id:"paidSwitch".concat(t.id),"onUpdate:modelValue":function(e){return t.is_paid=e},change:"updatePaid(item)"},null,8,["id","onUpdate:modelValue"]),[[a["vModelCheckbox"],t.is_paid]]),Object(a["createVNode"])("label",{class:"form-check-label",for:"paidSwitch".concat(t.id)},[t.is_paid?(Object(a["openBlock"])(),Object(a["createBlock"])("span",s,"已付款")):(Object(a["openBlock"])(),Object(a["createBlock"])("span",b,"未付款"))],8,["for"])])]),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("div",u,[Object(a["createVNode"])("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:function(e){return h.openModal(t)}}," 檢視 ",8,["onClick"]),Object(a["createVNode"])("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:function(e){return h.openDelModal(t)}}," 刪除 ",8,["onClick"])])])],2)):Object(a["createCommentVNode"])("",!0)],64)})),128))])]),m.orderList.length?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createBlock"])("div",O,"目前無訂單"))]),m.orderList.length?(Object(a["openBlock"])(),Object(a["createBlock"])("div",p,[Object(a["createVNode"])(f,{pages:m.pagination,onEmitPage:h.getList},null,8,["pages","onEmitPage"])])):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])(V,{order:m.tempOrder,onUpdatePaid:h.updateOrder,ref:"orderModal"},null,8,["order","onUpdatePaid"]),Object(a["createVNode"])(N,{onDelItem:h.delItem,ref:"delModal"},null,8,["onDelItem"])],64)}var m=c("5530"),h=(c("99af"),c("3a5e")),g=(c("b0c0"),{class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"}),f={class:"modal-dialog modal-dialog-centered modal-xl",role:"document"},V={class:"modal-content border-0"},N=Object(a["createVNode"])("div",{class:"modal-header bg-dark text-white"},[Object(a["createVNode"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(a["createVNode"])("span",null,"訂單細節")]),Object(a["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),k={class:"modal-body"},y={class:"row"},v={class:"col-md-4"},B=Object(a["createVNode"])("h3",null,"用戶資料",-1),P={class:"table"},D={key:0},x=Object(a["createVNode"])("th",{style:{width:"100px"}},"姓名",-1),M=Object(a["createVNode"])("th",null,"Email",-1),w=Object(a["createVNode"])("th",null,"電話",-1),L=Object(a["createVNode"])("th",null,"地址",-1),C={class:"col-md-8"},S=Object(a["createVNode"])("h3",null,"訂單細節",-1),_={class:"table"},$=Object(a["createVNode"])("th",{style:{width:"100px"}},"訂單編號",-1),U=Object(a["createVNode"])("th",null,"下單時間",-1),F=Object(a["createVNode"])("th",null,"付款時間",-1),E={key:0},I={key:1},T=Object(a["createVNode"])("th",null,"付款狀態",-1),q={key:0,class:"text-success"},J={key:1,class:"text-muted"},A=Object(a["createVNode"])("th",null,"總金額",-1),z=Object(a["createVNode"])("h3",null,"選購商品",-1),G={class:"table"},H=Object(a["createVNode"])("thead",null,[Object(a["createVNode"])("tr")],-1),K={class:"text-end"},Q={class:"d-flex justify-content-end"},R={class:"form-check"},W={class:"form-check-label",for:"flexCheckDefault"},X={key:0},Y={key:1},Z={class:"modal-footer"},ee=Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function te(e,t,c,o,r,n){return Object(a["openBlock"])(),Object(a["createBlock"])("div",g,[Object(a["createVNode"])("div",f,[Object(a["createVNode"])("div",V,[N,Object(a["createVNode"])("div",k,[Object(a["createVNode"])("div",y,[Object(a["createVNode"])("div",v,[B,Object(a["createVNode"])("table",P,[r.tempOrder.user?(Object(a["openBlock"])(),Object(a["createBlock"])("tbody",D,[Object(a["createVNode"])("tr",null,[x,Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(r.tempOrder.user.name),1)]),Object(a["createVNode"])("tr",null,[M,Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(r.tempOrder.user.email),1)]),Object(a["createVNode"])("tr",null,[w,Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(r.tempOrder.user.tel),1)]),Object(a["createVNode"])("tr",null,[L,Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(r.tempOrder.user.address),1)])])):Object(a["createCommentVNode"])("",!0)])]),Object(a["createVNode"])("div",C,[S,Object(a["createVNode"])("table",_,[Object(a["createVNode"])("tbody",null,[Object(a["createVNode"])("tr",null,[$,Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(r.tempOrder.id),1)]),Object(a["createVNode"])("tr",null,[U,Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(e.$filter.date(r.tempOrder.create_at)),1)]),Object(a["createVNode"])("tr",null,[F,Object(a["createVNode"])("td",null,[r.tempOrder.paid_date?(Object(a["openBlock"])(),Object(a["createBlock"])("span",E,Object(a["toDisplayString"])(e.$filter.date(r.tempOrder.paid_date)),1)):(Object(a["openBlock"])(),Object(a["createBlock"])("span",I,"時間不正確"))])]),Object(a["createVNode"])("tr",null,[T,Object(a["createVNode"])("td",null,[r.tempOrder.is_paid?(Object(a["openBlock"])(),Object(a["createBlock"])("strong",q,"已付款")):(Object(a["openBlock"])(),Object(a["createBlock"])("span",J,"尚未付款"))])]),Object(a["createVNode"])("tr",null,[A,Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(e.$filter.currency(r.tempOrder.total)),1)])])]),z,Object(a["createVNode"])("table",G,[H,Object(a["createVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(r.tempOrder.products,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])("tr",{key:t.id},[Object(a["createVNode"])("th",null,Object(a["toDisplayString"])(t.product.title),1),Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(t.qty)+" / "+Object(a["toDisplayString"])(t.product.unit),1),Object(a["createVNode"])("td",K,Object(a["toDisplayString"])(e.$filter.currency(t.final_total)),1)])})),128))])]),Object(a["createVNode"])("div",Q,[Object(a["createVNode"])("div",R,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.tempOrder.is_paid=e})},null,512),[[a["vModelCheckbox"],r.tempOrder.is_paid]]),Object(a["createVNode"])("label",W,[r.tempOrder.is_paid?(Object(a["openBlock"])(),Object(a["createBlock"])("span",X,"已付款")):(Object(a["openBlock"])(),Object(a["createBlock"])("span",Y,"未付款"))])])])])])]),Object(a["createVNode"])("div",Z,[ee,Object(a["createVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[2]||(t[2]=function(t){return e.$emit("update-paid",r.tempOrder)})}," 修改付款狀態 ")])])])],512)}var ce=c("91e3"),ae={props:{order:{type:Object,default:function(){return{}}}},data:function(){return{status:{},modal:"",tempOrder:{},isPaid:!1}},mixins:[ce["a"]],watch:{order:function(){this.tempOrder=this.order}}};ae.render=te;var oe=ae,re=c("6c87"),ne=c("29e4"),le={components:{loading:h["a"],OrderModal:oe,DelItemModal:re["a"],Pagination:ne["a"]},data:function(){return{apiUrl:"https://vue3-course-api.hexschool.io",apiPath:"chocolate",orderList:{},tempOrder:{},pagination:{},isLoading:!1}},methods:{getList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.currentPage=t,this.isLoading=!0,this.axios.get("".concat(this.apiUrl,"/api/").concat(this.apiPath,"/admin/orders?page=").concat(t)).then((function(t){t.data.success?(e.orderList=t.data.orders,e.pagination=t.data.pagination,e.isLoading=!1):console.log(t.data)})).catch((function(e){return console.log(e)}))},openModal:function(e){this.tempOrder=Object(m["a"])({},e),this.$refs.orderModal.openModal()},openDelModal:function(e){this.tempOrder=Object(m["a"])({},e),this.$refs.delModal.openModal(e,!0)},delItem:function(){var e=this,t="".concat(this.apiUrl,"/api/").concat(this.apiPath,"/admin/order/").concat(this.tempOrder.id);this.isLoading=!0,this.$http.delete(t).then((function(t){e.getList(e.currentPage),e.$refs.delModal.hideModal(),e.isLoading=!1,e.$httpToastMessage(t,"刪除訂單")})).catch((function(e){return console.log(e)}))},updateOrder:function(e){var t=this;this.isLoading=!0;var c="".concat(this.apiUrl,"/api/").concat(this.apiPath,"/admin/order/").concat(e.id),a={is_paid:e.is_paid};this.$http.put(c,{data:a}).then((function(e){t.getList(t.currentPage),t.isLoading=!1,t.$refs.orderModal.hideModal(),t.$httpToastMessage(e,"更新付款狀態")}))}},mounted:function(){this.getList()}};le.render=j;t["default"]=le},b0c0:function(e,t,c){var a=c("83ab"),o=c("9bf2").f,r=Function.prototype,n=r.toString,l=/^\s*function ([^ (]*)/,d="name";a&&!(d in r)&&o(r,d,{configurable:!0,get:function(){try{return n.call(this).match(l)[1]}catch(e){return""}}})},dbb4:function(e,t,c){var a=c("23e7"),o=c("83ab"),r=c("56ef"),n=c("fc6a"),l=c("06cf"),d=c("8418");a({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(e){var t,c,a=n(e),o=l.f,i=r(a),s={},b=0;while(i.length>b)c=o(a,t=i[b++]),void 0!==c&&d(s,t,c);return s}})},e439:function(e,t,c){var a=c("23e7"),o=c("d039"),r=c("fc6a"),n=c("06cf").f,l=c("83ab"),d=o((function(){n(1)})),i=!l||d;a({target:"Object",stat:!0,forced:i,sham:!l},{getOwnPropertyDescriptor:function(e,t){return n(r(e),t)}})}}]);
//# sourceMappingURL=chunk-8e181ab8.8fba31ca.js.map