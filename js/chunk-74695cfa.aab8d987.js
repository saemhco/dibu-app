(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74695cfa"],{"205f":function(t,e,r){"use strict";r.d(e,"a",(function(){return B}));var a=r("2b0e"),o=r("b42e"),n=r("c637"),c=r("a723"),i=r("9b76"),l=r("8690"),s=r("365c"),u=r("d82f"),b=r("cf75"),d=r("d580"),p=r("6197"),f=r("b885");function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){h(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function h(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var m=Object(b["d"])(Object(u["m"])(O(O({},Object(b["a"])(d["a"],b["f"].bind(null,"footer"))),{},{footer:Object(b["c"])(c["u"]),footerClass:Object(b["c"])(c["e"]),footerHtml:Object(b["c"])(c["u"])})),n["l"]),j=a["default"].extend({name:n["l"],functional:!0,props:m,render:function(t,e){var r,a=e.props,n=e.data,c=e.children,i=a.footerBgVariant,s=a.footerBorderVariant,u=a.footerTextVariant;return t(a.footerTag,Object(o["a"])(n,{staticClass:"card-footer",class:[a.footerClass,(r={},h(r,"bg-".concat(i),i),h(r,"border-".concat(s),s),h(r,"text-".concat(u),u),r)],domProps:c?{}:Object(l["a"])(a.footerHtml,a.footer)}),c)}}),v=r("4918");function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){P(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function P(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var T=Object(b["d"])(Object(u["m"])(w(w({},Object(u["k"])(v["b"],["src","alt","width","height","left","right"])),{},{bottom:Object(b["c"])(c["g"],!1),end:Object(b["c"])(c["g"],!1),start:Object(b["c"])(c["g"],!1),top:Object(b["c"])(c["g"],!1)})),n["n"]),C=a["default"].extend({name:n["n"],functional:!0,props:T,render:function(t,e){var r=e.props,a=e.data,n=r.src,c=r.alt,i=r.width,l=r.height,s="card-img";return r.top?s+="-top":r.right||r.end?s+="-right":r.bottom?s+="-bottom":(r.left||r.start)&&(s+="-left"),t("img",Object(o["a"])(a,{class:s,attrs:{src:n,alt:c,width:i,height:l}}))}});function x(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function D(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?x(Object(r),!0).forEach((function(e){k(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function k(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var E=Object(b["a"])(T,b["f"].bind(null,"img"));E.imgSrc.required=!1;var _=Object(b["d"])(Object(u["m"])(D(D(D(D(D(D({},p["b"]),f["b"]),m),E),d["a"]),{},{align:Object(b["c"])(c["u"]),noBody:Object(b["c"])(c["g"],!1)})),n["j"]),B=a["default"].extend({name:n["j"],functional:!0,props:_,render:function(t,e){var r,a=e.props,n=e.data,c=e.slots,u=e.scopedSlots,d=a.imgSrc,g=a.imgLeft,O=a.imgRight,h=a.imgStart,v=a.imgEnd,y=a.imgBottom,w=a.header,P=a.headerHtml,T=a.footer,x=a.footerHtml,D=a.align,_=a.textVariant,B=a.bgVariant,S=a.borderVariant,M=u||{},N=c(),A={},$=t(),V=t();if(d){var I=t(C,{props:Object(b["e"])(E,a,b["h"].bind(null,"img"))});y?V=I:$=I}var z=t(),R=Object(s["a"])(i["s"],M,N);(R||w||P)&&(z=t(f["a"],{props:Object(b["e"])(f["b"],a),domProps:R?{}:Object(l["a"])(P,w)},Object(s["b"])(i["s"],A,M,N)));var G=Object(s["b"])(i["h"],A,M,N);a.noBody||(G=t(p["a"],{props:Object(b["e"])(p["b"],a)},G),a.overlay&&d&&(G=t("div",{staticClass:"position-relative"},[$,G,V]),$=t(),V=t()));var L=t(),U=Object(s["a"])(i["r"],M,N);return(U||T||x)&&(L=t(j,{props:Object(b["e"])(m,a),domProps:R?{}:Object(l["a"])(x,T)},Object(s["b"])(i["r"],A,M,N))),t(a.tag,Object(o["a"])(n,{staticClass:"card",class:(r={"flex-row":g||h,"flex-row-reverse":(O||v)&&!(g||h)},k(r,"text-".concat(D),D),k(r,"bg-".concat(B),B),k(r,"border-".concat(S),S),k(r,"text-".concat(_),_),r)}),[$,z,G,L,V])}})},4918:function(t,e,r){"use strict";r.d(e,"b",(function(){return O})),r.d(e,"a",(function(){return h}));var a=r("2b0e"),o=r("b42e"),n=r("c637"),c=r("a723"),i=r("2326"),l=r("6c06"),s=r("7b1e"),u=r("3a58"),b=r("cf75"),d=r("fa73");function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var f='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',g=function(t,e,r){var a=encodeURIComponent(f.replace("%{w}",Object(d["g"])(t)).replace("%{h}",Object(d["g"])(e)).replace("%{f}",r));return"data:image/svg+xml;charset=UTF-8,".concat(a)},O=Object(b["d"])({alt:Object(b["c"])(c["u"]),blank:Object(b["c"])(c["g"],!1),blankColor:Object(b["c"])(c["u"],"transparent"),block:Object(b["c"])(c["g"],!1),center:Object(b["c"])(c["g"],!1),fluid:Object(b["c"])(c["g"],!1),fluidGrow:Object(b["c"])(c["g"],!1),height:Object(b["c"])(c["p"]),left:Object(b["c"])(c["g"],!1),right:Object(b["c"])(c["g"],!1),rounded:Object(b["c"])(c["j"],!1),sizes:Object(b["c"])(c["f"]),src:Object(b["c"])(c["u"]),srcset:Object(b["c"])(c["f"]),thumbnail:Object(b["c"])(c["g"],!1),width:Object(b["c"])(c["p"])},n["T"]),h=a["default"].extend({name:n["T"],functional:!0,props:O,render:function(t,e){var r,a=e.props,n=e.data,c=a.alt,b=a.src,f=a.block,O=a.fluidGrow,h=a.rounded,m=Object(u["c"])(a.width)||null,j=Object(u["c"])(a.height)||null,v=null,y=Object(i["b"])(a.srcset).filter(l["a"]).join(","),w=Object(i["b"])(a.sizes).filter(l["a"]).join(",");return a.blank&&(!j&&m?j=m:!m&&j&&(m=j),m||j||(m=1,j=1),b=g(m,j,a.blankColor||"transparent"),y=null,w=null),a.left?v="float-left":a.right?v="float-right":a.center&&(v="mx-auto",f=!0),t("img",Object(o["a"])(n,{attrs:{src:b,alt:c,width:m?Object(d["g"])(m):null,height:j?Object(d["g"])(j):null,srcset:y||null,sizes:w||null},class:(r={"img-thumbnail":a.thumbnail,"img-fluid":a.fluid||O,"w-100":O,rounded:""===h||!0===h},p(r,"rounded-".concat(h),Object(s["n"])(h)&&""!==h),p(r,v,v),p(r,"d-block",f),r)}))}})},4968:function(t,e,r){"use strict";r.d(e,"b",(function(){return s})),r.d(e,"a",(function(){return u}));var a=r("2b0e"),o=r("b42e"),n=r("c637"),c=r("a723"),i=r("cf75"),l=r("fa73"),s=Object(i["d"])({title:Object(i["c"])(c["u"]),titleTag:Object(i["c"])(c["u"],"h4")},n["q"]),u=a["default"].extend({name:n["q"],functional:!0,props:s,render:function(t,e){var r=e.props,a=e.data,n=e.children;return t(r.titleTag,Object(o["a"])(a,{staticClass:"card-title"}),n||Object(l["g"])(r.title))}})},6197:function(t,e,r){"use strict";r.d(e,"b",(function(){return g})),r.d(e,"a",(function(){return O}));var a=r("2b0e"),o=r("b42e"),n=r("c637"),c=r("a723"),i=r("d82f"),l=r("cf75"),s=r("d580"),u=r("4968"),b=r("ba06");function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var g=Object(l["d"])(Object(i["m"])(p(p(p(p({},u["b"]),b["b"]),Object(l["a"])(s["a"],l["f"].bind(null,"body"))),{},{bodyClass:Object(l["c"])(c["e"]),overlay:Object(l["c"])(c["g"],!1)})),n["k"]),O=a["default"].extend({name:n["k"],functional:!0,props:g,render:function(t,e){var r,a=e.props,n=e.data,c=e.children,i=a.bodyBgVariant,s=a.bodyBorderVariant,d=a.bodyTextVariant,p=t();a.title&&(p=t(u["a"],{props:Object(l["e"])(u["b"],a)}));var g=t();return a.subTitle&&(g=t(b["a"],{props:Object(l["e"])(b["b"],a),class:["mb-2"]})),t(a.bodyTag,Object(o["a"])(n,{staticClass:"card-body",class:[(r={"card-img-overlay":a.overlay},f(r,"bg-".concat(i),i),f(r,"border-".concat(s),s),f(r,"text-".concat(d),d),r),a.bodyClass]}),[p,g,c])}})},8266:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-modal",{ref:"modal",attrs:{id:"modal_nuevo_taller_global",title:t.tituloModal,"hide-footer":""}},[r("form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.GuardarEditar.apply(null,arguments)}}},[r("b-form-group",{attrs:{"label-for":"name-input","invalid-feedback":"Name is required"}},["OCADE-ALT-COMP"===t.codigo?r("label",[t._v("Nombre del Programa Deportivo")]):r("label",[t._v("Nombre del Taller Global")]),r("b-form-input",{attrs:{id:"name-input",required:""},model:{value:t.tallerNuevo.nombre,callback:function(e){t.$set(t.tallerNuevo,"nombre",e)},expression:"tallerNuevo.nombre"}}),"OCADE-ALT-COMP"===t.codigo?r("label",[t._v("Descripción del Programa(opcional)")]):r("label",[t._v("Descripción del Taller(opcional)")]),r("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter something...",rows:"3","max-rows":"6"},model:{value:t.tallerNuevo.descripcion,callback:function(e){t.$set(t.tallerNuevo,"descripcion",e)},expression:"tallerNuevo.descripcion"}}),r("label",{attrs:{for:""}},[t._v("Cargar archivo tipo imagen")]),r("b-form-file",{attrs:{accept:"image/*",required:t.guardarEditar},scopedSlots:t._u([{key:"file-name",fn:function(e){var a=e.names;return[r("b-badge",{attrs:{variant:"primary"}},[t._v(" "+t._s(a[0])+" ")]),a.length>1?r("b-badge",{staticClass:"ml-1",attrs:{variant:"dark"}},[t._v(" + "+t._s(a.length-1)+" More files ")]):t._e()]}}]),model:{value:t.tallerNuevo.img,callback:function(e){t.$set(t.tallerNuevo,"img",e)},expression:"tallerNuevo.img"}})],1),r("div",{staticClass:"w-100"},[r("b-button",{staticClass:"float-right",attrs:{variant:"outline-success",type:"submit"}},[t._v(" "+t._s(t.tituloBoton)+" "),r("feather-icon",{attrs:{icon:"SaveIcon"}})],1)],1)],1)])],1)},o=[],n=r("1947"),c=r("8226"),i=r("4797"),l=r("9c7d"),s=r("c43f"),u=r("e98b"),b=r("223c"),d=r("4360"),p={components:{BButton:n["a"],BFormGroup:c["a"],BFormInput:i["a"],BFormTextarea:l["a"],BFormFile:s["a"],BBadge:u["a"]},props:{codigo:{type:String,default:""}},data:function(){return{tituloModal:"",tituloBoton:"",tallerNuevo:{nombre:"",descripcion:"",img:null},guardarOeditar:"",guardarEditar:!1}},created:function(){this.$parent.$on("abrirModalNuevoTallerglobal",this.abrirModalNuevoTallerglobal),this.$parent.$on("abrirModalEditarTallerGlobal",this.abrirModalEditarTallerGlobal)},methods:{abrirModalNuevoTallerglobal:function(){"OCADE-ALT-COMP"===this.codigo?this.tituloModal="Nuevo Programa Deportivo Global":this.tituloModal="Nuevo Taller Global",this.tituloBoton="Guardar",this.guardarEditar=!0,this.tallerNuevo={},this.tallerNuevo.nombre="",this.tallerNuevo.descripcion="",this.tallerNuevo.img=null,this.$bvModal.show("modal_nuevo_taller_global")},abrirModalEditarTallerGlobal:function(t){"OCADE-ALT-COMP"===this.codigo?this.tituloModal="Editar Programa Deportivo Global":this.tituloModal="Editar Taller Global",this.tituloBoton="Actualizar",this.guardarEditar=!1,this.tallerNuevo.id=t.id,this.tallerNuevo.nombre=t.nombre,this.tallerNuevo.descripcion="null"===t.descripcion?"":t.descripcion,this.tallerNuevo.img=null,this.$bvModal.show("modal_nuevo_taller_global")},GuardarEditar:function(){var t=this;if(this.guardarEditar){var e=new FormData;e.append("codigo",this.codigo),e.append("nombre",this.tallerNuevo.nombre),e.append("descripcion",this.tallerNuevo.descripcion),e.append("img",this.tallerNuevo.img),d["a"].dispatch("globalStoreModule/addTaller",e).then((function(){t.$swal({position:"top-end",icon:"success",title:"Taller registrado!!",showConfirmButton:!1,timer:1500,customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1}),t.$emit("cargarTalleres"),t.$bvModal.hide("modal_nuevo_taller_global")})).catch((function(e){e.response.data.code>=400&&e.response.data.code<=499?t.$toast({component:b["a"],props:{title:"¡Advertencia!",text:e.response.data.error,icon:"XIcon",variant:"warning"}}):t.$toast({component:b["a"],props:{title:"Error al cargar los talleres (500)!",icon:"XIcon",variant:"danger"}})}))}else{var r=new FormData;r.append("id",this.tallerNuevo.id),r.append("codigo",this.codigo),r.append("nombre",this.tallerNuevo.nombre),r.append("descripcion",this.tallerNuevo.descripcion),r.append("img",this.tallerNuevo.img),r.append("_method","PUT"),d["a"].dispatch("globalStoreModule/updateTaller",r).then((function(){t.$swal({position:"top-end",icon:"success",title:"Taller actualizado!!",showConfirmButton:!1,timer:1500,customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1}),t.$emit("cargarTalleres"),t.$bvModal.hide("modal_nuevo_taller_global")})).catch((function(e){e.response.data.code>=400&&e.response.data.code<=499?t.$toast({component:b["a"],props:{title:"¡Advertencia!",text:e.response.data.error,icon:"XIcon",variant:"warning"}}):t.$toast({component:b["a"],props:{title:"Error al cargar los talleres (500)!",icon:"XIcon",variant:"danger"}})}))}}}},f=p,g=r("2877"),O=Object(g["a"])(f,a,o,!1,null,null,null);e["a"]=O.exports},"9eaa":function(t,e,r){"use strict";r.d(e,"a",(function(){return h}));var a=r("2b0e"),o=r("c637"),n=r("0056"),c=r("a723"),i=r("906c"),l=r("d82f"),s=r("cf75"),u=r("493b"),b=r("8c18"),d=r("aa59");function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){g(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function g(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var O=Object(s["d"])(Object(l["m"])(f(f({},Object(l["j"])(d["b"],["event","routerTag"])),{},{linkClass:Object(s["c"])(c["e"]),variant:Object(s["c"])(c["u"])})),o["x"]),h=a["default"].extend({name:o["x"],mixins:[u["a"],b["a"]],inject:{bvDropdown:{default:null}},inheritAttrs:!1,props:O,computed:{computedAttrs:function(){return f(f({},this.bvAttrs),{},{role:"menuitem"})}},methods:{closeDropdown:function(){var t=this;Object(i["B"])((function(){t.bvDropdown&&t.bvDropdown.hide(!0)}))},onClick:function(t){this.$emit(n["f"],t),this.closeDropdown()}},render:function(t){var e=this.linkClass,r=this.variant,a=this.active,o=this.disabled,n=this.onClick,c=this.bvAttrs;return t("li",{class:c.class,style:c.style,attrs:{role:"presentation"}},[t(d["a"],{staticClass:"dropdown-item",class:[e,g({},"text-".concat(r),r&&!(a||o))],props:this.$props,attrs:this.computedAttrs,on:{click:n},ref:"item"},this.normalizeSlot())])}})},a06a:function(t,e,r){"use strict";r("daac")},a7db:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("taller-global-nuevo",{attrs:{codigo:t.codigo},on:{cargarTalleres:t.cargarTalleres}}),r("b-card",{staticClass:"p-3"},[r("b-button",{staticClass:"mb-2",attrs:{size:"md",variant:"gradient-primary"},on:{click:t.abrirModal}},[r("feather-icon",{attrs:{icon:"PlusSquareIcon"}}),t._v(" Nuevo programa global ")],1),r("br"),r("div",[r("b-row",t._l(t.talleres,(function(e,a,o){return r("b-col",{key:o,attrs:{xl:"4",lg:"4",md:"6",sm:"12"}},[r("b-card",{staticClass:"mb-2 text-center border",staticStyle:{"max-width":"20rem"},attrs:{cols:"12",title:e.nombre,"img-src":e.img,"img-alt":"Image","img-top":"",tag:"article"}},[t._v(" "+t._s("null"==e.descripcion?"":e.descripcion)+" "),r("div",{staticClass:"d-flex flex-nowrap "},[r("b-button",{staticClass:"btn-block",attrs:{size:"sm",variant:"outline-primary",to:{name:t.nameRuta,params:{id:e.id}}}},[r("feather-icon",{attrs:{icon:"TrendingUpIcon",size:"16"}}),t._v(" ingresar ")],1),r("b-dropdown",{staticClass:"bordered",attrs:{variant:"link","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[r("feather-icon",{staticClass:"align-middle text-body",attrs:{icon:"MoreVerticalIcon",size:"16"}})]},proxy:!0}],null,!0)},[r("b-dropdown-item",{on:{click:function(r){return t.editarTaller(e)}}},[r("feather-icon",{attrs:{icon:"EditIcon"}}),r("span",{staticClass:"align-middle ml-50"},[t._v("Editar")])],1),r("b-dropdown-item",{on:{click:function(r){return t.eliminarTaller(e)}}},[r("feather-icon",{attrs:{icon:"TrashIcon"}}),r("span",{staticClass:"align-middle ml-50"},[t._v("Eliminar")])],1)],1)],1)])],1)})),1)],1)],1)],1)},o=[],n=r("205f"),c=r("1947"),i=r("a15b7"),l=r("b28b"),s=r("dd9a"),u=r("9eaa"),b=r("223c"),d=r("4360"),p=r("a6f4"),f=r("8266"),g=r("fa15"),O={components:{BCard:n["a"],BButton:c["a"],BRow:i["a"],BCol:l["a"],TallerGlobalNuevo:f["a"],BDropdown:s["a"],BDropdownItem:u["a"]},props:{codigo:{type:String,default:"#"}},data:function(){return{talleres:[],nameRuta:""}},watch:{codigo:function(t){switch(this.cargarTalleres(),t){case"OCADE-DEPORTIVO":this.nameRuta="ocade-servicio-deportivo-talleres";break;case"OCADE-CULTURAL":this.nameRuta="ocade-servicio-cultural-talleres";break;case"OCADE-ALT-COMP":this.nameRuta="ocade-prodac-programas";break;default:break}}},mounted:function(){switch(this.cargarTalleres(),this.codigo){case"OCADE-DEPORTIVO":this.nameRuta="ocade-servicio-deportivo-talleres";break;case"OCADE-CULTURAL":this.nameRuta="ocade-servicio-cultural-talleres";break;case"OCADE-ALT-COMP":this.nameRuta="ocade-prodac-programas";break;default:break}},methods:{cargarTalleres:function(){var t=this;d["a"].dispatch("globalStoreModule/fetchTalleres",this.codigo).then((function(e){t.talleres=e.data.data})).catch((function(){t.$toast({component:b["a"],props:{title:"Error al cargar los talleres (500)!",icon:"XIcon",variant:"danger"}})}))}},setup:function(){var t="globalStoreModule";function e(){this.$emit("abrirModalNuevoTallerglobal")}function r(t){this.$emit("abrirModalEditarTallerGlobal",t)}function a(t){var e=this;this.$swal({title:"Esta seguro de eliminar el taller deportivo ".concat(t.nombre),text:"Esta acción es irreversible!",icon:"warning",showCancelButton:!0,confirmButtonText:"Si, eliminar!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ml-1"},buttonsStyling:!1}).then((function(r){r.value&&d["a"].dispatch("globalStoreModule/deleteTaller",{codigo:e.codigo,id:t.id}).then((function(){e.$swal({icon:"success",title:"Realizado!",text:"OCADE-ALT-COMP"===e.codigo?"Programa global eliminado":"Taller global eliminado",customClass:{confirmButton:"btn btn-success"}}),e.cargarTalleres()})).catch((function(t){console.log(t)}))}))}return d["a"].hasModule(t)||d["a"].registerModule(t,g["a"]),Object(p["onUnmounted"])((function(){d["a"].hasModule(t)&&d["a"].unregisterModule(t)})),{abrirModal:e,editarTaller:r,eliminarTaller:a}}},h=O,m=(r("a06a"),r("2877")),j=Object(m["a"])(h,a,o,!1,null,"2fb5ac87",null);e["default"]=j.exports},b885:function(t,e,r){"use strict";r.d(e,"b",(function(){return f})),r.d(e,"a",(function(){return g}));var a=r("2b0e"),o=r("b42e"),n=r("c637"),c=r("a723"),i=r("8690"),l=r("d82f"),s=r("cf75"),u=r("d580");function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var f=Object(s["d"])(Object(l["m"])(d(d({},Object(s["a"])(u["a"],s["f"].bind(null,"header"))),{},{header:Object(s["c"])(c["u"]),headerClass:Object(s["c"])(c["e"]),headerHtml:Object(s["c"])(c["u"])})),n["m"]),g=a["default"].extend({name:n["m"],functional:!0,props:f,render:function(t,e){var r,a=e.props,n=e.data,c=e.children,l=a.headerBgVariant,s=a.headerBorderVariant,u=a.headerTextVariant;return t(a.headerTag,Object(o["a"])(n,{staticClass:"card-header",class:[a.headerClass,(r={},p(r,"bg-".concat(l),l),p(r,"border-".concat(s),s),p(r,"text-".concat(u),u),r)],domProps:c?{}:Object(i["a"])(a.headerHtml,a.header)}),c)}})},ba06:function(t,e,r){"use strict";r.d(e,"b",(function(){return s})),r.d(e,"a",(function(){return u}));var a=r("2b0e"),o=r("b42e"),n=r("c637"),c=r("a723"),i=r("cf75"),l=r("fa73"),s=Object(i["d"])({subTitle:Object(i["c"])(c["u"]),subTitleTag:Object(i["c"])(c["u"],"h6"),subTitleTextVariant:Object(i["c"])(c["u"],"muted")},n["o"]),u=a["default"].extend({name:n["o"],functional:!0,props:s,render:function(t,e){var r=e.props,a=e.data,n=e.children;return t(r.subTitleTag,Object(o["a"])(a,{staticClass:"card-subtitle",class:[r.subTitleTextVariant?"text-".concat(r.subTitleTextVariant):null]}),n||Object(l["g"])(r.subTitle))}})},d580:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var a=r("2b0e"),o=r("c637"),n=r("a723"),c=r("cf75"),i=Object(c["d"])({bgVariant:Object(c["c"])(n["u"]),borderVariant:Object(c["c"])(n["u"]),tag:Object(c["c"])(n["u"],"div"),textVariant:Object(c["c"])(n["u"])},o["j"]);a["default"].extend({props:i})},daac:function(t,e,r){},dd9a:function(t,e,r){"use strict";r.d(e,"b",(function(){return j})),r.d(e,"a",(function(){return v}));var a=r("2b0e"),o=r("c637"),n=r("a723"),c=r("9b76"),i=r("2326"),l=r("8690"),s=r("cf75"),u=r("fa73"),b=r("95ae"),d=r("90ef"),p=r("8c18"),f=r("1947"),g=r("d82f");function O(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?O(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var j=Object(s["d"])(Object(g["m"])(h(h(h({},d["b"]),b["b"]),{},{block:Object(s["c"])(n["g"],!1),html:Object(s["c"])(n["u"]),lazy:Object(s["c"])(n["g"],!1),menuClass:Object(s["c"])(n["e"]),noCaret:Object(s["c"])(n["g"],!1),role:Object(s["c"])(n["u"],"menu"),size:Object(s["c"])(n["u"]),split:Object(s["c"])(n["g"],!1),splitButtonType:Object(s["c"])(n["u"],"button",(function(t){return Object(i["a"])(["button","submit","reset"],t)})),splitClass:Object(s["c"])(n["e"]),splitHref:Object(s["c"])(n["u"]),splitTo:Object(s["c"])(n["s"]),splitVariant:Object(s["c"])(n["u"]),text:Object(s["c"])(n["u"]),toggleClass:Object(s["c"])(n["e"]),toggleTag:Object(s["c"])(n["u"],"button"),toggleText:Object(s["c"])(n["u"],"Toggle dropdown"),variant:Object(s["c"])(n["u"],"secondary")})),o["v"]),v=a["default"].extend({name:o["v"],mixins:[d["a"],b["a"],p["a"]],props:j,computed:{dropdownClasses:function(){var t=this.block,e=this.split;return[this.directionClass,this.boundaryClass,{show:this.visible,"btn-group":e||!t,"d-flex":t&&e}]},menuClasses:function(){return[this.menuClass,{"dropdown-menu-right":this.right,show:this.visible}]},toggleClasses:function(){var t=this.split;return[this.toggleClass,{"dropdown-toggle-split":t,"dropdown-toggle-no-caret":this.noCaret&&!t}]}},render:function(t){var e=this.visible,r=this.variant,a=this.size,o=this.block,n=this.disabled,i=this.split,s=this.role,b=this.hide,d=this.toggle,p={variant:r,size:a,block:o,disabled:n},g=this.normalizeSlot(c["e"]),O=this.hasNormalizedSlot(c["e"])?{}:Object(l["a"])(this.html,this.text),m=t();if(i){var j=this.splitTo,v=this.splitHref,y=this.splitButtonType,w=h(h({},p),{},{variant:this.splitVariant||r});j?w.to=j:v?w.href=v:y&&(w.type=y),m=t(f["a"],{class:this.splitClass,attrs:{id:this.safeId("_BV_button_")},props:w,domProps:O,on:{click:this.onSplitClick},ref:"button"},g),g=[t("span",{class:["sr-only"]},[this.toggleText])],O={}}var P=t(f["a"],{staticClass:"dropdown-toggle",class:this.toggleClasses,attrs:{id:this.safeId("_BV_toggle_"),"aria-haspopup":"true","aria-expanded":Object(u["g"])(e)},props:h(h({},p),{},{tag:this.toggleTag,block:o&&!i}),domProps:O,on:{mousedown:this.onMousedown,click:d,keydown:d},ref:"toggle"},g),T=t("ul",{staticClass:"dropdown-menu",class:this.menuClasses,attrs:{role:s,tabindex:"-1","aria-labelledby":this.safeId(i?"_BV_button_":"_BV_toggle_")},on:{keydown:this.onKeydown},ref:"menu"},[!this.lazy||e?this.normalizeSlot(c["h"],{hide:b}):t()]);return t("div",{staticClass:"dropdown b-dropdown",class:this.dropdownClasses,attrs:{id:this.safeId()}},[m,P,T])}})},e98b:function(t,e,r){"use strict";r.d(e,"a",(function(){return O}));var a=r("2b0e"),o=r("b42e"),n=r("c637"),c=r("a723"),i=r("d82f"),l=r("cf75"),s=r("4a38"),u=r("aa59");function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var f=Object(i["j"])(u["b"],["event","routerTag"]);delete f.href.default,delete f.to.default;var g=Object(l["d"])(Object(i["m"])(d(d({},f),{},{pill:Object(l["c"])(c["g"],!1),tag:Object(l["c"])(c["u"],"span"),variant:Object(l["c"])(c["u"],"secondary")})),n["c"]),O=a["default"].extend({name:n["c"],functional:!0,props:g,render:function(t,e){var r=e.props,a=e.data,n=e.children,c=r.active,i=r.disabled,b=Object(s["d"])(r),d=b?u["a"]:r.tag,p=r.variant||"secondary";return t(d,Object(o["a"])(a,{staticClass:"badge",class:["badge-".concat(p),{"badge-pill":r.pill,active:c,disabled:i}],props:b?Object(l["e"])(f,r):{}}),n)}})},fa15:function(t,e,r){"use strict";r("99af"),r("d3b7");var a=r("7f80");e["a"]={namespaced:!0,state:{},getters:{},mutations:{},actions:{fetchTalleres:function(t,e){return new Promise((function(t,r){a["a"].get("/servicio-cultural-deportivo/".concat(e,"/global")).then((function(e){return t(e)})).catch((function(t){return r(t)}))}))},fetchTaller:function(t,e){var r=e.id;return new Promise((function(t,e){a["a"].get("/servicio-deportivo/taller-global/".concat(r)).then((function(e){return t(e)})).catch((function(t){return e(t)}))}))},addTaller:function(t,e){return new Promise((function(t,r){a["a"].post("/servicio-cultural-deportivo/".concat(e.get("codigo"),"/global"),e).then((function(e){t(e)})).catch((function(t){return r(t)}))}))},updateTaller:function(t,e){return new Promise((function(t,r){a["a"].post("/servicio-cultural-deportivo/".concat(e.get("codigo"),"/global/").concat(e.get("id")),e).then((function(e){t(e)})).catch((function(t){return r(t)}))}))},deleteTaller:function(t,e){var r=e.codigo,o=e.id;return new Promise((function(t,e){a["a"].delete("/servicio-cultural-deportivo/".concat(r,"/global/").concat(o)).then((function(e){return t(e)})).catch((function(t){return e(t)}))}))}}}}}]);
//# sourceMappingURL=chunk-74695cfa.aab8d987.js.map