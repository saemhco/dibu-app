(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cb1205fa"],{"0e00":function(a,t,e){},a318:function(a,t,e){"use strict";e("0e00")},f6c5:function(a,t,e){"use strict";e.r(t);var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("taller-global-nuevo",{attrs:{codigo:a.codigo},on:{cargarTalleres:a.cargarTalleres}}),e("b-card",{staticClass:"p-3"},[e("b-button",{staticClass:"mb-2",attrs:{size:"md",variant:"gradient-primary"},on:{click:a.abrirModal}},[e("feather-icon",{attrs:{icon:"PlusSquareIcon"}}),a._v(" Nuevo taller global cultural ")],1),e("br"),e("div",[e("b-row",a._l(a.talleres,(function(t,r,o){return e("b-col",{key:o,attrs:{xl:"4",lg:"4",md:"6",sm:"12"}},[e("b-card",{staticClass:"mb-2 text-center border",staticStyle:{"max-width":"20rem"},attrs:{cols:"12",title:t.nombre,"img-src":t.img,"img-alt":"Image","img-top":"",tag:"article"}},[a._v(" "+a._s("null"==t.descripcion?"":t.descripcion)+" "),e("div",{staticClass:"d-flex flex-nowrap "},[e("b-button",{staticClass:"btn-block",attrs:{size:"sm",variant:"outline-primary",to:{name:a.nameRuta,params:{id:t.id}}}},[e("feather-icon",{attrs:{icon:"TrendingUpIcon",size:"16"}}),a._v(" ingresar ")],1),e("b-dropdown",{staticClass:"bordered",attrs:{variant:"link","no-caret":""},scopedSlots:a._u([{key:"button-content",fn:function(){return[e("feather-icon",{staticClass:"align-middle text-body",attrs:{icon:"MoreVerticalIcon",size:"16"}})]},proxy:!0}],null,!0)},[e("b-dropdown-item",{on:{click:function(e){return a.editarTaller(t)}}},[e("feather-icon",{attrs:{icon:"EditIcon"}}),e("span",{staticClass:"align-middle ml-50"},[a._v("Editar")])],1),e("b-dropdown-item",{on:{click:function(e){return a.eliminarTaller(t)}}},[e("feather-icon",{attrs:{icon:"TrashIcon"}}),e("span",{staticClass:"align-middle ml-50"},[a._v("Eliminar")])],1)],1)],1)])],1)})),1)],1)],1)],1)},o=[],i=e("205f"),n=e("1947"),l=e("a15b7"),c=e("b28b"),s=e("dd9a"),d=e("9eaa"),u=e("223c"),b=e("4360"),m=e("a6f4"),g=e("8266"),f=e("fa15"),p={components:{BCard:i["a"],BButton:n["a"],BRow:l["a"],BCol:c["a"],TallerGlobalNuevo:g["a"],BDropdown:s["a"],BDropdownItem:d["a"]},props:{codigo:{type:String,default:"#"}},data:function(){return{talleres:[],nameRuta:""}},watch:{codigo:function(a){switch(this.cargarTalleres(),a){case"OCADE-DEPORTIVO":this.nameRuta="ocade-servicio-deportivo-talleres";break;case"OCADE-CULTURAL":this.nameRuta="ocade-servicio-cultural-talleres";break;case"OCADE-ALT-COMP":this.nameRuta="ocade-prodac-programas";break;default:break}}},mounted:function(){switch(this.cargarTalleres(),this.codigo){case"OCADE-DEPORTIVO":this.nameRuta="ocade-servicio-deportivo-talleres";break;case"OCADE-CULTURAL":this.nameRuta="ocade-servicio-cultural-talleres";break;case"OCADE-ALT-COMP":this.nameRuta="ocade-prodac-programas";break;default:break}},methods:{cargarTalleres:function(){var a=this;b["a"].dispatch("globalStoreModule/fetchTalleres",this.codigo).then((function(t){a.talleres=t.data.data})).catch((function(){a.$toast({component:u["a"],props:{title:"Error al cargar los talleres (500)!",icon:"XIcon",variant:"danger"}})}))}},setup:function(){var a="globalStoreModule";function t(){this.$emit("abrirModalNuevoTallerglobal")}function e(a){this.$emit("abrirModalEditarTallerGlobal",a)}function r(a){var t=this;this.$swal({title:"Esta seguro de eliminar el taller deportivo ".concat(a.nombre),text:"Esta acción es irreversible!",icon:"warning",showCancelButton:!0,confirmButtonText:"Si, eliminar!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ml-1"},buttonsStyling:!1}).then((function(e){e.value&&b["a"].dispatch("globalStoreModule/deleteTaller",{codigo:t.codigo,id:a.id}).then((function(){t.$swal({icon:"success",title:"Realizado!",text:"OCADE-ALT-COMP"===t.codigo?"Programa global eliminado":"Taller global eliminado",customClass:{confirmButton:"btn btn-success"}}),t.cargarTalleres()})).catch((function(a){console.log(a)}))}))}return b["a"].hasModule(a)||b["a"].registerModule(a,f["a"]),Object(m["onUnmounted"])((function(){b["a"].hasModule(a)&&b["a"].unregisterModule(a)})),{abrirModal:t,editarTaller:e,eliminarTaller:r}}},h=p,v=(e("a318"),e("2877")),C=Object(v["a"])(h,r,o,!1,null,"2d621da1",null);t["default"]=C.exports}}]);
//# sourceMappingURL=chunk-cb1205fa.6019b131.js.map