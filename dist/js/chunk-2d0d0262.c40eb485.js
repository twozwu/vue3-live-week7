(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d0262"],{"676a":function(e,t,a){"use strict";a.r(t);var s=a("7a23"),o={class:"container mt-5"},r={class:"col-md-6"},c=Object(s["createVNode"])("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),n={class:"mb-2"},d=Object(s["createVNode"])("label",{for:"inputEmail",class:"sr-only"},"Email address",-1),l={class:"mb-2"},i=Object(s["createVNode"])("label",{for:"inputPassword",class:"sr-only"},"Password",-1),u=Object(s["createVNode"])("div",{class:"text-end mt-4"},[Object(s["createVNode"])("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"},"登入")],-1);function m(e,t,a,m,b,p){var f=Object(s["resolveComponent"])("Field"),v=Object(s["resolveComponent"])("error-message"),h=Object(s["resolveComponent"])("Form");return Object(s["openBlock"])(),Object(s["createBlock"])("div",o,[Object(s["createVNode"])(h,{class:"row justify-content-center",onSubmit:p.signIn},{default:Object(s["withCtx"])((function(e){var a=e.errors;return[Object(s["createVNode"])("div",r,[c,Object(s["createVNode"])("div",n,[d,Object(s["createVNode"])(f,{type:"email",id:"email",name:"信箱",class:["form-control",{"is-invalid":a["信箱"],"is-valid":b.user.username}],placeholder:"Email address",modelValue:b.user.username,"onUpdate:modelValue":t[1]||(t[1]=function(e){return b.user.username=e}),autofocus:"",rules:{email:!0,required:!0}},null,8,["modelValue","class"]),Object(s["createVNode"])(v,{name:"信箱",class:"invalid-feedback"})]),Object(s["createVNode"])("div",l,[i,Object(s["createVNode"])(f,{type:"password",id:"inputPassword",name:"密碼",class:["form-control",{"is-invalid":a["密碼"],"is-valid":b.user.password}],modelValue:b.user.password,"onUpdate:modelValue":t[2]||(t[2]=function(e){return b.user.password=e}),placeholder:"Password",rules:"required"},null,8,["modelValue","class"]),Object(s["createVNode"])(v,{name:"密碼",class:"invalid-feedback"})]),u])]})),_:1},8,["onSubmit"])])}a("99af");var b={data:function(){return{user:{}}},methods:{signIn:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/admin/signin");this.$http.post(t,this.user).then((function(t){if(t.data.success){var a=t.data,s=a.token,o=a.expired;document.cookie="hexToken=".concat(s,";expires=").concat(new Date(o),";"),e.$router.push("/admin/products")}else e.$httpToastMessage(t,t.data.message)}))}}};b.render=m;t["default"]=b}}]);
//# sourceMappingURL=chunk-2d0d0262.c40eb485.js.map