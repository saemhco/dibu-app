(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f9728732"],{"03d0":function(t,e,n){"use strict";n("9255")},"11de":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("2b0e"),c=n("b42e"),a=n("c637"),o=n("a723"),i=n("cf75"),s=Object(i["d"])({id:Object(i["c"])(o["u"]),inline:Object(i["c"])(o["g"],!1),novalidate:Object(i["c"])(o["g"],!1),validated:Object(i["c"])(o["g"],!1)},a["y"]),u=r["default"].extend({name:a["y"],functional:!0,props:s,render:function(t,e){var n=e.props,r=e.data,a=e.children;return t("form",Object(c["a"])(r,{class:{"form-inline":n.inline,"was-validated":n.validated},attrs:{id:n.id,novalidate:n.novalidate}}),a)}})},4968:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return l}));var r=n("2b0e"),c=n("b42e"),a=n("c637"),o=n("a723"),i=n("cf75"),s=n("fa73"),u=Object(i["d"])({title:Object(i["c"])(o["u"]),titleTag:Object(i["c"])(o["u"],"h4")},a["q"]),l=r["default"].extend({name:a["q"],functional:!0,props:u,render:function(t,e){var n=e.props,r=e.data,a=e.children;return t(n.titleTag,Object(c["a"])(r,{staticClass:"card-title"}),a||Object(s["g"])(n.title))}})},"56aa":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"auth-wrapper auth-v2"},[n("b-row",{staticClass:"auth-inner m-0"},[n("b-link",{staticClass:"brand-logo"},[n("vuexy-logo"),n("h2",{staticClass:"brand-text text-primary ml-1"},[t._v(" Vuexy ")])],1),n("b-col",{staticClass:"d-none d-lg-flex align-items-center p-5",attrs:{lg:"8"}},[n("div",{staticClass:"w-100 d-lg-flex align-items-center justify-content-center px-5"},[n("b-img",{attrs:{fluid:"",src:t.imgUrl,alt:"Forgot password V2"}})],1)]),n("b-col",{staticClass:"d-flex align-items-center auth-bg px-2 p-lg-5",attrs:{lg:"4"}},[n("b-col",{staticClass:"px-xl-2 mx-auto",attrs:{sm:"8",md:"6",lg:"12"}},[n("b-card-title",{staticClass:"font-weight-bold mb-1",attrs:{"title-tag":"h2"}},[t._v(" Forgot Password? 🔒 ")]),n("b-card-text",{staticClass:"mb-2"},[t._v(" Enter your email and we'll send you instructions to reset your password ")]),n("validation-observer",{ref:"simpleRules"},[n("b-form",{staticClass:"auth-forgot-password-form mt-2",on:{submit:function(e){return e.preventDefault(),t.validationForm.apply(null,arguments)}}},[n("b-form-group",{attrs:{label:"Email","label-for":"forgot-password-email"}},[n("validation-provider",{attrs:{name:"Email",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[n("b-form-input",{attrs:{id:"forgot-password-email",state:!(r.length>0)&&null,name:"forgot-password-email",placeholder:"john@example.com"},model:{value:t.userEmail,callback:function(e){t.userEmail=e},expression:"userEmail"}}),n("small",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}])})],1),n("b-button",{attrs:{type:"submit",variant:"primary",block:""}},[t._v(" Send reset link ")])],1)],1),n("p",{staticClass:"text-center mt-2"},[n("b-link",{attrs:{to:{name:"auth-login-v2"}}},[n("feather-icon",{attrs:{icon:"ChevronLeftIcon"}}),t._v(" Back to login ")],1)],1)],1)],1)],1)],1)},c=[],a=n("7bb1"),o=n("088b"),i=n("a15b7"),s=n("b28b"),u=n("aa59"),l=n("4918"),b=n("11de"),f=n("1947"),d=n("8226"),p=n("4797"),O=n("4968"),j=n("d6e4"),m=n("8f03"),g=n("4360"),v=n("223c"),h={components:{VuexyLogo:o["a"],BRow:i["a"],BCol:s["a"],BLink:u["a"],BImg:l["a"],BForm:b["a"],BButton:f["a"],BFormGroup:d["a"],BFormInput:p["a"],BCardTitle:O["a"],BCardText:j["a"],ValidationProvider:a["b"],ValidationObserver:a["a"]},data:function(){return{userEmail:"",sideImg:n("5b2a"),required:m["c"],email:m["b"]}},computed:{imgUrl:function(){return"dark"===g["a"].state.appConfig.layout.skin?(this.sideImg=n("6e2f"),this.sideImg):this.sideImg}},methods:{validationForm:function(){var t=this;this.$refs.simpleRules.validate().then((function(e){e&&t.$toast({component:v["a"],props:{title:"Form Submitted",icon:"EditIcon",variant:"success"}})}))}}},w=h,y=(n("03d0"),n("2877")),x=Object(y["a"])(w,r,c,!1,null,null,null);e["default"]=x.exports},"5b2a":function(t,e,n){t.exports=n.p+"img/forgot-password-v2.cdb8f691.svg"},"6e2f":function(t,e,n){t.exports=n.p+"img/forgot-password-v2-dark.53b97761.svg"},9255:function(t,e,n){},a15b7:function(t,e,n){"use strict";n.d(e,"a",(function(){return w}));var r=n("b42e"),c=n("c637"),a=n("a723"),o=n("2326"),i=n("228e"),s=n("6c06"),u=n("b508"),l=n("d82f"),b=n("cf75"),f=n("fa73");function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){O(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var j=["start","end","center"],m=Object(u["a"])((function(t,e){return e=Object(f["h"])(Object(f["g"])(e)),e?Object(f["c"])(["row-cols",t,e].filter(s["a"]).join("-")):null})),g=Object(u["a"])((function(t){return Object(f["c"])(t.replace("cols",""))})),v=[],h=function(){var t=Object(i["b"])().reduce((function(t,e){return t[Object(b["g"])(e,"cols")]=Object(b["c"])(a["p"]),t}),Object(l["c"])(null));return v=Object(l["h"])(t),Object(b["d"])(Object(l["m"])(p(p({},t),{},{alignContent:Object(b["c"])(a["u"],null,(function(t){return Object(o["a"])(Object(o["b"])(j,"between","around","stretch"),t)})),alignH:Object(b["c"])(a["u"],null,(function(t){return Object(o["a"])(Object(o["b"])(j,"between","around"),t)})),alignV:Object(b["c"])(a["u"],null,(function(t){return Object(o["a"])(Object(o["b"])(j,"baseline","stretch"),t)})),noGutters:Object(b["c"])(a["g"],!1),tag:Object(b["c"])(a["u"],"div")})),c["sb"])},w={name:c["sb"],functional:!0,get props(){return delete this.props,this.props=h(),this.props},render:function(t,e){var n,c=e.props,a=e.data,o=e.children,i=c.alignV,s=c.alignH,u=c.alignContent,l=[];return v.forEach((function(t){var e=m(g(t),c[t]);e&&l.push(e)})),l.push((n={"no-gutters":c.noGutters},O(n,"align-items-".concat(i),i),O(n,"justify-content-".concat(s),s),O(n,"align-content-".concat(u),u),n)),t(c.tag,Object(r["a"])(a,{staticClass:"row",class:l}),o)}}},ad47:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return i}));var r=n("2b0e"),c=n("a723"),a=n("cf75"),o=Object(a["d"])({size:Object(a["c"])(c["u"])},"formControls"),i=r["default"].extend({props:o,computed:{sizeFormClass:function(){return[this.size?"form-control-".concat(this.size):null]}}})},b28b:function(t,e,n){"use strict";n.d(e,"a",(function(){return x}));var r=n("b42e"),c=n("c637"),a=n("a723"),o=n("992e"),i=n("2326"),s=n("228e"),u=n("6c06"),l=n("7b1e"),b=n("b508"),f=n("d82f"),d=n("cf75"),p=n("fa73");function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g=["auto","start","end","center","baseline","stretch"],v=function(t,e,n){var r=t;if(!Object(l["p"])(n)&&!1!==n)return e&&(r+="-".concat(e)),"col"!==t||""!==n&&!0!==n?(r+="-".concat(n),Object(p["c"])(r)):Object(p["c"])(r)},h=Object(b["a"])(v),w=Object(f["c"])(null),y=function(){var t=Object(s["b"])().filter(u["a"]),e=t.reduce((function(t,e){return t[e]=Object(d["c"])(a["i"]),t}),Object(f["c"])(null)),n=t.reduce((function(t,e){return t[Object(d["g"])(e,"offset")]=Object(d["c"])(a["p"]),t}),Object(f["c"])(null)),r=t.reduce((function(t,e){return t[Object(d["g"])(e,"order")]=Object(d["c"])(a["p"]),t}),Object(f["c"])(null));return w=Object(f["a"])(Object(f["c"])(null),{col:Object(f["h"])(e),offset:Object(f["h"])(n),order:Object(f["h"])(r)}),Object(d["d"])(Object(f["m"])(j(j(j(j({},e),n),r),{},{alignSelf:Object(d["c"])(a["u"],null,(function(t){return Object(i["a"])(g,t)})),col:Object(d["c"])(a["g"],!1),cols:Object(d["c"])(a["p"]),offset:Object(d["c"])(a["p"]),order:Object(d["c"])(a["p"]),tag:Object(d["c"])(a["u"],"div")})),c["r"])},x={name:c["r"],functional:!0,get props(){return delete this.props,this.props=y()},render:function(t,e){var n,c=e.props,a=e.data,i=e.children,s=c.cols,u=c.offset,l=c.order,b=c.alignSelf,f=[];for(var d in w)for(var p=w[d],O=0;O<p.length;O++){var j=h(d,p[O].replace(d,""),c[p[O]]);j&&f.push(j)}var g=f.some((function(t){return o["c"].test(t)}));return f.push((n={col:c.col||!g&&!s},m(n,"col-".concat(s),s),m(n,"offset-".concat(u),u),m(n,"order-".concat(l),l),m(n,"align-self-".concat(b),b),n)),t(c.tag,Object(r["a"])(a,{class:f}),i)}}},d520:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return s}));var r=n("2b0e"),c=n("a723"),a=n("7b1e"),o=n("cf75"),i=Object(o["d"])({state:Object(o["c"])(c["g"],null)},"formState"),s=r["default"].extend({props:i,computed:{computedState:function(){return Object(a["b"])(this.state)?this.state:null},stateClass:function(){var t=this.computedState;return!0===t?"is-valid":!1===t?"is-invalid":null},computedAriaInvalid:function(){var t=this.ariaInvalid;return!0===t||"true"===t||""===t||!1===this.computedState?"true":t}}})},d6e4:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("2b0e"),c=n("b42e"),a=n("c637"),o=n("a723"),i=n("cf75"),s=Object(i["d"])({textTag:Object(i["c"])(o["u"],"p")},a["p"]),u=r["default"].extend({name:a["p"],functional:!0,props:s,render:function(t,e){var n=e.props,r=e.data,a=e.children;return t(n.textTag,Object(c["a"])(r,{staticClass:"card-text"}),a)}})},dde7:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return u}));var r=n("2b0e"),c=n("a723"),a=n("906c"),o=n("cf75"),i="input, textarea, select",s=Object(o["d"])({autofocus:Object(o["c"])(c["g"],!1),disabled:Object(o["c"])(c["g"],!1),form:Object(o["c"])(c["u"]),id:Object(o["c"])(c["u"]),name:Object(o["c"])(c["u"]),required:Object(o["c"])(c["g"],!1)},"formControls"),u=r["default"].extend({props:s,mounted:function(){this.handleAutofocus()},activated:function(){this.handleAutofocus()},methods:{handleAutofocus:function(){var t=this;this.$nextTick((function(){Object(a["B"])((function(){var e=t.$el;t.autofocus&&Object(a["u"])(e)&&(Object(a["v"])(e,i)||(e=Object(a["C"])(i,e)),Object(a["d"])(e))}))}))}}})}}]);
//# sourceMappingURL=chunk-f9728732.43022421.js.map