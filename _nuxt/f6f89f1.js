(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{190:function(t,e,n){var o=n(14);t.exports=function(t,e){if(!o(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},191:function(t,e,n){var content=n(209);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("ef20e362",content,!1,{sourceMap:!1})},192:function(t,e,n){var content=n(211);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("f38d519e",content,!1,{sourceMap:!1})},198:function(t,e,n){"use strict";n(58),n(59),n(200),n(30),n(18),n(40),n(202);var o=n(85);var r=n(111);function l(t){return function(t){if(Array.isArray(t))return Object(o.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(r.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n(2),n(3),n(4),n(5),n(27),n(205);var c={props:{name:{type:String,default:null},desc:{type:String,default:null},img:{type:String,default:null},duration:{type:Number,default:null},schoolSubject:{type:String,default:null},minClass:{type:Number,default:null},maxParticipants:{type:Number,default:null},active:Boolean,isElearning:Boolean,lab:{type:String,default:null},video:{type:String,default:null}},data:function(){return{isActive:!0,address:"info@sfz-sls.de",body:"Hallo!%20%0D%0AIch%20m%C3%B6chte%20gerne%20f%C3%BCr%20meine%20Klasse%20den%20"+this.name+"-Workshop%20buchen.%20%0D%0ADatum%3A%20%0D%0AZeit%3A%20%0D%0ASchule%3A%20%0D%0AKlasse%3A%20%0D%0AAnzahl%20der%20SuS%3A",workshopLink:"/workshop/"+this.name}},methods:{closeModel:function(){this.$emit("onChange","hi from child")},openMailClient:function(){window.open("mailto:"+this.address+"?subject="+this.name+"-Kurs&body="+this.body)}}},d=(n(208),n(12)),h={components:{WorkshopModal:Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{attrs:{"trap-focus":"","has-modal-card":"",scroll:"keep"},on:{close:t.closeModel},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[n("div",{staticClass:"modal-card"},[n("header",{staticClass:"modal-card-head"},[n("p",{staticClass:"modal-card-title"},[t._v("\n        "+t._s(t.name)+"\n      ")])]),t._v(" "),n("section",{staticClass:"modal-card-body",staticStyle:{"text-align":"left"}},[n("b-taglist",{staticClass:"is-centered"},[n("b-field",{attrs:{grouped:"","group-multiline":""}},[n("div",{staticClass:"control"},[n("b-taglist",{attrs:{attached:""}},[n("b-tag",{attrs:{type:"is-dark"}},[t._v("\n                Ab Klasse\n              ")]),t._v(" "),n("b-tag",{attrs:{type:"is-info"}},[t._v("\n                "+t._s(t.minClass)+"\n              ")])],1)],1),t._v(" "),n("div",{staticClass:"control"},[n("b-taglist",{attrs:{attached:""}},[n("b-tag",{attrs:{type:"is-dark"}},[t._v("\n                Dauer\n              ")]),t._v(" "),n("b-tag",{attrs:{type:"is-info"}},[t._v("\n                "+t._s(1==t.duration?t.duration+" Stunde":t.duration+" Stunden")+"\n              ")])],1)],1),t._v(" "),t.maxParticipants>0&&!t.isElearning?n("div",{staticClass:"control"},[n("b-taglist",{attrs:{attached:""}},[n("b-tag",{attrs:{type:"is-dark"}},[t._v("\n                Maximale Teilnehmer\n              ")]),t._v(" "),n("b-tag",{attrs:{type:"is-info"}},[t._v("\n                "+t._s(t.maxParticipants)+"\n              ")])],1)],1):t._e()]),t._v(" "),t.isElearning?n("b-tag",{staticClass:"is-hidden-tablet is-centered",attrs:{type:"is-warning",rounded:""}},[t._v("\n          Workshops sind nicht für mobile Geräte optimiert!\n        ")]):t._e()],1),t._v(" "),null==t.video?n("p",[t._v("\n        "+t._s(t.desc)+"\n      ")]):n("video",{attrs:{controls:""}},[n("source",{attrs:{src:t.video,type:"video/mp4"}}),t._v("\n        Your browser does not support the video tag.\n      ")])],1),t._v(" "),n("footer",{staticClass:"modal-card-foot"},[t.isElearning&&null==t.video?n("div",{staticClass:"content container"},[n("b-button",{attrs:{type:"is-primary",tag:"nuxt-link",to:t.workshopLink,outlined:""}},[t._v("\n          Workshop starten\n        ")]),t._v(" "),n("br"),t._v(" "),n("br")],1):t._e(),t._v(" "),t.isElearning?t._e():n("div",{staticClass:"content container"},[n("b-button",{staticClass:"container",attrs:{type:"is-primary",outlined:""},on:{click:t.openMailClient}},[t._v("\n          Workshop buchen\n        ")])],1)])])])}),[],!1,null,null,null).exports},props:{workshops:{type:Array,default:null},isElearning:Boolean},data:function(){return{selectedSchoolSubjects:[],selectedLabs:[],seletecClassLevel:12,selectedParticipants:0,selectedTimeRange:[1,1],open:!1,requestedWorkshops:[],schoolSubject:[],labs:[],isImageModalActive:!1,clickedWorkshop:null,maxDuration:1}},watch:{workshops:function(t,e){0===e.length&&0!==t.length&&(this.requestedWorkshops.push.apply(this.requestedWorkshops,this.workshops),this.loadFilterProps())},selectedSchoolSubjects:function(){this.loadRequestedWorkshops()},seletecClassLevel:function(){this.loadRequestedWorkshops()},selectedTimeRange:function(){this.loadRequestedWorkshops()},selectedParticipants:function(){this.loadRequestedWorkshops()},selectedLabs:function(){this.loadRequestedWorkshops()}},created:function(){this.requestedWorkshops.push.apply(this.requestedWorkshops,this.workshops),this.loadFilterProps()},methods:{loadFilterProps:function(){this.maxDuration=Math.max.apply(Math,this.workshops.map((function(t){return t.duration}))),this.schoolSubject=l(new Set(this.workshops.flatMap((function(t){return t.schoolSubject})))),this.labs=l(new Set(this.workshops.flatMap((function(t){return t.lab}))))},loadRequestedWorkshops:function(){var t=this;this.requestedWorkshops.length=0;for(var e=function(i){var e=t.workshops[i],n=0===t.selectedSchoolSubjects.length||t.selectedSchoolSubjects.some((function(t){return e.schoolSubject.includes(t)})),o=e.minClass<=t.seletecClassLevel,r=t.selectedParticipants<=e.maxParticipants||0===t.selectedParticipants||0===e.maxParticipants,l=0===t.selectedLabs.length||t.selectedLabs.some((function(t){return t===e.lab})),c=t.isElearning||1===t.selectedTimeRange[0]&&1===t.selectedTimeRange[1]||(e.duration-t.selectedTimeRange[0])*(e.duration-t.selectedTimeRange[1])<=0;n&&o&&c&&r&&l&&t.requestedWorkshops.push(e)},i=0;i<this.workshops.length;i++)e(i)},openWorkshopModal:function(t){this.clickedWorkshop=t,this.isImageModalActive=!0},closeEvent:function(){this.isImageModalActive=!1}}},f=(n(210),Object(d.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("b-sidebar",{attrs:{type:"is-light",fullheight:!0},model:{value:t.open,callback:function(e){t.open=e},expression:"open"}},[o("div",{staticClass:"p-1"},[o("b-image",{attrs:{src:n(199)}}),t._v(" "),o("b-field",{attrs:{label:"Klassenstufe"}},[o("b-slider",{attrs:{min:1,max:12,step:1,ticks:""},model:{value:t.seletecClassLevel,callback:function(e){t.seletecClassLevel=e},expression:"seletecClassLevel"}})],1),t._v(" "),o("b-field",[o("p",{staticClass:"content"},[o("b",[t._v("Klasse")]),t._v("\n          : "+t._s(t.seletecClassLevel)+"\n        ")])]),t._v(" "),t.isElearning?t._e():o("b-field",{attrs:{label:"Dauer des Workshops"}},[o("b-slider",{attrs:{min:1,max:t.maxDuration,step:1,ticks:""},model:{value:t.selectedTimeRange,callback:function(e){t.selectedTimeRange=e},expression:"selectedTimeRange"}})],1),t._v(" "),t.isElearning?t._e():o("b-field",[o("p",{staticClass:"content"},[o("b",[t._v("Dauer")]),t._v("\n          : "+t._s(t.selectedTimeRange[0])+" - "+t._s(t.selectedTimeRange[1])+" Stunden\n        ")])]),t._v(" "),t.isElearning?t._e():o("b-field",{attrs:{label:"Gruppengröße"}},[o("b-numberinput",{attrs:{min:0},model:{value:t.selectedParticipants,callback:function(e){t.selectedParticipants=e},expression:"selectedParticipants"}})],1),t._v(" "),o("b-field",{attrs:{label:"Fach"}},[o("b-dropdown",{attrs:{multiple:"","aria-role":"list"},model:{value:t.selectedSchoolSubjects,callback:function(e){t.selectedSchoolSubjects=e},expression:"selectedSchoolSubjects"}},[o("b-button",{staticClass:"button is-primary",attrs:{slot:"trigger",type:"button"},slot:"trigger"},[o("span",[t._v("Ausgewählte ("+t._s(t.selectedSchoolSubjects.length)+")")])]),t._v(" "),t._l(t.schoolSubject,(function(e){return o("b-dropdown-item",{key:e,attrs:{value:e,"aria-role":"listitem"}},[o("span",[t._v(t._s(e))])])}))],2)],1),t._v(" "),t.selectedSchoolSubjects.length>0?o("b-field",[o("p",{staticClass:"content"},[o("b",[t._v("Ausgewählte")]),t._v("\n          : "+t._s(t.selectedSchoolSubjects.join(", "))+"\n        ")])]):t._e(),t._v(" "),!t.isElearning&&t.labs.length>0?o("b-field",{attrs:{label:"Schülerlabor"}},[o("b-dropdown",{attrs:{multiple:"","aria-role":"list"},model:{value:t.selectedLabs,callback:function(e){t.selectedLabs=e},expression:"selectedLabs"}},[o("b-button",{staticClass:"button is-primary",attrs:{slot:"trigger",type:"button"},slot:"trigger"},[o("span",[t._v("Ausgewählte ("+t._s(t.selectedLabs.length)+")")])]),t._v(" "),t._l(t.labs,(function(e){return o("b-dropdown-item",{key:e,attrs:{value:e,"aria-role":"listitem"}},[o("span",[t._v(t._s(e))])])}))],2)],1):t._e(),t._v(" "),!t.isElearning&&t.selectedLabs.length>0?o("b-field",[o("p",{staticClass:"content"},[o("b",[t._v("Ausgewählte")]),t._v("\n          : "+t._s(t.selectedLabs.join(", "))+"\n        ")])]):t._e()],1)]),t._v(" "),o("b-button",{on:{click:function(e){t.open=!0}}},[t._v("\n    Workshops filtern\n  ")]),t._v(" "),o("div",{staticClass:"hero-body"},[o("div",{staticClass:"container"},[o("div",{staticClass:"section"},[t.requestedWorkshops.length>0?o("div",{staticClass:"row columns is-multiline"},t._l(t.requestedWorkshops,(function(e){return o("div",{key:e.name,staticClass:"column is-4",on:{click:function(n){return t.openWorkshopModal(e)}}},[o("div",{staticClass:"card large"},[o("div",{staticClass:"card-image is-16by9"},[o("figure",{staticClass:"image"},[o("b-image",{attrs:{"src-fallback":n(125),ratio:"16by9",src:e.image,alt:e.name}})],1)]),t._v(" "),o("div",{staticClass:"card-content"},[o("div",{staticClass:"media"},[o("div",{staticClass:"media-content"},[o("p",{staticClass:"title is-4 no-padding"},[t._v("\n                      "+t._s(e.name)+"\n                    ")])])]),t._v(" "),o("div",{staticClass:"content"},[t._v("\n                  "+t._s(e.description.split(" ").length>=25?e.description.split(" ").slice(0,25).join(" ")+"...":e.description)+"\n                ")])])])])})),0):t._e()])])]),t._v(" "),null!=t.clickedWorkshop&&t.isImageModalActive?o("workshop-modal",{attrs:{img:t.clickedWorkshop.image,name:t.clickedWorkshop.name,desc:t.clickedWorkshop.description,"max-participants":t.clickedWorkshop.maxParticipants,duration:t.clickedWorkshop.duration,"min-class":t.clickedWorkshop.minClass,"school-subject":t.clickedWorkshop.schoolSubject,lab:t.clickedWorkshop.lab,"is-elearning":t.isElearning,video:t.clickedWorkshop.video},on:{onChange:t.closeEvent}}):t._e()],1)}),[],!1,null,null,null));e.a=f.exports},199:function(t,e,n){t.exports=n.p+"img/undraw_select_option.2969c36.svg"},200:function(t,e,n){"use strict";var o=n(9),r=n(201),l=n(29),c=n(20),d=n(55),h=n(132);o(o.P,"Array",{flatMap:function(t){var e,n,o=l(this);return d(t),e=c(o.length),n=h(o,0),r(n,o,o,e,0,1,t,arguments[1]),n}}),n(70)("flatMap")},201:function(t,e,n){"use strict";var o=n(91),r=n(14),l=n(20),c=n(26),d=n(6)("isConcatSpreadable");t.exports=function t(e,n,source,h,f,v,_,m){for(var element,k,y=f,S=0,C=!!_&&c(_,m,3);S<h;){if(S in source){if(element=C?C(source[S],S,n):source[S],k=!1,r(element)&&(k=void 0!==(k=element[d])?!!k:o(element)),k&&v>0)y=t(e,n,element,l(element.length),y,v-1)-1;else{if(y>=9007199254740991)throw TypeError();e[y]=element}y++}S++}return y}},202:function(t,e,n){"use strict";var strong=n(203),o=n(190);t.exports=n(204)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return strong.def(o(this,"Set"),t=0===t?0:t,t)}},strong)},203:function(t,e,n){"use strict";var o=n(15).f,r=n(90),l=n(129),c=n(26),d=n(127),h=n(128),f=n(93),v=n(131),_=n(94),m=n(13),k=n(126).fastKey,y=n(190),S=m?"_s":"size",C=function(t,e){var n,o=k(e);if("F"!==o)return t._i[o];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,f){var v=t((function(t,o){d(t,v,e,"_i"),t._t=e,t._i=r(null),t._f=void 0,t._l=void 0,t[S]=0,null!=o&&h(o,n,t[f],t)}));return l(v.prototype,{clear:function(){for(var t=y(this,e),data=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete data[n.i];t._f=t._l=void 0,t[S]=0},delete:function(t){var n=y(this,e),o=C(n,t);if(o){var r=o.n,l=o.p;delete n._i[o.i],o.r=!0,l&&(l.n=r),r&&(r.p=l),n._f==o&&(n._f=r),n._l==o&&(n._l=l),n[S]--}return!!o},forEach:function(t){y(this,e);for(var n,o=c(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(o(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!C(y(this,e),t)}}),m&&o(v.prototype,"size",{get:function(){return y(this,e)[S]}}),v},def:function(t,e,n){var o,r,l=C(t,e);return l?l.v=n:(t._l=l={i:r=k(e,!0),k:e,v:n,p:o=t._l,n:void 0,r:!1},t._f||(t._f=l),o&&(o.n=l),t[S]++,"F"!==r&&(t._i[r]=l)),t},getEntry:C,setStrong:function(t,e,n){f(t,e,(function(t,n){this._t=y(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?v(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,v(1))}),n?"entries":"values",!n,!0),_(e)}}},204:function(t,e,n){"use strict";var o=n(8),r=n(9),l=n(17),c=n(129),meta=n(126),d=n(128),h=n(127),f=n(14),v=n(16),_=n(92),m=n(56),k=n(130);t.exports=function(t,e,n,y,S,C){var w=o[t],x=w,A=S?"set":"add",E=x&&x.prototype,W={},j=function(t){var e=E[t];l(E,t,"delete"==t||"has"==t?function(a){return!(C&&!f(a))&&e.call(this,0===a?0:a)}:"get"==t?function(a){return C&&!f(a)?void 0:e.call(this,0===a?0:a)}:"add"==t?function(a){return e.call(this,0===a?0:a),this}:function(a,b){return e.call(this,0===a?0:a,b),this})};if("function"==typeof x&&(C||E.forEach&&!v((function(){(new x).entries().next()})))){var I=new x,N=I[A](C?{}:-0,1)!=I,M=v((function(){I.has(1)})),L=_((function(t){new x(t)})),R=!C&&v((function(){for(var t=new x,e=5;e--;)t[A](e,e);return!t.has(-0)}));L||((x=e((function(e,n){h(e,x,t);var o=k(new w,e,x);return null!=n&&d(n,S,o[A],o),o}))).prototype=E,E.constructor=x),(M||R)&&(j("delete"),j("has"),S&&j("get")),(R||N)&&j(A),C&&E.clear&&delete E.clear}else x=y.getConstructor(e,t,S,A),c(x.prototype,n),meta.NEED=!0;return m(x,t),W[t]=x,r(r.G+r.W+r.F*(x!=w),W),C||y.setStrong(x,t,S),x}},205:function(t,e,n){"use strict";var o=n(8),r=n(28),l=n(38),c=n(130),d=n(68),h=n(16),f=n(57).f,v=n(69).f,_=n(15).f,m=n(206).trim,k=o.Number,y=k,S=k.prototype,C="Number"==l(n(90)(S)),w="trim"in String.prototype,x=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,o,r,l=(e=w?e.trim():m(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+e}for(var code,c=e.slice(2),i=0,h=c.length;i<h;i++)if((code=c.charCodeAt(i))<48||code>r)return NaN;return parseInt(c,o)}}return+e};if(!k(" 0o1")||!k("0b1")||k("+0x1")){k=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof k&&(C?h((function(){S.valueOf.call(n)})):"Number"!=l(n))?c(new y(x(e)),n,k):x(e)};for(var A,E=n(13)?f(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),W=0;E.length>W;W++)r(y,A=E[W])&&!r(k,A)&&_(k,A,v(y,A));k.prototype=S,S.constructor=k,n(17)(o,"Number",k)}},206:function(t,e,n){var o=n(9),r=n(39),l=n(16),c=n(207),d="["+c+"]",h=RegExp("^"+d+d+"*"),f=RegExp(d+d+"*$"),v=function(t,e,n){var r={},d=l((function(){return!!c[t]()||"​"!="​"[t]()})),h=r[t]=d?e(_):c[t];n&&(r[n]=h),o(o.P+o.F*d,"String",r)},_=v.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(h,"")),2&e&&(t=t.replace(f,"")),t};t.exports=v},207:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},208:function(t,e,n){"use strict";n(191)},209:function(t,e,n){(e=n(36)(!1)).push([t.i,".card-content .content{font-size:14px;margin:1rem}.card-content .content h4{font-size:16px;font-weight:700}.card{box-shadow:0 2px 4px rgba(0,0,0,.18);margin-bottom:2rem}.animation-content{overflow-y:hidden}",""]),t.exports=e},210:function(t,e,n){"use strict";n(192)},211:function(t,e,n){(e=n(36)(!1)).push([t.i,".p-1{padding:1em!important}",""]),t.exports=e}}]);