(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e99b4"],{"8df8":function(t,e,i){"use strict";i.d(e,"a",(function(){return z}));var n=i("2b0e"),r=i("2f79"),o=i("c637"),a=i("0056"),s=i("2326"),c=i("906c"),h=i("6b77"),l=i("be29"),u=i("6c06"),d=i("7b1e"),p=i("3c21"),f=i("a8c8"),b=i("f07e"),v=i("3a58"),m=i("d82f"),g=i("686b"),O=i("6d40"),T=i("602d"),j=i("a723"),$=i("cf75"),y=i("8d32"),w=i("f0bd"),E=i("ca88"),_=i("ce2a"),P={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left",TOPLEFT:"top",TOPRIGHT:"top",RIGHTTOP:"right",RIGHTBOTTOM:"right",BOTTOMLEFT:"bottom",BOTTOMRIGHT:"bottom",LEFTTOP:"left",LEFTBOTTOM:"left"},S={AUTO:0,TOPLEFT:-1,TOP:0,TOPRIGHT:1,RIGHTTOP:-1,RIGHT:0,RIGHTBOTTOM:1,BOTTOMLEFT:-1,BOTTOM:0,BOTTOMRIGHT:1,LEFTTOP:-1,LEFT:0,LEFTBOTTOM:1},I={arrowPadding:Object($["c"])(j["p"],6),boundary:Object($["c"])([E["c"],j["u"]],"scrollParent"),boundaryPadding:Object($["c"])(j["p"],5),fallbackPlacement:Object($["c"])(j["f"],"flip"),offset:Object($["c"])(j["p"],0),placement:Object($["c"])(j["u"],"top"),target:Object($["c"])([E["c"],E["d"]])},L=n["default"].extend({name:o["ob"],props:I,data:function(){return{noFade:!1,localShow:!0,attachment:this.getAttachment(this.placement)}},computed:{templateType:function(){return"unknown"},popperConfig:function(){var t=this,e=this.placement;return{placement:this.getAttachment(e),modifiers:{offset:{offset:this.getOffset(e)},flip:{behavior:this.fallbackPlacement},arrow:{element:".arrow"},preventOverflow:{padding:this.boundaryPadding,boundariesElement:this.boundary}},onCreate:function(e){e.originalPlacement!==e.placement&&t.popperPlacementChange(e)},onUpdate:function(e){t.popperPlacementChange(e)}}}},created:function(){var t=this;this.$_popper=null,this.localShow=!0,this.$on(a["Q"],(function(e){t.popperCreate(e)}));var e=function(){t.$nextTick((function(){Object(c["B"])((function(){t.$destroy()}))}))};this.$parent.$once(a["Y"],e),this.$once(a["u"],e)},beforeMount:function(){this.attachment=this.getAttachment(this.placement)},updated:function(){this.updatePopper()},beforeDestroy:function(){this.destroyPopper()},destroyed:function(){var t=this.$el;t&&t.parentNode&&t.parentNode.removeChild(t)},methods:{hide:function(){this.localShow=!1},getAttachment:function(t){return P[String(t).toUpperCase()]||"auto"},getOffset:function(t){if(!this.offset){var e=this.$refs.arrow||Object(c["C"])(".arrow",this.$el),i=Object(v["b"])(Object(c["k"])(e).width,0)+Object(v["b"])(this.arrowPadding,0);switch(S[String(t).toUpperCase()]||0){case 1:return"+50%p - ".concat(i,"px");case-1:return"-50%p + ".concat(i,"px");default:return 0}}return this.offset},popperCreate:function(t){this.destroyPopper(),this.$_popper=new w["a"](this.target,t,this.popperConfig)},destroyPopper:function(){this.$_popper&&this.$_popper.destroy(),this.$_popper=null},updatePopper:function(){this.$_popper&&this.$_popper.scheduleUpdate()},popperPlacementChange:function(t){this.attachment=this.getAttachment(t.placement)},renderTemplate:function(t){return t("div")}},render:function(t){var e=this,i=this.noFade;return t(_["a"],{props:{appear:!0,noFade:i},on:{beforeEnter:function(t){return e.$emit(a["Q"],t)},afterEnter:function(t){return e.$emit(a["R"],t)},beforeLeave:function(t){return e.$emit(a["v"],t)},afterLeave:function(t){return e.$emit(a["u"],t)}}},[this.localShow?this.renderTemplate(t):t()])}});function k(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function D(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?k(Object(i),!0).forEach((function(e){H(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):k(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function H(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var C={html:Object($["c"])(j["g"],!1),id:Object($["c"])(j["u"])},A=n["default"].extend({name:o["Hb"],extends:L,mixins:[y["a"]],props:C,data:function(){return{title:"",content:"",variant:null,customClass:null,interactive:!0}},computed:{templateType:function(){return"tooltip"},templateClasses:function(){var t,e=this.variant,i=this.attachment,n=this.templateType;return[(t={noninteractive:!this.interactive},H(t,"b-".concat(n,"-").concat(e),e),H(t,"bs-".concat(n,"-").concat(i),i),t),this.customClass]},templateAttributes:function(){var t=this.id;return D(D({},this.$parent.$parent.$attrs),{},{id:t,role:"tooltip",tabindex:"-1"},this.scopedStyleAttrs)},templateListeners:function(){var t=this;return{mouseenter:function(e){t.$emit(a["z"],e)},mouseleave:function(e){t.$emit(a["A"],e)},focusin:function(e){t.$emit(a["r"],e)},focusout:function(e){t.$emit(a["s"],e)}}}},methods:{renderTemplate:function(t){var e=this.title,i=Object(d["f"])(e)?e({}):e,n=this.html&&!Object(d["f"])(e)?{innerHTML:e}:{};return t("div",{staticClass:"tooltip b-tooltip",class:this.templateClasses,attrs:this.templateAttributes,on:this.templateListeners},[t("div",{staticClass:"arrow",ref:"arrow"}),t("div",{staticClass:"tooltip-inner",domProps:n},[i])])}}});function x(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function F(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?x(Object(i),!0).forEach((function(e){R(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):x(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function R(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var M=".modal-content",B=Object(h["e"])(o["gb"],a["u"]),G=".b-sidebar",U=[M,G].join(", "),V="dropdown",W=".dropdown-menu.show",Q="data-original-title",N={title:"",content:"",variant:null,customClass:null,triggers:"",placement:"auto",fallbackPlacement:"flip",target:null,container:null,noFade:!1,boundary:"scrollParent",boundaryPadding:5,offset:0,delay:0,arrowPadding:6,interactive:!0,disabled:!1,id:null,html:!1},z=n["default"].extend({name:o["Gb"],mixins:[T["a"]],data:function(){return F(F({},N),{},{activeTrigger:{hover:!1,click:!1,focus:!1},localShow:!1})},computed:{templateType:function(){return"tooltip"},computedId:function(){return this.id||"__bv_".concat(this.templateType,"_").concat(this[r["a"]],"__")},computedDelay:function(){var t={show:0,hide:0};return Object(d["k"])(this.delay)?(t.show=Object(f["c"])(Object(v["c"])(this.delay.show,0),0),t.hide=Object(f["c"])(Object(v["c"])(this.delay.hide,0),0)):(Object(d["h"])(this.delay)||Object(d["n"])(this.delay))&&(t.show=t.hide=Object(f["c"])(Object(v["c"])(this.delay,0),0)),t},computedTriggers:function(){return Object(s["b"])(this.triggers).filter(u["a"]).join(" ").trim().toLowerCase().split(/\s+/).sort()},isWithActiveTrigger:function(){for(var t in this.activeTrigger)if(this.activeTrigger[t])return!0;return!1},computedTemplateData:function(){var t=this.title,e=this.content,i=this.variant,n=this.customClass,r=this.noFade,o=this.interactive;return{title:t,content:e,variant:i,customClass:n,noFade:r,interactive:o}}},watch:{computedTriggers:function(t,e){var i=this;Object(p["a"])(t,e)||this.$nextTick((function(){i.unListen(),e.forEach((function(e){Object(s["a"])(t,e)||i.activeTrigger[e]&&(i.activeTrigger[e]=!1)})),i.listen()}))},computedTemplateData:function(){this.handleTemplateUpdate()},title:function(t,e){t===e||t||this.hide()},disabled:function(t){t?this.disable():this.enable()}},created:function(){var t=this;this.$_tip=null,this.$_hoverTimeout=null,this.$_hoverState="",this.$_visibleInterval=null,this.$_enabled=!this.disabled,this.$_noop=b["a"].bind(this),this.$parent&&this.$parent.$once(a["X"],(function(){t.$nextTick((function(){Object(c["B"])((function(){t.$destroy()}))}))})),this.$nextTick((function(){var e=t.getTarget();e&&Object(c["f"])(document.body,e)?(t.scopeId=Object(l["a"])(t.$parent),t.listen()):Object(g["a"])(Object(d["n"])(t.target)?'Unable to find target element by ID "#'.concat(t.target,'" in document.'):"The provided target is no valid HTML element.",t.templateType)}))},updated:function(){this.$nextTick(this.handleTemplateUpdate)},deactivated:function(){this.forceHide()},beforeDestroy:function(){this.unListen(),this.setWhileOpenListeners(!1),this.clearHoverTimeout(),this.clearVisibilityInterval(),this.destroyTemplate(),this.$_noop=null},methods:{getTemplate:function(){return A},updateData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=!1;Object(m["h"])(N).forEach((function(n){Object(d["o"])(e[n])||t[n]===e[n]||(t[n]=e[n],"title"===n&&(i=!0))})),i&&this.localShow&&this.fixTitle()},createTemplateAndShow:function(){var t=this.getContainer(),e=this.getTemplate(),i=this.$_tip=new e({parent:this,propsData:{id:this.computedId,html:this.html,placement:this.placement,fallbackPlacement:this.fallbackPlacement,target:this.getPlacementTarget(),boundary:this.getBoundary(),offset:Object(v["c"])(this.offset,0),arrowPadding:Object(v["c"])(this.arrowPadding,0),boundaryPadding:Object(v["c"])(this.boundaryPadding,0)}});this.handleTemplateUpdate(),i.$once(a["Q"],this.onTemplateShow),i.$once(a["R"],this.onTemplateShown),i.$once(a["v"],this.onTemplateHide),i.$once(a["u"],this.onTemplateHidden),i.$once(a["Y"],this.destroyTemplate),i.$on(a["r"],this.handleEvent),i.$on(a["s"],this.handleEvent),i.$on(a["z"],this.handleEvent),i.$on(a["A"],this.handleEvent),i.$mount(t.appendChild(document.createElement("div")))},hideTemplate:function(){this.$_tip&&this.$_tip.hide(),this.clearActiveTriggers(),this.$_hoverState=""},destroyTemplate:function(){this.setWhileOpenListeners(!1),this.clearHoverTimeout(),this.$_hoverState="",this.clearActiveTriggers(),this.localPlacementTarget=null;try{this.$_tip.$destroy()}catch(t){}this.$_tip=null,this.removeAriaDescribedby(),this.restoreTitle(),this.localShow=!1},getTemplateElement:function(){return this.$_tip?this.$_tip.$el:null},handleTemplateUpdate:function(){var t=this,e=this.$_tip;if(e){var i=["title","content","variant","customClass","noFade","interactive"];i.forEach((function(i){e[i]!==t[i]&&(e[i]=t[i])}))}},show:function(){var t=this.getTarget();if(t&&Object(c["f"])(document.body,t)&&Object(c["u"])(t)&&!this.dropdownOpen()&&(!Object(d["p"])(this.title)&&""!==this.title||!Object(d["p"])(this.content)&&""!==this.content)&&!this.$_tip&&!this.localShow){this.localShow=!0;var e=this.buildEvent(a["Q"],{cancelable:!0});this.emitEvent(e),e.defaultPrevented?this.destroyTemplate():(this.fixTitle(),this.addAriaDescribedby(),this.createTemplateAndShow())}},hide:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.getTemplateElement();if(e&&this.localShow){var i=this.buildEvent(a["v"],{cancelable:!t});this.emitEvent(i),i.defaultPrevented||this.hideTemplate()}else this.restoreTitle()},forceHide:function(){var t=this.getTemplateElement();t&&this.localShow&&(this.setWhileOpenListeners(!1),this.clearHoverTimeout(),this.$_hoverState="",this.clearActiveTriggers(),this.$_tip&&(this.$_tip.noFade=!0),this.hide(!0))},enable:function(){this.$_enabled=!0,this.emitEvent(this.buildEvent(a["o"]))},disable:function(){this.$_enabled=!1,this.emitEvent(this.buildEvent(a["k"]))},onTemplateShow:function(){this.setWhileOpenListeners(!0)},onTemplateShown:function(){var t=this.$_hoverState;this.$_hoverState="","out"===t&&this.leave(null),this.emitEvent(this.buildEvent(a["R"]))},onTemplateHide:function(){this.setWhileOpenListeners(!1)},onTemplateHidden:function(){this.destroyTemplate(),this.emitEvent(this.buildEvent(a["u"]))},getTarget:function(){var t=this.target;return Object(d["n"])(t)?t=Object(c["j"])(t.replace(/^#/,"")):Object(d["f"])(t)?t=t():t&&(t=t.$el||t),Object(c["s"])(t)?t:null},getPlacementTarget:function(){return this.getTarget()},getTargetId:function(){var t=this.getTarget();return t&&t.id?t.id:null},getContainer:function(){var t=!!this.container&&(this.container.$el||this.container),e=document.body,i=this.getTarget();return!1===t?Object(c["e"])(U,i)||e:Object(d["n"])(t)&&Object(c["j"])(t.replace(/^#/,""))||e},getBoundary:function(){return this.boundary?this.boundary.$el||this.boundary:"scrollParent"},isInModal:function(){var t=this.getTarget();return t&&Object(c["e"])(M,t)},isDropdown:function(){var t=this.getTarget();return t&&Object(c["p"])(t,V)},dropdownOpen:function(){var t=this.getTarget();return this.isDropdown()&&t&&Object(c["C"])(W,t)},clearHoverTimeout:function(){clearTimeout(this.$_hoverTimeout),this.$_hoverTimeout=null},clearVisibilityInterval:function(){clearInterval(this.$_visibleInterval),this.$_visibleInterval=null},clearActiveTriggers:function(){for(var t in this.activeTrigger)this.activeTrigger[t]=!1},addAriaDescribedby:function(){var t=this.getTarget(),e=Object(c["h"])(t,"aria-describedby")||"";e=e.split(/\s+/).concat(this.computedId).join(" ").trim(),Object(c["E"])(t,"aria-describedby",e)},removeAriaDescribedby:function(){var t=this,e=this.getTarget(),i=Object(c["h"])(e,"aria-describedby")||"";i=i.split(/\s+/).filter((function(e){return e!==t.computedId})).join(" ").trim(),i?Object(c["E"])(e,"aria-describedby",i):Object(c["x"])(e,"aria-describedby")},fixTitle:function(){var t=this.getTarget();if(Object(c["o"])(t,"title")){var e=Object(c["h"])(t,"title");Object(c["E"])(t,"title",""),e&&Object(c["E"])(t,Q,e)}},restoreTitle:function(){var t=this.getTarget();if(Object(c["o"])(t,Q)){var e=Object(c["h"])(t,Q);Object(c["x"])(t,Q),e&&Object(c["E"])(t,"title",e)}},buildEvent:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new O["a"](t,F({cancelable:!1,target:this.getTarget(),relatedTarget:this.getTemplateElement()||null,componentId:this.computedId,vueTarget:this},e))},emitEvent:function(t){var e=t.type;this.emitOnRoot(Object(h["e"])(this.templateType,e),t),this.$emit(e,t)},listen:function(){var t=this,e=this.getTarget();e&&(this.setRootListener(!0),this.computedTriggers.forEach((function(i){"click"===i?Object(h["b"])(e,"click",t.handleEvent,a["V"]):"focus"===i?(Object(h["b"])(e,"focusin",t.handleEvent,a["V"]),Object(h["b"])(e,"focusout",t.handleEvent,a["V"])):"blur"===i?Object(h["b"])(e,"focusout",t.handleEvent,a["V"]):"hover"===i&&(Object(h["b"])(e,"mouseenter",t.handleEvent,a["V"]),Object(h["b"])(e,"mouseleave",t.handleEvent,a["V"]))}),this))},unListen:function(){var t=this,e=["click","focusin","focusout","mouseenter","mouseleave"],i=this.getTarget();this.setRootListener(!1),e.forEach((function(e){i&&Object(h["a"])(i,e,t.handleEvent,a["V"])}),this)},setRootListener:function(t){var e=this.$root;if(e){var i=t?"$on":"$off",n=this.templateType;e[i](Object(h["d"])(n,a["v"]),this.doHide),e[i](Object(h["d"])(n,a["Q"]),this.doShow),e[i](Object(h["d"])(n,a["j"]),this.doDisable),e[i](Object(h["d"])(n,a["n"]),this.doEnable)}},setWhileOpenListeners:function(t){this.setModalListener(t),this.setDropdownListener(t),this.visibleCheck(t),this.setOnTouchStartListener(t)},visibleCheck:function(t){var e=this;this.clearVisibilityInterval();var i=this.getTarget(),n=this.getTemplateElement();t&&(this.$_visibleInterval=setInterval((function(){!n||!e.localShow||i.parentNode&&Object(c["u"])(i)||e.forceHide()}),100))},setModalListener:function(t){this.isInModal()&&this.$root[t?"$on":"$off"](B,this.forceHide)},setOnTouchStartListener:function(t){var e=this;"ontouchstart"in document.documentElement&&Object(s["f"])(document.body.children).forEach((function(i){Object(h["c"])(t,i,"mouseover",e.$_noop)}))},setDropdownListener:function(t){var e=this.getTarget();e&&this.$root&&this.isDropdown&&e.__vue__&&e.__vue__[t?"$on":"$off"](a["R"],this.forceHide)},handleEvent:function(t){var e=this.getTarget();if(e&&!Object(c["r"])(e)&&this.$_enabled&&!this.dropdownOpen()){var i=t.type,n=this.computedTriggers;if("click"===i&&Object(s["a"])(n,"click"))this.click(t);else if("mouseenter"===i&&Object(s["a"])(n,"hover"))this.enter(t);else if("focusin"===i&&Object(s["a"])(n,"focus"))this.enter(t);else if("focusout"===i&&(Object(s["a"])(n,"focus")||Object(s["a"])(n,"blur"))||"mouseleave"===i&&Object(s["a"])(n,"hover")){var r=this.getTemplateElement(),o=t.target,a=t.relatedTarget;if(r&&Object(c["f"])(r,o)&&Object(c["f"])(e,a)||r&&Object(c["f"])(e,o)&&Object(c["f"])(r,a)||r&&Object(c["f"])(r,o)&&Object(c["f"])(r,a)||Object(c["f"])(e,o)&&Object(c["f"])(e,a))return;this.leave(t)}}},doHide:function(t){t&&this.getTargetId()!==t&&this.computedId!==t||this.forceHide()},doShow:function(t){t&&this.getTargetId()!==t&&this.computedId!==t||this.show()},doDisable:function(t){t&&this.getTargetId()!==t&&this.computedId!==t||this.disable()},doEnable:function(t){t&&this.getTargetId()!==t&&this.computedId!==t||this.enable()},click:function(t){this.$_enabled&&!this.dropdownOpen()&&(Object(c["d"])(t.currentTarget),this.activeTrigger.click=!this.activeTrigger.click,this.isWithActiveTrigger?this.enter(null):this.leave(null))},toggle:function(){this.$_enabled&&!this.dropdownOpen()&&(this.localShow?this.leave(null):this.enter(null))},enter:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e&&(this.activeTrigger["focusin"===e.type?"focus":"hover"]=!0),this.localShow||"in"===this.$_hoverState?this.$_hoverState="in":(this.clearHoverTimeout(),this.$_hoverState="in",this.computedDelay.show?(this.fixTitle(),this.$_hoverTimeout=setTimeout((function(){"in"===t.$_hoverState?t.show():t.localShow||t.restoreTitle()}),this.computedDelay.show)):this.show())},leave:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e&&(this.activeTrigger["focusout"===e.type?"focus":"hover"]=!1,"focusout"===e.type&&Object(s["a"])(this.computedTriggers,"blur")&&(this.activeTrigger.click=!1,this.activeTrigger.hover=!1)),this.isWithActiveTrigger||(this.clearHoverTimeout(),this.$_hoverState="out",this.computedDelay.hide?this.$_hoverTimeout=setTimeout((function(){"out"===t.$_hoverState&&t.hide()}),this.computedDelay.hide):this.hide())}}})}}]);
//# sourceMappingURL=chunk-2d0e99b4.667dd92c.js.map